import type { UtilityData } from "../utilities-meta";

export const data: UtilityData = {
  intro:
    "The Indian Financial System Code (IFSC) is an 11-character alphanumeric identifier issued by the Reserve Bank of India. It is required for all NEFT, RTGS and IMPS transactions. The first 4 characters denote the bank (alphabetical), the 5th is always '0' (reserved for future expansion), and the last 6 characters denote the branch (alphanumeric). The RBI maintains the authoritative master directory — the table below lists head-office and key central branches of major banks for quick reference.",
  asOf: "RBI master directory — current",
  sections: [
    {
      kind: "table",
      caption: "Major bank — head office / key central branches",
      headers: ["Bank", "Branch", "IFSC"],
      rows: [
        ["State Bank of India", "Main Branch, Mumbai", "SBIN0000300"],
        ["State Bank of India", "Corporate Accounts Group, Mumbai", "SBIN0009995"],
        ["HDFC Bank", "Sandoz House, Mumbai (HO)", "HDFC0000001"],
        ["ICICI Bank", "Mumbai Main, Free Press House", "ICIC0000001"],
        ["Axis Bank", "Mumbai (HO)", "UTIB0000001"],
        ["Kotak Mahindra Bank", "Mumbai HO", "KKBK0000958"],
        ["Punjab National Bank", "New Delhi HO", "PUNB0001500"],
        ["Bank of Baroda", "Mumbai HO", "BARB0VJKMUM"],
        ["Canara Bank", "Bangalore HO", "CNRB0000001"],
        ["Union Bank of India", "Mumbai HO", "UBIN0530000"],
        ["Bank of India", "Mumbai HO", "BKID0000001"],
        ["Central Bank of India", "Mumbai HO", "CBIN0280001"],
        ["IDBI Bank", "Mumbai HO", "IBKL0000001"],
        ["IndusInd Bank", "Mumbai HO", "INDB0000001"],
        ["Yes Bank", "Mumbai HO", "YESB0000001"],
        ["IDFC FIRST Bank", "Mumbai HO", "IDFB0080101"],
        ["Federal Bank", "Aluva (Kerala) HO", "FDRL0001001"],
        ["RBL Bank", "Mumbai HO", "RATN0000001"],
        ["Standard Chartered", "Mumbai Main Branch", "SCBL0036001"],
        ["Citibank", "Mumbai Main", "CITI0000004"],
        ["HSBC", "Mumbai Main", "HSBC0400002"],
        ["Deutsche Bank", "Mumbai", "DEUT0784MUM"],
      ],
      footnote: "A bank's full master IFSC list runs to several thousand branches — this table covers head offices and high-volume CAG / wholesale branches only.",
    },
    {
      kind: "external",
      title: "Look up the IFSC of any branch",
      body: [
        "The RBI publishes the canonical IFSC / MICR master directory. Most banks also publish their full IFSC list on their own websites. For programmatic look-up, several free APIs (Razorpay, IFSC.io) wrap the RBI data.",
      ],
      links: [
        { label: "RBI — IFSC & MICR Details (official)", href: "https://www.rbi.org.in/scripts/IFSCMICRDetails.aspx" },
        { label: "Razorpay IFSC Toolkit (free API)", href: "https://razorpay.com/ifsc/" },
        { label: "SBI branch locator", href: "https://bank.sbi/web/personal-banking/" },
        { label: "HDFC branch locator", href: "https://www.hdfcbank.com/personal/find-us/locate-branches" },
      ],
    },
    {
      kind: "note",
      title: "How to read an IFSC",
      body: [
        "Characters 1-4 — Bank code (alphabets). e.g. HDFC, ICIC, SBIN, UTIB (Axis), KKBK (Kotak), PUNB (PNB).",
        "Character 5 — Always '0' (zero). Reserved for future use.",
        "Characters 6-11 — Branch code (alphanumeric). e.g. '0000001' is typically the bank's main / first registered branch.",
        "Confirm by remitting a small token amount before sending a large transfer to a new beneficiary — banks return Unable-to-Credit for an invalid or expired IFSC.",
      ],
    },
  ],
};
