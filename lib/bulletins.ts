// Live-scrape adapter for dcgargco.com bulletins.
//
// All data is fetched server-side at request time with a 1-hour ISR window
// (revalidate: 3600). HTML structure of the source is a Telerik RadGrid
// inside an ASP.NET WebForms page; row data sits inline on a single line of
// the response so we parse it with regex against the `/detail/{id}.aspx`
// anchor that introduces each row.

export type BulletinCategory = {
  slug: string;
  name: string;
  short: string;
  url: string;
  available: boolean;
};

// Category list mirrors dcgargco's "Bulletins" dropdown.
// `available: false` flags categories whose source URL on dcgargco is empty
// (links like /Bulletins/UTGST/.aspx with no filename) — we still expose
// them in the index but the listing page shows an empty-state.
export const BULLETIN_CATEGORIES: BulletinCategory[] = [
  {
    slug: "rbi-sebi",
    name: "RBI & SEBI",
    short: "RBI / SEBI",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/RBISEBI/RBISEBI.aspx",
    available: true,
  },
  {
    slug: "notification",
    name: "Notifications",
    short: "Notifications",
    url: "https://www.dcgargco.com/notificationsearch/Bulletins/Notification/BullNotification/Notification.aspx",
    available: true,
  },
  {
    slug: "circular",
    name: "Circulars",
    short: "Circulars",
    url: "https://www.dcgargco.com/notificationsearch/Bulletins/Circular/BullNotification/Circular.aspx",
    available: true,
  },
  {
    slug: "income-tax",
    name: "Income Tax",
    short: "Income Tax",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Income_Tax/Income_Tax.aspx",
    available: true,
  },
  {
    slug: "service-tax",
    name: "Service Tax",
    short: "Service Tax",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Service_Tax/Service_Tax.aspx",
    available: true,
  },
  {
    slug: "central-sales-tax",
    name: "Central Sales Tax",
    short: "CST",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Central_Sales_Tax/Central_Sales_Tax.aspx",
    available: true,
  },
  {
    slug: "excise",
    name: "Excise Matters",
    short: "Excise",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Excise_Matters/Excise_Matters.aspx",
    available: true,
  },
  {
    slug: "customs",
    name: "Customs",
    short: "Customs",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Customs/Customs.aspx",
    available: true,
  },
  {
    slug: "company-law",
    name: "Company Law",
    short: "Company Law",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Corporate_Matters/Corporate_Matters.aspx",
    available: true,
  },
  {
    slug: "labour-laws",
    name: "Labour Laws",
    short: "Labour",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Labour_Laws/Labour_Laws.aspx",
    available: true,
  },
  {
    slug: "fema",
    name: "FEMA",
    short: "FEMA",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/F_E_M_A/F_E_M_A.aspx",
    available: true,
  },
  {
    slug: "llp-act",
    name: "The LLP Act 2008",
    short: "LLP Act",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/News_on_LLP/News_on_LLP.aspx",
    available: true,
  },
  {
    slug: "indas",
    name: "Accounting Standards (Ind AS)",
    short: "Ind AS",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Accounting_Standards_INDAS/Accounting_Standards_INDAS.aspx",
    available: true,
  },
  {
    slug: "gst",
    name: "GST",
    short: "GST",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/GST/GST.aspx",
    available: true,
  },
  {
    slug: "vat",
    name: "VAT",
    short: "VAT",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Delhi_VAT/Delhi_VAT.aspx",
    available: true,
  },
  {
    slug: "igst",
    name: "IGST",
    short: "IGST",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/IGST/IGST.aspx",
    available: false,
  },
  {
    slug: "utgst",
    name: "UTGST",
    short: "UTGST",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/UTGST/UTGST.aspx",
    available: false,
  },
  {
    slug: "compensation-cess",
    name: "Compensation Cess",
    short: "Comp. Cess",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Compensation_Cess/Compensation_Cess.aspx",
    available: false,
  },
  {
    slug: "ibc",
    name: "IBC Regulation",
    short: "IBC",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/IBC_Regulation/IBC_Regulation.aspx",
    available: false,
  },
  {
    slug: "others",
    name: "Others",
    short: "Others",
    url: "https://www.dcgargco.com/advancesearch/notification/Bulletins/Other/Other.aspx",
    available: true,
  },
];

export type BulletinListItem = {
  id: string;
  title: string;
  number: string;
  date: string;
  detailUrl: string;
};

export type BulletinDetail = {
  id: string;
  title: string | null;
  number: string | null;
  date: string | null;
  bodyHtml: string;
};

export type FetchResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: "unavailable" | "fetch_failed" | "parse_failed" };

const REVALIDATE_SECONDS = 3600;
const FETCH_TIMEOUT_MS = 12_000;

async function fetchWithTimeout(url: string): Promise<string | null> {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ac.signal,
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; MuneerAssociatesBot/1.0; +https://muneerassociates.in)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—");
}

function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

function parseListHtml(html: string): BulletinListItem[] {
  // Each row in the RadGrid renders inline as:
  //   <a id="...lnk_" href="/detail/{ID}.aspx" target="_blank" style="...">{TITLE}</a>
  //   </td><td style="width:25%;">{NUMBER}</td><td style="width:25%;">
  //     {DATE}
  //   </td>
  const rowRe =
    /href="\/detail\/(\d+)\.aspx"[^>]*>([\s\S]*?)<\/a>\s*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>\s*([\s\S]*?)\s*<\/td>/g;
  const items: BulletinListItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = rowRe.exec(html)) !== null) {
    const [, id, titleRaw, numberRaw, dateRaw] = match;
    items.push({
      id,
      title: stripTags(titleRaw),
      number: stripTags(numberRaw),
      date: stripTags(dateRaw),
      detailUrl: `https://www.dcgargco.com/detail/${id}.aspx`,
    });
  }
  return items;
}

export async function fetchBulletinList(
  category: BulletinCategory,
): Promise<FetchResult<BulletinListItem[]>> {
  if (!category.available) return { ok: false, error: "unavailable" };
  const html = await fetchWithTimeout(category.url);
  if (!html) return { ok: false, error: "fetch_failed" };
  const items = parseListHtml(html);
  return { ok: true, data: items };
}

function extractMeta(detailHtml: string): {
  title: string | null;
  number: string | null;
  date: string | null;
} {
  // Title sits inside an <h2> within the embedded document. Number+date are
  // the first two lines of body copy.
  const titleMatch = detailHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : null;

  // Find the first "<p ...>{number} ... {date}</p>" section. Number formats:
  // "RBI/2026-27/82", "F. No. ...", "Notification No. ...", etc.
  const numberMatch = detailHtml.match(
    /([A-Z]{2,5}\/\d{4}-\d{2}\/\d+|F\.? No\.[^<]+|Notification No\.[^<]+|Circular No\.[^<]+)/,
  );
  const number = numberMatch ? stripTags(numberMatch[1]).slice(0, 120) : null;

  const dateMatch = detailHtml.match(
    /([A-Z][a-z]+ \d{1,2},?\s*\d{4}|\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}-[A-Z][a-z]{2}-\d{2,4})/,
  );
  const date = dateMatch ? dateMatch[1] : null;

  return { title, number, date };
}

function extractBody(detailHtml: string): string {
  // The bulletin sits inside <td id="Data"> as a fully-formed inner document
  // (<html><head><style>…</style></head><body>…</body></html>). We can't use
  // a non-greedy `<td id="Data">…</td>` regex to capture it because the inner
  // document contains its own nested <td> tags — the match stops at the first
  // one (the "(167 kb)" PDF-link cell) and the rest is dropped. Instead, find
  // the inner <body>…</body> directly, scoped to start after the Data cell.
  const dataIdx = detailHtml.search(/<td[^>]*id="Data"[^>]*>/i);
  if (dataIdx < 0) return "";
  const tail = detailHtml.slice(dataIdx);
  const bodyMatch = tail.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return "";
  let inner = bodyMatch[1];

  // Strip the embedded <style> block — we render content with our own typography.
  inner = inner.replace(/<style[\s\S]*?<\/style>/gi, "");

  // Strip all inline class/style attrs so it inherits our typography.
  // NOTE: deliberately do NOT strip <a name="…">…</a> wholesale — dcgargco
  // sometimes wraps real content inside a named-anchor fragment marker, and
  // the non-greedy variant would eat that content. Only empty bookmarks are
  // safe to remove.
  inner = inner
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\salign="[^"]*"/g, "")
    .replace(/\sborder="[^"]*"/g, "")
    .replace(/\scellpadding="[^"]*"/g, "")
    .replace(/\scellspacing="[^"]*"/g, "")
    .replace(/\swidth="[^"]*"/g, "")
    .replace(/<a name="[^"]*">\s*<\/a>/g, "")
    // Drop embedded base64 images (close-buttons, icons).
    .replace(/<img[^>]*src="data:[^"]*"[^>]*\/?>/g, "");

  // Rewrite anchor URLs to open in a new tab while staying safe.
  inner = inner.replace(
    /<a\s+([^>]*?)>/gi,
    (_m, attrs) =>
      `<a ${attrs} target="_blank" rel="noopener noreferrer">`,
  );

  return inner;
}

export async function fetchBulletinDetail(
  id: string,
): Promise<FetchResult<BulletinDetail>> {
  if (!/^\d+$/.test(id)) return { ok: false, error: "parse_failed" };
  const url = `https://www.dcgargco.com/detail/${id}.aspx`;
  const html = await fetchWithTimeout(url);
  if (!html) return { ok: false, error: "fetch_failed" };
  const meta = extractMeta(html);
  const body = extractBody(html);
  if (!body) return { ok: false, error: "parse_failed" };
  return {
    ok: true,
    data: { id, title: meta.title, number: meta.number, date: meta.date, bodyHtml: body },
  };
}

export function getCategoryBySlug(slug: string): BulletinCategory | undefined {
  return BULLETIN_CATEGORIES.find((c) => c.slug === slug);
}
