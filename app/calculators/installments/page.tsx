"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, PercentSlider } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

/**
 * Solve for n in the EMI formula given P, r and the EMI you can afford.
 *
 *   n = ln(EMI / (EMI − P·r)) / ln(1 + r)
 *
 * Edge cases:
 *   - r = 0     → n = P / EMI
 *   - EMI ≤ P·r → loan never amortises; surface a clear error message
 */
export default function Page() {
  const meta = getCalculator("installments")!;
  const [P, setP] = useState<number>(10_00_000);
  const [rate, setRate] = useState<number>(10.5);
  const [emi, setEmi] = useState<number>(20_000);

  const { months, years, monthsRemainder, totalPayable, totalInterest, error } =
    useMemo(() => {
      const rm = rate / 12 / 100;
      if (P <= 0 || emi <= 0) {
        return {
          months: 0,
          years: 0,
          monthsRemainder: 0,
          totalPayable: 0,
          totalInterest: 0,
          error: "",
        };
      }
      if (rm === 0) {
        const n = P / emi;
        const payable = emi * n;
        return {
          months: Math.ceil(n),
          years: Math.floor(n / 12),
          monthsRemainder: Math.ceil(n) % 12,
          totalPayable: payable,
          totalInterest: payable - P,
          error: "",
        };
      }
      const interestPerMonth = P * rm;
      if (emi <= interestPerMonth) {
        return {
          months: 0,
          years: 0,
          monthsRemainder: 0,
          totalPayable: 0,
          totalInterest: 0,
          error: `EMI of ₹${emi.toLocaleString("en-IN")} is below the first month's interest of ₹${Math.ceil(interestPerMonth).toLocaleString("en-IN")} — the loan will never amortise.`,
        };
      }
      const n = Math.log(emi / (emi - P * rm)) / Math.log(1 + rm);
      const months = Math.ceil(n);
      const payable = emi * n;
      return {
        months,
        years: Math.floor(months / 12),
        monthsRemainder: months % 12,
        totalPayable: payable,
        totalInterest: payable - P,
        error: "",
      };
    }, [P, rate, emi]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Loan amount" hint="Principal">
            <NumInput value={P} onChange={setP} currency min={0} />
          </Field>
          <Field label="Interest rate" hint="Per annum">
            <PercentSlider value={rate} onChange={setRate} min={1} max={24} step={0.05} />
          </Field>
          <Field label="EMI you can pay" hint="Monthly">
            <NumInput value={emi} onChange={setEmi} currency min={0} />
          </Field>
        </>
      }
      results={
        error ? (
          <div className="py-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-3">
              ⌖ Won&rsquo;t close
            </p>
            <p className="font-display text-[24px] lg:text-[28px] tracking-tightest leading-[1.2] text-ink/85">
              {error}
            </p>
            <p className="mt-5 text-[14px] text-smoke leading-[1.55]">
              Raise the EMI or reduce the principal. As a rule of thumb, EMI
              must comfortably exceed the first month&rsquo;s interest.
            </p>
          </div>
        ) : (
          <>
            <HeroResult
              label="Tenure required"
              value={months}
              currency={false}
              hint={
                months > 0
                  ? `${months} months — about ${years} year${years === 1 ? "" : "s"}${
                      monthsRemainder ? ` ${monthsRemainder} month${monthsRemainder === 1 ? "" : "s"}` : ""
                    }.`
                  : undefined
              }
            />
            <div className="space-y-0">
              <ResultRow label="Total amount payable" value={totalPayable} />
              <ResultRow label="Total interest" value={totalInterest} emphasis />
            </div>
          </>
        )
      }
      formula={
        <>
          <p>
            The number of months required is the inverse of the EMI formula —
            solve for <em>n</em> given the principal, monthly rate and the EMI
            you can sustain:
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            n = ln(EMI ÷ (EMI − P × r)) ÷ ln(1 + r)
          </p>
          <p>
            For the loan to ever close, your EMI must exceed the first
            month&rsquo;s interest (P × r). If it doesn&rsquo;t, the
            outstanding balance grows each month and the loan never amortises.
          </p>
        </>
      }
    />
  );
}
