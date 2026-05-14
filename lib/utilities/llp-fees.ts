import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Filing and registration fees under the Limited Liability Partnership Rules, 2009 (as amended). LLP fees are banded by total monetary value of contribution rather than authorised share capital. The annual filings — Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return) — are mandatory regardless of business activity in the year.",
  asOf: "LLP (Registration and Fees) Rules, 2009 — current",
  sections: [
    {
      kind: "table",
      caption: "Incorporation — FiLLiP (Form for incorporation of LLP)",
      headers: ["Contribution (₹)", "Fee (₹)"],
      rows: [
        ["Up to 1,00,000", "500"],
        ["1,00,001 – 5,00,000", "2,000"],
        ["5,00,001 – 10,00,000", "4,000"],
        ["10,00,001 – 25,00,000", "5,000"],
        ["25,00,001 – 1,00,00,000", "10,000"],
        ["Above 1,00,00,000", "10,000"],
      ],
    },
    {
      kind: "table",
      caption: "Annual filings",
      headers: ["Form", "Fee (₹) — contribution up to 1L", "1L–5L", "5L–10L", "10L–25L", "25L–1Cr", "Above 1Cr"],
      rows: [
        ["Form 11 — Annual Return", "50", "100", "150", "200", "400", "600"],
        ["Form 8 — Statement of Account & Solvency", "50", "100", "150", "200", "400", "600"],
      ],
      footnote: "Form 8 due by 30 October. Form 11 due by 30 May. Both are due annually.",
    },
    {
      kind: "table",
      caption: "Event-based filings",
      headers: ["Form", "Purpose", "Fee (₹) — contribution up to 1L", "Above 1L"],
      rows: [
        ["Form 3", "LLP Agreement / changes", "50", "100–400 (slab)"],
        ["Form 4", "Change in designated partners / partners", "50", "100–400"],
        ["Form 15", "Change of registered office", "50", "100–400"],
        ["Form 5", "Change of name", "50", "100–400"],
        ["Form 24", "Strike off — Section 75 application", "500", "500"],
        ["Form 1", "Name reservation — RUN-LLP", "200", "200"],
      ],
    },
    {
      kind: "table",
      caption: "Additional fee for delayed filing (small LLP)",
      headers: ["Period of delay", "Multiplier (small LLP)", "Multiplier (other)"],
      rows: [
        ["Up to 15 days", "1x", "1x"],
        ["More than 15 days, up to 30 days", "2x", "4x"],
        ["More than 30 days, up to 60 days", "4x", "8x"],
        ["More than 60 days, up to 90 days", "6x", "12x"],
        ["More than 90 days, up to 180 days", "10x", "20x"],
        ["More than 180 days, up to 360 days", "15x", "30x"],
        ["More than 360 days", "25x", "50x"],
      ],
      footnote:
        "Small LLP means an LLP with contribution up to ₹25L and turnover in the immediately preceding FY up to ₹40L (or such higher limits as notified).",
    },
    {
      kind: "note",
      title: "Conversion fees",
      body: [
        "Conversion of partnership firm to LLP (Form 17) — same scale as Form 3 above.",
        "Conversion of private company to LLP (Form 18) — same scale as Form 3 above.",
        "Conversion of unlisted public company to LLP (Form 18) — same scale, with prior shareholder consent.",
      ],
    },
  ],
};
