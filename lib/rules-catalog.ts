/**
 * Rules catalog — the subordinate legislation made under each statute
 * in `acts-catalog.ts`. Same six top-level heads, but every entry here
 * is a *Rule*, *Regulation*, *Scheme* or *Order* issued under a parent Act.
 *
 *   01  Direct Tax Rules
 *   02  Indirect Tax Rules (pre-GST legacy)
 *   03  Corporate Laws Rules
 *   04  VAT Laws Rules
 *   05  Other Statutes — allied Rules and Regulations
 *   06  GST Rules
 *
 * Each Rule carries: short name, year, parent Act, administering
 * authority, a one-sentence editorial blurb, and a status flag. Repealed
 * and subsumed Rules are retained because legacy assessments, appeals
 * and refunds continue to be litigated under them.
 */

import type { ActStatus } from "./acts-catalog";

export type Rule = {
  name: string;
  year?: number;
  shortCode?: string;
  status: ActStatus;
  authority?: string;
  parentAct: string; // the statute under which the Rule / Regulation is made
  blurb: string;
};

export type RuleCategory = {
  num: string;
  slug: string;
  title: string;
  blurb: string;
  rules: Rule[];
};

export const RULES_CATALOG: RuleCategory[] = [
  {
    num: "01",
    slug: "direct-tax-rules",
    title: "Direct Tax Rules",
    blurb:
      "The procedural code of direct taxation — every form, valuation methodology, withholding mechanic and assessment scheme is housed here. The 1962 Income-tax Rules remain the working backbone; allied Rules cover wealth tax, equalisation levy, ICDS and the various disclosure and settlement schemes.",
    rules: [
      {
        name: "Income-tax Rules",
        year: 1962,
        shortCode: "IT Rules",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961",
        blurb:
          "The principal subordinate legislation under the IT Act — 138 numbered Rules across 13 parts covering residence, perquisite valuation, depreciation, transfer pricing, TDS/TCS, faceless schemes and every Form 1 through Form 71. Amended several times a year.",
      },
      {
        name: "Wealth-tax Rules",
        year: 1957,
        status: "repealed",
        authority: "CBDT",
        parentAct: "Wealth-tax Act, 1957",
        blurb:
          "Procedural Rules under the Wealth-tax Act — valuation of immovable property, jewellery and business assets. Operative only for AYs up to 2015-16; retained because legacy assessments and refunds continue.",
      },
      {
        name: "Income Declaration Scheme Rules",
        year: 2016,
        status: "historical",
        authority: "CBDT",
        parentAct: "Finance Act, 2016 (Chapter IX)",
        blurb:
          "Procedure for filing Form 1 declarations under the 2016 voluntary disclosure window — manner of valuation, payment of tax and issuance of Form 4 certificates. Window closed 30 Sep 2016.",
      },
      {
        name: "Direct Tax Vivad se Vishwas Rules",
        year: 2020,
        shortCode: "VsV Rules",
        status: "historical",
        authority: "CBDT",
        parentAct: "Direct Tax Vivad se Vishwas Act, 2020",
        blurb:
          "Procedure and Forms 1-5 for the 2020 dispute-resolution scheme — withdrawal of appeals, computation of disputed tax, payment and final order. Closed scheme; succeeded by the 2024 VsV scheme for fresh disputes.",
      },
      {
        name: "Direct Tax Vivad se Vishwas Scheme",
        year: 2024,
        shortCode: "VsV 2024",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Finance (No. 2) Act, 2024",
        blurb:
          "Re-launched dispute-resolution window for appeals pending as on 22 Jul 2024 — Forms 1-4, payment of disputed tax with reduced interest and penalty, withdrawal of underlying appeal.",
      },
      {
        name: "Equalisation Levy Rules",
        year: 2016,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Finance Act, 2016 (Chapter VIII)",
        blurb:
          "Procedure for the 6% / 2% equalisation levy on online advertising and non-resident e-commerce operators — Form 1 statement, Form 3 appeal, payment mechanics. The 2% e-commerce levy was withdrawn from 01 Aug 2024.",
      },
      {
        name: "Income Computation and Disclosure Standards",
        year: 2016,
        shortCode: "ICDS",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Section 145(2))",
        blurb:
          "Ten standards — accounting policies, inventory, construction contracts, revenue, fixed assets, foreign exchange, government grants, securities, borrowing costs, provisions — notified to govern computation under PGBP and Other Sources.",
      },
      {
        name: "Securities Transaction Tax Rules",
        year: 2004,
        shortCode: "STT Rules",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Finance (No. 2) Act, 2004 (Chapter VII)",
        blurb:
          "Procedure for collection and remittance of STT by recognised stock exchanges, AMCs and lead merchant bankers — rates, returns in Form 1/2 and certificate in Form 2A.",
      },
      {
        name: "Commodities Transaction Tax Rules",
        year: 2013,
        shortCode: "CTT Rules",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Finance Act, 2013 (Chapter VII)",
        blurb:
          "Procedure for collection of CTT by recognised commodity exchanges on sale of commodity derivatives — Form 1 return and Form 2 certificate.",
      },
      {
        name: "Prohibition of Benami Property Transactions Rules",
        year: 2016,
        shortCode: "Benami Rules",
        status: "in-force",
        authority: "IT Department (Benami Prohibition Unit)",
        parentAct: "Benami Transactions (Prohibition) Act, 1988 (as amended in 2016)",
        blurb:
          "Procedure for reference to the Initiating Officer, provisional attachment, adjudication and confiscation of benami property — forms BNN-1 to BNN-7.",
      },
      {
        name: "Black Money (Undisclosed Foreign Income and Assets) Rules",
        year: 2015,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Black Money Act, 2015",
        blurb:
          "Procedure for valuation of foreign assets, computation of undisclosed foreign income, assessment, penalty, and the one-time 2015 compliance window — Forms 1, 6 and 7.",
      },
      {
        name: "Authority for Advance Rulings (Procedure) Rules",
        year: 1996,
        shortCode: "AAR Rules",
        status: "partially-in-force",
        authority: "AAR / Board for Advance Rulings",
        parentAct: "Income-tax Act, 1961 (Chapter XIX-B)",
        blurb:
          "Procedure for filing Form 34C-EA applications, hearings and pronouncement of rulings. Largely superseded by the Board for Advance Rulings constituted under the Finance Act, 2021 — pending matters continue under these Rules.",
      },
      {
        name: "Income-tax Settlement Commission (Procedure) Rules",
        year: 1997,
        status: "partially-in-force",
        authority: "Interim Board for Settlement",
        parentAct: "Income-tax Act, 1961 (Chapter XIX-A)",
        blurb:
          "Procedure before the Settlement Commission — Form 34B applications. The Commission was abolished from 01 Feb 2021; pending applications are heard by the Interim Board for Settlement under these Rules.",
      },
      {
        name: "Income Tax Appellate Tribunal Rules",
        year: 1963,
        shortCode: "ITAT Rules",
        status: "in-force",
        authority: "ITAT",
        parentAct: "Income-tax Act, 1961 (Section 255)",
        blurb:
          "Procedure before the ITAT — filing of appeals in Form 36, cross-objections in Form 36A, stay applications, listing, hearing and pronouncement.",
      },
      {
        name: "Faceless Assessment Scheme",
        year: 2019,
        status: "in-force",
        authority: "CBDT (National Faceless Assessment Centre)",
        parentAct: "Income-tax Act, 1961 (Section 144B)",
        blurb:
          "Procedure for assessment without physical interface — case allocation, draft order, dispute resolution, automated routing through NFAC and the Regional Faceless Assessment Centres.",
      },
      {
        name: "Faceless Appeal Scheme",
        year: 2021,
        status: "in-force",
        authority: "CBDT (NFAC)",
        parentAct: "Income-tax Act, 1961 (Section 250(6B))",
        blurb:
          "Procedure for CIT(A) appeals through the National Faceless Appeal Centre — electronic filing of Form 35, written submissions, optional video hearings.",
      },
      {
        name: "Faceless Penalty Scheme",
        year: 2021,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Section 274(2A))",
        blurb:
          "Faceless adjudication of penalty proceedings under Chapter XXI — automatic allocation and electronic communication.",
      },
      {
        name: "e-Verification Scheme",
        year: 2021,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Section 135A)",
        blurb:
          "Faceless framework for verification of information received under SFT, TDS / TCS, foreign remittances and similar feeds — automatic risk scoring and electronic notice issuance.",
      },
      {
        name: "Centralised Verification Scheme",
        year: 2019,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Section 133C)",
        blurb:
          "Scheme for centralised issuance and processing of information-call notices to financial institutions and reporting entities.",
      },
      {
        name: "Dispute Resolution Scheme for Small and Medium Taxpayers",
        year: 2022,
        shortCode: "e-DRS",
        status: "in-force",
        authority: "CBDT (Dispute Resolution Committee)",
        parentAct: "Income-tax Act, 1961 (Section 245MA)",
        blurb:
          "Alternate route for taxpayers with returned income up to ₹50 lakh and aggregate variation up to ₹10 lakh — Form 34BC application and faceless DRC adjudication.",
      },
      {
        name: "Mutual Agreement Procedure Rules",
        year: 2020,
        shortCode: "MAP Rules",
        status: "in-force",
        authority: "CBDT (Competent Authority)",
        parentAct: "Income-tax Act, 1961 (Section 295) read with treaties",
        blurb:
          "Rule 44G procedure for MAP requests under tax treaties — Form 34F application, time limits, bilateral negotiation and giving effect to MAP resolutions.",
      },
      {
        name: "Safe Harbour Rules",
        year: 2013,
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Section 92CB)",
        blurb:
          "Rules 10TA-10TG providing optional safe-harbour margins for software development, ITeS, KPO, contract R&D, intra-group loans and corporate guarantees — Form 3CEFA election.",
      },
      {
        name: "Advance Pricing Agreement Scheme",
        year: 2012,
        shortCode: "APA",
        status: "in-force",
        authority: "CBDT (APA Authority)",
        parentAct: "Income-tax Act, 1961 (Sections 92CC-92CD)",
        blurb:
          "Procedure for unilateral, bilateral and multilateral APAs — pre-filing consultation, Form 3CED main application, annual compliance in Form 3CEF and rollback under Rule 10MA.",
      },
      {
        name: "Country-by-Country Reporting Rules",
        year: 2017,
        shortCode: "CbCR",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Sections 286, 92D)",
        blurb:
          "Rules 10DA-10DB implementing OECD BEPS Action 13 — Master File in Form 3CEAA, CbCR in Form 3CEAD, intimations in Forms 3CEAB and 3CEAC.",
      },
      {
        name: "TDS / TCS Rules under Chapter VIIIA of IT Rules",
        status: "in-force",
        authority: "CBDT",
        parentAct: "Income-tax Act, 1961 (Chapter XVII)",
        blurb:
          "Rules 26 to 37BC — manner of computing tax to be deducted at source, time and mode of payment, statements in Forms 24Q, 26Q, 27Q, 27EQ, certificates in Forms 16, 16A and lower-deduction certificates under Rule 28AA.",
      },
    ],
  },

  {
    num: "02",
    slug: "indirect-tax-rules",
    title: "Indirect Tax Rules (Pre-GST)",
    blurb:
      "Procedural Rules under the legacy indirect-tax regime — service tax, excise, CST and the surviving customs framework. Operative for legacy assessments and for the goods that remain outside GST.",
    rules: [
      {
        name: "Service Tax Rules",
        year: 1994,
        status: "subsumed-by-gst",
        authority: "CBIC",
        parentAct: "Finance Act, 1994",
        blurb:
          "Procedure for registration, payment of tax, filing of ST-3 returns, reverse charge, and refund. Operative for periods up to 30 Jun 2017 and for transitional litigation.",
      },
      {
        name: "Place of Provision of Services Rules",
        year: 2012,
        status: "subsumed-by-gst",
        authority: "CBIC",
        parentAct: "Finance Act, 1994 (Section 66C)",
        blurb:
          "The pre-GST place-of-supply code for services — performance-based, location-of-recipient, intermediary and specific-category rules.",
      },
      {
        name: "Point of Taxation Rules",
        year: 2011,
        status: "subsumed-by-gst",
        authority: "CBIC",
        parentAct: "Finance Act, 1994 (Section 67A)",
        blurb:
          "Determined the date on which service tax became payable — earlier of invoice, payment or completion, with carve-outs for continuous supply and reverse charge.",
      },
      {
        name: "Service Tax (Determination of Value) Rules",
        year: 2006,
        status: "subsumed-by-gst",
        authority: "CBIC",
        parentAct: "Finance Act, 1994 (Section 67)",
        blurb:
          "Valuation methodology for service tax — pure-agent exclusion, works contracts, restaurant and outdoor catering, and reimbursable expenses.",
      },
      {
        name: "Cenvat Credit Rules",
        year: 2004,
        status: "subsumed-by-gst",
        authority: "CBIC",
        parentAct: "Central Excise Act, 1944 / Finance Act, 1994",
        blurb:
          "Unified credit chain across excise duty and service tax — eligibility, Rule 6 reversal for exempt supplies, refund of accumulated credit under Rule 5.",
      },
      {
        name: "Cenvat Credit Rules",
        year: 2017,
        status: "partially-in-force",
        authority: "CBIC",
        parentAct: "Central Excise Act, 1944",
        blurb:
          "Restated post-GST regime governing credit only for the goods (tobacco, petroleum) that continue under central excise.",
      },
      {
        name: "Central Excise Rules",
        year: 2017,
        status: "partially-in-force",
        authority: "CBIC",
        parentAct: "Central Excise Act, 1944",
        blurb:
          "Procedure for registration, payment of duty, return-filing and movement of goods for the residual excise base — tobacco and petroleum.",
      },
      {
        name: "Central Excise (Valuation) Rules",
        year: 2000,
        status: "partially-in-force",
        authority: "CBIC",
        parentAct: "Central Excise Act, 1944 (Section 4)",
        blurb:
          "Transaction-value methodology under the pre-2000 and post-2000 excise regime — captive consumption, related-party sales, and job-work.",
      },
      {
        name: "Central Excise (Determination of Retail Sale Price of Excisable Goods) Rules",
        year: 2008,
        status: "partially-in-force",
        authority: "CBIC",
        parentAct: "Central Excise Act, 1944 (Section 4A)",
        blurb:
          "MRP-based valuation for notified goods — manner of redetermining RSP when not declared, tampered or where multiple RSPs are displayed.",
      },
      {
        name: "Central Sales Tax (Registration and Turnover) Rules",
        year: 1957,
        status: "subsumed-by-gst",
        authority: "CBIC / State authorities",
        parentAct: "Central Sales Tax Act, 1956",
        blurb:
          "Procedural Rules for CST registration, manner of issue and verification of Forms C, F, H, I and J, and computation of inter-state turnover.",
      },
      {
        name: "Customs Valuation (Determination of Value of Imported Goods) Rules",
        year: 2007,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Customs Act, 1962 (Section 14)",
        blurb:
          "WTO-aligned transaction-value methodology for imports — successive use of identical / similar goods, deductive and computed values, and the fallback method.",
      },
      {
        name: "Customs Valuation (Determination of Value of Export Goods) Rules",
        year: 2007,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Customs Act, 1962 (Section 14)",
        blurb:
          "Valuation rules for export goods — transaction value with rejection grounds, comparable-export and computed-value alternatives.",
      },
      {
        name: "Customs (Import of Goods at Concessional Rate of Duty) Rules",
        year: 2017,
        shortCode: "IGCR Rules",
        status: "in-force",
        authority: "CBIC",
        parentAct: "Customs Act, 1962",
        blurb:
          "Procedure for availing concessional duty under notified exemptions — IGCR-1 to IGCR-5 reporting, bond execution and end-use monitoring.",
      },
      {
        name: "Customs Tariff (Identification, Assessment and Collection of Anti-dumping Duty on Dumped Articles and for Determination of Injury) Rules",
        year: 1995,
        status: "in-force",
        authority: "DGTR / CBIC",
        parentAct: "Customs Tariff Act, 1975 (Section 9A)",
        blurb:
          "Procedure for DGTR investigation — initiation, dumping margin, injury determination, sunset review and imposition of definitive duty.",
      },
      {
        name: "Customs Tariff (Identification and Assessment of Safeguard Duty) Rules",
        year: 1997,
        status: "in-force",
        authority: "DGTR / CBIC",
        parentAct: "Customs Tariff Act, 1975 (Section 8B)",
        blurb:
          "Procedure for safeguard investigations into surges of imports causing serious injury to domestic industry.",
      },
      {
        name: "Customs and Central Excise Duties Drawback Rules",
        year: 2017,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Customs Act, 1962 (Chapter X)",
        blurb:
          "All-industry and brand-rate duty drawback procedure — Schedule II rates, time limits, manner of claim and disbursal.",
      },
      {
        name: "Foreign Trade (Regulation) Rules",
        year: 1993,
        status: "in-force",
        authority: "DGFT",
        parentAct: "Foreign Trade (Development and Regulation) Act, 1992",
        blurb:
          "Procedure for IEC issuance, suspension and cancellation; export and import licensing; and penalty for violations.",
      },
      {
        name: "Special Economic Zones Rules",
        year: 2006,
        shortCode: "SEZ Rules",
        status: "in-force",
        authority: "Ministry of Commerce / Development Commissioners",
        parentAct: "Special Economic Zones Act, 2005",
        blurb:
          "Procedure for SEZ notification, unit approval, NFE computation, DTA sales, and the new IFSC overlay.",
      },
      {
        name: "Foreign Trade Policy & Handbook of Procedures",
        year: 2023,
        shortCode: "FTP / HBP",
        status: "in-force",
        authority: "DGFT",
        parentAct: "Foreign Trade (Development and Regulation) Act, 1992",
        blurb:
          "The operating manual for India's exim regime — RoDTEP, EPCG, Advance Authorisation, Status Holder benefits, Town of Export Excellence and AEO interface.",
      },
    ],
  },

  {
    num: "03",
    slug: "corporate-laws-rules",
    title: "Corporate Laws Rules",
    blurb:
      "The full machinery under the Companies Act, LLP Act, IBC and SEBI Act — the Rules that govern incorporation, share capital, charges, directors, audit, mergers, insolvency, listing, takeovers and insider trading. The operative working set for a corporate-law engagement.",
    rules: [
      {
        name: "Companies (Specification of Definitions Details) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013",
        blurb:
          "Definitions that bridge the Act and the Rules — small company thresholds, relative test under Section 2(77), and various procedural definitions.",
      },
      {
        name: "Companies (Incorporation) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013",
        blurb:
          "SPICe+ Part A and B, AGILE-PRO, RUN, conversion of companies, registered office, alteration of MOA / AOA, and inclusion / removal of OPC nominee.",
      },
      {
        name: "Companies (Prospectus and Allotment of Securities) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013",
        blurb:
          "Procedure for public issue, private placement (PAS-4 / PAS-5 / PAS-3), rights issue, sweat equity allotment and Form PAS-6 reconciliation for unlisted public companies.",
      },
      {
        name: "Companies (Share Capital and Debentures) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013",
        blurb:
          "Issue and transfer of shares, sweat equity, ESOPs, preference shares, bonus, dematerialisation, debenture redemption reserve and Form SH-7.",
      },
      {
        name: "Companies (Acceptance of Deposits) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Sections 73-76)",
        blurb:
          "Definition of deposit, exempted deposits, DPT-3 annual return, DPT-4 deposit repayment, deposit insurance and trustee requirements.",
      },
      {
        name: "Companies (Registration of Charges) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter VI)",
        blurb:
          "Procedure for registration of charges in CHG-1, CHG-4 satisfaction, CHG-8 condonation and the post-2019 cap of 60-day extension with additional fees.",
      },
      {
        name: "Companies (Management and Administration) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter VII)",
        blurb:
          "MGT-7 / 7A annual return, MGT-9 extract (now subsumed), AGM mechanics, registered office records, e-voting and proxy.",
      },
      {
        name: "Companies (Declaration and Payment of Dividend) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Sections 123-127)",
        blurb:
          "Conditions for declaration of dividend out of free reserves, interim dividend, unpaid dividend account and transfer to IEPF.",
      },
      {
        name: "Companies (Accounts) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter IX)",
        blurb:
          "Schedule III financial statements, consolidated accounts thresholds, internal financial controls, audit-trail mandate from FY 2023-24, and AOC-4 filings.",
      },
      {
        name: "Companies (Indian Accounting Standards) Rules",
        year: 2015,
        shortCode: "Ind AS Rules",
        status: "in-force",
        authority: "MCA / NFRA",
        parentAct: "Companies Act, 2013 (Section 133)",
        blurb:
          "Phased applicability of Ind AS — listed and net-worth thresholds — and the 41 Ind AS standards converged with IFRS.",
      },
      {
        name: "Companies (Audit and Auditors) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter X)",
        blurb:
          "Auditor appointment in ADT-1, audit-firm rotation, reporting under CARO 2020, fraud reporting in ADT-4 and resignation in ADT-3.",
      },
      {
        name: "Companies (Auditor's Report) Order",
        year: 2020,
        shortCode: "CARO 2020",
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Section 143(11))",
        blurb:
          "21-clause auditor's report covering fixed assets, inventory, loans, deposits, statutory dues, related-party transactions, internal audit and IBC defaults.",
      },
      {
        name: "Companies (Appointment and Qualification of Directors) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter XI)",
        blurb:
          "DIR-3 KYC, DIR-12 appointment, independent director databank, women director, and directorship limits.",
      },
      {
        name: "Companies (Meetings of Board and its Powers) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter XII)",
        blurb:
          "Board meetings, audit committee, NRC, CSR committee, related-party transaction approval and Form MBP-1 / MBP-4 maintenance.",
      },
      {
        name: "Companies (Appointment and Remuneration of Managerial Personnel) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Chapter XIII)",
        blurb:
          "Managerial-remuneration ceilings under Schedule V, KMP appointment in MR-1, and disclosures in the board's report under MR-2.",
      },
      {
        name: "Companies (Corporate Social Responsibility Policy) Rules",
        year: 2014,
        shortCode: "CSR Rules",
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Section 135)",
        blurb:
          "2% CSR computation, impact assessment for projects above ₹1 crore, CSR-1 registration of implementing agencies and CSR-2 reporting.",
      },
      {
        name: "Companies (Compromises, Arrangements and Amalgamations) Rules",
        year: 2016,
        status: "in-force",
        authority: "MCA / NCLT",
        parentAct: "Companies Act, 2013 (Chapter XV)",
        blurb:
          "Procedure for schemes of arrangement, demergers, fast-track mergers under Section 233, cross-border mergers and reduction of capital.",
      },
      {
        name: "Companies (Registration Offices and Fees) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013",
        blurb:
          "MCA21 filing infrastructure, fee schedules, additional fees for delayed filing, and the V3 portal mandate.",
      },
      {
        name: "Companies (Cost Records and Audit) Rules",
        year: 2014,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Section 148)",
        blurb:
          "Industries required to maintain cost records, cost audit thresholds and CRA-1 / CRA-3 / CRA-4 procedure.",
      },
      {
        name: "Companies (Removal of Names of Companies from the Register of Companies) Rules",
        year: 2016,
        status: "in-force",
        authority: "MCA / C-PACE",
        parentAct: "Companies Act, 2013 (Section 248)",
        blurb:
          "Procedure for voluntary strike-off in STK-2 and ROC-initiated strike-off in STK-1, including the post-2023 Centre for Processing Accelerated Corporate Exit (C-PACE) route.",
      },
      {
        name: "Companies (Significant Beneficial Owners) Rules",
        year: 2018,
        shortCode: "SBO Rules",
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Section 90)",
        blurb:
          "Identification and reporting of significant beneficial owners — BEN-1 declaration, BEN-2 ROC filing and BEN-3 register.",
      },
      {
        name: "Companies (Restriction on number of layers) Rules",
        year: 2017,
        status: "in-force",
        authority: "MCA",
        parentAct: "Companies Act, 2013 (Section 2(87))",
        blurb:
          "Cap of two subsidiary layers for non-exempt companies, with grandfathering and carve-outs for banking, NBFC, insurance and government companies.",
      },
      {
        name: "National Financial Reporting Authority Rules",
        year: 2018,
        shortCode: "NFRA Rules",
        status: "in-force",
        authority: "NFRA",
        parentAct: "Companies Act, 2013 (Section 132)",
        blurb:
          "NFRA's jurisdiction — listed and large unlisted companies — and procedure for review, investigation and disciplinary action against auditors.",
      },
      {
        name: "Limited Liability Partnership Rules",
        year: 2009,
        shortCode: "LLP Rules",
        status: "in-force",
        authority: "MCA",
        parentAct: "Limited Liability Partnership Act, 2008",
        blurb:
          "LLP incorporation in FiLLiP, partner admission / cessation in Form 4, annual return in Form 11, statement of accounts in Form 8 and conversion in Forms 17 / 18.",
      },
      {
        name: "Limited Liability Partnership (Winding up and Dissolution) Rules",
        year: 2012,
        status: "in-force",
        authority: "MCA / NCLT",
        parentAct: "Limited Liability Partnership Act, 2008",
        blurb:
          "Voluntary winding-up of LLPs, NCLT-supervised winding-up and the post-2022 strike-off route through Form 24.",
      },
      {
        name: "IBBI (Insolvency Resolution Process for Corporate Persons) Regulations",
        year: 2016,
        shortCode: "CIRP Regs",
        status: "in-force",
        authority: "IBBI / NCLT",
        parentAct: "Insolvency and Bankruptcy Code, 2016",
        blurb:
          "End-to-end CIRP procedure — public announcement, claim verification, CoC constitution, resolution plan approval and avoidance transactions.",
      },
      {
        name: "IBBI (Liquidation Process) Regulations",
        year: 2016,
        status: "in-force",
        authority: "IBBI / NCLT",
        parentAct: "Insolvency and Bankruptcy Code, 2016",
        blurb:
          "Manner of conducting liquidation — stakeholder consultation committee, sale of assets, distribution of proceeds and dissolution.",
      },
      {
        name: "IBBI (Voluntary Liquidation Process) Regulations",
        year: 2017,
        status: "in-force",
        authority: "IBBI / NCLT",
        parentAct: "Insolvency and Bankruptcy Code, 2016 (Section 59)",
        blurb:
          "Solvent voluntary liquidation by corporate persons — declaration of solvency, special resolution and final report.",
      },
      {
        name: "IBBI (Fast Track Insolvency Resolution Process for Corporate Persons) Regulations",
        year: 2017,
        status: "in-force",
        authority: "IBBI / NCLT",
        parentAct: "Insolvency and Bankruptcy Code, 2016 (Chapter IV)",
        blurb:
          "90-day fast-track resolution route for small companies, startups and unlisted companies below notified thresholds.",
      },
      {
        name: "IBBI (Insolvency Resolution Process for Personal Guarantors to Corporate Debtors) Regulations",
        year: 2019,
        status: "in-force",
        authority: "IBBI / NCLT",
        parentAct: "Insolvency and Bankruptcy Code, 2016 (Part III)",
        blurb:
          "Procedure for IRP against personal guarantors — interim moratorium, resolution plan, repayment plan and bankruptcy order.",
      },
      {
        name: "IBBI (Insolvency Professionals) Regulations",
        year: 2016,
        status: "in-force",
        authority: "IBBI",
        parentAct: "Insolvency and Bankruptcy Code, 2016",
        blurb:
          "Registration, code of conduct, continuing education and disciplinary framework for insolvency professionals and IPEs.",
      },
      {
        name: "National Company Law Tribunal Rules",
        year: 2016,
        shortCode: "NCLT Rules",
        status: "in-force",
        authority: "NCLT",
        parentAct: "Companies Act, 2013 (Section 469)",
        blurb:
          "Procedure before the NCLT — forms NCLT-1 to NCLT-9, manner of pleadings, interim orders, oppression-and-mismanagement petitions and IBC applications.",
      },
      {
        name: "National Company Law Appellate Tribunal Rules",
        year: 2016,
        shortCode: "NCLAT Rules",
        status: "in-force",
        authority: "NCLAT",
        parentAct: "Companies Act, 2013 (Section 469)",
        blurb:
          "Procedure for appeals before the NCLAT under the Companies Act, IBC and the Competition Act — Form NCLAT-1, condonation and final hearing.",
      },
      {
        name: "SEBI (Listing Obligations and Disclosure Requirements) Regulations",
        year: 2015,
        shortCode: "LODR",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992 / SCRA, 1956",
        blurb:
          "The continuous-disclosure code for listed entities — corporate governance, related-party transactions, financial-result publication, BRSR, and material-event reporting under Regulation 30.",
      },
      {
        name: "SEBI (Issue of Capital and Disclosure Requirements) Regulations",
        year: 2018,
        shortCode: "ICDR",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Conditions and disclosure code for IPOs, FPOs, rights issues, QIPs, preferential allotment and SME platform offerings.",
      },
      {
        name: "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations",
        year: 2011,
        shortCode: "Takeover Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Triggers for mandatory open offer at 25% / additional 5%, offer-price computation, exemption applications, and the obligations of the acquirer and target.",
      },
      {
        name: "SEBI (Prohibition of Insider Trading) Regulations",
        year: 2015,
        shortCode: "PIT",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Definition of UPSI, trading window, structured digital database, code of conduct and the contra-trade restrictions for designated persons.",
      },
      {
        name: "SEBI (Buy-back of Securities) Regulations",
        year: 2018,
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992 / Companies Act, 2013 (Section 68)",
        blurb:
          "Tender-offer and open-market buy-back procedure — board / shareholder approval, escrow, public announcement and time limits.",
      },
      {
        name: "SEBI (Delisting of Equity Shares) Regulations",
        year: 2021,
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992 / SCRA, 1956",
        blurb:
          "Voluntary delisting through the reverse-book-building route and small-company delisting, with disclosure and minimum-offer-price requirements.",
      },
      {
        name: "SEBI (Alternative Investment Funds) Regulations",
        year: 2012,
        shortCode: "AIF Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Three-category AIF framework — Cat I (VC, SME, infra, social-impact), Cat II (PE, debt) and Cat III (hedge) — with registration, investment-condition and disclosure rules.",
      },
      {
        name: "SEBI (Mutual Funds) Regulations",
        year: 1996,
        shortCode: "MF Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Registration of mutual funds and AMCs, scheme categorisation, investment restrictions, NAV computation and disclosures.",
      },
      {
        name: "SEBI (Portfolio Managers) Regulations",
        year: 2020,
        shortCode: "PMS Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Registration of portfolio managers, ₹50 lakh minimum investment, fee disclosure, performance reporting and APMI membership.",
      },
      {
        name: "SEBI (Foreign Portfolio Investors) Regulations",
        year: 2019,
        shortCode: "FPI Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "FPI registration categories, KYC, investment limits in debt and equity, and the disclosure regime for offshore derivative instruments.",
      },
      {
        name: "SEBI (REIT) Regulations",
        year: 2014,
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Registration, asset-allocation, distribution, leverage and disclosure framework for Real Estate Investment Trusts.",
      },
      {
        name: "SEBI (InvIT) Regulations",
        year: 2014,
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Framework for Infrastructure Investment Trusts — completed and under-construction asset thresholds, leverage and unitholder governance.",
      },
      {
        name: "SEBI (Investment Advisers) Regulations",
        year: 2013,
        shortCode: "IA Regs",
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992",
        blurb:
          "Registration of investment advisers, fee model (fixed / AUM), client segregation, KYC and risk profiling.",
      },
      {
        name: "SEBI (Settlement Proceedings) Regulations",
        year: 2018,
        status: "in-force",
        authority: "SEBI",
        parentAct: "SEBI Act, 1992 (Section 15JB)",
        blurb:
          "Procedure for consent applications — Form A, internal committee, HPAC, and final settlement order with monetary terms and / or restrictions.",
      },
      {
        name: "Securities Appellate Tribunal (Procedure) Rules",
        year: 2000,
        shortCode: "SAT Rules",
        status: "in-force",
        authority: "Securities Appellate Tribunal",
        parentAct: "SEBI Act, 1992 (Section 15U)",
        blurb:
          "Procedure for filing appeals against SEBI, IRDAI and PFRDA orders — Form A memorandum of appeal, interim relief and hearing.",
      },
    ],
  },

  {
    num: "04",
    slug: "vat-laws-rules",
    title: "VAT Laws Rules",
    blurb:
      "State-level VAT Rules — operative for periods up to 30 Jun 2017 and for the goods that remain outside GST (petroleum products and alcoholic liquor for human consumption).",
    rules: [
      {
        name: "Maharashtra Value Added Tax Rules",
        year: 2005,
        shortCode: "MVAT Rules",
        status: "partially-in-force",
        authority: "Maharashtra Sales Tax Department",
        parentAct: "Maharashtra Value Added Tax Act, 2002",
        blurb:
          "Registration in Form 101, returns in Forms 231-235, set-off computation under Rule 52, audit report in Form 704 and refund procedure.",
      },
      {
        name: "Karnataka Value Added Tax Rules",
        year: 2005,
        shortCode: "KVAT Rules",
        status: "partially-in-force",
        authority: "Karnataka Commercial Taxes Department",
        parentAct: "Karnataka Value Added Tax Act, 2003",
        blurb:
          "Registration in Form VAT 1, monthly returns in Form VAT 100, input-tax restrictions and audit report in Form VAT 240.",
      },
      {
        name: "Tamil Nadu Value Added Tax Rules",
        year: 2007,
        shortCode: "TNVAT Rules",
        status: "partially-in-force",
        authority: "Tamil Nadu Commercial Taxes Department",
        parentAct: "Tamil Nadu Value Added Tax Act, 2006",
        blurb:
          "Registration, ITC computation, monthly returns in Form I, composition scheme and works-contract Rules.",
      },
      {
        name: "Delhi Value Added Tax Rules",
        year: 2005,
        shortCode: "DVAT Rules",
        status: "partially-in-force",
        authority: "Delhi GST / VAT Department",
        parentAct: "Delhi Value Added Tax Act, 2004",
        blurb:
          "Registration in DVAT-04, returns in DVAT-16, audit in DVAT-43 and refund mechanics for residual petroleum / alcohol turnover.",
      },
      {
        name: "Gujarat Value Added Tax Rules",
        year: 2006,
        shortCode: "GVAT Rules",
        status: "partially-in-force",
        authority: "Gujarat Commercial Tax Department",
        parentAct: "Gujarat Value Added Tax Act, 2003",
        blurb:
          "Registration in Form 101, returns in Forms 201/202, tax-credit Rules under Rule 15 and audit-report Form 217.",
      },
      {
        name: "West Bengal Value Added Tax Rules",
        year: 2005,
        shortCode: "WBVAT Rules",
        status: "partially-in-force",
        authority: "West Bengal Directorate of Commercial Taxes",
        parentAct: "West Bengal Value Added Tax Act, 2003",
        blurb:
          "Registration in Form 1, returns in Form 14, audit and assessment Rules — retained for petroleum, alcohol and legacy proceedings.",
      },
      {
        name: "Telangana Value Added Tax Rules",
        year: 2005,
        status: "partially-in-force",
        authority: "Telangana Commercial Taxes Department",
        parentAct: "Telangana Value Added Tax Act, 2005",
        blurb:
          "Adopted by Telangana post-bifurcation — registration, monthly VAT-200 return and audit assessment under Rule 25.",
      },
      {
        name: "Andhra Pradesh Value Added Tax Rules",
        year: 2005,
        status: "partially-in-force",
        authority: "Andhra Pradesh Commercial Taxes Department",
        parentAct: "Andhra Pradesh Value Added Tax Act, 2005",
        blurb:
          "Procedural Rules under the AP VAT Act — Form VAT-200, ITC computation and works-contract regime.",
      },
      {
        name: "Uttar Pradesh Value Added Tax Rules",
        year: 2008,
        shortCode: "UPVAT Rules",
        status: "partially-in-force",
        authority: "Uttar Pradesh Commercial Taxes Department",
        parentAct: "Uttar Pradesh Value Added Tax Act, 2008",
        blurb:
          "Registration, return-filing and audit framework — operative for petroleum / alcohol and legacy disputes.",
      },
      {
        name: "Rajasthan Value Added Tax Rules",
        year: 2006,
        shortCode: "RVAT Rules",
        status: "partially-in-force",
        authority: "Rajasthan Commercial Taxes Department",
        parentAct: "Rajasthan Value Added Tax Act, 2003",
        blurb:
          "Form VAT-01 registration, Form VAT-10 returns and audit Rules — retained for residual petroleum / alcohol base.",
      },
    ],
  },

  {
    num: "05",
    slug: "other-statutes-rules",
    title: "Other Statutes — Rules and Regulations",
    blurb:
      "The allied rule-book — FEMA Regulations and Rules, PMLA Maintenance of Records Rules, RBI Master Directions, NCLAT and DRT rules, Stamp Rules, Benami Rules, Black Money Rules and the RTI Rules. The procedural skin around every cross-border, anti-money-laundering or banking engagement.",
    rules: [
      {
        name: "Foreign Exchange Management (Current Account Transactions) Rules",
        year: 2000,
        status: "in-force",
        authority: "Central Government / RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Schedule I prohibited transactions, Schedule II RBI-approval list and Schedule III LRS-route limits — the working code for outward current-account remittances.",
      },
      {
        name: "Foreign Exchange Management (Permissible Capital Account Transactions) Regulations",
        year: 2000,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Defines the categories of capital-account transactions permitted for residents and non-residents — investment, borrowing, ESOP, immovable property and remittance of assets.",
      },
      {
        name: "Foreign Exchange Management (Non-Debt Instruments) Rules",
        year: 2019,
        shortCode: "NDI Rules",
        status: "in-force",
        authority: "Central Government / RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "The post-2019 FDI / NDI code — sectoral caps, downstream investment, pricing, FCTRS / FCGPR reporting and the press-note 3 government-route conditions.",
      },
      {
        name: "Foreign Exchange Management (Debt Instruments) Regulations",
        year: 2019,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Investment by non-residents in government securities, corporate bonds, debentures and money-market instruments under the FPI and VRR routes.",
      },
      {
        name: "Foreign Exchange Management (Overseas Investment) Rules",
        year: 2022,
        shortCode: "OI Rules",
        status: "in-force",
        authority: "Central Government",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "The reformed 2022 ODI code — ODI by automatic route, financial services-sector conditions, round-tripping carve-out and APR / Form FC reporting.",
      },
      {
        name: "Foreign Exchange Management (Overseas Investment) Regulations",
        year: 2022,
        shortCode: "OI Regs",
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "RBI-issued operating framework that accompanies the OI Rules — Form FC, ODI-Part I/II/III, restructuring, disinvestment and transfer of ODI.",
      },
      {
        name: "Foreign Exchange Management (Borrowing or Lending) Regulations",
        year: 2018,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "External Commercial Borrowings framework — automatic / approval route, all-in-cost ceiling, end-use restrictions and Form ECB / ECB-2 reporting.",
      },
      {
        name: "Foreign Exchange Management (Acquisition and Transfer of Immovable Property in India) Regulations",
        year: 2018,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Conditions under which NRIs, OCIs and foreign nationals may acquire, hold, transfer or repatriate immovable property in India.",
      },
      {
        name: "Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office) Regulations",
        year: 2016,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Procedure for FNC application, AD Bank routing, permissible activities and annual reporting in Forms AAC and ECB.",
      },
      {
        name: "Foreign Exchange Management (Realisation, Repatriation and Surrender of Foreign Exchange) Regulations",
        year: 2015,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Period of realisation of export proceeds, repatriation requirements and surrender of unused foreign exchange.",
      },
      {
        name: "Foreign Exchange Management (Manner of Receipt and Payment) Regulations",
        year: 2023,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "Permitted channels for receipt and payment of foreign exchange — ACU, RVM, Special Vostro accounts and the rupee-trade-settlement framework.",
      },
      {
        name: "Foreign Exchange Management (Deposit) Regulations",
        year: 2016,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "NRE / NRO / FCNR(B) account framework, deposit by non-residents in Indian companies and acceptance of deposits in foreign exchange.",
      },
      {
        name: "Foreign Exchange Management (Export of Goods and Services) Regulations",
        year: 2015,
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "EDF / SOFTEX declaration, period of realisation, write-off, advance against exports and the e-BRC closure framework.",
      },
      {
        name: "Foreign Exchange Management (Compounding Proceedings) Rules",
        year: 2024,
        status: "in-force",
        authority: "RBI / ED",
        parentAct: "Foreign Exchange Management Act, 1999 (Section 15)",
        blurb:
          "Procedure for compounding of FEMA contraventions — quantum, compounding authority threshold and pre-condition of remedial action.",
      },
      {
        name: "Prevention of Money-laundering (Maintenance of Records) Rules",
        year: 2005,
        shortCode: "PMLA-MoR",
        status: "in-force",
        authority: "FIU-IND / ED",
        parentAct: "Prevention of Money Laundering Act, 2002",
        blurb:
          "KYC, customer due diligence, record-keeping, STR / CTR / NTR / CCR reporting by banks, NBFCs, intermediaries and CA / CS / CMA firms acting as reporting entities.",
      },
      {
        name: "Prevention of Money-laundering Appellate Tribunal (Procedure) Rules",
        year: 2007,
        status: "in-force",
        authority: "PMLA Appellate Tribunal",
        parentAct: "Prevention of Money Laundering Act, 2002",
        blurb:
          "Procedure for appeals from Adjudicating Authority orders — Form 1 appeal, Form 2 cross-objection and limitation provisions.",
      },
      {
        name: "Prevention of Money-laundering (Forms, Search and Seizure or Freezing and the manner of Forwarding the Reasons) Rules",
        year: 2005,
        status: "in-force",
        authority: "ED",
        parentAct: "Prevention of Money Laundering Act, 2002",
        blurb:
          "Procedural Rules for search, seizure and freezing of property under PMLA — Forms 1-9 and the obligation to forward reasons to the Adjudicating Authority.",
      },
      {
        name: "Reserve Bank of India (Note Refund) Rules",
        year: 2009,
        status: "in-force",
        authority: "RBI",
        parentAct: "Reserve Bank of India Act, 1934",
        blurb:
          "Procedure for refund of value of mutilated, soiled, defective and imperfect bank notes.",
      },
      {
        name: "RBI Master Directions — NBFC Scale-Based Regulation",
        year: 2023,
        status: "in-force",
        authority: "RBI",
        parentAct: "Reserve Bank of India Act, 1934 (Chapter III-B)",
        blurb:
          "Four-layer scale-based regulatory framework for NBFCs — Base, Middle, Upper and Top Layer — with progressively stricter capital, governance and disclosure norms.",
      },
      {
        name: "RBI Master Direction — KYC",
        year: 2016,
        status: "in-force",
        authority: "RBI",
        parentAct: "Banking Regulation Act, 1949 / PMLA, 2002",
        blurb:
          "Customer identification, due diligence, periodic updation, V-CIP, central KYC registry and reporting under the consolidated KYC master direction.",
      },
      {
        name: "RBI Master Direction — Liberalised Remittance Scheme",
        year: 2024,
        shortCode: "LRS MD",
        status: "in-force",
        authority: "RBI",
        parentAct: "Foreign Exchange Management Act, 1999",
        blurb:
          "USD 2,50,000 per financial year LRS framework — permissible and prohibited transactions, TCS interface and remittance through AD banks.",
      },
      {
        name: "Banking Regulation (Companies) Rules",
        year: 1949,
        status: "in-force",
        authority: "RBI",
        parentAct: "Banking Regulation Act, 1949",
        blurb:
          "Procedural Rules for licensing, branch expansion, liquidity-coverage reporting and amalgamation of banking companies.",
      },
      {
        name: "Indian Stamp Rules",
        year: 1925,
        status: "in-force",
        authority: "Central / State revenue authorities",
        parentAct: "Indian Stamp Act, 1899",
        blurb:
          "Manner of stamping, denomination and supply of impressed and adhesive stamps, refund and renewal procedure.",
      },
      {
        name: "Indian Stamp (Collection of Stamp Duty through Stock Exchanges, Clearing Corporations and Depositories) Rules",
        year: 2019,
        status: "in-force",
        authority: "Department of Revenue / SEBI",
        parentAct: "Indian Stamp Act, 1899 (as amended in 2019)",
        blurb:
          "Centralised, exchange-collected stamp duty on securities transactions from 01 Jul 2020 — duty rates, collection mechanics and state-wise apportionment.",
      },
      {
        name: "Right to Information Rules",
        year: 2012,
        shortCode: "RTI Rules",
        status: "in-force",
        authority: "DoPT / Central Information Commission",
        parentAct: "Right to Information Act, 2005",
        blurb:
          "Fee structure, format of application, manner of appeal and procedure before the Central Information Commission.",
      },
      {
        name: "Negotiable Instruments (Amendment) Rules",
        year: 2018,
        status: "in-force",
        authority: "Magistrate courts",
        parentAct: "Negotiable Instruments Act, 1881",
        blurb:
          "Procedure for interim compensation under Section 143A and appellate deposit under Section 148 in Section 138 cheque-dishonour cases.",
      },
      {
        name: "Debts Recovery Tribunal (Procedure) Rules",
        year: 1993,
        status: "in-force",
        authority: "DRT / DRAT",
        parentAct: "Recovery of Debts and Bankruptcy Act, 1993",
        blurb:
          "Procedure for filing OAs by banks and FIs, securitisation appeals under SARFAESI, and appeals before the DRAT.",
      },
      {
        name: "SARFAESI (Enforcement) Rules",
        year: 2002,
        status: "in-force",
        authority: "RBI / DRT",
        parentAct: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002",
        blurb:
          "Procedure for issue of demand notice under Section 13(2), taking possession, valuation and sale of secured assets.",
      },
      {
        name: "Prohibition of Benami Property Transactions (Appellate Tribunal — Procedure) Rules",
        year: 2019,
        status: "in-force",
        authority: "Benami Appellate Tribunal",
        parentAct: "Benami Transactions (Prohibition) Act, 1988",
        blurb:
          "Procedure for appeals against the Adjudicating Authority's confirmation of provisional attachment — Form 1 memorandum of appeal and time limits.",
      },
      {
        name: "Companies (Auditor's Report) Order on Public Sector Banks",
        year: 2003,
        status: "in-force",
        authority: "RBI / C&AG",
        parentAct: "Banking Regulation Act, 1949",
        blurb:
          "LFAR (Long Form Audit Report) framework for statutory branch and central auditors of public sector banks.",
      },
    ],
  },

  {
    num: "06",
    slug: "gst-rules",
    title: "GST Rules",
    blurb:
      "The procedural code of GST — registration, return-filing, e-invoicing, refund, audit, advance ruling and appeal. The CGST Rules 2017 form the operative backbone; the parallel IGST, UTGST and Compensation Cess Rules cover their respective levies, and the State GST Rules largely mirror the CGST Rules verbatim.",
    rules: [
      {
        name: "Central Goods and Services Tax Rules",
        year: 2017,
        shortCode: "CGST Rules",
        status: "in-force",
        authority: "CBIC / GST Council",
        parentAct: "Central Goods and Services Tax Act, 2017",
        blurb:
          "164 numbered Rules across 21 chapters — registration, ITC, valuation, tax invoice / e-invoice, returns, refund, assessment, advance ruling, audit, appeal and transitional provisions. Amended several times every year.",
      },
      {
        name: "Integrated Goods and Services Tax Rules",
        year: 2017,
        shortCode: "IGST Rules",
        status: "in-force",
        authority: "CBIC",
        parentAct: "Integrated Goods and Services Tax Act, 2017",
        blurb:
          "Apportionment of IGST between Centre and States, place-of-supply mechanics for services in multiple States, and the procedural Rules read with the CGST Rules.",
      },
      {
        name: "Union Territory Goods and Services Tax Rules",
        year: 2017,
        shortCode: "UTGST Rules",
        status: "in-force",
        authority: "CBIC",
        parentAct: "Union Territory Goods and Services Tax Act, 2017",
        blurb:
          "Procedural Rules for the union territories without legislatures — mirror the CGST Rules in structure and operation.",
      },
      {
        name: "Goods and Services Tax (Compensation to States) Rules",
        year: 2017,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Goods and Services Tax (Compensation to States) Act, 2017",
        blurb:
          "Procedural Rules for levy, collection and disbursal of Compensation Cess on notified luxury and demerit goods.",
      },
      {
        name: "State Goods and Services Tax Rules",
        year: 2017,
        shortCode: "SGST Rules",
        status: "in-force",
        authority: "State commercial tax authorities",
        parentAct: "State Goods and Services Tax Acts, 2017",
        blurb:
          "Each State (and the UTs with legislatures — Delhi, Puducherry, J&K) notified its own SGST Rules mirroring the CGST Rules. Form numbering and procedure are uniform; enforcement is State-led.",
      },
      {
        name: "Goods and Services Tax Settlement of Funds Rules",
        year: 2017,
        status: "in-force",
        authority: "CBIC / RBI",
        parentAct: "Integrated Goods and Services Tax Act, 2017 (Section 17)",
        blurb:
          "Apportionment and settlement of IGST between the Centre and the States — fund-flow Rules administered through the GST Settlement Account at RBI.",
      },
      {
        name: "Goods and Services Tax Appellate Tribunal (Procedure) Rules",
        year: 2025,
        shortCode: "GSTAT Rules",
        status: "in-force",
        authority: "GSTAT",
        parentAct: "Central Goods and Services Tax Act, 2017 (Section 109)",
        blurb:
          "Procedural framework for the newly constituted GSTAT — Form GST APL-05 / 07, electronic filing, principal bench at Delhi and State benches, time limits and listing.",
      },
      {
        name: "GST Anti-Profiteering Rules (CGST Rules — Chapter XV)",
        year: 2017,
        status: "in-force",
        authority: "Competition Commission of India (post-Dec 2022)",
        parentAct: "Central Goods and Services Tax Act, 2017 (Section 171)",
        blurb:
          "Rules 122-137 — methodology for determining profiteering, investigation by DGAP, hearing before the National Anti-Profiteering Authority (now CCI) and order of reduction.",
      },
      {
        name: "GST Practitioners Framework (CGST Rules — Rules 83-84)",
        year: 2017,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Central Goods and Services Tax Act, 2017 (Section 48)",
        blurb:
          "Enrolment of GST practitioners — eligibility, examination, authority to act on behalf of registered persons and conditions for removal.",
      },
      {
        name: "GST Refund Procedure (CGST Rules — Rules 89-97A)",
        year: 2017,
        status: "in-force",
        authority: "CBIC",
        parentAct: "Central Goods and Services Tax Act, 2017 (Sections 54-58)",
        blurb:
          "End-to-end refund mechanics — RFD-01 application, deficiency memo, provisional sanction at 90%, refund of inverted-duty accumulation and zero-rated supplies.",
      },
      {
        name: "GST E-Invoicing Framework (CGST Rules — Rule 48(4))",
        year: 2020,
        status: "in-force",
        authority: "CBIC / GSTN",
        parentAct: "Central Goods and Services Tax Act, 2017",
        blurb:
          "Mandatory e-invoicing for B2B supplies above ₹5 crore aggregate turnover — JSON schema, IRP authentication, IRN, QR code and integration with the e-Way Bill system.",
      },
      {
        name: "GST E-Way Bill Framework (CGST Rules — Rules 138-138E)",
        year: 2018,
        status: "in-force",
        authority: "CBIC / GSTN",
        parentAct: "Central Goods and Services Tax Act, 2017 (Section 68)",
        blurb:
          "Procedure for generation, validity, cancellation and verification of e-way bills — consignment-value threshold, Part-A / Part-B, blocking on non-filing and interception under Section 129.",
      },
      {
        name: "GST Advance Ruling (CGST Rules — Rules 103-107A)",
        year: 2017,
        status: "in-force",
        authority: "Authority for Advance Ruling (State)",
        parentAct: "Central Goods and Services Tax Act, 2017 (Chapter XVII)",
        blurb:
          "Procedure for ARA-01 application, hearing before AAR, appeal to AAAR in Form ARA-02, and binding nature on the applicant and concerned jurisdictional officer.",
      },
      {
        name: "GST Audit (CGST Rules — Rules 101-102)",
        year: 2017,
        status: "in-force",
        authority: "CBIC / State authorities",
        parentAct: "Central Goods and Services Tax Act, 2017 (Sections 65-66)",
        blurb:
          "Departmental audit under Section 65 — ADT-01 notice, ADT-02 audit report — and special audit under Section 66 by a nominated CA / CMA.",
      },
    ],
  },
];

export function getRuleCategoryBySlug(slug: string): RuleCategory | undefined {
  return RULES_CATALOG.find((c) => c.slug === slug);
}

export function getAllRules(): Rule[] {
  return RULES_CATALOG.flatMap((c) => c.rules);
}

export function getRulesByParentAct(parentAct: string): Rule[] {
  return getAllRules().filter((r) => r.parentAct === parentAct);
}
