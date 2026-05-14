import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Registration and incorporation fees under the Companies (Registration Offices and Fees) Rules, 2014. The Government of India waived the basic registration fee (Schedule I — Section 403) for OPCs and companies with authorised capital up to ₹15 lakh under SPICe+ (effective 18 March 2020). The fees below are payable in addition to professional charges, stamp duty (state-specific) and DSC issuance costs.",
  asOf: "Companies (Incorporation) Rules, 2014 — current notifications",
  sections: [
    {
      kind: "table",
      caption: "Name reservation — RUN / Part A of SPICe+",
      headers: ["Service", "Fee (₹)"],
      rows: [
        ["RUN (Reserve Unique Name) — one name proposal, one re-submission", "1,000"],
        ["Name reservation through Part A of SPICe+ at incorporation", "1,000"],
        ["Reservation of name for change of name (existing co.)", "1,000"],
        ["Reservation of name for foreign company — FORM FC-1", "5,000"],
      ],
    },
    {
      kind: "table",
      caption: "Incorporation — SPICe+ (INC-32) — nominal share capital",
      headers: ["Nominal share capital (₹)", "Fee (₹)"],
      rows: [
        ["Up to 15,00,000 (OPC and Pvt. Ltd. only)", "Nil"],
        ["15,00,001 – 50,00,000", "Capital + 36,000 — see scale below"],
        ["50,00,001 – 1,00,00,000", "Capital + 1,56,000 — see scale below"],
        ["Above 1,00,00,000", "Capital + 2,06,000 — see scale below"],
      ],
      footnote:
        "Per-rupee scale: ₹400 for every ₹10,000 up to first 10L; ₹300 for next 40L; ₹100 for next 50L; ₹75 for next 9 Cr; ₹50 for remainder. Maximum capped under SPICe+. Companies without share capital — ₹2,000 per 1,000 members (max ₹20,000).",
    },
    {
      kind: "table",
      caption: "Increase in authorised capital — Form SH-7",
      headers: ["Increase in authorised capital (₹)", "Fee (₹)"],
      rows: [
        ["Up to 1,00,000", "5,000"],
        ["1,00,001 – 5,00,000", "Above 1L: ₹4,000 + ₹400 per ₹10,000"],
        ["5,00,001 – 50,00,000", "Above 5L: ₹20,000 + ₹300 per ₹10,000"],
        ["50,00,001 – 1,00,00,000", "Above 50L: ₹1,55,000 + ₹100 per ₹10,000"],
        ["Above 1,00,00,000", "Above 1Cr: ₹2,05,000 + ₹75 per ₹10,000"],
      ],
    },
    {
      kind: "table",
      caption: "Other event-based fees",
      headers: ["Event", "Fee (₹)"],
      rows: [
        ["Change of name (INC-24) — application to Central Government", "1,000"],
        ["Conversion of public to private (RD application — INC-27)", "1,000"],
        ["Shifting of registered office — within state (INC-23)", "1,000"],
        ["Shifting of registered office — inter-state (INC-23)", "10,000"],
        ["Removal of name (STK-2) — strike off", "10,000"],
        ["Revival under Section 252 — to NCLT", "1,000"],
        ["Compounding application (Form GNL-1)", "1,000"],
      ],
    },
    {
      kind: "note",
      title: "Stamp duty — state-specific",
      body: [
        "Stamp duty on Memorandum and Articles is payable in addition through SPICe+. It is state-specific and computed on authorised capital. Common rates: Delhi (0.15% of capital + ₹10 on MOA), Maharashtra (0.2% capped at ₹50,000), Karnataka (₹500 on MOA + 0.5% on AOA, capped), Tamil Nadu (₹200 on MOA + ₹300 on AOA).",
        "For LLPs, stamp duty on the LLP Agreement is payable separately within 30 days of incorporation and is also state-specific.",
      ],
    },
  ],
};
