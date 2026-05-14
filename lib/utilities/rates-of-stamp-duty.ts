import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Stamp duty in India is a State subject — rates vary materially across States. The Indian Stamp Act, 1899 applies to certain Union-list instruments (bills of exchange, promissory notes, transfer of shares), while State-specific Acts govern conveyances, leases and most other instruments. Rates below summarise the prevailing position on key transactions — confirm against the relevant State's notification before remitting, particularly for property transactions where circle rates and women / first-time-buyer rebates apply.",
  asOf: "State Stamp Acts / Schedules — current notifications",
  sections: [
    {
      kind: "table",
      caption: "Conveyance of immovable property — major States (men, urban)",
      headers: ["State", "Stamp Duty", "Registration Fee"],
      rows: [
        ["Maharashtra (Mumbai, urban)", "6% (5% + 1% metro cess)", "1% (capped ₹30,000)"],
        ["Delhi", "6% (men) / 4% (women)", "1%"],
        ["Karnataka", "5% (above ₹45L) / 3% (₹21–45L) / 2% (≤ ₹20L)", "1%"],
        ["Tamil Nadu", "7%", "4%"],
        ["Telangana", "5% + 1.5% transfer duty", "0.5%"],
        ["Andhra Pradesh", "5% + 1.5% transfer duty", "1%"],
        ["Kerala", "8%", "2%"],
        ["West Bengal", "6% (≤ 1Cr) / 7% (>1Cr) + 1% surcharge", "1%"],
        ["Uttar Pradesh", "7% (men) / 6% (women, up to ₹10L)", "1%"],
        ["Gujarat", "4.9% (4% basic + 0.9% surcharge)", "1% (Nil for women)"],
        ["Punjab", "7% (men) / 5% (women)", "1%"],
        ["Haryana — urban", "7% (men) / 5% (women)", "1%"],
        ["Rajasthan", "6% (men) / 5% (women)", "1%"],
        ["Madhya Pradesh", "7.5% (incl. 3% municipal duty)", "3%"],
      ],
      footnote: "Rates reflect urban / municipal area rates; rural rates are typically 1–2% lower. Women buyers attract concessional rates in several States (Delhi, UP, Punjab, Haryana, Rajasthan).",
    },
    {
      kind: "table",
      caption: "Other common instruments — Union / Indian Stamp Act, 1899",
      headers: ["Instrument", "Stamp Duty"],
      rows: [
        ["Transfer of shares (delivery)", "0.015% (15 paise per ₹1,000)"],
        ["Transfer of shares (non-delivery / intra-day)", "0.003%"],
        ["Issue of shares / debentures (allotment)", "0.005%"],
        ["Debentures (transfer)", "0.0001%"],
        ["Bills of exchange / promissory notes — payable on demand", "₹1 (irrespective of amount)"],
        ["Cheques — drawn on a bank within India", "Nil (exempt)"],
        ["Power of attorney — general", "₹100 (varies by State)"],
        ["Power of attorney — specific", "₹50–500 (varies)"],
      ],
      footnote:
        "Stamp duty on securities transactions was harmonised across India by amendments to the Indian Stamp Act effective 1 July 2020 — collected at source by stock exchanges, clearing corporations and depositories.",
    },
    {
      kind: "table",
      caption: "Lease deeds — typical rates",
      headers: ["Tenure", "Maharashtra", "Delhi", "Karnataka"],
      rows: [
        ["Up to 5 years", "0.25% of avg. annual rent + premium", "2% of avg. annual rent", "0.5% of avg. annual rent + premium"],
        ["5 to 10 years", "0.5%", "3%", "1%"],
        ["10 to 20 years", "0.75%", "6%", "2%"],
        ["20 to 30 years", "1%", "6%", "3%"],
        ["Above 30 years", "Same as conveyance", "Same as conveyance", "Same as conveyance"],
      ],
    },
    {
      kind: "note",
      title: "Practical notes",
      body: [
        "Stamp duty is payable on the higher of: (a) consideration stated in the document, or (b) ready reckoner / circle rate notified by the State for the area.",
        "Under-stamping is a common audit issue — Section 64 of the Indian Stamp Act provides for impounding by the Collector and penalty up to 10x the deficit duty.",
        "For LLP agreements, stamp duty is payable in the State where the LLP is registered, within 30 days of incorporation. Rates range from ₹500 (Delhi) to ₹5,000+ (Maharashtra, on capital).",
      ],
    },
  ],
};
