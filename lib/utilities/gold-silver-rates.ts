import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Historical reference rates of gold and silver as notified by the Income Tax Department for wealth tax / valuation purposes (since 1981). Used for: cost base substitution under Section 55(2) for assets acquired before 1 April 2001; capital gains computation; succession and gift valuations; Sovereign Gold Bond pricing reference. Live market rates are available from MMTC-PAMP, IBJA, and major bullion exchanges — figures here are for valuation continuity only.",
  asOf: "Income Tax Department — historical valuation rates",
  sections: [
    {
      kind: "table",
      caption: "Gold (24K) — rates per 10 grams as on 31 March",
      headers: ["Financial Year (as on 31-Mar)", "Rate (₹ / 10g)"],
      rows: [
        ["1981 (base year for pre-2001 indexation)", "1,670"],
        ["1991", "3,466"],
        ["2001", "4,300"],
        ["2005", "6,180"],
        ["2010", "16,320"],
        ["2015", "26,245"],
        ["2018", "30,680"],
        ["2019", "31,640"],
        ["2020", "40,440"],
        ["2021", "44,290"],
        ["2022", "51,575"],
        ["2023", "59,945"],
        ["2024", "67,000"],
        ["2025", "89,400"],
      ],
      footnote:
        "Pre-2001 figures reflect Income Tax Department standard valuations. Post-2001 figures are end-of-FY closing rates from IBJA / MCX. Always cross-check with the local sub-registrar's circle rate where used for property valuations.",
    },
    {
      kind: "table",
      caption: "Silver (.999) — rates per 1 kg as on 31 March",
      headers: ["Financial Year (as on 31-Mar)", "Rate (₹ / kg)"],
      rows: [
        ["1981", "2,715"],
        ["1991", "6,463"],
        ["2001", "7,900"],
        ["2010", "27,255"],
        ["2015", "37,825"],
        ["2018", "37,580"],
        ["2019", "37,245"],
        ["2020", "39,200"],
        ["2021", "63,500"],
        ["2022", "66,800"],
        ["2023", "72,600"],
        ["2024", "75,015"],
        ["2025", "1,00,400"],
      ],
    },
    {
      kind: "external",
      title: "Live & published rates",
      body: [
        "For live market rates, refer to the India Bullion and Jewellers Association (IBJA) AM/PM fix, or the MCX gold and silver futures.",
        "For wealth tax / capital gain valuation, the Income Tax Department's published rate at the relevant Sub-Registrar's office is the authoritative source.",
      ],
      links: [
        { label: "IBJA — daily AM/PM fix", href: "https://ibjarates.com/" },
        { label: "MCX — gold & silver", href: "https://www.mcxindia.com/" },
        { label: "RBI — Sovereign Gold Bond pricing", href: "https://www.rbi.org.in/" },
      ],
    },
  ],
};
