import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Filing fees for companies under the Companies (Registration Offices and Fees) Rules, 2014. Most periodic filings (AOC-4, MGT-7, DIR-12, MGT-14 etc.) are banded by nominal share capital — companies without share capital pay a flat rate. The additional fee for delayed filing is computed by reference to the period of delay (Table at the foot). Stamp duty, where applicable, is paid in addition through the MCA-21 portal and is state-specific.",
  asOf: "Companies (Registration Offices and Fees) Rules, 2014 — current notification",
  sections: [
    {
      kind: "table",
      caption: "Filing fees — company having share capital",
      headers: ["Nominal share capital (₹)", "Filing fee (₹)"],
      rows: [
        ["Less than 1,00,000", "200"],
        ["1,00,000 to 4,99,999", "300"],
        ["5,00,000 to 24,99,999", "400"],
        ["25,00,000 to 99,99,999", "500"],
        ["1,00,00,000 and above", "600"],
      ],
      footnote:
        "Applies to AOC-4, AOC-4 XBRL, MGT-7, MGT-7A (OPC/small co.), DIR-12, MGT-14, PAS-3, SH-7, and most event-based forms.",
    },
    {
      kind: "table",
      caption: "Filing fees — company NOT having share capital",
      headers: ["Form", "Filing fee (₹)"],
      rows: [["All Section 8 / not-for-profit / guarantee companies — per form", "200"]],
    },
    {
      kind: "table",
      caption: "Additional fee for delayed filing — annual filings (AOC-4 / MGT-7)",
      headers: ["Period of delay", "Additional fee per day"],
      rows: [
        ["Any delay", "₹100 per day per form"],
        ["Maximum ceiling", "Unlimited — no cap; continues until filed"],
      ],
      footnote:
        "Section 403 — for AOC-4 and MGT-7, additional fee is ₹100 per day with no cap. For other forms, the slab-based additional fee in the next table applies.",
    },
    {
      kind: "table",
      caption: "Additional fee for delayed filing — other forms",
      headers: ["Period of delay", "Additional fee"],
      rows: [
        ["Up to 15 days (Section 139 & 157)", "1x normal fee"],
        ["More than 15 days, up to 30 days", "2x normal fee"],
        ["More than 30 days, up to 60 days", "4x normal fee"],
        ["More than 60 days, up to 90 days", "6x normal fee"],
        ["More than 90 days, up to 180 days", "10x normal fee"],
        ["More than 180 days", "12x normal fee"],
      ],
    },
    {
      kind: "table",
      caption: "Inspection / certified copies",
      headers: ["Service", "Fee"],
      rows: [
        ["Inspection of public documents of a company", "₹100"],
        ["Certified copy — per page", "₹10"],
        ["Certified copy — extract of register", "₹25"],
      ],
    },
  ],
};
