import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Depreciation rates prescribed under Appendix I of the Income Tax Rules, 1962, applied on the Written Down Value (WDV) method under Section 32 read with Rule 5. Power-sector undertakings may opt for Straight Line Method under Appendix IA. Additional depreciation of 20% (one-time) is available on new plant & machinery acquired by a manufacturing concern under Section 32(1)(iia). Where an asset is put to use for less than 180 days in the year of acquisition, only 50% of the prescribed rate is allowed for that year.",
  asOf: "Income Tax Rules — as amended; current for AY 2026-27",
  sections: [
    {
      kind: "table",
      caption: "Block I — Buildings",
      headers: ["Asset", "WDV Rate"],
      rows: [
        ["Residential buildings (other than hotels/boarding)", "5%"],
        ["Buildings other than residential", "10%"],
        ["Temporary erections (wooden structures)", "40%"],
      ],
    },
    {
      kind: "table",
      caption: "Block II — Furniture & Fittings",
      headers: ["Asset", "WDV Rate"],
      rows: [["Furniture and fittings — including electrical fittings", "10%"]],
    },
    {
      kind: "table",
      caption: "Block III — Plant & Machinery",
      headers: ["Asset", "WDV Rate"],
      rows: [
        ["General plant and machinery", "15%"],
        ["Motor cars (not used in hire business)", "15%"],
        ["Motor buses, lorries, taxis used in hire business", "30%"],
        ["Aeroplanes", "40%"],
        ["Computers including software", "40%"],
        ["Books — annual publications / library", "40% / 100%"],
        ["Energy saving devices, renewal energy devices", "40%"],
        ["Air pollution control / water pollution control equipment", "40%"],
        ["Plant used in solid waste control / waste management", "40%"],
        ["Wooden parts of artificial silk manufacturing machinery", "40%"],
        ["Cinematograph films — bulb of studio lights", "40%"],
        ["Containers made of glass or plastic used as refills", "40%"],
        ["Oil wells", "15%"],
        ["Ships — fishing vessels", "20%"],
        ["Ships — other than fishing vessels", "20%"],
      ],
    },
    {
      kind: "table",
      caption: "Block IV — Intangibles",
      headers: ["Asset", "WDV Rate"],
      rows: [
        [
          "Know-how, patents, copyrights, trademarks, licences, franchises, business or commercial rights",
          "25%",
        ],
      ],
      footnote:
        "Goodwill of a business or profession was removed from the block of intangible assets w.e.f. AY 2021-22 — no depreciation is now allowable on goodwill.",
    },
    {
      kind: "note",
      title: "Additional depreciation — Section 32(1)(iia)",
      body: [
        "20% (one-time, in addition to normal depreciation) on new plant & machinery acquired and installed by a manufacturing assessee. 10% if put to use for less than 180 days — the balance 10% is allowed in the immediately succeeding previous year.",
        "Not allowed on: ships, aircraft, second-hand machinery, machinery installed in office/residential premises, road transport vehicles, and machinery on which 100% deduction is otherwise allowed.",
      ],
    },
  ],
};
