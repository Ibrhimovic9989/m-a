import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Section 195 of the Income Tax Act, 1961 governs withholding on any sum (other than salary) chargeable to tax in India when paid to a non-resident or foreign company. Rates below are the Act rates — the applicable DTAA rate, if more beneficial, overrides them on furnishing of TRC, Form 10F and the requisite declarations. Health & education cess at 4% and surcharge (per slab) apply.",
  asOf: "Finance Act, 2024 — applicable from 1 April 2025",
  sections: [
    {
      kind: "table",
      caption: "Income chargeable in the hands of non-residents",
      headers: ["Nature of Payment", "Rate (Act)", "Reference"],
      rows: [
        ["Long-term capital gains on listed securities (with STT) > 1.25L", "12.5%", "112A"],
        ["Long-term capital gains — other listed/unlisted securities", "12.5%", "112(1)(c)"],
        ["Short-term capital gains on listed securities (with STT)", "20%", "111A"],
        ["Short-term capital gains — other", "Rates in force", "Slab/30%"],
        ["Income by way of long-term capital gains (FII/FPI)", "12.5%", "115AD"],
        ["Royalty (agreement after 31.03.1976)", "20%", "115A(1)(b)"],
        ["Fees for technical services (FTS)", "20%", "115A(1)(b)"],
        ["Interest from Govt or Indian concern on foreign currency loan", "20%", "115A"],
        ["Interest on infrastructure debt fund", "5%", "194LB"],
        ["Interest from Indian company on ECB / RDB", "5%", "194LC"],
        ["Interest to FII/QFI on Govt/Rupee corporate bond", "5%", "194LD"],
        ["Dividend (other than 115-O / 115BBDA)", "20%", "115A"],
        ["Income from units of UTI/MF purchased in forex", "20%", "115A(1)(a)(iii)"],
        ["Income from GDR purchased in forex (resident employees)", "10%", "115ACA"],
        ["Income of FII from securities (other than dividend / LTCG)", "20%", "115AD"],
        ["Winnings from lottery, crossword, races", "30%", "115BB"],
        ["Income from VDA transfer", "30%", "115BBH"],
        ["Other income chargeable in India", "Rates in force", "—"],
      ],
      footnote:
        "Surcharge: 10% (income 50L–1Cr), 15% (1Cr–2Cr), 25% (2Cr–5Cr), 37% (above 5Cr). Surcharge on dividend / capital gains under 111A, 112, 112A and on FII income under 115AD is capped at 15%.",
    },
    {
      kind: "note",
      title: "DTAA override and procedural checklist",
      body: [
        "Section 90(2) — the payee may opt for the DTAA rate if more beneficial than the Act rate, provided a Tax Residency Certificate (TRC) from the home jurisdiction and Form 10F are furnished. A self-declaration on PE/beneficial ownership is required for most treaty positions.",
        "Form 15CA + 15CB is mandatory for remittances chargeable to tax (with limited exemptions under Rule 37BB). The CA-certified 15CB precedes the 15CA Part C.",
        "Section 206AA does NOT apply where DTAA rate is invoked subject to the non-resident furnishing tax identification number, address and TRC (per Rule 37BC).",
      ],
    },
  ],
};
