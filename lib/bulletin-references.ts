// Curated reference material for bulletin categories whose dcgargco source
// is empty. These are NOT live-scraped notifications — they're hand-picked
// pointers to authoritative material at the originating authority (RBI, MCA,
// MoLE, ICAI) plus the major statutes and rule sets in force.
//
// The category page falls back to this content when fetchBulletinList()
// returns ok with sourceTotal === 0. We render it under a clearly-labelled
// "Reference library" heading so visitors don't confuse it with the live
// notifications feed.

export type ReferenceItem = {
  title: string;
  reference: string;
  date: string;
  url: string;
};

export type ReferenceGroup = {
  heading: string;
  blurb?: string;
  items: ReferenceItem[];
};

export type CategoryReferences = {
  intro: string;
  primaryAuthority: { name: string; url: string };
  groups: ReferenceGroup[];
};

const FEMA: CategoryReferences = {
  intro:
    "The Foreign Exchange Management Act, 1999 governs cross-border transactions in India. The Reserve Bank of India administers it through Master Directions (consolidated subject-wise guidance), FEMA Notifications (which carry the force of regulations) and A.P. (DIR Series) Circulars (operational updates to authorised dealers).",
  primaryAuthority: {
    name: "RBI · Foreign Exchange Department",
    url: "https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx",
  },
  groups: [
    {
      heading: "Foundational statute and rules",
      items: [
        {
          title: "Foreign Exchange Management Act, 1999",
          reference: "Act No. 42 of 1999",
          date: "29 Dec 1999",
          url: "https://www.rbi.org.in/Scripts/Fema.aspx",
        },
        {
          title: "Foreign Exchange Management (Current Account Transactions) Rules, 2000",
          reference: "GSR 381(E)",
          date: "03 May 2000",
          url: "https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx?Id=174",
        },
      ],
    },
    {
      heading: "Key Master Directions",
      blurb:
        "Consolidated, regularly-updated subject-wise guidance for authorised dealers and entities transacting cross-border.",
      items: [
        {
          title: "Master Direction – Liberalised Remittance Scheme (LRS)",
          reference: "FED Master Direction No. 7/2015-16",
          date: "01 Jan 2016, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10192",
        },
        {
          title: "Master Direction – External Commercial Borrowings, Trade Credits and Structured Obligations",
          reference: "FED Master Direction No. 5/2018-19",
          date: "26 Mar 2019, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11510",
        },
        {
          title: "Master Direction – Foreign Investment in India",
          reference: "FED Master Direction No. 11/2017-18",
          date: "04 Jan 2018, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11200",
        },
        {
          title: "Master Direction – Reporting under FEMA, 1999",
          reference: "FED Master Direction No. 18/2015-16",
          date: "01 Jan 2016, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
        },
        {
          title: "Master Direction – Direct Investment by Residents in JV/WOS Abroad",
          reference: "FED Master Direction No. 15/2015-16",
          date: "01 Jan 2016, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10198",
        },
        {
          title: "Master Direction – Establishment of Liaison / Branch / Project Office in India",
          reference: "FED Master Direction No. 10/2015-16",
          date: "01 Jan 2016, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10194",
        },
        {
          title: "Master Direction – Money Changing Activities",
          reference: "FED Master Direction No. 3/2015-16",
          date: "11 Feb 2016, as amended",
          url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10220",
        },
      ],
    },
    {
      heading: "Notable FEMA Notifications",
      items: [
        {
          title: "FEMA 20(R)/2017-RB – Transfer or Issue of Security by a Person Resident Outside India",
          reference: "Notification No. FEMA 20(R)/2017-RB",
          date: "07 Nov 2017",
          url: "https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx?Id=11253",
        },
        {
          title: "FEMA 23(R)/2015-RB – Export of Goods and Services",
          reference: "Notification No. FEMA 23(R)/2015-RB",
          date: "12 Jan 2016",
          url: "https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx?Id=10256",
        },
        {
          title: "FEMA 14(R)/2016-RB – Manner of Receipt and Payment",
          reference: "Notification No. FEMA 14(R)/2016-RB",
          date: "02 May 2016",
          url: "https://www.rbi.org.in/Scripts/BS_FemaNotifications.aspx?Id=10391",
        },
      ],
    },
  ],
};

const LABOUR: CategoryReferences = {
  intro:
    "Indian labour law is being consolidated from ~29 central statutes into four Codes enacted in 2019–2020. Until they are fully notified into force, the legacy Acts continue to apply alongside subordinate rules and EPFO / ESIC operational circulars.",
  primaryAuthority: {
    name: "Ministry of Labour & Employment",
    url: "https://labour.gov.in/",
  },
  groups: [
    {
      heading: "The four labour Codes",
      blurb:
        "Enacted but operationally notified in phases. Rules under each Code have been pre-published by the Centre and most states.",
      items: [
        {
          title: "Code on Wages, 2019",
          reference: "Act No. 29 of 2019",
          date: "08 Aug 2019",
          url: "https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf",
        },
        {
          title: "Industrial Relations Code, 2020",
          reference: "Act No. 35 of 2020",
          date: "28 Sep 2020",
          url: "https://labour.gov.in/sites/default/files/IR_Code_Gazette.pdf",
        },
        {
          title: "Code on Social Security, 2020",
          reference: "Act No. 36 of 2020",
          date: "28 Sep 2020",
          url: "https://labour.gov.in/sites/default/files/SS_Code_Gazette.pdf",
        },
        {
          title: "Occupational Safety, Health and Working Conditions Code, 2020",
          reference: "Act No. 37 of 2020",
          date: "28 Sep 2020",
          url: "https://labour.gov.in/sites/default/files/OSH_Gazette.pdf",
        },
      ],
    },
    {
      heading: "Provident fund and social security",
      items: [
        {
          title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
          reference: "Act No. 19 of 1952",
          date: "04 Mar 1952",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Acts/EPF_Act_1952.pdf",
        },
        {
          title: "Employees' State Insurance Act, 1948",
          reference: "Act No. 34 of 1948",
          date: "19 Apr 1948",
          url: "https://www.esic.in/attachments/PublicationFile/41acec5fcde22a0e2cd185b1f29d4736.pdf",
        },
        {
          title: "Payment of Gratuity Act, 1972",
          reference: "Act No. 39 of 1972",
          date: "21 Aug 1972",
          url: "https://labour.gov.in/sites/default/files/ThePaymentofGratuityAct1972.pdf",
        },
      ],
    },
    {
      heading: "Working conditions and welfare",
      items: [
        {
          title: "Factories Act, 1948",
          reference: "Act No. 63 of 1948",
          date: "23 Sep 1948",
          url: "https://labour.gov.in/sites/default/files/factories_act_1948.pdf",
        },
        {
          title: "Contract Labour (Regulation and Abolition) Act, 1970",
          reference: "Act No. 37 of 1970",
          date: "05 Sep 1970",
          url: "https://labour.gov.in/sites/default/files/contractlabourregulationandabolitionact_1970_0.pdf",
        },
        {
          title: "Payment of Bonus Act, 1965",
          reference: "Act No. 21 of 1965",
          date: "25 Sep 1965",
          url: "https://labour.gov.in/sites/default/files/Payment_of_Bonus_Act_1965.pdf",
        },
        {
          title: "Maternity Benefit Act, 1961",
          reference: "Act No. 53 of 1961",
          date: "12 Dec 1961",
          url: "https://labour.gov.in/sites/default/files/the_maternity_benefit_act_1961.pdf",
        },
      ],
    },
  ],
};

const LLP: CategoryReferences = {
  intro:
    "The Limited Liability Partnership Act, 2008 governs LLPs in India. The Ministry of Corporate Affairs administers it through the LLP Rules 2009 (as amended), forms filed on the MCA21 portal, and circulars / general notifications on procedural matters.",
  primaryAuthority: {
    name: "Ministry of Corporate Affairs",
    url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/llp-act.html",
  },
  groups: [
    {
      heading: "Primary law",
      items: [
        {
          title: "Limited Liability Partnership Act, 2008",
          reference: "Act No. 6 of 2009",
          date: "07 Jan 2009",
          url: "https://www.mca.gov.in/content/dam/mca/pdf/llpAct.pdf",
        },
        {
          title: "Limited Liability Partnership Rules, 2009",
          reference: "GSR 229(E)",
          date: "01 Apr 2009",
          url: "https://www.mca.gov.in/content/dam/mca/pdf/LLP_Rules_2009.pdf",
        },
        {
          title: "Limited Liability Partnership (Amendment) Act, 2021",
          reference: "Act No. 31 of 2021",
          date: "13 Aug 2021",
          url: "https://www.mca.gov.in/bin/dms/getdocument?mds=NPCdmRPGifI%252BqkhqM3bSrA%253D%253D&type=open",
        },
      ],
    },
    {
      heading: "Notable rule amendments",
      items: [
        {
          title: "LLP (Amendment) Rules, 2022 – Web-based filing on MCA21 v3",
          reference: "GSR 153(E)",
          date: "04 Mar 2022",
          url: "https://www.mca.gov.in/bin/dms/getdocument?mds=KMOyOlcMR1AlNoNvHKVwSw%253D%253D&type=open",
        },
        {
          title: "LLP (Significant Beneficial Owners) Rules, 2023",
          reference: "GSR 832(E)",
          date: "09 Nov 2023",
          url: "https://www.mca.gov.in/bin/dms/getdocument?mds=2cWf2I5W%252BX2jeJQHkXuukA%253D%253D&type=open",
        },
      ],
    },
    {
      heading: "Procedural references",
      items: [
        {
          title: "LLP filings and e-forms on MCA21",
          reference: "MCA21 portal",
          date: "Live",
          url: "https://www.mca.gov.in/content/mca/global/en/foportal/fologin.html",
        },
        {
          title: "LLP fee structure (Annexure A – LLP Rules)",
          reference: "Annexure A",
          date: "Live",
          url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/llp-rules.html",
        },
      ],
    },
  ],
};

const INDAS: CategoryReferences = {
  intro:
    "Indian Accounting Standards (Ind AS) are issued by the Ministry of Corporate Affairs on the recommendation of ICAI, under the Companies (Indian Accounting Standards) Rules, 2015. Ind AS apply mandatorily to specified companies and converge substantially with IFRS.",
  primaryAuthority: {
    name: "MCA · Indian Accounting Standards",
    url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/accounting-standards.html",
  },
  groups: [
    {
      heading: "Framework and roadmap",
      items: [
        {
          title: "Companies (Indian Accounting Standards) Rules, 2015",
          reference: "GSR 111(E)",
          date: "16 Feb 2015",
          url: "https://www.mca.gov.in/Ministry/pdf/Indian_Accounting_Standards_Rules_2015.pdf",
        },
        {
          title: "Roadmap for implementation of Ind AS (MCA Press Note)",
          reference: "MCA Press Note 1/2015",
          date: "02 Jan 2015",
          url: "https://www.mca.gov.in/Ministry/pdf/MCAPressNote_02012015.pdf",
        },
      ],
    },
    {
      heading: "Core presentation and policies",
      items: [
        {
          title: "Ind AS 1 – Presentation of Financial Statements",
          reference: "Ind AS 1",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66523indas-ind-as-1.pdf",
        },
        {
          title: "Ind AS 7 – Statement of Cash Flows",
          reference: "Ind AS 7",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66529indas-ind-as-7.pdf",
        },
        {
          title: "Ind AS 8 – Accounting Policies, Changes in Estimates and Errors",
          reference: "Ind AS 8",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66530indas-ind-as-8.pdf",
        },
        {
          title: "Ind AS 10 – Events after the Reporting Period",
          reference: "Ind AS 10",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66532indas-ind-as-10.pdf",
        },
      ],
    },
    {
      heading: "Recognition, measurement and disclosure",
      items: [
        {
          title: "Ind AS 115 – Revenue from Contracts with Customers",
          reference: "Ind AS 115",
          date: "Applicable FY 2018-19",
          url: "https://resource.cdn.icai.org/66587indas-ind-as-115.pdf",
        },
        {
          title: "Ind AS 116 – Leases",
          reference: "Ind AS 116",
          date: "Applicable FY 2019-20",
          url: "https://resource.cdn.icai.org/66588indas-ind-as-116.pdf",
        },
        {
          title: "Ind AS 109 – Financial Instruments",
          reference: "Ind AS 109",
          date: "Applicable FY 2018-19",
          url: "https://resource.cdn.icai.org/66583indas-ind-as-109.pdf",
        },
        {
          title: "Ind AS 12 – Income Taxes",
          reference: "Ind AS 12",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66534indas-ind-as-12.pdf",
        },
        {
          title: "Ind AS 16 – Property, Plant and Equipment",
          reference: "Ind AS 16",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66537indas-ind-as-16.pdf",
        },
        {
          title: "Ind AS 36 – Impairment of Assets",
          reference: "Ind AS 36",
          date: "Applicable FY 2016-17",
          url: "https://resource.cdn.icai.org/66555indas-ind-as-36.pdf",
        },
      ],
    },
    {
      heading: "Full standard list",
      items: [
        {
          title: "All Ind AS at ICAI (full text PDFs)",
          reference: "ICAI publication",
          date: "Live",
          url: "https://www.icai.org/post.html?post_id=10866",
        },
      ],
    },
  ],
};

const SERVICE_TAX: CategoryReferences = {
  intro:
    "Service tax was a Union levy on services rendered in India, governed by Chapter V of the Finance Act, 1994 and the Service Tax Rules, 1994. It was subsumed by GST with effect from 1 July 2017. Live regulatory issuances on services now appear under the GST head.",
  primaryAuthority: {
    name: "CBIC · Service Tax (legacy)",
    url: "https://www.cbic.gov.in/entities/cbic-content-mst/MTAyMA==",
  },
  groups: [
    {
      heading: "Governing statute (legacy)",
      items: [
        {
          title: "Finance Act, 1994 – Chapter V (Service Tax)",
          reference: "Chapter V, Act No. 32 of 1994",
          date: "13 May 1994 (subsumed by GST 01 Jul 2017)",
          url: "https://www.cbic.gov.in/resources/htdocs-cbec/ub1718/do-st-bill-2017.pdf",
        },
        {
          title: "Service Tax Rules, 1994",
          reference: "GSR 546(E)",
          date: "28 Jun 1994 (subsumed)",
          url: "https://www.cbic.gov.in/resources/htdocs-servicetax/st-rules-1994.pdf",
        },
      ],
    },
    {
      heading: "GST transition",
      items: [
        {
          title: "Migration of service tax assessees to GST – CBIC FAQ",
          reference: "CBIC GST FAQ",
          date: "Live",
          url: "https://www.cbic.gov.in/entities/gst-faq",
        },
      ],
    },
  ],
};

const CST: CategoryReferences = {
  intro:
    "The Central Sales Tax Act, 1956 governed taxation of inter-state sale of goods. Most of its scope has been subsumed by IGST since 1 July 2017. CST continues to apply in limited form for inter-state sale of goods outside the GST net (petroleum crude, motor spirit, HSD, natural gas, ATF and alcohol for human consumption).",
  primaryAuthority: {
    name: "CBIC · Sales Tax",
    url: "https://www.cbic.gov.in/",
  },
  groups: [
    {
      heading: "Statute and rules",
      items: [
        {
          title: "Central Sales Tax Act, 1956",
          reference: "Act No. 74 of 1956",
          date: "21 Dec 1956",
          url: "https://www.cbic.gov.in/resources/htdocs-cbec/customs/cs-act/cst-act.pdf",
        },
        {
          title: "Central Sales Tax (Registration & Turnover) Rules, 1957",
          reference: "SO 1144(E)",
          date: "28 Mar 1957",
          url: "https://www.cbic.gov.in/resources/htdocs-cbec/customs/cs-act/cst-rules.pdf",
        },
      ],
    },
    {
      heading: "GST transition",
      items: [
        {
          title: "Goods continuing under CST (non-GST goods)",
          reference: "Section 9, CGST Act – exclusions",
          date: "01 Jul 2017",
          url: "https://www.cbic.gov.in/resources/htdocs-cbec/gst/cgst-act-update-04022019.pdf",
        },
      ],
    },
  ],
};

const VAT: CategoryReferences = {
  intro:
    "State Value Added Tax replaced state sales tax across India from 2005 onwards and was itself largely subsumed by GST on 1 July 2017. State VAT continues only for petroleum crude, motor spirit, HSD, natural gas, ATF and alcoholic liquor for human consumption.",
  primaryAuthority: {
    name: "Telangana Commercial Taxes",
    url: "https://www.tgct.gov.in/",
  },
  groups: [
    {
      heading: "Telangana (current law)",
      blurb:
        "Applicable to the firm's home jurisdiction. Continues for non-GST goods.",
      items: [
        {
          title: "Telangana Value Added Tax Act, 2005",
          reference: "Act No. 5 of 2005",
          date: "27 Jan 2005",
          url: "https://www.tgct.gov.in/tgportal/acts.do",
        },
        {
          title: "Telangana VAT Rules, 2005",
          reference: "GSR 394",
          date: "20 Apr 2005",
          url: "https://www.tgct.gov.in/tgportal/rules.do",
        },
      ],
    },
    {
      heading: "Major state VAT statutes (for reference)",
      items: [
        {
          title: "Delhi Value Added Tax Act, 2004",
          reference: "Act No. 3 of 2005",
          date: "03 Dec 2004",
          url: "https://www.dvat.gov.in/website/legal-references.html",
        },
        {
          title: "Maharashtra Value Added Tax Act, 2002",
          reference: "Act No. IX of 2005",
          date: "09 Mar 2005",
          url: "https://mahagst.gov.in/en/mvat-act-2002",
        },
        {
          title: "Karnataka Value Added Tax Act, 2003",
          reference: "Act No. 32 of 2004",
          date: "11 Dec 2004",
          url: "https://ctax.kar.nic.in/",
        },
      ],
    },
  ],
};

const OTHERS: CategoryReferences = {
  intro:
    "Notable cross-cutting regulatory regimes that don't fit cleanly under the principal heads above — foreign contribution, real estate, competition, insolvency, food safety and the data protection law.",
  primaryAuthority: {
    name: "India Code · Statute Repository",
    url: "https://www.indiacode.nic.in/",
  },
  groups: [
    {
      heading: "Foreign contribution",
      items: [
        {
          title: "Foreign Contribution (Regulation) Act, 2010",
          reference: "Act No. 42 of 2010",
          date: "26 Sep 2010",
          url: "https://fcraonline.nic.in/home/PDF_Doc/FC-RegulationAct-2010.pdf",
        },
        {
          title: "FCRA (Amendment) Act, 2020",
          reference: "Act No. 33 of 2020",
          date: "28 Sep 2020",
          url: "https://fcraonline.nic.in/home/PDF_Doc/fc-amend-2020.pdf",
        },
        {
          title: "FCRA Rules, 2011 (as amended)",
          reference: "GSR 349(E)",
          date: "29 Apr 2011",
          url: "https://fcraonline.nic.in/home/PDF_Doc/FC-RegulationRules-2011.pdf",
        },
      ],
    },
    {
      heading: "Real estate",
      items: [
        {
          title: "Real Estate (Regulation and Development) Act, 2016",
          reference: "Act No. 16 of 2016",
          date: "25 Mar 2016",
          url: "https://mohua.gov.in/upload/uploadfiles/files/Real%20Estate%20Act.pdf",
        },
        {
          title: "Telangana State RERA Rules, 2017",
          reference: "GO Ms. No. 202",
          date: "31 Jul 2017",
          url: "https://rera.telangana.gov.in/",
        },
      ],
    },
    {
      heading: "Competition and insolvency",
      items: [
        {
          title: "Competition Act, 2002 (as amended by the 2023 Act)",
          reference: "Act No. 12 of 2003",
          date: "13 Jan 2003",
          url: "https://www.cci.gov.in/competition-act",
        },
        {
          title: "Insolvency and Bankruptcy Code, 2016",
          reference: "Act No. 31 of 2016",
          date: "28 May 2016",
          url: "https://ibbi.gov.in/legal-framework/act",
        },
      ],
    },
    {
      heading: "Food safety and data protection",
      items: [
        {
          title: "Food Safety and Standards Act, 2006",
          reference: "Act No. 34 of 2006",
          date: "23 Aug 2006",
          url: "https://www.fssai.gov.in/upload/uploadfiles/files/Act2006.pdf",
        },
        {
          title: "Digital Personal Data Protection Act, 2023",
          reference: "Act No. 22 of 2023",
          date: "11 Aug 2023",
          url: "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf",
        },
      ],
    },
  ],
};

export const REFERENCES: Record<string, CategoryReferences> = {
  fema: FEMA,
  "labour-laws": LABOUR,
  "llp-act": LLP,
  indas: INDAS,
  "service-tax": SERVICE_TAX,
  "central-sales-tax": CST,
  vat: VAT,
  others: OTHERS,
};

export function getReferencesForCategory(
  slug: string,
): CategoryReferences | undefined {
  return REFERENCES[slug];
}
