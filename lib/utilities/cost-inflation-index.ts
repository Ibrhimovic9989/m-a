import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "The Cost Inflation Index (CII) is notified annually by the CBDT under Section 48 of the Income Tax Act, 1961 read with Rule 48 of the Income Tax Rules. It is used to compute the indexed cost of acquisition / improvement when calculating long-term capital gains on assets eligible for indexation. The current base year is 2001-02, with CII fixed at 100. Note: Finance (No. 2) Act, 2024 removed indexation for most long-term capital assets (effective transfers after 23 July 2024) — indexation is now relevant only for resident individuals / HUFs on property acquired before that date (where they may elect 20% with indexation or 12.5% without).",
  asOf: "CBDT Notification 44/2025 dated 1 July 2025",
  sections: [
    {
      kind: "table",
      caption: "Cost Inflation Index — base year 2001-02 = 100",
      headers: ["Financial Year", "CII"],
      rows: [
        ["2001-02", 100],
        ["2002-03", 105],
        ["2003-04", 109],
        ["2004-05", 113],
        ["2005-06", 117],
        ["2006-07", 122],
        ["2007-08", 129],
        ["2008-09", 137],
        ["2009-10", 148],
        ["2010-11", 167],
        ["2011-12", 184],
        ["2012-13", 200],
        ["2013-14", 220],
        ["2014-15", 240],
        ["2015-16", 254],
        ["2016-17", 264],
        ["2017-18", 272],
        ["2018-19", 280],
        ["2019-20", 289],
        ["2020-21", 301],
        ["2021-22", 317],
        ["2022-23", 331],
        ["2023-24", 348],
        ["2024-25", 363],
        ["2025-26", 376],
      ],
      footnote:
        "Indexed cost = Cost × CII (year of sale) ÷ CII (year of acquisition or 2001-02, whichever later). For assets held before 1 April 2001, the taxpayer may elect to substitute Fair Market Value as on 1 April 2001 as the cost.",
    },
    {
      kind: "note",
      title: "Indexation regime change — Finance (No. 2) Act, 2024",
      body: [
        "For transfers on or after 23 July 2024, indexation is no longer available for most LTCG — a single rate of 12.5% (without indexation) applies.",
        "Carve-out — for resident individuals and HUFs transferring land or building acquired before 23 July 2024, tax payable cannot exceed the lower of: (a) 12.5% without indexation, or (b) 20% with indexation. Compute under both and pay the lower.",
        "Indexation continues to apply for non-residents on listed securities under specific provisions and for certain unlisted bonds — confirm against current Section 112 / 112A text before applying.",
      ],
    },
  ],
};
