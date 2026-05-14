"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup, PercentSlider } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

/**
 * RERA interest — payable by the promoter to the allottee for delayed
 * possession (and vice-versa for delayed instalments). The Act fixes
 * the rate at SBI MCLR + 2% — currently around 10.85–11% depending on
 * the live MCLR. Some state authorities prescribe their own rate.
 *
 *   Interest = Amount paid × rate × days ÷ 365     (simple interest)
 */
type Direction = "promoter-default" | "allottee-default";

export default function Page() {
  const meta = getCalculator("rera")!;
  const [direction, setDirection] = useState<Direction>("promoter-default");
  const [amount, setAmount] = useState<number>(40_00_000);
  const [rate, setRate] = useState<number>(10.85);
  const [dueDate, setDueDate] = useState<string>("2025-04-01");
  const [actualDate, setActualDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const { days, interest, total } = useMemo(() => {
    const a = new Date(dueDate);
    const b = new Date(actualDate);
    if (
      isNaN(a.getTime()) ||
      isNaN(b.getTime()) ||
      amount <= 0
    ) {
      return { days: 0, interest: 0, total: amount };
    }
    const days = Math.max(0, Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24)));
    const interest = (amount * rate * days) / (365 * 100);
    return { days, interest, total: amount + interest };
  }, [amount, rate, dueDate, actualDate]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Direction of default">
            <OptionGroup<Direction>
              options={[
                { value: "promoter-default", label: "Promoter delayed possession" },
                { value: "allottee-default", label: "Allottee delayed instalment" },
              ]}
              value={direction}
              onChange={setDirection}
            />
          </Field>
          <Field
            label={
              direction === "promoter-default"
                ? "Amount paid by allottee"
                : "Instalment due"
            }
            hint="Principal subject to interest"
          >
            <NumInput value={amount} onChange={setAmount} currency min={0} />
          </Field>
          <Field
            label="Interest rate"
            hint="SBI MCLR + 2% — currently ~10.85% per annum"
          >
            <PercentSlider
              value={rate}
              onChange={setRate}
              min={6}
              max={18}
              step={0.05}
            />
          </Field>
          <Field label="Due date">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[18px] py-2.5 num"
            />
          </Field>
          <Field label="Actual date" hint="Date of possession / payment">
            <input
              type="date"
              value={actualDate}
              onChange={(e) => setActualDate(e.target.value)}
              className="w-full bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[18px] py-2.5 num"
            />
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label={
              direction === "promoter-default"
                ? "Interest payable by promoter"
                : "Interest payable by allottee"
            }
            value={interest}
            hint={`${days} days at ${rate.toFixed(2)}% per annum on ₹${amount.toLocaleString("en-IN")}.`}
          />
          <div className="space-y-0">
            <ResultRow label="Principal amount" value={amount} />
            <ResultRow
              label="Period of delay"
              value={`${days} days`}
              currency={false}
            />
            <ResultRow
              label="Interest at MCLR + 2%"
              value={interest}
              emphasis
            />
            <ResultRow
              label={
                direction === "promoter-default"
                  ? "Total refund + interest"
                  : "Total payable to promoter"
              }
              value={total}
            />
          </div>

          <p className="mt-6 text-[12.5px] text-amber-dark leading-[1.55] p-4 rounded-md border border-amber/30 bg-amber/5">
            <strong>State-specific variation.</strong> Maharashtra (MahaRERA),
            Haryana (HRERA) and a handful of other state authorities have
            notified their own rate of interest — generally tied to SBI MCLR
            plus 2 percentage points, but verify the exact formula and base
            rate on your state RERA website before relying on the figure.
          </p>
        </>
      }
      formula={
        <>
          <p>
            Section 18 of the Real Estate (Regulation and Development) Act,
            2016 entitles an allottee to interest from the promoter for
            delayed possession; Section 19(7) creates the reciprocal liability
            on the allottee for delayed instalments. The rate of interest is
            prescribed by Rule 15 (or the state equivalent) as the State Bank
            of India&rsquo;s highest Marginal Cost of Funds Lending Rate plus
            two per cent.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Interest = Principal × rate × days ÷ (365 × 100)
            <br />
            rate = SBI MCLR + 2%   (simple interest)
          </p>
          <p>
            The rate above defaults to roughly 10.85% — the live SBI MCLR is
            adjusted by the bank periodically; check{" "}
            <a
              href="https://sbi.co.in/web/interest-rates/interest-rates/mclr"
              target="_blank"
              rel="noreferrer"
              className="text-amber-dark border-b border-amber-dark/40 hover:border-amber-dark"
            >
              sbi.co.in MCLR
            </a>{" "}
            for the current figure and adjust the slider accordingly.
          </p>
        </>
      }
    />
  );
}
