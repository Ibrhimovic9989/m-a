/**
 * Statutory compliance calendar — Indian fiscal year.
 *
 * Source authorities (cross-referenced):
 *   - CBIC notifications (GST)
 *   - CBDT / Income Tax Department (TDS, ITR, audit, SFT)
 *   - MCA / Companies Act, 2013 + LLP Act, 2008
 *   - EPFO, ESIC (PF, ESI)
 *   - FSSAI Act, 2006
 *   - RBI Master Directions (FEMA / ECB)
 *
 * Dates here are statutory due dates as currently notified. The
 * government extends specific deadlines periodically — always confirm
 * against the current notification before filing. State-specific
 * deviations (notably Professional Tax) are flagged in the event copy.
 *
 * Data model:
 *   - Monthly recurring  → fires every month, with optional March override
 *   - Quarter-end        → fires the month following each quarter end
 *   - Annual             → fires once a year on a specific month + day
 *
 * The page calls getEventsForMonth(monthNumber) — Apr = 4 … Mar = 3.
 */

export type EventCategory =
  | "gst"
  | "income-tax"
  | "tds"
  | "companies-act"
  | "llp"
  | "labour"
  | "fema"
  | "fssai";

export const CATEGORY_META: Record<
  EventCategory,
  { label: string; short: string }
> = {
  gst: { label: "GST", short: "GST" },
  "income-tax": { label: "Income Tax", short: "Income Tax" },
  tds: { label: "TDS / TCS", short: "TDS" },
  "companies-act": { label: "Companies Act", short: "MCA" },
  llp: { label: "LLP Act", short: "LLP" },
  labour: { label: "Labour & Payroll", short: "Labour" },
  fema: { label: "FEMA / RBI", short: "FEMA" },
  fssai: { label: "FSSAI", short: "FSSAI" },
};

export type ComplianceEvent = {
  id: string;
  day: number; // 1–31
  category: EventCategory;
  formCode: string;
  title: string;
  description: string;
  applicability?: string;
};

// -----------------------------------------------------------------
// MONTHLY RECURRING — fire every calendar month.
// March-specific exceptions are encoded as separate one-off events in
// the annual list (e.g. March TDS payment shifts to 30 April).
// -----------------------------------------------------------------
const MONTHLY: ComplianceEvent[] = [
  {
    id: "tds-deposit",
    day: 7,
    category: "tds",
    formCode: "ITNS-281",
    title: "TDS / TCS deposit",
    description:
      "Deposit of TDS and TCS collected during the previous month. (March collections are due 30 April — see April events.)",
    applicability: "All deductors / collectors",
  },
  {
    id: "ecb-2",
    day: 7,
    category: "fema",
    formCode: "ECB-2",
    title: "ECB-2 return",
    description:
      "Monthly return of External Commercial Borrowings drawn during the previous month.",
    applicability: "Entities holding ECB",
  },
  {
    id: "gstr-7",
    day: 10,
    category: "gst",
    formCode: "GSTR-7",
    title: "GSTR-7",
    description:
      "Return for tax deducted at source under GST for the previous month.",
    applicability: "GST TDS deductors (specified persons)",
  },
  {
    id: "gstr-8",
    day: 10,
    category: "gst",
    formCode: "GSTR-8",
    title: "GSTR-8",
    description:
      "Return for tax collected at source by e-commerce operators for the previous month.",
    applicability: "E-commerce operators",
  },
  {
    id: "gstr-1-monthly",
    day: 11,
    category: "gst",
    formCode: "GSTR-1",
    title: "GSTR-1 (monthly)",
    description:
      "Statement of outward supplies for the previous month. Non-QRMP taxpayers.",
    applicability: "Turnover above ₹5 Cr or opted-out of QRMP",
  },
  {
    id: "gstr-5",
    day: 13,
    category: "gst",
    formCode: "GSTR-5",
    title: "GSTR-5",
    description: "Monthly return by non-resident taxable persons.",
    applicability: "Non-resident taxable persons",
  },
  {
    id: "gstr-6",
    day: 13,
    category: "gst",
    formCode: "GSTR-6",
    title: "GSTR-6",
    description:
      "Monthly return by Input Service Distributors (ISD).",
    applicability: "Registered ISDs",
  },
  {
    id: "iff-qrmp",
    day: 13,
    category: "gst",
    formCode: "IFF",
    title: "Invoice Furnishing Facility",
    description:
      "Optional upload of B2B invoices for the previous month under QRMP — applicable in months 1 and 2 of a quarter.",
    applicability: "QRMP taxpayers",
  },
  {
    id: "pf-ecr",
    day: 15,
    category: "labour",
    formCode: "EPF ECR",
    title: "PF contribution",
    description:
      "Deposit of employer + employee Provident Fund contribution and filing of the Electronic Challan-cum-Return.",
    applicability: "EPFO-registered establishments",
  },
  {
    id: "esi-challan",
    day: 15,
    category: "labour",
    formCode: "ESI Challan",
    title: "ESI contribution",
    description:
      "Deposit of employer + employee Employees' State Insurance contribution for the previous month.",
    applicability: "ESIC-registered establishments",
  },
  {
    id: "gstr-3b-monthly",
    day: 20,
    category: "gst",
    formCode: "GSTR-3B",
    title: "GSTR-3B (monthly)",
    description:
      "Summary return and tax payment for the previous month. Non-QRMP taxpayers.",
    applicability: "Turnover above ₹5 Cr or opted-out of QRMP",
  },
  {
    id: "gstr-5a",
    day: 20,
    category: "gst",
    formCode: "GSTR-5A",
    title: "GSTR-5A",
    description:
      "Monthly return by suppliers of OIDAR services (online information & database access or retrieval) to unregistered persons in India.",
    applicability: "OIDAR service providers",
  },
  {
    id: "pmt-06",
    day: 25,
    category: "gst",
    formCode: "PMT-06",
    title: "GST deposit (QRMP)",
    description:
      "Monthly GST deposit for QRMP taxpayers — applicable in months 1 and 2 of a quarter.",
    applicability: "QRMP taxpayers",
  },
  {
    id: "gstr-11",
    day: 28,
    category: "gst",
    formCode: "GSTR-11",
    title: "GSTR-11",
    description:
      "Return for refund claims by persons holding a Unique Identification Number (UIN).",
    applicability: "UIN holders (embassies, UN, etc.)",
  },
  {
    id: "pt-payment",
    day: 30,
    category: "labour",
    formCode: "PT",
    title: "Professional Tax",
    description:
      "Monthly deposit of Professional Tax deducted from salaries. Due date varies by state — Telangana 10th, Karnataka 20th, Maharashtra 30th, others by notification.",
    applicability: "Employers in PT-levying states",
  },
];

// -----------------------------------------------------------------
// QUARTERLY — fire in the month following each quarter end.
//   Q1: Apr–Jun → due in July
//   Q2: Jul–Sep → due in October
//   Q3: Oct–Dec → due in January
//   Q4: Jan–Mar → due in May (TDS) / April–May (other)
// -----------------------------------------------------------------
type QuarterEnd = "Q1" | "Q2" | "Q3" | "Q4";
const QUARTER_DUE_MONTH: Record<QuarterEnd, number> = {
  Q1: 7,
  Q2: 10,
  Q3: 1,
  Q4: 5,
};

type QuarterEvent = ComplianceEvent & { quarter: QuarterEnd; dueMonth?: number };

const QUARTERLY: QuarterEvent[] = (["Q1", "Q2", "Q3", "Q4"] as QuarterEnd[]).flatMap(
  (q) => {
    const dueMonth = QUARTER_DUE_MONTH[q];
    const advanceTax: QuarterEvent = {
      quarter: q,
      // Advance tax instalments fall on 15 Jun / 15 Sep / 15 Dec / 15 Mar
      id: `advance-tax-${q.toLowerCase()}`,
      day: 15,
      dueMonth:
        q === "Q1" ? 6 : q === "Q2" ? 9 : q === "Q3" ? 12 : 3,
      category: "income-tax",
      formCode: "Advance Tax",
      title:
        q === "Q1"
          ? "Advance Tax — 1st instalment (15%)"
          : q === "Q2"
          ? "Advance Tax — 2nd instalment (45% cumulative)"
          : q === "Q3"
          ? "Advance Tax — 3rd instalment (75% cumulative)"
          : "Advance Tax — 4th instalment (100%)",
      description:
        "Cumulative payment of advance tax for the financial year, as per the prescribed instalment schedule under section 211.",
      applicability: "Assessees with tax liability above ₹10,000",
    };

    const tcsReturn: QuarterEvent = {
      quarter: q,
      id: `tcs-return-${q.toLowerCase()}`,
      day: 15,
      category: "tds",
      formCode: "Form 27EQ",
      title: `TCS return (${q})`,
      description:
        "Quarterly statement of tax collected at source for the preceding quarter.",
      applicability: "All TCS collectors",
    };

    const tdsReturn: QuarterEvent = {
      quarter: q,
      id: `tds-return-${q.toLowerCase()}`,
      day: q === "Q4" ? 31 : q === "Q3" ? 31 : 31,
      category: "tds",
      formCode: "24Q · 26Q · 27Q",
      title: `TDS return (${q})`,
      description:
        "Quarterly TDS statements — Form 24Q (salary), 26Q (resident non-salary), 27Q (non-resident).",
      applicability: "All TDS deductors",
    };

    const form16A: QuarterEvent = {
      quarter: q,
      id: `form-16a-${q.toLowerCase()}`,
      day: 15,
      dueMonth:
        q === "Q1" ? 8 : q === "Q2" ? 11 : q === "Q3" ? 2 : 6,
      category: "tds",
      formCode: "Form 16A",
      title: `Form 16A (${q} TDS certificate)`,
      description:
        "Issue of TDS certificates for non-salary deductions — fifteen days after the corresponding Form 26Q is due.",
      applicability: "All TDS deductors (non-salary)",
    };

    return [advanceTax, tcsReturn, tdsReturn, form16A];
  }
);

// -----------------------------------------------------------------
// ANNUAL — single-shot events on a specific month + day.
// -----------------------------------------------------------------
type AnnualEvent = ComplianceEvent & { month: number };

const ANNUAL: AnnualEvent[] = [
  // ---------- APRIL ----------
  {
    month: 4,
    id: "tds-deposit-march",
    day: 30,
    category: "tds",
    formCode: "ITNS-281",
    title: "TDS / TCS deposit for March",
    description:
      "Extended due date for deposit of TDS / TCS deducted in March — replaces the usual 7th-of-next-month rule.",
    applicability: "All deductors",
  },
  {
    month: 4,
    id: "gstr-4",
    day: 30,
    category: "gst",
    formCode: "GSTR-4",
    title: "GSTR-4 (annual)",
    description:
      "Annual return for taxpayers under the composition scheme, for the financial year ending 31 March.",
    applicability: "Composition scheme taxpayers",
  },
  {
    month: 4,
    id: "msme-1-h2",
    day: 30,
    category: "companies-act",
    formCode: "MSME-1",
    title: "MSME-1 (half-yearly · Oct–Mar)",
    description:
      "Half-yearly return reporting outstanding payments to MSME suppliers exceeding 45 days, for the period October–March.",
    applicability: "Specified companies (MSMED Act)",
  },
  {
    month: 4,
    id: "itc-04-h2",
    day: 25,
    category: "gst",
    formCode: "ITC-04",
    title: "ITC-04 (half-yearly · Oct–Mar)",
    description:
      "Statement of goods sent to a job-worker, for the half-year October–March. Half-yearly for taxpayers with turnover above ₹5 Cr.",
    applicability: "Principals sending goods on job-work",
  },

  // ---------- MAY ----------
  {
    month: 5,
    id: "llp-form-11",
    day: 30,
    category: "llp",
    formCode: "Form 11",
    title: "LLP Annual Return",
    description:
      "Annual return of an LLP — basic details of partners and contribution.",
    applicability: "All LLPs",
  },
  {
    month: 5,
    id: "pas-6-h2",
    day: 30,
    category: "companies-act",
    formCode: "PAS-6",
    title: "PAS-6 (half-yearly · Oct–Mar)",
    description:
      "Half-yearly reconciliation of share capital audit report by an unlisted public company.",
    applicability: "Unlisted public companies (with demat)",
  },
  {
    month: 5,
    id: "fc-4-foreign",
    day: 30,
    category: "companies-act",
    formCode: "FC-4",
    title: "FC-4 (foreign companies)",
    description:
      "Annual return of a foreign company operating in India, within 60 days of the financial year end.",
    applicability: "Foreign companies with India operations",
  },
  {
    month: 5,
    id: "form-49c",
    day: 30,
    category: "income-tax",
    formCode: "Form 49C",
    title: "Form 49C",
    description:
      "Annual statement filed by non-resident liaison offices in India.",
    applicability: "Non-resident liaison offices",
  },
  {
    month: 5,
    id: "form-61a",
    day: 31,
    category: "income-tax",
    formCode: "Form 61A",
    title: "SFT (Form 61A)",
    description:
      "Statement of Financial Transactions reporting high-value transactions for the previous financial year.",
    applicability: "Banks, mutual funds, registrars, specified reporters",
  },
  {
    month: 5,
    id: "form-61b",
    day: 31,
    category: "income-tax",
    formCode: "Form 61B",
    title: "Form 61B (FATCA / CRS)",
    description:
      "Statement of reportable accounts maintained for FATCA / CRS reporting.",
    applicability: "Reporting financial institutions",
  },
  {
    month: 5,
    id: "fssai-d1",
    day: 31,
    category: "fssai",
    formCode: "Form D1 / D2",
    title: "FSSAI annual return",
    description:
      "Annual return on food products manufactured, sold or handled during the previous financial year.",
    applicability: "FSSAI licence holders",
  },

  // ---------- JUNE ----------
  {
    month: 6,
    id: "form-16-annual",
    day: 15,
    category: "tds",
    formCode: "Form 16",
    title: "Form 16 (annual salary TDS certificate)",
    description:
      "Issue of annual TDS certificates to salaried employees for the financial year ending 31 March.",
    applicability: "All employers paying salary",
  },
  {
    month: 6,
    id: "dpt-3",
    day: 30,
    category: "companies-act",
    formCode: "DPT-3",
    title: "DPT-3",
    description:
      "Return of deposits / outstanding receipts of money that are not classed as deposits, as at 31 March.",
    applicability: "All companies (except government)",
  },

  // ---------- JULY ----------
  {
    month: 7,
    id: "fla-return",
    day: 15,
    category: "fema",
    formCode: "FLA Return",
    title: "FLA Return",
    description:
      "Annual return on Foreign Liabilities and Assets to the Reserve Bank of India.",
    applicability: "Companies / LLPs with FDI or overseas investments",
  },
  {
    month: 7,
    id: "itr-non-audit",
    day: 31,
    category: "income-tax",
    formCode: "ITR",
    title: "ITR (non-audit cases)",
    description:
      "Income Tax Return filing for individuals, HUFs and entities not subject to tax audit.",
    applicability: "Non-audit assessees",
  },

  // ---------- SEPTEMBER ----------
  {
    month: 9,
    id: "tax-audit",
    day: 30,
    category: "income-tax",
    formCode: "Form 3CA / 3CB · 3CD",
    title: "Tax Audit Report",
    description:
      "Tax audit report under section 44AB. Required before filing the audit-case ITR.",
    applicability: "Assessees crossing the §44AB threshold",
  },
  {
    month: 9,
    id: "dir-3-kyc",
    day: 30,
    category: "companies-act",
    formCode: "DIR-3 KYC",
    title: "DIR-3 KYC",
    description:
      "Annual KYC for every individual holding a Director Identification Number (DIN).",
    applicability: "All DIN holders",
  },
  {
    month: 9,
    id: "agm",
    day: 30,
    category: "companies-act",
    formCode: "—",
    title: "Annual General Meeting (AGM)",
    description:
      "Outer date for holding the AGM for the financial year ending 31 March — within six months of FY end.",
    applicability: "All companies (other than OPC)",
  },

  // ---------- OCTOBER ----------
  {
    month: 10,
    id: "aoc-4",
    day: 30,
    category: "companies-act",
    formCode: "AOC-4",
    title: "AOC-4 (financial statements)",
    description:
      "Filing of audited financial statements with the ROC — within 30 days of the AGM.",
    applicability: "All companies",
  },
  {
    month: 10,
    id: "llp-form-8",
    day: 30,
    category: "llp",
    formCode: "Form 8",
    title: "LLP Statement of Account & Solvency",
    description:
      "Annual statement of account and solvency for an LLP.",
    applicability: "All LLPs",
  },
  {
    month: 10,
    id: "msme-1-h1",
    day: 31,
    category: "companies-act",
    formCode: "MSME-1",
    title: "MSME-1 (half-yearly · Apr–Sep)",
    description:
      "Half-yearly return reporting outstanding payments to MSME suppliers exceeding 45 days, for the period April–September.",
    applicability: "Specified companies (MSMED Act)",
  },
  {
    month: 10,
    id: "itc-04-h1",
    day: 25,
    category: "gst",
    formCode: "ITC-04",
    title: "ITC-04 (half-yearly · Apr–Sep)",
    description:
      "Statement of goods sent to a job-worker for the half-year April–September.",
    applicability: "Principals sending goods on job-work",
  },
  {
    month: 10,
    id: "itr-audit",
    day: 31,
    category: "income-tax",
    formCode: "ITR",
    title: "ITR (audit cases)",
    description:
      "Income Tax Return filing for assessees subject to tax audit under §44AB.",
    applicability: "Audit-case assessees",
  },
  {
    month: 10,
    id: "form-3ceb",
    day: 31,
    category: "income-tax",
    formCode: "Form 3CEB",
    title: "Form 3CEB (Transfer Pricing)",
    description:
      "Transfer pricing report covering international and specified domestic transactions.",
    applicability: "Assessees with TP transactions",
  },

  // ---------- NOVEMBER ----------
  {
    month: 11,
    id: "mgt-7",
    day: 29,
    category: "companies-act",
    formCode: "MGT-7 / MGT-7A",
    title: "Annual Return (MGT-7)",
    description:
      "Annual return filing with the ROC — within 60 days of the AGM. Small companies and OPCs file MGT-7A.",
    applicability: "All companies",
  },
  {
    month: 11,
    id: "pas-6-h1",
    day: 29,
    category: "companies-act",
    formCode: "PAS-6",
    title: "PAS-6 (half-yearly · Apr–Sep)",
    description:
      "Half-yearly reconciliation of share capital audit report by an unlisted public company.",
    applicability: "Unlisted public companies (with demat)",
  },
  {
    month: 11,
    id: "itr-tp",
    day: 30,
    category: "income-tax",
    formCode: "ITR",
    title: "ITR (transfer-pricing cases)",
    description:
      "Income Tax Return filing for assessees with international or specified domestic transactions requiring TP report.",
    applicability: "TP-case assessees",
  },

  // ---------- DECEMBER ----------
  {
    month: 12,
    id: "gstr-9",
    day: 31,
    category: "gst",
    formCode: "GSTR-9",
    title: "GSTR-9 (annual return)",
    description:
      "Annual GST return consolidating monthly returns filed during the previous financial year.",
    applicability: "All regular GST taxpayers above ₹2 Cr",
  },
  {
    month: 12,
    id: "gstr-9c",
    day: 31,
    category: "gst",
    formCode: "GSTR-9C",
    title: "GSTR-9C (reconciliation)",
    description:
      "Reconciliation statement and self-certification between GSTR-9 and audited annual accounts.",
    applicability: "Taxpayers with turnover above ₹5 Cr",
  },
  {
    month: 12,
    id: "belated-itr",
    day: 31,
    category: "income-tax",
    formCode: "ITR",
    title: "Belated / revised ITR",
    description:
      "Last date for filing a belated or revised return of income for the previous assessment year.",
    applicability: "All assessees",
  },

  // ---------- MARCH ----------
  {
    month: 3,
    id: "updated-return",
    day: 31,
    category: "income-tax",
    formCode: "ITR-U",
    title: "Updated return (ITR-U) — outer date",
    description:
      "Last date for filing an updated return for the second assessment year prior to the current one.",
    applicability: "All assessees",
  },
];

// -----------------------------------------------------------------
// Selectors used by the page.
// -----------------------------------------------------------------

const QUARTER_OF_MONTH: Record<number, QuarterEnd | undefined> = {
  // Month → quarter whose return falls due in that month.
  7: "Q1",
  10: "Q2",
  1: "Q3",
  5: "Q4",
};

export function getEventsForMonth(month: number): ComplianceEvent[] {
  const out: ComplianceEvent[] = [];

  // Monthly recurring — skip the March TDS deposit (handled in April annual)
  for (const e of MONTHLY) {
    if (e.id === "tds-deposit" && month === 4) continue;
    out.push(e);
  }

  // Quarter-end events (TDS / TCS / Form 16A) — fire in the month after quarter end
  for (const q of QUARTERLY) {
    const dueMonth = q.dueMonth ?? QUARTER_DUE_MONTH[q.quarter];
    if (dueMonth === month) out.push(q);
  }

  // Annual events
  for (const a of ANNUAL) {
    if (a.month === month) out.push(a);
  }

  return out.sort((a, b) => a.day - b.day || a.category.localeCompare(b.category));
}

export const MONTHS = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];

// April = month 4 … March = month 3 (Indian fiscal year ordering)
export const FY_MONTH_ORDER = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];

export function getMonthIndex(month: number): number {
  return FY_MONTH_ORDER.indexOf(month);
}

export function monthLabel(month: number): string {
  return MONTHS[getMonthIndex(month)];
}
