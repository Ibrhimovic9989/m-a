/**
 * Acts & Rules catalog — organised the way Indian CA practice
 * actually consults the statute book.
 *
 * Six top-level heads:
 *   01  Direct Tax
 *   02  Indirect Tax (pre-GST legacy regime)
 *   03  Corporate Laws
 *   04  VAT Laws (state-level, largely subsumed by GST)
 *   05  Other Statutes (FEMA, PMLA, Banking, allied)
 *   06  GST Laws
 *
 * Each entry carries the statute's short name, year of enactment, a
 * one-sentence editorial blurb, and a status flag (`in-force`,
 * `partially-in-force`, `repealed`, `subsumed`). Repealed and subsumed
 * statutes are retained because legacy assessments, appeals and refunds
 * continue to be litigated under them.
 */

export type ActStatus =
  | "in-force"
  | "partially-in-force"
  | "subsumed-by-gst"
  | "repealed"
  | "historical";

export type Act = {
  name: string;
  year?: number;
  shortCode?: string;
  status: ActStatus;
  blurb: string;
  authority?: string; // administering authority — e.g. CBDT, CBIC, MCA
};

export type ActCategory = {
  num: string;
  slug: string;
  title: string;
  blurb: string;
  acts: Act[];
};

export const ACTS_CATALOG: ActCategory[] = [
  {
    num: "01",
    slug: "direct-tax",
    title: "Direct Tax",
    blurb:
      "The statutes governing taxation of income and wealth — the working core of every assessment, appeal and TDS return we file. The 1961 Act remains the operative law; the 2025 Act, once notified, will replace it for assessment years on and from its appointed date.",
    acts: [
      {
        name: "Income-tax Act",
        year: 1961,
        shortCode: "IT Act",
        status: "in-force",
        authority: "CBDT",
        blurb:
          "The charging statute for income tax in India — 23 chapters covering residence, heads of income, deductions, assessment, TDS, appeals and penalties. Read with the Income-tax Rules, 1962 and annual Finance Acts.",
      },
      {
        name: "Income-tax Act",
        year: 2025,
        shortCode: "IT Act 2025",
        status: "partially-in-force",
        authority: "CBDT",
        blurb:
          "The consolidating re-enactment that replaces the 1961 Act in a modernised structure. Effective from the date notified by the Central Government — until then, the 1961 Act governs.",
      },
      {
        name: "Wealth-tax Act",
        year: 1957,
        status: "repealed",
        authority: "CBDT",
        blurb:
          "Abolished by the Finance Act, 2015 with effect from AY 2016-17. Retained here because legacy assessments, refunds and appeals continue to be argued under it.",
      },
      {
        name: "Income Declaration Scheme",
        year: 2016,
        status: "historical",
        authority: "CBDT",
        blurb:
          "A one-time disclosure window under Chapter IX of the Finance Act, 2016 — declarations had to be filed between 01 Jun and 30 Sep 2016 with tax, surcharge and penalty aggregating 45%. Closed scheme; included for reference.",
      },
    ],
  },

  {
    num: "02",
    slug: "indirect-tax",
    title: "Indirect Tax (Pre-GST)",
    blurb:
      "The legacy indirect-tax regime that GST has largely replaced. Service tax, excise and CST appeals continue to be heard for periods up to 30 Jun 2017; customs and certain state levies remain in force.",
    acts: [
      {
        name: "Finance Act (Service Tax)",
        year: 1994,
        shortCode: "Service Tax",
        status: "subsumed-by-gst",
        authority: "CBIC",
        blurb:
          "Chapter V of the Finance Act, 1994 introduced service tax — initially on three services, eventually on a negative-list basis. Subsumed by GST from 01 Jul 2017; appeals up to that date continue.",
      },
      {
        name: "Central Sales Tax Act",
        year: 1956,
        shortCode: "CST",
        status: "subsumed-by-gst",
        authority: "CBIC / State authorities",
        blurb:
          "Levied tax on inter-state sale of goods. Operative for periods up to 30 Jun 2017; replaced by IGST. Form C / F / H assessments continue under it for legacy years.",
      },
      {
        name: "Central Excise Act",
        year: 1944,
        status: "partially-in-force",
        authority: "CBIC",
        blurb:
          "Levies central excise duty on goods manufactured in India. Subsumed by GST for most goods from 01 Jul 2017, but remains operative for tobacco products and petroleum (petrol, diesel, ATF, natural gas, crude).",
      },
      {
        name: "Customs Act",
        year: 1962,
        status: "in-force",
        authority: "CBIC",
        blurb:
          "Governs the levy of customs duty on import and export of goods, baggage, courier and postal articles. Read with the Customs Tariff Act, 1975 and allied valuation, drawback and AEO rules.",
      },
      {
        name: "Entry Tax Acts (State)",
        status: "subsumed-by-gst",
        authority: "State commercial tax authorities",
        blurb:
          "State levies on entry of goods into a local area for use, consumption or sale. Largely subsumed by GST from 01 Jul 2017; constitutional validity is settled by the Supreme Court (Jindal Stainless, 2016).",
      },
    ],
  },

  {
    num: "03",
    slug: "corporate-laws",
    title: "Corporate Laws",
    blurb:
      "The framework statutes for incorporation, governance, securities, insolvency and contracts. The 2013 Companies Act is the operative law; sections of the 1956 Act remain in force for matters not yet notified under the new code.",
    acts: [
      {
        name: "Companies Act",
        year: 2013,
        status: "in-force",
        authority: "MCA / NCLT",
        blurb:
          "470 sections across 29 chapters governing incorporation, directors, audit, related-party transactions, mergers, NCLT proceedings and winding-up. Read with the Companies (Various) Rules, 2014.",
      },
      {
        name: "Companies Act",
        year: 1956,
        status: "partially-in-force",
        authority: "MCA",
        blurb:
          "A handful of sections — notably those relating to producer companies and certain winding-up provisions — remain in force until the corresponding sections of the 2013 Act are notified.",
      },
      {
        name: "Limited Liability Partnership Act",
        year: 2008,
        shortCode: "LLP Act",
        status: "in-force",
        authority: "MCA",
        blurb:
          "Governs LLP incorporation, partner liability, contribution, audit and conversion. Read with the LLP Rules, 2009 and the LLP (Amendment) Act, 2021 which introduced decriminalisation and small-LLP relief.",
      },
      {
        name: "Insolvency and Bankruptcy Code",
        year: 2016,
        shortCode: "IBC",
        status: "in-force",
        authority: "IBBI / NCLT",
        blurb:
          "A unified insolvency framework for companies, LLPs, partnerships and individuals — corporate insolvency resolution under Part II, individual under Part III (yet to be fully notified).",
      },
      {
        name: "Securities and Exchange Board of India Act",
        year: 1992,
        shortCode: "SEBI Act",
        status: "in-force",
        authority: "SEBI",
        blurb:
          "Establishes SEBI and confers powers to regulate the securities market — listed companies, intermediaries, mutual funds, AIFs, REITs, InvITs and ESG / climate disclosures.",
      },
      {
        name: "Securities Contracts (Regulation) Act",
        year: 1956,
        shortCode: "SCRA",
        status: "in-force",
        authority: "SEBI",
        blurb:
          "The foundational statute for stock exchanges and the listing of securities — definitions of 'securities', recognition of exchanges, and listing-agreement enforcement.",
      },
      {
        name: "Indian Partnership Act",
        year: 1932,
        status: "in-force",
        authority: "Registrar of Firms (State)",
        blurb:
          "Governs registered partnership firms — formation, mutual rights and duties, dissolution and the consequences of non-registration under Section 69.",
      },
      {
        name: "Indian Contract Act",
        year: 1872,
        status: "in-force",
        authority: "Civil courts",
        blurb:
          "The general law of contracts in India — offer, acceptance, consideration, capacity, performance and remedies. The bedrock under every commercial engagement.",
      },
    ],
  },

  {
    num: "04",
    slug: "vat-laws",
    title: "VAT Laws",
    blurb:
      "State-level value-added tax statutes — operative for periods up to 30 Jun 2017 for most goods. After GST rollout, state VAT continues only for petroleum products (petrol, diesel, ATF, natural gas, crude) and alcoholic liquor for human consumption.",
    acts: [
      {
        name: "Maharashtra Value Added Tax Act",
        year: 2002,
        shortCode: "MVAT",
        status: "partially-in-force",
        authority: "Maharashtra Sales Tax Department",
        blurb:
          "Operative for legacy assessments up to 30 Jun 2017; continues to apply to petroleum and alcohol within Maharashtra.",
      },
      {
        name: "Karnataka Value Added Tax Act",
        year: 2003,
        shortCode: "KVAT",
        status: "partially-in-force",
        authority: "Karnataka Commercial Taxes Department",
        blurb:
          "Pre-GST sales-tax regime for Karnataka; retained for petroleum and alcohol, and for appeals on legacy periods.",
      },
      {
        name: "Tamil Nadu Value Added Tax Act",
        year: 2006,
        shortCode: "TNVAT",
        status: "partially-in-force",
        authority: "Tamil Nadu Commercial Taxes Department",
        blurb:
          "Pre-GST VAT for Tamil Nadu — appeals and refunds for periods up to 30 Jun 2017 continue under it.",
      },
      {
        name: "Delhi Value Added Tax Act",
        year: 2004,
        shortCode: "DVAT",
        status: "partially-in-force",
        authority: "Delhi GST / VAT Department",
        blurb:
          "Pre-GST VAT for the NCT of Delhi; legacy assessment, audit and appeal proceedings continue under it.",
      },
      {
        name: "Gujarat Value Added Tax Act",
        year: 2003,
        shortCode: "GVAT",
        status: "partially-in-force",
        authority: "Gujarat Commercial Tax Department",
        blurb:
          "Pre-GST VAT regime for Gujarat; continues to apply to petroleum and alcohol post-GST.",
      },
      {
        name: "West Bengal Value Added Tax Act",
        year: 2003,
        shortCode: "WBVAT",
        status: "partially-in-force",
        authority: "West Bengal Directorate of Commercial Taxes",
        blurb:
          "Pre-GST VAT for West Bengal — retained for petroleum, alcohol and legacy proceedings.",
      },
    ],
  },

  {
    num: "05",
    slug: "other-statutes",
    title: "Other Statutes",
    blurb:
      "Allied laws that show up across our engagements — foreign exchange, anti-money-laundering, banking, stamp duty, negotiable instruments and the disclosure regime. Each one ties back to either the Income Tax Act, FEMA or the Companies Act in practice.",
    acts: [
      {
        name: "Foreign Exchange Management Act",
        year: 1999,
        shortCode: "FEMA",
        status: "in-force",
        authority: "RBI / ED",
        blurb:
          "The civil-law regime for cross-border transactions — current and capital account, ODI, FDI, ECB, LRS and ESOP routings. Read with the FEM (Various Transactions) Regulations and RBI Master Directions.",
      },
      {
        name: "Prevention of Money Laundering Act",
        year: 2002,
        shortCode: "PMLA",
        status: "in-force",
        authority: "ED / FIU-IND",
        blurb:
          "Criminalises the laundering of proceeds of crime, and imposes KYC, record-keeping and STR/CTR reporting on banks, NBFCs, payment systems and now reporting entities including CA firms in defined scenarios.",
      },
      {
        name: "Reserve Bank of India Act",
        year: 1934,
        shortCode: "RBI Act",
        status: "in-force",
        authority: "RBI",
        blurb:
          "Establishes the Reserve Bank, defines the monetary policy framework, and regulates NBFCs under Chapter III-B. Read alongside the Master Directions on NBFC classification and prudential norms.",
      },
      {
        name: "Banking Regulation Act",
        year: 1949,
        status: "in-force",
        authority: "RBI",
        blurb:
          "Governs banking companies, co-operative banks and PSBs — capital adequacy, licensing, branch authorisation, mergers and resolution. Updated by the 2020 amendment to bring co-operative banks under RBI.",
      },
      {
        name: "Negotiable Instruments Act",
        year: 1881,
        shortCode: "NI Act",
        status: "in-force",
        authority: "Magistrate courts",
        blurb:
          "Governs promissory notes, bills of exchange and cheques — and, through Section 138, the criminalisation of cheque dishonour. A working tool in commercial dispute practice.",
      },
      {
        name: "Indian Stamp Act",
        year: 1899,
        status: "in-force",
        authority: "State revenue authorities / SEBI",
        blurb:
          "Levies stamp duty on instruments. Amended by the Finance Act, 2019 to bring securities-related stamping into a centralised, exchange-collected regime effective 01 Jul 2020.",
      },
      {
        name: "Benami Transactions (Prohibition) Act",
        year: 1988,
        shortCode: "Benami Act",
        status: "in-force",
        authority: "IT Department (Benami Unit)",
        blurb:
          "Substantially re-enacted by the 2016 amendment — provides for confiscation of benami property and prosecution of benamidars, beneficial owners and abettors. Adjudication before the Adjudicating Authority, appeal to the Appellate Tribunal.",
      },
      {
        name: "Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act",
        year: 2015,
        shortCode: "Black Money Act",
        status: "in-force",
        authority: "CBDT",
        blurb:
          "A parallel charging code for undisclosed foreign income and assets of Indian residents — 30% flat tax plus 90% penalty, and criminal prosecution under Sections 50-53.",
      },
      {
        name: "Right to Information Act",
        year: 2005,
        shortCode: "RTI Act",
        status: "in-force",
        authority: "CIC / SIC",
        blurb:
          "Establishes the citizen's right to seek information from public authorities — a working tool in pursuing pending refunds, assessment records and registry filings.",
      },
    ],
  },

  {
    num: "06",
    slug: "gst-laws",
    title: "GST Laws",
    blurb:
      "The four-statute structure that replaced most pre-GST indirect taxes from 01 Jul 2017 — Central, Integrated, Union Territory and State GST, plus the Compensation Cess Act. Read with the corresponding Rules, GSTN notifications and the GST Council decisions.",
    acts: [
      {
        name: "Central Goods and Services Tax Act",
        year: 2017,
        shortCode: "CGST",
        status: "in-force",
        authority: "CBIC / GST Council",
        blurb:
          "Levies CGST on intra-State supplies and is the procedural backbone — registration, returns, refund, audit, advance ruling and appeals. Read with the CGST Rules, 2017.",
      },
      {
        name: "Integrated Goods and Services Tax Act",
        year: 2017,
        shortCode: "IGST",
        status: "in-force",
        authority: "CBIC",
        blurb:
          "Levies IGST on inter-State supplies, imports and SEZ transactions — and contains the place-of-supply rules under Sections 10-13 that drive most cross-border tax analysis.",
      },
      {
        name: "Union Territory Goods and Services Tax Act",
        year: 2017,
        shortCode: "UTGST",
        status: "in-force",
        authority: "CBIC",
        blurb:
          "Levies UTGST in union territories without legislatures (Chandigarh, Lakshadweep, Andaman & Nicobar, Dadra & Nagar Haveli and Daman & Diu, Ladakh).",
      },
      {
        name: "State Goods and Services Tax Acts",
        year: 2017,
        shortCode: "SGST",
        status: "in-force",
        authority: "State commercial tax authorities",
        blurb:
          "Each State (and the UTs of Delhi, Puducherry and Jammu & Kashmir) enacted its own SGST Act mirroring the CGST. Levy, exemptions and procedure are uniform; State authorities retain enforcement jurisdiction.",
      },
      {
        name: "Goods and Services Tax (Compensation to States) Act",
        year: 2017,
        shortCode: "GST Compensation",
        status: "in-force",
        authority: "CBIC",
        blurb:
          "Levies the Compensation Cess on a notified list of demerit and luxury goods — tobacco, aerated waters, motor cars above defined thresholds — to fund State compensation for GST transition losses.",
      },
    ],
  },
];

export function getActCategoryBySlug(slug: string): ActCategory | undefined {
  return ACTS_CATALOG.find((c) => c.slug === slug);
}

export function getStatusLabel(status: ActStatus): string {
  switch (status) {
    case "in-force":
      return "In force";
    case "partially-in-force":
      return "Partially in force";
    case "subsumed-by-gst":
      return "Subsumed by GST";
    case "repealed":
      return "Repealed";
    case "historical":
      return "Historical / closed scheme";
  }
}
