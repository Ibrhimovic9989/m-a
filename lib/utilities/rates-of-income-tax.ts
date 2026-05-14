import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Income tax slab structure for FY 2025-26 (AY 2026-27). The new tax regime under Section 115BAC is the default — the old regime is available only on a positive opt-in via Form 10-IEA for taxpayers with business / professional income (and via the return itself for salaried). Rebate under Section 87A is available under both regimes within the thresholds shown. Health & education cess at 4% applies on tax plus surcharge.",
  asOf: "Finance Act, 2024 — applicable from 1 April 2025",
  sections: [
    {
      kind: "table",
      caption: "New regime (default) — Section 115BAC — all individual taxpayers",
      headers: ["Income slab (₹)", "Rate"],
      rows: [
        ["Up to 3,00,000", "Nil"],
        ["3,00,001 – 7,00,000", "5%"],
        ["7,00,001 – 10,00,000", "10%"],
        ["10,00,001 – 12,00,000", "15%"],
        ["12,00,001 – 15,00,000", "20%"],
        ["Above 15,00,000", "30%"],
      ],
      footnote:
        "Standard deduction for salaried / pensioners is ₹75,000 under the new regime. Rebate u/s 87A — full tax rebate if total income ≤ ₹7,00,000 (max ₹25,000).",
    },
    {
      kind: "table",
      caption: "Old regime — Resident individual below 60",
      headers: ["Income slab (₹)", "Rate"],
      rows: [
        ["Up to 2,50,000", "Nil"],
        ["2,50,001 – 5,00,000", "5%"],
        ["5,00,001 – 10,00,000", "20%"],
        ["Above 10,00,000", "30%"],
      ],
      footnote: "Standard deduction ₹50,000 (salaried). Rebate u/s 87A — full tax rebate if total income ≤ ₹5,00,000 (max ₹12,500).",
    },
    {
      kind: "table",
      caption: "Old regime — Resident senior citizen (60 to < 80)",
      headers: ["Income slab (₹)", "Rate"],
      rows: [
        ["Up to 3,00,000", "Nil"],
        ["3,00,001 – 5,00,000", "5%"],
        ["5,00,001 – 10,00,000", "20%"],
        ["Above 10,00,000", "30%"],
      ],
    },
    {
      kind: "table",
      caption: "Old regime — Resident super senior citizen (80+)",
      headers: ["Income slab (₹)", "Rate"],
      rows: [
        ["Up to 5,00,000", "Nil"],
        ["5,00,001 – 10,00,000", "20%"],
        ["Above 10,00,000", "30%"],
      ],
    },
    {
      kind: "table",
      caption: "Surcharge on income tax — Individuals / HUF / AOP / BOI",
      headers: ["Total income (₹)", "Surcharge — Old regime", "Surcharge — New regime"],
      rows: [
        ["Up to 50 lakh", "Nil", "Nil"],
        ["50 lakh – 1 crore", "10%", "10%"],
        ["1 crore – 2 crore", "15%", "15%"],
        ["2 crore – 5 crore", "25%", "25%"],
        ["Above 5 crore", "37%", "25%"],
      ],
      footnote:
        "Marginal relief is available where additional surcharge exceeds the increase in income over the threshold. Surcharge on capital gains under 111A / 112 / 112A and on dividend income is capped at 15% in both regimes.",
    },
    {
      kind: "table",
      caption: "Domestic companies — Income tax rate",
      headers: ["Category", "Rate"],
      rows: [
        ["Turnover ≤ 400 Cr in FY 2023-24", "25%"],
        ["Other domestic companies", "30%"],
        ["Section 115BAA (concessional, no exemptions)", "22%"],
        ["Section 115BAB (new manufacturing co. set up before 31.03.2024)", "15%"],
        ["MAT — Section 115JB", "15% of book profit"],
      ],
      footnote: "Surcharge: 7% (income 1Cr–10Cr), 12% (>10Cr). For 115BAA / 115BAB — flat 10% surcharge. Cess 4% on all.",
    },
    {
      kind: "table",
      caption: "Other entities",
      headers: ["Entity", "Rate"],
      rows: [
        ["Partnership firm / LLP", "30%"],
        ["Local authority", "30%"],
        ["Co-operative society — slab 0-10K / 10-20K / >20K", "10% / 20% / 30%"],
        ["Co-operative society — Section 115BAD (opted)", "22%"],
        ["Co-operative society — Section 115BAE (new manufacturing)", "15%"],
        ["Foreign company", "35%"],
      ],
      footnote: "Surcharge: Firms/LLPs/local authorities — 12% if income > 1Cr. Foreign co. — 2% (1Cr–10Cr), 5% (>10Cr). Cess 4% on all.",
    },
  ],
};
