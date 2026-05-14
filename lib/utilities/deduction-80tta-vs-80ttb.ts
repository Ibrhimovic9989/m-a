import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Sections 80TTA and 80TTB grant a deduction for interest income — but only one applies to any given taxpayer in a year. 80TTB (introduced by Finance Act, 2018) is the broader, higher-cap deduction available only to resident senior citizens; 80TTA covers everyone else but with a narrower scope and a lower cap. Importantly, both deductions are only available under the OLD tax regime — they are not available if you opt for the new regime under Section 115BAC.",
  asOf: "Income Tax Act, 1961 — as amended by Finance Act, 2024",
  sections: [
    {
      kind: "table",
      caption: "Side-by-side comparison",
      headers: ["Feature", "Section 80TTA", "Section 80TTB"],
      rows: [
        ["Who can claim", "Individual (< 60) and HUF", "Resident individual ≥ 60 (senior citizen)"],
        ["Residency", "Resident or non-resident", "Resident only"],
        ["Maximum deduction", "₹10,000", "₹50,000"],
        ["Savings bank interest", "Eligible", "Eligible"],
        ["Fixed deposit interest", "NOT eligible", "Eligible"],
        ["Recurring deposit interest", "NOT eligible", "Eligible"],
        ["Post office deposits", "Savings only", "All deposits (savings, FD, RD, MIS)"],
        ["Co-operative bank deposits", "Savings only", "All deposits"],
        ["Available under new regime (115BAC)", "No", "No"],
        ["TDS threshold (194A) for payer banks", "₹50,000 (others)", "₹1,00,000 (senior citizens)"],
        ["Mutually exclusive with the other", "Yes", "Yes"],
      ],
      footnote:
        "Where a senior citizen is eligible for 80TTB, they cannot additionally claim 80TTA on savings bank interest — 80TTB subsumes it.",
    },
    {
      kind: "note",
      title: "Practical notes",
      body: [
        "Interest earned by an HUF on deposits held in the name of a senior-citizen member is NOT eligible for 80TTB — the deduction is for the individual alone. 80TTA may still be claimed by the HUF up to ₹10,000.",
        "Interest on company / NBFC deposits is outside both sections — it is fully taxable.",
        "Where joint deposits are held with a senior citizen as first holder, interest is assessable in the first holder's hands and 80TTB applies. If the first holder is non-senior, 80TTA's narrower scope governs.",
      ],
    },
  ],
};
