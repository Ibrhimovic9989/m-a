/**
 * Utility (reference / lookup) registry.
 *
 * Each entry is a published reference table — TDS rates, depreciation schedules,
 * stamp duty, CII, etc. Data lives in lib/utilities/<slug>.ts and is rendered
 * generically by the [slug] route via the Table component.
 *
 * Distinct from /calculators (which compute) — utilities are reference data.
 */

export type UtilityCategory =
  | "tax"
  | "company"
  | "investment"
  | "indirect"
  | "lookup";

export const UTILITY_CATEGORY_META: Record<
  UtilityCategory,
  { label: string; short: string }
> = {
  tax: { label: "Direct Tax", short: "Tax" },
  company: { label: "Companies & LLP", short: "Co/LLP" },
  investment: { label: "Investment & Rates", short: "Inv" },
  indirect: { label: "Indirect Tax & Codes", short: "GST" },
  lookup: { label: "Bank & Industry Codes", short: "Lookup" },
};

export type UtilityMeta = {
  slug: string;
  title: string;
  tagline: string;
  category: UtilityCategory;
  source?: string;
  sourceUrl?: string;
};

export const UTILITIES: UtilityMeta[] = [
  // ---- Tax ----
  {
    slug: "rates-of-tds",
    title: "Rates of TDS",
    tagline: "Section-wise TDS rates for FY 2025-26 across the 192–196 series.",
    category: "tax",
    source: "Income Tax Act, 1961 — Chapter XVII-B",
    sourceUrl: "https://incometaxindia.gov.in/",
  },
  {
    slug: "tds-rates-nri-195",
    title: "TDS Rates for N.R.I u/s 195",
    tagline: "Withholding on payments to non-residents — Section 195 read with Part II of First Schedule.",
    category: "tax",
    source: "Section 195, Income Tax Act + applicable DTAA",
    sourceUrl: "https://incometaxindia.gov.in/",
  },
  {
    slug: "rates-of-income-tax",
    title: "Rates of Income Tax",
    tagline: "Slab rates, surcharge, cess and rebate — Old vs New regime for FY 2025-26.",
    category: "tax",
    source: "Finance Act 2024 — as amended",
    sourceUrl: "https://incometaxindia.gov.in/",
  },
  {
    slug: "cost-inflation-index",
    title: "Cost Inflation Index",
    tagline: "Year-wise CII for indexation of long-term capital gains — base year 2001-02 = 100.",
    category: "tax",
    source: "CBDT Notification — Section 48 read with Rule 48",
    sourceUrl: "https://incometaxindia.gov.in/",
  },
  {
    slug: "deduction-80tta-vs-80ttb",
    title: "Deduction u/s 80TTA vs 80TTB",
    tagline: "Side-by-side comparison of the two interest deductions — eligibility, cap, account types.",
    category: "tax",
    source: "Sections 80TTA & 80TTB, Income Tax Act, 1961",
  },
  {
    slug: "depreciation-income-tax",
    title: "Depreciation Rates — Income Tax Act",
    tagline: "Block-wise depreciation under Section 32 read with Rule 5 (WDV method).",
    category: "tax",
    source: "Appendix I, Income Tax Rules, 1962",
  },

  // ---- Companies & LLP ----
  {
    slug: "depreciation-companies-act",
    title: "Depreciation Rates — Companies Act",
    tagline: "Useful-life-based depreciation under Schedule II — WDV and SLM equivalent rates.",
    category: "company",
    source: "Schedule II, Companies Act, 2013",
    sourceUrl: "https://www.mca.gov.in/",
  },
  {
    slug: "roc-filing-fees",
    title: "ROC Filing Fees",
    tagline: "Form-wise filing fees with the Registrar of Companies, banded by authorised capital.",
    category: "company",
    source: "Companies (Registration Offices and Fees) Rules, 2014",
    sourceUrl: "https://www.mca.gov.in/",
  },
  {
    slug: "roc-fee-structure",
    title: "ROC Fee Structure",
    tagline: "Incorporation, name reservation, alteration and additional fee structure under the 2013 Act.",
    category: "company",
    source: "Companies (Registration Offices and Fees) Rules, 2014",
    sourceUrl: "https://www.mca.gov.in/",
  },
  {
    slug: "llp-fees",
    title: "LLP Fees",
    tagline: "Filing and incorporation fees under the LLP Act, 2008 — banded by contribution.",
    category: "company",
    source: "LLP (Registration and Fees) Rules, 2009",
    sourceUrl: "https://www.mca.gov.in/",
  },

  // ---- Investment & Rates ----
  {
    slug: "rates-of-nsc-interest",
    title: "Rates of NSC Interest",
    tagline: "Quarter-wise NSC VIII issue interest rate — notified by Department of Economic Affairs.",
    category: "investment",
    source: "DEA, Ministry of Finance — quarterly notifications",
  },
  {
    slug: "gold-silver-rates",
    title: "Gold and Silver Rates",
    tagline: "Historical reference rates of gold and silver — used for valuation and indexation.",
    category: "investment",
    source: "Income Tax Department — Wealth Tax valuation",
    sourceUrl: "https://incometaxindia.gov.in/",
  },
  {
    slug: "rates-of-stamp-duty",
    title: "Rates of Stamp Duty",
    tagline: "State-wise stamp duty on conveyance, lease and key instruments.",
    category: "investment",
    source: "State Stamp Acts (consult state Sub-Registrar for current rates)",
  },

  // ---- Indirect Tax ----
  {
    slug: "hsn-rate-list",
    title: "HSN Rate List",
    tagline: "Chapter-wise HSN with prevailing GST rate brackets — 0 / 5 / 12 / 18 / 28%.",
    category: "indirect",
    source: "CBIC — CGST Rate Notifications",
    sourceUrl: "https://cbic-gst.gov.in/",
  },

  // ---- Bank & Industry Codes ----
  {
    slug: "ifsc-codes",
    title: "IFSC Codes",
    tagline: "RBI-issued 11-character Indian Financial System Codes for NEFT / RTGS / IMPS.",
    category: "lookup",
    source: "Reserve Bank of India — master directory",
    sourceUrl: "https://www.rbi.org.in/scripts/IFSCMICRDetails.aspx",
  },
  {
    slug: "micr-codes",
    title: "MICR Codes",
    tagline: "9-digit Magnetic Ink Character Recognition codes printed on Indian cheques.",
    category: "lookup",
    source: "Reserve Bank of India — master directory",
    sourceUrl: "https://www.rbi.org.in/scripts/IFSCMICRDetails.aspx",
  },
  {
    slug: "national-industries-classification",
    title: "National Industries Classification",
    tagline: "NIC-2008 codes used in MCA filings, GST registration and ROC forms.",
    category: "lookup",
    source: "Ministry of Statistics & PI — NIC 2008",
    sourceUrl: "https://www.mca.gov.in/MinistryV2/nic_2008.html",
  },
];

export function getUtility(slug: string): UtilityMeta | undefined {
  return UTILITIES.find((u) => u.slug === slug);
}

export function getUtilitiesByCategory(cat: UtilityCategory): UtilityMeta[] {
  return UTILITIES.filter((u) => u.category === cat);
}

export const UTILITY_CATEGORY_ORDER: UtilityCategory[] = [
  "tax",
  "company",
  "investment",
  "indirect",
  "lookup",
];

// -----------------------------------------------------------------
// Shared types for utility data files.
// Each utility exports a UtilityData object — a list of Sections,
// each Section being either a Table or a Note block.
// -----------------------------------------------------------------

export type UtilityTableRow = (string | number)[];

export type UtilityTable = {
  kind: "table";
  caption?: string;
  headers: string[];
  rows: UtilityTableRow[];
  alignNumeric?: boolean;
  footnote?: string;
};

export type UtilityNote = {
  kind: "note";
  title?: string;
  body: string[];
};

export type UtilityKeyValue = {
  kind: "keyvalue";
  caption?: string;
  pairs: { label: string; value: string }[];
};

export type UtilityExternal = {
  kind: "external";
  title: string;
  body: string[];
  links: { label: string; href: string }[];
};

export type UtilitySection = UtilityTable | UtilityNote | UtilityKeyValue | UtilityExternal;

export type UtilityData = {
  intro: string;
  asOf: string;
  sections: UtilitySection[];
};
