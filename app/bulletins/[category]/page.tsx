import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  BULLETIN_CATEGORIES,
  fetchBulletinList,
  getCategoryBySlug,
} from "@/lib/bulletins";
import { getReferencesForCategory } from "@/lib/bulletin-references";

export const revalidate = 3600;

export function generateStaticParams() {
  return BULLETIN_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  if (!category) return { title: "Bulletins — Muneer & Associates" };
  return {
    title: `${category.name} bulletins — Muneer & Associates`,
    description: `Latest ${category.name} notifications, circulars and press releases. Live feed sourced from dcgargco.com.`,
  };
}

export default async function CategoryListPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const result = await fetchBulletinList(category);
  const items = result.ok ? result.data.items : [];
  const sourceTotal = result.ok ? result.data.sourceTotal : 0;
  const errored = !result.ok && result.error !== "unavailable";
  const unavailable = !result.ok && result.error === "unavailable";
  // Source explicitly reported zero results — distinct from a parse miss.
  const sourceEmpty = result.ok && items.length === 0 && sourceTotal === 0;
  // We fetched fine and the source has rows, but our parser returned nothing —
  // the only case where "format may have shifted" wording is honest.
  const parseMissed =
    result.ok && items.length === 0 && sourceTotal > 0;
  // Hand-curated fallback shown only when the live source is empty (so a
  // user lands on a category we cover internally even with no live feed).
  const references = sourceEmpty
    ? getReferencesForCategory(category.slug)
    : undefined;

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[140px] pb-12 lg:pt-[160px] lg:pb-16 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-8 lg:mb-10"
          >
            <Link
              href="/"
              className="hover:text-ink transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/bulletins"
              className="hover:text-ink transition-colors duration-300"
            >
              Bulletins
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">{category.short}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Bulletins &nbsp;/&nbsp; {category.short}
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[42px] sm:text-[60px] lg:text-[80px]">
                {category.name}
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[16px] lg:text-[18px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                {unavailable
                  ? `The ${category.name} feed is not yet populated at source. Check back later or browse a related head.`
                  : errored
                  ? "We could not reach the source feed just now. Refresh in a moment, or open the page on dcgargco.com directly."
                  : sourceEmpty
                  ? `No notifications currently listed under ${category.name} at source.`
                  : parseMissed
                  ? `${sourceTotal} ${
                      sourceTotal === 1 ? "item" : "items"
                    } reported at source, but we couldn't parse them. Open the page on dcgargco.com directly.`
                  : `Latest ${items.length} ${
                      items.length === 1 ? "item" : "items"
                    } from the ${category.name} feed — sourced live from dcgargco.com and refreshed hourly.`}
              </p>

              {sourceEmpty && category.note && (
                <p className="mt-4 text-[13px] lg:text-[14px] leading-[1.55] text-smoke max-w-[720px]">
                  {category.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="relative bg-ivory border-y border-ink/[0.08] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {items.length === 0 ? (
            <div className="bg-bone border border-ink/[0.08] p-8 lg:p-12">
              <p className="text-[15px] text-ink/70 prose-j max-w-[640px]">
                {unavailable
                  ? "No items yet. The original catalogue at dcgargco.com lists this head but has not yet published any notifications. Come back soon."
                  : errored
                  ? "We hit a transient error fetching the feed. Reload to try again, or visit the source page directly."
                  : parseMissed
                  ? "The source reports notifications under this head but our parser returned nothing — the upstream markup may have shifted. We'll fix this shortly. In the meantime, the source page on dcgargco.com is below."
                  : references
                  ? "No live notifications are currently mirrored at the source under this head. We've curated a reference library below — primary statute, key rules and notable directions, with direct links to the issuing authority."
                  : "No notifications are currently published under this head at source. Recent issuances may appear under a related head — browse the list below."}
              </p>
              <a
                href={category.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-tight text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
              >
                Open source page on dcgargco.com →
              </a>
            </div>
          ) : (
            <div className="bg-bone border border-ink/[0.08]">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 lg:px-8 py-4 border-b border-ink/[0.08] bg-ivory/40">
                <div className="col-span-7 text-[10px] uppercase tracking-[0.24em] text-smoke">
                  Title
                </div>
                <div className="col-span-3 text-[10px] uppercase tracking-[0.24em] text-smoke">
                  Reference
                </div>
                <div className="col-span-2 text-[10px] uppercase tracking-[0.24em] text-smoke">
                  Date
                </div>
              </div>

              {items.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/bulletins/${category.slug}/${item.id}`}
                  className={`group block px-6 lg:px-8 py-5 lg:py-6 transition-colors duration-300 hover:bg-amber/[0.06] ${
                    i !== items.length - 1
                      ? "border-b border-ink/[0.05]"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
                    <div className="md:col-span-7">
                      <p className="text-[15px] lg:text-[16px] leading-[1.45] text-ink/90 group-hover:text-ink transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="font-mono text-[12px] text-smoke">
                        {item.number || "—"}
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between">
                      <p className="font-mono text-[12px] text-smoke">
                        {item.date || "—"}
                      </p>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <p className="mt-8 text-[12px] text-smoke">
              Showing the latest {items.length} items.{" "}
              <a
                href={category.url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
              >
                Older items on dcgargco.com →
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Curated reference library (only when source is empty) */}
      {references && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                  ⌖ Reference library
                </p>
                <h2 className="font-display text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.02] tracking-tightest font-medium">
                  The {category.short}{" "}
                  <span className="italic font-light text-amber-dark">
                    primer
                  </span>
                </h2>
                <a
                  href={references.primaryAuthority.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[13px] tracking-tight text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
                >
                  {references.primaryAuthority.name} →
                </a>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-[16px] lg:text-[18px] leading-[1.6] text-ink/85 prose-j">
                  {references.intro}
                </p>
              </div>
            </div>

            <div className="space-y-10 lg:space-y-14">
              {references.groups.map((group, gi) => (
                <div
                  key={gi}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
                >
                  <div className="lg:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-2">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-[20px] lg:text-[22px] leading-[1.2] tracking-tightest font-medium text-balance">
                      {group.heading}
                    </h3>
                    {group.blurb && (
                      <p className="mt-3 text-[13px] leading-[1.55] text-ink/70">
                        {group.blurb}
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-9">
                    <div className="bg-bone border border-ink/[0.08]">
                      {group.items.map((item, ii) => (
                        <a
                          key={ii}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`group block px-5 lg:px-7 py-4 lg:py-5 transition-colors duration-300 hover:bg-amber/[0.06] ${
                            ii !== group.items.length - 1
                              ? "border-b border-ink/[0.05]"
                              : ""
                          }`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
                            <div className="md:col-span-7">
                              <p className="text-[14.5px] lg:text-[15.5px] leading-[1.45] text-ink/90 group-hover:text-ink transition-colors">
                                {item.title}
                              </p>
                            </div>
                            <div className="md:col-span-3">
                              <p className="font-mono text-[11.5px] text-smoke">
                                {item.reference}
                              </p>
                            </div>
                            <div className="md:col-span-2 flex items-center justify-between">
                              <p className="font-mono text-[11.5px] text-smoke">
                                {item.date}
                              </p>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                              >
                                <path
                                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                                  stroke="currentColor"
                                  strokeWidth="1.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-[12px] text-smoke max-w-[820px] prose-j">
              Curated reference material, not a live notification feed. Each
              link opens the issuing authority&rsquo;s canonical PDF or page —
              confirm the latest amendment status before relying on any item
              operationally.
            </p>
          </div>
        </section>
      )}

      {/* Other categories */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-6">
            ⌖ Other heads
          </p>
          <div className="flex flex-wrap gap-2">
            {BULLETIN_CATEGORIES.filter((c) => c.slug !== category.slug).map(
              (c) => (
                <Link
                  key={c.slug}
                  href={`/bulletins/${c.slug}`}
                  className="px-3.5 py-2 text-[13px] border border-ink/[0.12] hover:border-ink/40 hover:bg-bone transition-all duration-300"
                >
                  {c.name}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
