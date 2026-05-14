import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Harmonised System of Nomenclature (HSN) is the international goods classification used in India's GST regime. Mention of HSN on tax invoices is mandatory — 4-digit for businesses with turnover up to ₹5 Cr (optional on B2C), and 6-digit (8-digit on exports) for turnover above ₹5 Cr. The chapter-wise summary below reflects the prevailing CGST + SGST combined rate brackets — many chapters have multiple sub-headings at different rates, so always validate the 8-digit HSN of the specific item against the latest Rate Notification.",
  asOf: "CBIC — CGST Rate Notification 1/2017 as amended; current as of FY 2025-26",
  sections: [
    {
      kind: "table",
      caption: "GST rate brackets — overview",
      headers: ["Rate", "Typical scope"],
      rows: [
        ["Nil (0%)", "Most fresh produce, milk, books, healthcare, education"],
        ["0.25% / 3%", "Rough precious stones / gold, silver, jewellery"],
        ["5%", "Basic essentials, transport, small restaurants"],
        ["12%", "Processed food, intermediate goods, mid-tier services"],
        ["18%", "Standard rate — most goods and services"],
        ["28%", "Luxury, sin and select consumer durables (+ cess on tobacco, autos)"],
      ],
    },
    {
      kind: "table",
      caption: "HSN chapter summary — Sections I to V (live animals, food, beverages)",
      headers: ["Chapter", "Description", "Common GST"],
      rows: [
        ["01–05", "Live animals; animal products", "Nil / 5%"],
        ["06–14", "Vegetable products, plants, fruits, vegetables", "Nil / 5%"],
        ["15", "Animal/vegetable fats and oils", "5%"],
        ["16–24", "Prepared food, beverages, tobacco", "5% / 12% / 18% / 28%"],
        ["22", "Beverages — alcoholic (outside GST), aerated drinks", "28% + cess"],
        ["24", "Tobacco — cigarettes, pan masala", "28% + compensation cess"],
        ["25–27", "Mineral products, salt, ores, fuels", "5% / 18%"],
      ],
    },
    {
      kind: "table",
      caption: "HSN chapter summary — Sections VI to XI (chemicals, plastics, textiles)",
      headers: ["Chapter", "Description", "Common GST"],
      rows: [
        ["28–38", "Chemicals — inorganic, organic, pharma, fertilisers", "5% (pharma) / 18%"],
        ["39–40", "Plastics, rubber", "12% / 18%"],
        ["41–43", "Leather, fur", "5% / 12% / 18%"],
        ["44–46", "Wood, cork, articles of plaiting", "12% / 18%"],
        ["47–49", "Paper, paperboard, printed books", "Nil (books) / 12% / 18%"],
        ["50–63", "Textiles — silk, wool, cotton, MMF, knitted, apparel", "5% (≤ ₹1,000) / 12%"],
      ],
    },
    {
      kind: "table",
      caption: "HSN chapter summary — Sections XII to XVI (footwear, stone, jewellery, metals, machinery)",
      headers: ["Chapter", "Description", "Common GST"],
      rows: [
        ["64", "Footwear", "12% (≤ ₹1,000) / 18%"],
        ["68–70", "Articles of stone, ceramic, glass", "12% / 18%"],
        ["71", "Pearls, precious stones, gold, jewellery", "0.25% / 3%"],
        ["72–83", "Base metals — iron, steel, copper, aluminium, articles thereof", "18%"],
        ["84–85", "Nuclear reactors, machinery, electrical equipment, electronics", "12% / 18%"],
      ],
    },
    {
      kind: "table",
      caption: "HSN chapter summary — Sections XVII to XXI (vehicles, instruments, arms, art)",
      headers: ["Chapter", "Description", "Common GST"],
      rows: [
        ["86–89", "Railway, motor vehicles, aircraft, ships", "5% (EV) / 18% / 28% + cess"],
        ["87", "Motor cars and vehicles — petrol", "28% + 1%/3%/15%/17% cess"],
        ["87 (sub)", "EVs (electric vehicles)", "5%"],
        ["90–92", "Optical, photographic, medical, musical instruments", "12% / 18%"],
        ["93", "Arms and ammunition", "18% / 28%"],
        ["94–96", "Furniture, toys, miscellaneous manufactured articles", "12% / 18%"],
        ["97", "Works of art, antiques", "12%"],
        ["99", "Services (SAC)", "Nil / 5% / 12% / 18% / 28%"],
      ],
    },
    {
      kind: "external",
      title: "Authoritative HSN search",
      body: [
        "The chapter-wise table is a planning summary. For the rate of a specific 8-digit HSN code or service SAC, always use the CBIC's official rate-finder before raising an invoice.",
      ],
      links: [
        { label: "CBIC — GST Rate Finder", href: "https://cbic-gst.gov.in/gst-goods-services-rates.html" },
        { label: "GST Council — Rate Schedules", href: "https://gstcouncil.gov.in/" },
      ],
    },
  ],
};
