"use client";

import { useMemo, useState } from "react";
import CalcShell from "./CalcShell";
import { Field, NumInput, PercentSlider, OptionGroup } from "./Inputs";
import { HeroResult, ResultRow } from "./ResultCard";
import type { CalculatorMeta } from "@/lib/calculators-meta";

export type EmiPreset = {
  defaultPrincipal: number;
  defaultRate: number;
  defaultTenureYears: number;
  maxRate?: number;
  maxYears?: number;
};

/**
 * Standard EMI calculator. Used by /calculators/emi, /home-loan, /auto-loan
 * via per-page presets — same maths, different starting numbers and copy.
 *
 * Formula:
 *   r_m = annualRate% / 12 / 100        (monthly rate)
 *   n   = tenureYears × 12              (months)
 *   EMI = P × r_m × (1+r_m)^n / ((1+r_m)^n − 1)
 *
 * Edge case r_m = 0 → EMI = P / n.
 */
export default function EmiCalc({
  meta,
  preset,
}: {
  meta: CalculatorMeta;
  preset: EmiPreset;
}) {
  const [P, setP] = useState<number>(preset.defaultPrincipal);
  const [rate, setRate] = useState<number>(preset.defaultRate);
  const [years, setYears] = useState<number>(preset.defaultTenureYears);

  const { emi, totalInterest, totalPayable, schedule } = useMemo(() => {
    const n = Math.round(years * 12);
    const rm = rate / 12 / 100;
    if (n <= 0 || P <= 0) {
      return { emi: 0, totalInterest: 0, totalPayable: 0, schedule: [] };
    }
    const e =
      rm === 0
        ? P / n
        : (P * rm * Math.pow(1 + rm, n)) / (Math.pow(1 + rm, n) - 1);
    const payable = e * n;
    const interest = payable - P;

    // Year-wise schedule
    const sched: { year: number; principal: number; interest: number; balance: number }[] = [];
    let bal = P;
    for (let y = 1; y <= years; y++) {
      let yearP = 0;
      let yearI = 0;
      for (let m = 0; m < 12; m++) {
        const i = bal * rm;
        const pr = e - i;
        yearP += pr;
        yearI += i;
        bal -= pr;
      }
      sched.push({ year: y, principal: yearP, interest: yearI, balance: Math.max(bal, 0) });
    }

    return { emi: e, totalInterest: interest, totalPayable: payable, schedule: sched };
  }, [P, rate, years]);

  const interestPct = totalPayable > 0 ? (totalInterest / totalPayable) * 100 : 0;

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Loan amount" hint="Principal">
            <NumInput value={P} onChange={setP} currency min={0} />
          </Field>
          <Field label="Interest rate" hint="Per annum">
            <PercentSlider
              value={rate}
              onChange={setRate}
              min={1}
              max={preset.maxRate ?? 24}
              step={0.05}
            />
          </Field>
          <Field label="Tenure" hint={`${Math.round(years * 12)} months`}>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={preset.maxYears ?? 30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="flex-1 accent-amber-dark cursor-pointer"
              />
              <div className="flex items-baseline gap-1.5 min-w-[90px] justify-end">
                <input
                  type="number"
                  min={1}
                  max={preset.maxYears ?? 30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-16 bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[18px] py-1 text-right num"
                />
                <span className="text-[14px] text-ink/55">yrs</span>
              </div>
            </div>
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label="Monthly EMI"
            value={emi}
            hint={`Across ${Math.round(years * 12)} months at ${rate.toFixed(2)}% per annum.`}
          />
          <div className="space-y-0">
            <ResultRow label="Total interest payable" value={totalInterest} />
            <ResultRow
              label="Total amount payable"
              value={totalPayable}
              emphasis
            />
            <ResultRow
              label="Interest as % of total"
              value={`${interestPct.toFixed(1)}%`}
              currency={false}
            />
          </div>

          {/* Compact schedule */}
          {schedule.length > 0 && (
            <div className="mt-8 pt-7 border-t border-ink/10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-4">
                ⌖ Year-wise schedule
              </p>
              <div className="grid grid-cols-12 gap-2 text-[11px] uppercase tracking-[0.18em] text-smoke pb-2 border-b border-ink/15 mb-1">
                <div className="col-span-2">Year</div>
                <div className="col-span-3 text-right">Principal</div>
                <div className="col-span-3 text-right">Interest</div>
                <div className="col-span-4 text-right">Balance</div>
              </div>
              <div className="max-h-[280px] overflow-y-auto">
                {schedule.map((s) => (
                  <div
                    key={s.year}
                    className="grid grid-cols-12 gap-2 py-2 text-[13px] border-b border-ink/[0.06] last:border-b-0 num"
                  >
                    <div className="col-span-2 font-mono text-amber-dark">
                      {String(s.year).padStart(2, "0")}
                    </div>
                    <div className="col-span-3 text-right">{Math.round(s.principal).toLocaleString("en-IN")}</div>
                    <div className="col-span-3 text-right text-ink/70">{Math.round(s.interest).toLocaleString("en-IN")}</div>
                    <div className="col-span-4 text-right text-ink/55">{Math.round(s.balance).toLocaleString("en-IN")}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      }
      formula={
        <>
          <p>
            The standard amortisation formula keeps your monthly outgo constant
            while the split between principal and interest shifts over time —
            interest-heavy at the start, principal-heavy near the end.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            EMI = P × r × (1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)
          </p>
          <p>
            Where <em>P</em> is the principal, <em>r</em> is the monthly
            interest rate (annual rate ÷ 12 ÷ 100), and <em>n</em> is the
            tenure in months. Total interest paid over the life of the loan
            equals EMI × n − P.
          </p>
        </>
      }
    />
  );
}
