/**
 * Calculator registry. One entry per public-facing calculator, grouped
 * by category. Slugs map to /calculators/<slug> route files.
 *
 * Formulas implemented in each calculator:
 *   - EMI / Auto / Home loans   — standard amortisation formula
 *   - Installments              — inverse EMI (solve for n)
 *   - GST / GST MRP / GST Rate  — forward and reverse percent
 *   - Income Tax                — FY 2025-26 slabs (Old + New regime)
 *   - TDS                       — section-wise rates (194 series)
 *   - HRA                       — Section 10(13A) three-way minimum
 *   - NSC                       — annual-compound interest
 *   - Effective Capital         — Schedule V of Companies Act 2013
 *   - Net Profit / Net Worth    — straight aggregation
 *   - RERA                      — interest on delayed possession
 */

export type CalcCategory = "gst" | "tax" | "loan" | "finance" | "compliance";

export const CATEGORY_META: Record<
  CalcCategory,
  { label: string; short: string }
> = {
  gst: { label: "GST", short: "GST" },
  tax: { label: "Income Tax & TDS", short: "Tax" },
  loan: { label: "Loans & Installments", short: "Loans" },
  finance: { label: "Finance & Investments", short: "Finance" },
  compliance: { label: "Compliance & Statutory", short: "Compliance" },
};

export type CalculatorMeta = {
  slug: string;
  title: string;
  tagline: string;
  category: CalcCategory;
};

export const CALCULATORS: CalculatorMeta[] = [
  // ---- GST ----
  {
    slug: "gst",
    title: "GST Calculator",
    tagline: "Add or extract GST from any amount.",
    category: "gst",
  },
  {
    slug: "gst-mrp",
    title: "GST MRP Calculator",
    tagline: "Work out the MRP given a base price and GST rate — or the other way round.",
    category: "gst",
  },
  {
    slug: "gst-rate",
    title: "GST Rate Finder",
    tagline: "Quick reference for the 0 / 5 / 12 / 18 / 28 percent rate buckets.",
    category: "gst",
  },

  // ---- Tax ----
  {
    slug: "income-tax",
    title: "Income Tax Calculator",
    tagline: "FY 2025-26 — Old and New regime, side by side.",
    category: "tax",
  },
  {
    slug: "tds",
    title: "TDS Calculator",
    tagline: "Apply the right section rate to a payment.",
    category: "tax",
  },
  {
    slug: "hra",
    title: "HRA Exemption Calculator",
    tagline: "Section 10(13A) — three-way minimum.",
    category: "tax",
  },

  // ---- Loans ----
  {
    slug: "emi",
    title: "EMI Calculator",
    tagline: "Equated monthly instalment for any loan.",
    category: "loan",
  },
  {
    slug: "home-loan",
    title: "Home Loan Calculator",
    tagline: "Long-tenure loan EMI with prepayment view.",
    category: "loan",
  },
  {
    slug: "auto-loan",
    title: "Auto Loan Calculator",
    tagline: "Vehicle financing EMI and total cost of ownership.",
    category: "loan",
  },
  {
    slug: "installments",
    title: "Installments Solver",
    tagline: "Given the EMI you can afford, how many months will it take?",
    category: "loan",
  },

  // ---- Finance ----
  {
    slug: "net-profit",
    title: "Net Profit Calculator",
    tagline: "Revenue minus expenses with margin ratios.",
    category: "finance",
  },
  {
    slug: "net-worth",
    title: "Net Worth Calculator",
    tagline: "Assets minus liabilities — your snapshot.",
    category: "finance",
  },
  {
    slug: "nsc",
    title: "NSC Calculator",
    tagline: "National Savings Certificate maturity at the current rate.",
    category: "finance",
  },

  // ---- Compliance ----
  {
    slug: "effective-capital",
    title: "Effective Capital",
    tagline: "Schedule V cap on managerial remuneration.",
    category: "compliance",
  },
  {
    slug: "rera",
    title: "RERA Interest Calculator",
    tagline: "Interest on delayed possession at MCLR + 2%.",
    category: "compliance",
  },
];

export function getCalculator(slug: string): CalculatorMeta | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(cat: CalcCategory): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.category === cat);
}

// -----------------------------------------------------------------
// Indian-format helpers — every calculator's results module uses these.
// -----------------------------------------------------------------

export function inr(n: number, fractionDigits = 0): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("en-IN", {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  });
}

export function inrShort(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  return `₹${inr(n)}`;
}

export function pct(n: number, fractionDigits = 2): string {
  if (!Number.isFinite(n)) return "—";
  return `${n.toFixed(fractionDigits)}%`;
}
