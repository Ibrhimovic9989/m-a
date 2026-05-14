/**
 * Master services catalog — sourced from
 *   /Final__List of Services.xlsx
 *   /docs/*.docx
 *
 * Eight categories, ~150 line items. Typos from the source spreadsheet
 * have been corrected (Forigen→Foreign, Idivisonal→Individual,
 * Aproval→Approval, Reconcilation→Reconciliation, Presentive→Presumptive,
 * Acquisitios→Acquisitions, Forcasts→Forecasts, etc.).
 *
 * The `featured` flag marks the 15 services that have full per-service
 * documentation in /docs/. Those are candidates for dedicated detail
 * pages later — for now we just render a small marker on them.
 */

export type ServiceItem = {
  name: string;
  featured?: boolean; // has detailed docx documentation in /docs/
  slug?: string; // when present, links to /services/<slug>
};

export type ServiceCategory = {
  num: string;
  slug: string;
  title: string;
  blurb: string;
  items: ServiceItem[];
};

export const SERVICES_CATALOG: ServiceCategory[] = [
  {
    num: "01",
    slug: "registrations",
    title: "Registrations & Incorporations",
    blurb:
      "From single-day private limited setups to layered Section 8 trusts and overseas subsidiaries — we handle the paperwork, the filings, and the small but compounding decisions that shape a business in its first year.",
    items: [
      { name: "Public Limited Company" },
      { name: "Private Limited Company" },
      { name: "Foreign Subsidiary" },
      { name: "OPC Company" },
      { name: "Section 8 Company" },
      { name: "Nidhi / Chit Fund Company" },
      { name: "LLP Registration" },
      { name: "Partnership Registration" },
      { name: "Trust / Society / NGO" },
      { name: "Section 12A / 80G Registration" },
      { name: "FCRA Registration", featured: true, slug: "fcra-registration" },
      { name: "Start-up India Registration" },
      { name: "Section 80AC Registration" },
      { name: "Section 56 Registration" },
      { name: "Labour License", featured: true, slug: "labour-license" },
      { name: "Professional Tax (PT) Registration", featured: true, slug: "professional-tax" },
      { name: "MSME Registration", featured: true, slug: "msme-registration" },
      { name: "Trademark Registration", featured: true, slug: "trademark-registration" },
      { name: "Copyright Registration", featured: true, slug: "copyright-registration" },
      { name: "Patent Registration", featured: true, slug: "patent-registration" },
      { name: "ISO Certification", featured: true, slug: "iso-certification" },
      { name: "GST Registration & LUT", featured: true, slug: "gst-registration" },
      { name: "IEC — Import Export Code", featured: true, slug: "iec-registration" },
      { name: "ESI Registration", featured: true, slug: "esi-registration" },
      { name: "PF Registration", featured: true, slug: "pf-registration" },
      { name: "Trade License", featured: true, slug: "trade-license" },
      { name: "FSSAI Food License", featured: true, slug: "fssai-license" },
      { name: "RERA Registration" },
    ],
  },
  {
    num: "02",
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    blurb:
      "Clean books, on time, every month. We design ledgers around how your business actually runs — not how a template thinks it should — and report up in plain English alongside the numbers.",
    items: [
      { name: "Accounting & Bookkeeping" },
      { name: "Invoicing" },
      { name: "Payroll Management" },
      { name: "Issue of Pay Slips" },
      { name: "Tax Planning for Employees" },
      { name: "PF, ESIC & PT Filings" },
      { name: "TDS Payments & TDS Returns" },
      { name: "Bank Reconciliation" },
      { name: "Accounts Payable Management" },
      { name: "Accounts Receivable Management" },
      { name: "Fixed Assets Management" },
      { name: "Compliance to Accounting Standards" },
      { name: "Cash Flow Analysis & Suggestions" },
      { name: "Inter-company Reconciliation" },
      { name: "Loans & Advances Management" },
      { name: "Stock Management" },
      { name: "Petty Cash & Cash Book Management" },
      { name: "Financial Reporting" },
      { name: "MIS Reporting with Monthly Dashboard" },
      { name: "Ratio Analysis" },
    ],
  },
  {
    num: "03",
    slug: "gst",
    title: "GST Filing & Compliance",
    blurb:
      "India's indirect tax regime is a moving target. We file your returns, defend your input credits, handle department notices, and quietly keep your business out of trouble.",
    items: [
      { name: "GST Tax Planning & Advisory" },
      { name: "GST Returns" },
      { name: "GSTR-3B" },
      { name: "GSTR-1" },
      { name: "GSTR-4 (Composition)" },
      { name: "GSTR-9 (Annual Return)" },
      { name: "GSTR-9C (Annual Audit)" },
      { name: "GST Cancellation" },
      { name: "GST Reactivation" },
      { name: "GST — Additional Place of Business" },
      { name: "Composition ↔ Normal scheme change" },
      { name: "GST Show-Cause Notice Handling" },
      { name: "GST Representation at Department" },
      { name: "LUT Registration & GST Training" },
    ],
  },
  {
    num: "04",
    slug: "income-tax",
    title: "Income Tax & Direct Taxation",
    blurb:
      "Direct tax planning that is lawful, considered, and built for the long arc — for individuals, partnerships, companies, trusts and NRIs. Notices, assessments and appeals included.",
    items: [
      { name: "Individual IT Filing" },
      { name: "Corporate IT Filing" },
      { name: "Partnership Firm IT Filing" },
      { name: "Trusts & Societies IT Filing" },
      { name: "House Property Income Return" },
      { name: "Business & Professional Income — filing & planning" },
      { name: "Presumptive Income Tax Filing (44AD / 44ADA)" },
      { name: "Issue of Form 16 & Form 16A" },
      { name: "TDS Notices Representation" },
      { name: "PF, ESIC & other Tax Filing Representation" },
      { name: "Transfer Pricing" },
      { name: "Taxation Planning for NRIs" },
      { name: "All Tax Notices Representation" },
      { name: "Tax Audit" },
      { name: "Certification Work — 15CA & 15CB" },
    ],
  },
  {
    num: "05",
    slug: "audit",
    title: "Audit & Assurance",
    blurb:
      "Statutory, internal, tax and special-purpose audits delivered with a senior-led team. Our reports read clearly because the work behind them was done thoroughly.",
    items: [
      { name: "Statutory Audit" },
      { name: "Internal Audit" },
      { name: "Stock Audit" },
      { name: "Operational Audit" },
      { name: "GST Audit" },
      { name: "Forensic Audit & Fraud Detection" },
      { name: "Financial Audit" },
      { name: "Risk Assessment Audit" },
      { name: "Tax Audit (3CA / CB · 3CD)" },
      { name: "Information System / Accounting System Audit" },
      { name: "Compliance Audit" },
      { name: "Other special-engagement audits" },
    ],
  },
  {
    num: "06",
    slug: "roc",
    title: "ROC & Secretarial",
    blurb:
      "Quiet, on-time MCA compliance — the kind that doesn't make headlines but keeps directors and companies in good standing. End-to-end secretarial cover, year after year.",
    items: [
      { name: "Name Approval" },
      { name: "Drafting MOA, AOA & other documents" },
      { name: "DIN Application" },
      { name: "Digital Signature (DSC)" },
      { name: "Surrender of DIN" },
      { name: "DIN Activation" },
      { name: "Intimation of Changes in DIN" },
      { name: "Increase in Authorised Capital" },
      { name: "Valuation Report" },
      { name: "KYC of Directors" },
      { name: "Annual Filing — AOC-4" },
      { name: "Annual Filing — MGT-7" },
      { name: "Annual Filing — XBRL" },
      { name: "Search Reports" },
      { name: "Change in Place of Business — within / outside jurisdiction" },
      { name: "Change in Business Objectives" },
      { name: "Change in Company Name" },
      { name: "Change in Share Capital / Capital Alteration" },
      { name: "Share Transfers & Share Allotments" },
      { name: "Charge Creation / Modification / Satisfaction" },
      { name: "Appointment of Directors" },
      { name: "Registration of Directors" },
      { name: "Winding-up of Company" },
      { name: "Application for Dormant Status" },
      { name: "Converting Partnership Firm into Company" },
      { name: "Seeking Active Status of Company" },
      { name: "Filing Active Form" },
      { name: "Return of Deposits (DPT-3)" },
      { name: "MSME Form" },
      { name: "Commencement of Business — Form 20A" },
      { name: "BEN Form" },
      { name: "Maintain Company Secretarial Registers" },
      { name: "IPO Feasibility, Procedure & Compliance" },
      { name: "All other compliances" },
    ],
  },
  {
    num: "07",
    slug: "advisory",
    title: "Advisory & Corporate Finance",
    blurb:
      "When the question is bigger than a return — valuations, structuring, fundraising, due diligence, M&A — we sit on your side of the table.",
    items: [
      { name: "Due Diligence Reports — SFT (Specified Financial Transactions)" },
      { name: "Detailed Project Report" },
      { name: "Business Valuation (sale & purchase transactions)" },
      { name: "CMA Data — Reporting & Analysis" },
      { name: "Projections & Financial Forecasts" },
      { name: "Performance Evaluation Report" },
      { name: "Budget Design & Variance Control" },
      { name: "Internal Financial Controls" },
      { name: "Financial Modelling" },
      { name: "HR Policies & Documentation" },
      { name: "Mergers & Acquisitions advisory" },
      { name: "Market & Product Penetration Feasibility" },
      { name: "Costing & Pricing Decisions" },
      { name: "Budgeting & Variance Analysis" },
      { name: "Start-up Advisory Services" },
      { name: "Entity Capital Structuring" },
      { name: "Fund-Raising Advisory" },
      { name: "Business Plan Support" },
      { name: "Customised Cost Module & Cost Sheet" },
      { name: "Valuation of Shares" },
      { name: "Valuation of Goodwill" },
      { name: "Valuation of Business" },
      { name: "FEMA, FDI & FCGPR — issues & consulting" },
      { name: "STPI Consulting & Advisory" },
      { name: "SEZ (Special Economic Zone) Consulting & Advisory" },
      { name: "Finance — Planning & Policies" },
    ],
  },
  {
    num: "08",
    slug: "international",
    title: "International & Premium Practice",
    blurb:
      "Higher-touch engagements: cross-border tax, IFRS implementation, GCC and US compliance, family-office wealth and investment advisory. Senior-partner led, by arrangement.",
    items: [
      { name: "Continuum Business Solutions" },
      { name: "Overseas Business Consulting" },
      { name: "IFRS Implementation" },
      { name: "Forensic Audit & Fraud Detection" },
      { name: "Valuation Services — business, shares & goodwill" },
      { name: "UAE · KSA · Oman · Qatar — VAT Consulting" },
      { name: "UAE · KSA · Oman · Qatar — Corporate Tax Consulting" },
      { name: "UAE · KSA · Oman · Qatar — Accounting Outsourcing" },
      { name: "US — Accounting, Payroll & Tax Consulting" },
      { name: "RBI & FEMA Consulting" },
      { name: "Family Wealth Management — Consulting & Planning" },
      { name: "Investment Consulting" },
    ],
  },
];
