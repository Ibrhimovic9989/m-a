import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Schedule II of the Companies Act, 2013 replaced the rate-based regime of Schedule XIV (1956 Act) with a useful-life-based approach. Companies must depreciate assets over their useful life, with residual value not exceeding 5% of original cost. Where a different useful life or residual value is used, justification must be disclosed in the financial statements. The WDV / SLM rates below are arithmetic equivalents computed at a 5% residual value — they are derived, not prescribed.",
  asOf: "Schedule II, Companies Act, 2013 — Part C",
  sections: [
    {
      kind: "table",
      caption: "Useful life by asset class — Part C",
      headers: ["Asset class", "Useful life (years)", "SLM rate", "WDV rate"],
      rows: [
        ["Building — RCC frame structure (other than factory)", 60, "1.58%", "4.87%"],
        ["Building — non-RCC", 30, "3.17%", "9.50%"],
        ["Building — factory building", 30, "3.17%", "9.50%"],
        ["Fences, wells, tube-wells", 5, "19.00%", "45.07%"],
        ["Other (incl. temporary structures)", 3, "31.67%", "63.16%"],
        ["Bridges, culverts, bunders", 30, "3.17%", "9.50%"],
        ["Plant & machinery — general", 15, "6.33%", "18.10%"],
        ["Plant & machinery — continuous process plant", 25, "3.80%", "11.29%"],
        ["Plant & machinery — special — chemicals, glass, refineries", 20, "4.75%", "13.91%"],
        ["Furniture and fittings — general", 10, "9.50%", "25.89%"],
        ["Furniture and fittings — hotels, restaurants, schools", 8, "11.88%", "31.23%"],
        ["Motor cars (not used in business of running on hire)", 8, "11.88%", "31.23%"],
        ["Motor buses, lorries, taxis used in hire business", 6, "15.83%", "39.30%"],
        ["Motorcycles, scooters", 10, "9.50%", "25.89%"],
        ["Aircraft", 20, "4.75%", "13.91%"],
        ["Ships — ocean going", 27, "3.52%", "10.50%"],
        ["Computers, desktops, laptops", 3, "31.67%", "63.16%"],
        ["Servers and networks", 6, "15.83%", "39.30%"],
        ["End user devices — printers, mobiles, tablets", 3, "31.67%", "63.16%"],
        ["Office equipment", 5, "19.00%", "45.07%"],
        ["Electrical installations and equipment", 10, "9.50%", "25.89%"],
        ["Lab equipment — general", 10, "9.50%", "25.89%"],
        ["Lab equipment — educational institutions", 5, "19.00%", "45.07%"],
      ],
      footnote:
        "Rates assume 5% residual value as default. Component accounting is mandatory — significant components with materially different useful lives must be depreciated separately (Schedule II, Part A, para 4).",
    },
    {
      kind: "note",
      title: "Reporting requirements",
      body: [
        "Where a company depreciates an asset over a useful life different from that in Schedule II, or uses a different residual value, the justification must be disclosed in the notes to accounts.",
        "On commencement of Schedule II, the carrying amount as on 1 April 2014 (after retaining residual value) was required to be depreciated over the remaining useful life. Any excess shortfall was charged either to retained earnings (assets whose useful life had expired) or to P&L (others).",
        "Schedule II prescribes useful lives, not rates — the SLM/WDV percentages shown above are mathematically derived from those lives for reference. Always document the actual life used in your fixed asset register.",
      ],
    },
  ],
};
