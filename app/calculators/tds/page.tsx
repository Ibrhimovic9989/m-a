"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

// TDS sections currently most used in practice. Rates here reflect the
// position effective FY 2025-26 (Finance Act 2024 + Finance Act 2025).
// PAN-not-furnished cases are subject to §206AA — 20% or higher.
type Section = {
  id: string;
  label: string;
  rate: number;
  threshold: number;
  description: string;
  rateNote?: string;
};

const SECTIONS: Section[] = [
  {
    id: "194a",
    label: "§194A — Interest (non-securities)",
    rate: 10,
    threshold: 5_000,
    description:
      "TDS on interest other than interest on securities — bank deposits, NBFCs, unsecured loans.",
    rateNote:
      "Threshold is ₹50,000 for senior citizens. ₹40,000 for bank / co-op bank / post-office interest to non-seniors.",
  },
  {
    id: "194c-ind",
    label: "§194C — Contractor (individual / HUF)",
    rate: 1,
    threshold: 30_000,
    description:
      "Payment to a contractor or sub-contractor where the payee is an individual or HUF.",
    rateNote:
      "Aggregate threshold is ₹1,00,000 in the FY even if no single payment crosses ₹30,000.",
  },
  {
    id: "194c-co",
    label: "§194C — Contractor (others)",
    rate: 2,
    threshold: 30_000,
    description:
      "Payment to a contractor or sub-contractor where the payee is a company, firm or other person.",
  },
  {
    id: "194h",
    label: "§194H — Commission or brokerage",
    rate: 2,
    threshold: 15_000,
    description:
      "Commission or brokerage. Rate reduced from 5% to 2% with effect from 1 October 2024.",
  },
  {
    id: "194i-pm",
    label: "§194I(a) — Rent of plant & machinery",
    rate: 2,
    threshold: 2_40_000,
    description: "Rent paid for plant, machinery or equipment.",
  },
  {
    id: "194i-lb",
    label: "§194I(b) — Rent of land / building / furniture",
    rate: 10,
    threshold: 2_40_000,
    description:
      "Rent paid for land, building (including factory), furniture or fittings.",
  },
  {
    id: "194ia",
    label: "§194-IA — Transfer of immovable property",
    rate: 1,
    threshold: 50_00_000,
    description:
      "TDS on purchase of immovable property other than agricultural land.",
  },
  {
    id: "194ib",
    label: "§194-IB — Rent (individual / HUF payer)",
    rate: 2,
    threshold: 50_000,
    description:
      "Rent paid by an individual or HUF (not subject to tax audit) exceeding ₹50,000 per month. Rate reduced from 5% to 2% with effect from 1 October 2024.",
  },
  {
    id: "194j-tech",
    label: "§194J(a) — Fees for technical services",
    rate: 2,
    threshold: 30_000,
    description:
      "Fees for technical services and royalty for sale, distribution or exhibition of cinematographic films.",
  },
  {
    id: "194j-prof",
    label: "§194J(b) — Professional fees / royalty",
    rate: 10,
    threshold: 30_000,
    description:
      "Professional services, royalty (other than 194J(a)), non-compete fees, director&rsquo;s sitting fees.",
  },
  {
    id: "194m",
    label: "§194M — Payment by individual / HUF for contract / professional",
    rate: 2,
    threshold: 50_00_000,
    description:
      "Where an individual / HUF (not subject to tax audit) pays a contractor or professional. Rate reduced from 5% to 2% with effect from 1 October 2024.",
  },
  {
    id: "194o",
    label: "§194-O — E-commerce participant",
    rate: 0.1,
    threshold: 5_00_000,
    description:
      "TDS by e-commerce operator on payments to e-commerce participants. Rate reduced from 1% to 0.1% with effect from 1 October 2024.",
  },
  {
    id: "194q",
    label: "§194Q — Purchase of goods",
    rate: 0.1,
    threshold: 50_00_000,
    description:
      "TDS on purchase of goods. Applies if the buyer&rsquo;s turnover in the preceding FY exceeds ₹10 Cr.",
  },
  {
    id: "194r",
    label: "§194R — Benefits or perquisites",
    rate: 10,
    threshold: 20_000,
    description:
      "TDS on benefits or perquisites arising from business or profession.",
  },
  {
    id: "194s",
    label: "§194S — Virtual Digital Asset transfer",
    rate: 1,
    threshold: 10_000,
    description:
      "TDS on transfer of virtual digital assets. Threshold ₹50,000 for specified persons.",
  },
  {
    id: "194t",
    label: "§194T — Payment to partners",
    rate: 10,
    threshold: 20_000,
    description:
      "Effective FY 2025-26 — TDS on remuneration, commission, bonus or interest paid to partners by a firm.",
  },
];

export default function Page() {
  const meta = getCalculator("tds")!;
  const [sectionId, setSectionId] = useState<string>("194j-prof");
  const [amount, setAmount] = useState<number>(1_00_000);
  const [panAvailable, setPanAvailable] = useState<"yes" | "no">("yes");

  const section = SECTIONS.find((s) => s.id === sectionId)!;

  const { tds, netPayment, applicable, effectiveRate } = useMemo(() => {
    const effRate =
      panAvailable === "no"
        ? Math.max(section.rate, 20) // §206AA — minimum 20% or higher rate
        : section.rate;
    const applicable = amount >= section.threshold;
    const tds = applicable ? (amount * effRate) / 100 : 0;
    return {
      tds,
      netPayment: amount - tds,
      applicable,
      effectiveRate: effRate,
    };
  }, [section, amount, panAvailable]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Section">
            <select
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
              className="w-full bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[16px] py-2.5 cursor-pointer"
            >
              {SECTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label.replace(/&rsquo;/g, "'")}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Payment amount" hint="In one or aggregate">
            <NumInput value={amount} onChange={setAmount} currency min={0} />
          </Field>
          <Field
            label="PAN of the deductee"
            hint="§206AA — minimum 20% if PAN is not furnished"
          >
            <OptionGroup
              options={[
                { value: "yes" as const, label: "PAN available" },
                { value: "no" as const, label: "PAN not furnished" },
              ]}
              value={panAvailable}
              onChange={setPanAvailable}
            />
          </Field>
          <p className="text-[12px] text-smoke leading-[1.55] pt-2 border-t border-ink/[0.08]">
            <span className="text-amber-dark">{section.label.replace(/&rsquo;/g, "'")}</span> ·{" "}
            {section.description}
          </p>
          {section.rateNote && (
            <p className="text-[11.5px] text-smoke/85 leading-[1.55] -mt-3">
              <span className="text-amber-dark">⌖</span> {section.rateNote}
            </p>
          )}
        </>
      }
      results={
        applicable ? (
          <>
            <HeroResult
              label="TDS to deduct"
              value={tds}
              hint={`Effective rate ${effectiveRate}% — payment crosses the §${section.id.toUpperCase()} threshold of ₹${section.threshold.toLocaleString("en-IN")}.`}
            />
            <div className="space-y-0">
              <ResultRow label="Gross payment" value={amount} />
              <ResultRow label="Less: TDS to deduct" value={-tds} />
              <ResultRow label="Net payment to deductee" value={netPayment} emphasis />
            </div>
            {panAvailable === "no" && (
              <p className="mt-6 text-[12.5px] text-amber-dark leading-[1.55] p-4 rounded-md border border-amber/30 bg-amber/5">
                <strong>§206AA invoked.</strong> Without a valid PAN, the
                minimum TDS rate is 20% — or the higher of the section rate
                and 20%. The deductee cannot claim the credit until the PAN
                is furnished.
              </p>
            )}
          </>
        ) : (
          <div className="py-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-3">
              ⌖ Below threshold
            </p>
            <p className="font-display text-[24px] lg:text-[28px] tracking-tightest leading-[1.2] text-ink/85">
              No TDS deduction required.
            </p>
            <p className="mt-3 text-[14px] text-smoke leading-[1.55]">
              The payment of ₹{amount.toLocaleString("en-IN")} is below the
              §{section.id.toUpperCase()} threshold of ₹{section.threshold.toLocaleString("en-IN")}.
              {section.rateNote ? " Aggregate-payment thresholds may still apply during the year." : ""}
            </p>
          </div>
        )
      }
      formula={
        <>
          <p>
            TDS deduction is governed by Chapter XVII-B of the Income Tax Act,
            1961. Each section specifies a deductor, a payee category, a
            threshold and a rate. Where the payment crosses the threshold, the
            deductor withholds tax at the prescribed rate and deposits it to
            the Central Government using challan ITNS-281 by the 7th of the
            following month (30 April for March deductions).
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            TDS = Payment × rate%   (when payment ≥ threshold)
            <br />
            Without PAN: rate = max(section rate, 20%)
          </p>
          <p>
            Several rates were revised by Finance (No. 2) Act 2024 with effect
            from 1 October 2024 (notably §194H, §194-IB, §194M and §194-O).
            Finance Act 2025 introduced §194T (TDS on payments to partners)
            effective FY 2025-26. The drop-down here uses the post-1-Oct-2024
            rates throughout.
          </p>
        </>
      }
    />
  );
}
