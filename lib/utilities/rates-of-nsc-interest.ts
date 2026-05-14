import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "National Savings Certificate (VIII Issue) is a five-year small savings instrument offered through India Post. The interest rate is reset quarterly by the Department of Economic Affairs, Ministry of Finance — typically in the last week of the preceding quarter. Interest is compounded annually but payable on maturity. The principal qualifies for deduction under Section 80C (old regime); interest reinvested (other than in the final year) is also eligible for 80C within the overall ₹1.5L cap.",
  asOf: "Q1 FY 2025-26 — DEA notification effective 1 April 2025",
  sections: [
    {
      kind: "table",
      caption: "Quarter-wise NSC VIII interest rate",
      headers: ["Quarter", "Rate (annual, compounded annually)"],
      rows: [
        ["Q1 FY 2025-26 (Apr–Jun 2025)", "7.7%"],
        ["Q4 FY 2024-25 (Jan–Mar 2025)", "7.7%"],
        ["Q3 FY 2024-25 (Oct–Dec 2024)", "7.7%"],
        ["Q2 FY 2024-25 (Jul–Sep 2024)", "7.7%"],
        ["Q1 FY 2024-25 (Apr–Jun 2024)", "7.7%"],
        ["Q4 FY 2023-24 (Jan–Mar 2024)", "7.7%"],
        ["Q3 FY 2023-24 (Oct–Dec 2023)", "7.7%"],
        ["Q2 FY 2023-24 (Jul–Sep 2023)", "7.7%"],
        ["Q1 FY 2023-24 (Apr–Jun 2023)", "7.7%"],
        ["Q4 FY 2022-23 (Jan–Mar 2023)", "7.0%"],
        ["Q3 FY 2022-23 (Oct–Dec 2022)", "6.8%"],
        ["Q2 FY 2022-23 (Jul–Sep 2022)", "6.8%"],
        ["Q1 FY 2022-23 (Apr–Jun 2022)", "6.8%"],
        ["FY 2021-22 (all quarters)", "6.8%"],
        ["FY 2020-21 (all quarters)", "6.8%"],
        ["FY 2019-20 (Apr–Jun)", "8.0%"],
      ],
      footnote: "Rate locked at the time of purchase remains fixed for the full 5-year tenor — subsequent quarter revisions do not affect existing certificates.",
    },
    {
      kind: "table",
      caption: "Maturity value of ₹100 (NSC VIII at current 7.7% rate)",
      headers: ["End of Year", "Cumulative Value (₹)"],
      rows: [
        ["1", "107.70"],
        ["2", "116.00"],
        ["3", "124.93"],
        ["4", "134.55"],
        ["5 (maturity)", "144.91"],
      ],
      footnote: "₹100 invested at 7.7% compounded annually matures to approximately ₹144.91 after 5 years.",
    },
    {
      kind: "note",
      title: "Tax treatment",
      body: [
        "Principal: deductible under Section 80C up to ₹1.5L (old regime only).",
        "Interest accrued in years 1–4: deemed to be reinvested, qualifies for Section 80C within the overall cap, but must be offered to tax under 'income from other sources' in the same year. Net effect: tax-neutral within 80C limit.",
        "Interest in year 5 (final year): taxable in full; no 80C set-off available.",
        "TDS: India Post does not deduct TDS on NSC interest, but the certificate-holder is liable to declare and pay tax.",
      ],
    },
  ],
};
