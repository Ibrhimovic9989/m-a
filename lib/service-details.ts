/**
 * Per-service detail content for the 15 services with full
 * documentation in /docs/*.docx. Summarised into editorial voice;
 * source files preserved in the repo for reference.
 *
 * Slugs here map to the dynamic route /services/[slug].
 */

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  categorySlug: string; // matches services-catalog.ts category slug
  categoryTitle: string;
  intro: string[]; // paragraphs in the "what is" section
  whyItems: { heading: string; body: string }[]; // benefits
  applicability?: { title: string; items: string[] };
  packageItems: string[]; // what's included
  processSteps?: { n: string; title: string; body: string }[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  // ---------------------------------------------------------------
  {
    slug: "copyright-registration",
    title: "Copyright Registration",
    tagline:
      "Safeguard original creative work with exclusive ownership rights.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "Copyright is a legal right granted to creators of original work — books, music, films, software, artwork, designs, websites, research. Registering with the Copyright Office, Government of India provides official recognition and a paper trail you can rely on if the work is ever copied, distributed or misused.",
      "We act for individuals, studios, agencies, software houses and educational publishers across India.",
    ],
    whyItems: [
      {
        heading: "Exclusive rights",
        body: "Full control over reproduction, distribution and adaptation of the work.",
      },
      {
        heading: "Legal protection",
        body: "Strong primary evidence in infringement disputes and takedown actions.",
      },
      {
        heading: "Commercial value",
        body: "Ability to license, assign, or sell the registered work as an asset.",
      },
      {
        heading: "Global enforcement",
        body: "Easier cross-border protection under the Berne Convention.",
      },
      {
        heading: "Owner recognition",
        body: "Public record of authorship — credibility for partnerships and collaborations.",
      },
    ],
    applicability: {
      title: "Works covered under copyright law",
      items: [
        "Literary works — books, articles, scripts, website content",
        "Artistic works — logos, paintings, drawings, photographs",
        "Musical works — songs, lyrics, soundtracks",
        "Cinematograph films — films, documentaries, video content",
        "Software & digital code — programs, mobile apps, databases",
      ],
    },
    packageItems: [
      "Advisory on eligibility and classification of the work",
      "Drafting and filing of the application with the Copyright Office",
      "Submission of copies / samples of the work",
      "Diary number issued as proof of filing",
      "Representation in case of examination or objections",
      "Delivery of the Copyright Registration Certificate",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "We confirm eligibility, classification and fee structure on a short call.",
      },
      {
        n: "02",
        title: "Documents & samples",
        body: "You share the work — manuscript, code, logo, recording — along with author KYC.",
      },
      {
        n: "03",
        title: "Filing",
        body: "We file the application with the Copyright Office and issue you the diary number.",
      },
      {
        n: "04",
        title: "Protection granted",
        body: "After examination, you receive the Certificate of Registration.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "esi-registration",
    title: "ESI Registration",
    tagline:
      "Healthcare and social-security cover for your employees, on the right side of the ESI Act.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Employees' State Insurance scheme, administered by the ESIC under the Ministry of Labour, provides medical, sickness, maternity, disability and dependent benefits to employees.",
      "Any establishment employing ten or more workers (in most states) with eligible salaries must register and contribute. We handle the registration and the monthly compliance that follows.",
    ],
    whyItems: [
      {
        heading: "Mandatory compliance",
        body: "Required under the ESI Act, 1948 — penalties for non-registration are steep.",
      },
      {
        heading: "Employee welfare",
        body: "Medical care for the worker and their family, plus statutory benefits.",
      },
      {
        heading: "Range of benefits",
        body: "Sickness, maternity, disability, dependents' pension, funeral expenses.",
      },
      {
        heading: "Legal protection",
        body: "Avoids penalties, inspection findings, and labour-court exposure.",
      },
      {
        heading: "Employer credibility",
        body: "Improves trust and retention — a baseline for serious employers.",
      },
    ],
    applicability: {
      title: "Who needs ESI registration",
      items: [
        "Companies, factories, shops and establishments with 10+ employees",
        "Hotels, restaurants, and educational institutions employing staff",
        "Employees earning ₹21,000 or below per month (₹25,000 for persons with disabilities)",
      ],
    },
    packageItems: [
      "Advisory on eligibility and contribution rates (employer 3.25%, employee 0.75%)",
      "Filing of the ESI Registration application on the ESIC portal",
      "Generation of the 17-digit Employer Code Number",
      "Employee registration and insurance numbers",
      "Assistance with monthly ESI return filings",
      "Post-registration support for inspections and audits",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "We confirm headcount, salary structure and applicability state-wise.",
      },
      {
        n: "02",
        title: "Documents",
        body: "Incorporation papers, employee details, PAN and bank proof.",
      },
      {
        n: "03",
        title: "Filing",
        body: "Application filed on the ESIC online portal.",
      },
      {
        n: "04",
        title: "Code issued",
        body: "Employer Code generated, employees enrolled, scheme is live.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "fcra-registration",
    title: "FCRA Registration",
    tagline:
      "Receive foreign contributions legally, with credibility on both sides of the border.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Foreign Contribution (Regulation) Act, 2010 regulates how foreign funds enter India. Any NGO, Trust or Society that intends to accept donations or grants from foreign individuals, companies or international organisations must obtain FCRA Registration from the Ministry of Home Affairs.",
      "Effectively a licence for global fundraising — and the basis for transparency, compliance and credibility with foreign donors.",
    ],
    whyItems: [
      {
        heading: "Legal eligibility",
        body: "NGOs cannot accept foreign funds without FCRA approval.",
      },
      {
        heading: "Wider fundraising base",
        body: "Access to global donors, CSR initiatives, and international NGOs.",
      },
      {
        heading: "Credibility",
        body: "Builds trust with foreign agencies and Indian regulators alike.",
      },
      {
        heading: "Grant eligibility",
        body: "Mandatory for grants from UN bodies, World Bank and foreign governments.",
      },
    ],
    applicability: {
      title: "Types of FCRA approval",
      items: [
        "FCRA Registration (Permanent) — for NGOs with a 3+ year track record in charitable activities",
        "FCRA Prior Permission (Temporary) — for newer NGOs seeking specific, project-based foreign funding",
      ],
    },
    packageItems: [
      "Eligibility check and compliance advisory",
      "Preparation of the application (Form FC-3A / FC-3B) with supporting documents",
      "Filing with the Ministry of Home Affairs",
      "Guidance on opening the mandatory FCRA Bank Account in SBI — New Delhi Branch",
      "Post-registration advisory on annual returns (Form FC-4) and ongoing compliance",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "fssai-license",
    title: "FSSAI Food License",
    tagline:
      "Manufacture, sell, deliver or import food legally — at any business size.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Food Safety and Standards Authority of India issues food licences to regulate the manufacture, storage, distribution and sale of food products.",
      "Every Food Business Operator — including manufacturers, restaurants, cafés, cloud kitchens, food traders, e-commerce sellers and importers — must hold an FSSAI Licence or Registration to operate.",
    ],
    whyItems: [
      {
        heading: "Mandatory legal compliance",
        body: "Required under the FSSAI Act, 2006 — penalties and closures for non-registered FBOs.",
      },
      {
        heading: "Consumer trust",
        body: "The FSSAI logo on packaging and storefronts is a credibility signal.",
      },
      {
        heading: "Market expansion",
        body: "Compulsory for tie-ups with Zomato, Swiggy, Amazon, Flipkart and other aggregators.",
      },
      {
        heading: "Government scheme access",
        body: "Eligibility for food-sector schemes, export opportunities and subsidies.",
      },
    ],
    applicability: {
      title: "Types of FSSAI licence",
      items: [
        "Basic Registration — for small FBOs with turnover below ₹12 lakh",
        "State Licence — for medium-sized FBOs with turnover ₹12 lakh – ₹20 crore",
        "Central Licence — for large FBOs, multi-state operations, and import/export",
      ],
    },
    packageItems: [
      "Eligibility check and advisory on the correct licence type",
      "Preparation and filing of the application on the FSSAI portal",
      "Drafting of declarations and supporting documents",
      "Liaison with FSSAI for clarifications and inspections",
      "Issuance of the FSSAI Licence / Registration Certificate",
      "Post-registration support — renewals, labelling, modifications",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "We confirm the licence tier, fee structure and timelines.",
      },
      {
        n: "02",
        title: "Documents",
        body: "PAN, Aadhaar, address proof, and business-line details.",
      },
      {
        n: "03",
        title: "Filing",
        body: "Application submitted on the FSSAI portal; inspections coordinated where required.",
      },
      {
        n: "04",
        title: "Licence issued",
        body: "FSSAI number and logo are yours to display.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "gst-registration",
    title: "GST Registration",
    tagline:
      "Get GST-registered and become nationally trade-ready.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Goods and Services Tax is India's unified indirect tax. Businesses with turnover above ₹40 lakh (₹20 lakh for services), interstate suppliers, and certain notified categories are mandatorily required to register with the GST Department.",
      "Once registered, the business receives a GSTIN and steps into a monthly / quarterly compliance cycle — both of which we set up for you cleanly from day one.",
    ],
    whyItems: [
      {
        heading: "Mandatory compliance",
        body: "Avoid heavy penalties imposed on unregistered businesses.",
      },
      {
        heading: "Input tax credit",
        body: "Claim ITC on purchases and reduce overall tax liability.",
      },
      {
        heading: "Nationwide legitimacy",
        body: "Sell across states and e-commerce platforms without friction.",
      },
      {
        heading: "Vendor credibility",
        body: "Registered businesses are taken more seriously by clients and partners.",
      },
      {
        heading: "Tender access",
        body: "GSTIN is required for most government and corporate procurement.",
      },
    ],
    applicability: {
      title: "Who needs GST registration",
      items: [
        "Businesses with annual turnover above the prescribed limit",
        "E-commerce sellers — Amazon, Flipkart, Meesho, etc.",
        "Service providers — consultants, freelancers, agencies",
        "Interstate suppliers of goods or services",
        "Importers and exporters",
      ],
    },
    packageItems: [
      "Advisory on GST applicability for your business",
      "Filing of the GST Registration application on the GST portal",
      "Guidance on HSN / SAC code selection",
      "Issuance of the GSTIN certificate",
      "Assistance with the e-way bill system (if applicable)",
      "Post-registration guidance on return filing and ongoing compliance",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "iso-certification",
    title: "ISO Certification",
    tagline:
      "Internationally recognised quality, safety and efficiency standards.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "ISO certification demonstrates that your company's processes, products and services meet international standards set by the International Organization for Standardization.",
      "It functions as a trust badge — credible to customers, regulators and investors — and as a discipline that drives operational excellence internally.",
    ],
    whyItems: [
      {
        heading: "Global credibility",
        body: "Internationally recognised by customers, regulators and procurement teams.",
      },
      {
        heading: "Quality assurance",
        body: "Improves efficiency, reduces risks and operational errors.",
      },
      {
        heading: "Competitive advantage",
        body: "Preferred — sometimes required — in tenders and B2B contracts.",
      },
      {
        heading: "Customer trust",
        body: "Demonstrates an institutional commitment to quality and compliance.",
      },
      {
        heading: "Business growth",
        body: "Opens new markets and funding opportunities.",
      },
    ],
    applicability: {
      title: "Popular ISO standards",
      items: [
        "ISO 9001 — Quality Management System",
        "ISO 14001 — Environmental Management",
        "ISO 27001 — Information Security Management",
        "ISO 45001 — Occupational Health & Safety",
        "ISO 22000 — Food Safety Management",
        "ISO 13485 — Medical Devices Quality Management",
        "ISO 50001 — Energy Management",
      ],
    },
    packageItems: [
      "Advisory on choosing the right ISO standard for the business",
      "Preparation of documents and manuals required for audit",
      "Pre-assessment and gap analysis for readiness",
      "Coordination with an accredited ISO certification body",
      "Assistance through the certification audit process",
      "Delivery of the ISO Certificate",
      "Post-certification compliance and renewal support",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "We identify the right standard and scope for your operation.",
      },
      {
        n: "02",
        title: "Documents",
        body: "Basic business documents and existing process records.",
      },
      {
        n: "03",
        title: "Gap analysis",
        body: "We prepare the manuals and procedures required for audit.",
      },
      {
        n: "04",
        title: "Audit",
        body: "An external ISO audit is arranged with the certifying body.",
      },
      {
        n: "05",
        title: "Certification granted",
        body: "The ISO Certificate is issued; we hand-off the renewal calendar.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "iec-registration",
    title: "Import Export Code (IEC)",
    tagline:
      "The ten-digit licence that lets you trade across borders.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Import Export Code is a 10-digit licence issued by the Directorate General of Foreign Trade, Ministry of Commerce. It is mandatory for any business or individual importing goods into India or exporting goods or services from India.",
      "Without IEC, you cannot clear shipments through customs or receive international payments legally.",
    ],
    whyItems: [
      {
        heading: "Mandatory for trade",
        body: "Required by DGFT, Customs and your banker for foreign remittances.",
      },
      {
        heading: "Global expansion",
        body: "Legally trade worldwide as an Indian business.",
      },
      {
        heading: "Banking compliance",
        body: "Needed to receive and remit foreign currency through Indian banks.",
      },
      {
        heading: "Lifetime validity",
        body: "One-time registration — no renewals, no recurring filings.",
      },
      {
        heading: "Scheme access",
        body: "Eligibility for export incentives and benefits under the Foreign Trade Policy.",
      },
    ],
    packageItems: [
      "Advisory on IEC eligibility and process",
      "Preparation and filing of the application on the DGFT portal",
      "PAN and Aadhaar-based authentication",
      "Digital Signature Certificate support, if required",
      "Issuance of the IEC certificate from DGFT",
      "Post-registration guidance on amendments and updates",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "Quick confirmation of eligibility and document checklist.",
      },
      {
        n: "02",
        title: "Documents",
        body: "PAN, Aadhaar, business details, and a bank certificate.",
      },
      {
        n: "03",
        title: "Filing",
        body: "We file on the DGFT portal end-to-end.",
      },
      {
        n: "04",
        title: "IEC issued",
        body: "Your 10-digit IEC certificate, typically in 2–3 working days.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "lut-filing",
    title: "LUT Filing under GST",
    tagline:
      "Export goods and services without paying IGST upfront.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "A Letter of Undertaking is a declaration filed on the GST portal that allows exporters to supply goods or services without paying IGST at the time of export.",
      "Instead of paying IGST upfront and chasing refunds afterwards, businesses file an LUT once a financial year and export under zero-rated supply.",
    ],
    whyItems: [
      {
        heading: "No upfront IGST",
        body: "Capital is not blocked in taxes you'll eventually reclaim.",
      },
      {
        heading: "Faster export orders",
        body: "Avoids the refund-cycle delay that hurts working capital.",
      },
      {
        heading: "Cleaner cash flow",
        body: "Funds remain deployable in the business, not stuck with the department.",
      },
      {
        heading: "Mandatory for tax-free exports",
        body: "LUT filing is a precondition for zero-rated supply treatment.",
      },
      {
        heading: "Annual validity",
        body: "File once each financial year — predictable, low-friction compliance.",
      },
    ],
    applicability: {
      title: "Who should file LUT",
      items: [
        "Exporters of goods or services",
        "SEZ developers and SEZ units",
        "Businesses providing services to clients outside India",
        "Companies involved in deemed exports (as notified by GST)",
      ],
    },
    packageItems: [
      "Advisory on LUT eligibility and documentation",
      "Preparation and filing of the LUT application on the GST portal",
      "Drafting of required declarations",
      "Submission of supporting documents — IEC, bank details, invoices if required",
      "Confirmation of LUT approval from the GST Department",
      "Guidance on annual renewal and ongoing compliance",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "labour-license",
    title: "Labour License Registration",
    tagline:
      "Engage contract workers within the four corners of Indian labour law.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "Under the Contract Labour (Regulation & Abolition) Act, 1970, any establishment or contractor employing twenty or more workers must obtain a Labour License from the relevant State Labour Department.",
      "It is the official approval to employ contract workers and a baseline safeguard against fines, disputes and operational disruption.",
    ],
    whyItems: [
      {
        heading: "Legal compliance",
        body: "Mandatory for establishments engaging contract workers above threshold.",
      },
      {
        heading: "Avoid penalties",
        body: "Non-compliance leads to heavy fines and, in some cases, closure orders.",
      },
      {
        heading: "Worker protection",
        body: "Ensures fair wages, safety and statutory benefits for workers.",
      },
      {
        heading: "Client credibility",
        body: "Required when bidding for government and corporate contracts.",
      },
      {
        heading: "Operational continuity",
        body: "Avoids disruption from labour authorities during inspections.",
      },
    ],
    applicability: {
      title: "Who needs a labour license",
      items: [
        "Contractors employing 20 or more contract workers",
        "Companies engaging third-party manpower agencies",
        "Construction, manufacturing, housekeeping, security and similar establishments",
      ],
    },
    packageItems: [
      "Consultation on applicability and eligibility",
      "Preparation of application forms (Form V and state-specific formats)",
      "Document drafting and verification",
      "Filing with the State Labour Department",
      "Liaison with authorities through approval",
      "Delivery of the Labour License Certificate",
      "Compliance advisory for renewals and inspections",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    tagline:
      "Government recognition that unlocks subsidies, easier credit and tender access.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "MSME Registration — now Udyam Registration, issued by the Ministry of MSME — gives a small or growing business formal government recognition.",
      "It is the gateway to subsidies, collateral-free credit, tender preferences, and statutory protection against delayed payments. Applicable across manufacturing, service and trading businesses.",
    ],
    whyItems: [
      {
        heading: "Government subsidies",
        body: "Interest-rate concessions and capital subsidies on eligible loans.",
      },
      {
        heading: "Collateral-free credit",
        body: "Easier access to credit under the CGTMSE scheme.",
      },
      {
        heading: "Tax and tender benefits",
        body: "Exemptions and preferences in government tenders.",
      },
      {
        heading: "Faster bank approvals",
        body: "Priority-sector lending status for registered MSMEs.",
      },
      {
        heading: "Protection on receivables",
        body: "Statutory recourse against delayed payments from buyers.",
      },
    ],
    packageItems: [
      "Advisory on eligibility and classification (Micro / Small / Medium)",
      "Filing of the Udyam Registration application",
      "PAN and Aadhaar-based OTP verification",
      "MSME certificate issued by the Ministry of MSME",
      "Post-registration guidance on loan schemes and benefit utilisation",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & quote",
        body: "We confirm classification and document checklist.",
      },
      {
        n: "02",
        title: "Documents",
        body: "Aadhaar, PAN, and basic business details.",
      },
      {
        n: "03",
        title: "Filing",
        body: "Application submitted on the MSME Ministry portal.",
      },
      {
        n: "04",
        title: "Certificate issued",
        body: "MSME (Udyam) Certificate issued digitally, typically within days.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "pf-registration",
    title: "PF Registration",
    tagline:
      "Statutory retirement savings cover for your employees, set up cleanly.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "The Employees' Provident Fund is a retirement-savings scheme administered by the EPFO under the Ministry of Labour & Employment. Every establishment with twenty or more employees must register with EPFO and contribute monthly.",
      "Both employer and employee contribute 12% of wages to the EPF account — the corpus underwrites the employee's retirement, pension and insurance benefits.",
    ],
    whyItems: [
      {
        heading: "Mandatory compliance",
        body: "Required under the EPF & MP Act, 1952.",
      },
      {
        heading: "Employee welfare",
        body: "Retirement savings, plus pension (EPS) and insurance (EDLI) cover.",
      },
      {
        heading: "Talent retention",
        body: "Boosts the employer brand and employee trust.",
      },
      {
        heading: "Legal protection",
        body: "Avoids penalties, prosecution and labour-court exposure.",
      },
    ],
    applicability: {
      title: "Who needs PF registration",
      items: [
        "Companies, factories, shops and establishments with 20+ employees",
        "Voluntary coverage allowed for organisations under 20 employees",
        "Start-ups and SMEs scaling their workforce",
      ],
    },
    packageItems: [
      "Advisory on PF applicability and contribution structure",
      "Filing of the PF Registration application with EPFO",
      "Issuance of the PF Establishment Code Number",
      "Assistance in employee UAN generation",
      "Guidance on monthly PF challan payments and ECR return filing",
      "Post-registration compliance and inspection support",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "patent-registration",
    title: "Patent Registration",
    tagline:
      "Protect an invention with exclusive twenty-year rights.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "A Patent is a statutory right granted by the Government of India to an inventor for a novel product, process or innovation. It gives the patent holder exclusive rights to use, sell or license the invention for twenty years.",
      "Without registration, anyone can make, use or sell the same invention. With it, you have a defensible asset — often the most valuable one in an early-stage technology business.",
    ],
    whyItems: [
      {
        heading: "Exclusive ownership",
        body: "Protects the innovation from being copied during the patent term.",
      },
      {
        heading: "Commercial advantage",
        body: "Ability to license or sell the patent for revenue.",
      },
      {
        heading: "Investor confidence",
        body: "Demonstrates clear ownership of the underlying innovation.",
      },
      {
        heading: "Global protection",
        body: "Option to extend protection internationally under the Patent Cooperation Treaty.",
      },
      {
        heading: "Long-term validity",
        body: "Twenty years of IP protection — a strong R&D return.",
      },
    ],
    applicability: {
      title: "What can be patented",
      items: [
        "New products, machines, or compositions",
        "Innovative processes, methods, or techniques",
        "Software and algorithms with a technical application",
        "Pharmaceutical formulations and biotech inventions",
        "Industrial designs and devices",
        "Not patentable — abstract theories, business methods, natural laws, traditional knowledge",
      ],
    },
    packageItems: [
      "Patent search and prior-art check to assess novelty",
      "Drafting of the patent specification (provisional or complete)",
      "Filing of the application with the Indian Patent Office",
      "Handling of examination reports and queries",
      "Publication and opposition management",
      "Grant of the Patent Certificate",
      "Advisory on international filing (PCT / WIPO)",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & search",
        body: "We confirm novelty against prior art before any filing.",
      },
      {
        n: "02",
        title: "Disclosure",
        body: "You share the invention — drafts, drawings and a clear description.",
      },
      {
        n: "03",
        title: "Drafting",
        body: "Our team prepares the patent specification.",
      },
      {
        n: "04",
        title: "Filing",
        body: "Provisional or complete application filed with the IPO.",
      },
      {
        n: "05",
        title: "Protection begins",
        body: "“Patent Pending” status immediately; full rights upon grant.",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "professional-tax",
    title: "Professional Tax (PT) Registration",
    tagline:
      "State-level employee tax deduction — registered and routed cleanly.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "Professional Tax is a state-level tax levied on salaried employees, professionals and traders. Employers are responsible for deducting it from salaries and depositing it with the state government.",
      "Employers must obtain PT Registration before they can begin deducting. Self-employed professionals — lawyers, doctors, CAs, consultants, freelancers — also need to register individually.",
    ],
    whyItems: [
      {
        heading: "Mandatory compliance",
        body: "Required under state laws — Maharashtra, Karnataka, Telangana, West Bengal, Gujarat and others.",
      },
      {
        heading: "Penalty avoidance",
        body: "Non-registration or late filing attracts fines and interest.",
      },
      {
        heading: "Deduction legality",
        body: "Employers can deduct PT only after registration — registering first protects the employee.",
      },
      {
        heading: "Business credibility",
        body: "Clean payroll compliance signals seriousness to auditors and partners.",
      },
      {
        heading: "Easier renewals",
        body: "Regular filings keep the compliance calendar predictable.",
      },
    ],
    applicability: {
      title: "Who needs PT registration",
      items: [
        "Companies, LLPs, partnership firms, proprietorships",
        "Employers with salaried staff",
        "Professionals — lawyers, doctors, consultants, CAs, architects",
        "Traders and small business owners in applicable states",
      ],
    },
    packageItems: [
      "Advisory on applicability across states",
      "Filing of PT Registration application with the state authorities",
      "Employer Registration Certificate (to deduct and deposit PT)",
      "Employee enrolment where applicable",
      "Guidance on PT payments and returns filing",
      "Post-registration compliance support",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "trade-license",
    title: "Trade License Registration",
    tagline:
      "Operate within municipal jurisdiction with the right local permission.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "A Trade License is a certificate issued by the Municipal Corporation or local authority granting permission to operate a business within their jurisdiction.",
      "It confirms the business complies with safety, health and zoning regulations and is mandatory for shops, hotels, restaurants, warehouses, manufacturing units, factories, and consumer-facing service businesses.",
    ],
    whyItems: [
      {
        heading: "Legal requirement",
        body: "Mandatory for any business operating within municipal areas.",
      },
      {
        heading: "Avoid penalties",
        body: "Operating without a trade license invites fines and closure notices.",
      },
      {
        heading: "Customer trust",
        body: "Enhances credibility with clients, partners and landlords.",
      },
      {
        heading: "Local compliance",
        body: "Ensures alignment with state and municipal regulations.",
      },
      {
        heading: "Smooth operations",
        body: "Avoids friction with local authorities and surprise visits.",
      },
    ],
    applicability: {
      title: "Who needs a trade license",
      items: [
        "Businesses engaged in commercial, industrial or service activities",
        "Shops, restaurants, food joints, small factories",
        "Clinics, salons, gyms, coaching centres and similar professional setups",
      ],
    },
    packageItems: [
      "Eligibility check as per state and municipal laws",
      "Drafting and filing of the trade license application with the local authority",
      "Assistance in document preparation — address proof, incorporation, NOCs",
      "Liaison with municipal officers for inspection and approval",
      "Issuance of the Trade License Certificate",
      "Renewal and modification advisory",
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    tagline:
      "Protect the brand — the name, the logo, the voice — with legal exclusivity.",
    categorySlug: "registrations",
    categoryTitle: "Registrations & Incorporations",
    intro: [
      "A Trademark is a unique symbol, word, logo, design or phrase that distinguishes your brand, product or service from a competitor's. Registering with the Controller General of Patents, Designs & Trademarks gives you exclusive ownership rights and legal protection against misuse.",
      "We act for first-time founders protecting a single mark, and for established businesses managing portfolios across classes.",
    ],
    whyItems: [
      {
        heading: "Legal protection",
        body: "Prevents unauthorised use of the brand name or logo.",
      },
      {
        heading: "Exclusive ownership",
        body: "Grants nationwide rights to use the trademark in its class.",
      },
      {
        heading: "Credibility",
        body: "Customers associate registered brands with authenticity.",
      },
      {
        heading: "Intangible asset",
        body: "A registered trademark sits on the balance sheet as real value.",
      },
      {
        heading: "International groundwork",
        body: "Easier path to overseas registration under the Madrid Protocol.",
      },
      {
        heading: "Investor confidence",
        body: "Brand-equity protection is table-stakes for serious investors.",
      },
    ],
    applicability: {
      title: "Types of trademark you can register",
      items: [
        "Business names and brand names",
        "Logos and taglines",
        "Product names and packaging designs",
        "Domain names",
        "Service marks for service-based businesses",
      ],
    },
    packageItems: [
      "Trademark search and availability check",
      "Drafting and filing of the TM-A application with the Registry",
      "Class selection guidance (per NICE classification)",
      "Filing acknowledgement with TM number (use ™ immediately)",
      "Tracking of application status through final registration",
      "Legal support in case of examination or third-party objections",
      "Issuance of the Trademark Registration Certificate (®)",
    ],
    processSteps: [
      {
        n: "01",
        title: "Brief & search",
        body: "We run a clearance search to confirm availability before filing.",
      },
      {
        n: "02",
        title: "Documents",
        body: "Identity proof, the logo or word mark, and brand-use details.",
      },
      {
        n: "03",
        title: "Filing",
        body: "We file with the IP India Registry and hand you the TM number.",
      },
      {
        n: "04",
        title: "Protection begins",
        body: "Use the ™ symbol immediately; ® granted after final approval.",
      },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_DETAILS.map((s) => s.slug);
}
