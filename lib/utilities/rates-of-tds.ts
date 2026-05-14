import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "Tax Deducted at Source rates applicable to resident payees for FY 2025-26 (AY 2026-27). Rates below assume the payee has furnished PAN — Section 206AA mandates 20% (or the rate in the Act, whichever is higher) where PAN is not furnished. Section 206AB further doubles the rate for non-filers of returns (with specified exceptions). Surcharge and cess do not apply to TDS on resident payments other than salary.",
  asOf: "Finance Act, 2024 — applicable from 1 April 2025",
  sections: [
    {
      kind: "table",
      caption: "Salary and Salary-like payments",
      headers: ["Section", "Nature of Payment", "Threshold (₹)", "Rate"],
      rows: [
        ["192", "Salary", "As per slab", "Average rate"],
        ["192A", "Premature withdrawal from EPF", "50,000", "10%"],
        ["194P", "Pension to senior citizen ≥ 75 (bank deducts)", "Basic exemption", "As per slab"],
      ],
    },
    {
      kind: "table",
      caption: "Interest, Dividend and Lottery",
      headers: ["Section", "Nature of Payment", "Threshold (₹)", "Rate"],
      rows: [
        ["193", "Interest on securities", "10,000", "10%"],
        ["194", "Dividend (other than 115-O)", "5,000", "10%"],
        ["194A", "Interest other than on securities (bank/co-op/PO)", "50,000 (sr. citizen 1,00,000)", "10%"],
        ["194A", "Interest other than on securities (others)", "10,000", "10%"],
        ["194B", "Lottery, crossword, card game winnings", "10,000 (single payment)", "30%"],
        ["194BA", "Online gaming — net winnings", "Nil", "30%"],
        ["194BB", "Winnings from horse races", "10,000", "30%"],
      ],
    },
    {
      kind: "table",
      caption: "Contractors, Commission and Professional Fees",
      headers: ["Section", "Nature of Payment", "Threshold (₹)", "Rate"],
      rows: [
        ["194C", "Payment to contractor — Individual/HUF", "30,000 single / 1,00,000 aggregate", "1%"],
        ["194C", "Payment to contractor — Others", "30,000 single / 1,00,000 aggregate", "2%"],
        ["194D", "Insurance commission — Individual", "20,000", "2%"],
        ["194D", "Insurance commission — Company", "20,000", "10%"],
        ["194DA", "Life insurance maturity (taxable portion)", "1,00,000", "2%"],
        ["194G", "Commission on sale of lottery tickets", "20,000", "2%"],
        ["194H", "Commission or brokerage", "20,000", "2%"],
        ["194J", "Professional fees", "50,000", "10%"],
        ["194J", "Technical fees / royalty (call centres etc.)", "50,000", "2%"],
        ["194JB", "Fees / royalty paid to film artists", "50,000", "10%"],
      ],
    },
    {
      kind: "table",
      caption: "Rent and Property",
      headers: ["Section", "Nature of Payment", "Threshold (₹)", "Rate"],
      rows: [
        ["194I(a)", "Rent — plant & machinery", "2,40,000 p.a.", "2%"],
        ["194I(b)", "Rent — land, building, furniture", "2,40,000 p.a.", "10%"],
        ["194-IA", "Transfer of immovable property (other than agri)", "50,00,000 (consideration)", "1%"],
        ["194-IB", "Rent by Ind/HUF not under audit", "50,000 per month", "2%"],
        ["194-IC", "Joint development agreement — monetary consideration", "Nil", "10%"],
      ],
    },
    {
      kind: "table",
      caption: "Cash withdrawal, E-commerce and Misc",
      headers: ["Section", "Nature of Payment", "Threshold (₹)", "Rate"],
      rows: [
        ["194N", "Cash withdrawal (banks/co-op/PO)", "1 Cr p.a. (20L for non-filers)", "2% / 5%"],
        ["194-O", "E-commerce operator — payment to participant", "5,00,000 (Ind/HUF only)", "0.1%"],
        ["194Q", "Purchase of goods (turnover > 10 Cr)", "50,00,000 (per seller)", "0.1%"],
        ["194R", "Benefit or perquisite arising from business", "20,000 p.a.", "10%"],
        ["194S", "Transfer of virtual digital asset (VDA)", "50,000 (specified) / 10,000", "1%"],
        ["194T", "Payment by firm to partner — salary/remuneration/interest", "20,000 p.a.", "10%"],
        ["194LA", "Compensation on compulsory acquisition", "2,50,000", "10%"],
      ],
      footnote:
        "Section 194T was introduced by Finance (No. 2) Act, 2024 and is effective from 1 April 2025 — partner remuneration, salary, commission, bonus and interest paid by a firm are now within TDS.",
    },
    {
      kind: "note",
      title: "Higher rate for non-PAN / non-filer payees",
      body: [
        "Section 206AA — where the payee fails to furnish PAN, deduct at the highest of: (a) the rate prescribed in the Act, (b) the rates in force, or (c) 20%.",
        "Section 206AB — where the payee is a non-filer (no return for the prior year and aggregate TDS/TCS ≥ ₹50,000), deduct at twice the prescribed rate or 5%, whichever is higher. Both sections do not apply to salary, lottery, VDA and Section 194-IA / 194-IB / 194M / 194N.",
      ],
    },
  ],
};
