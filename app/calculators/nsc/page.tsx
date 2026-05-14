"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, PercentSlider } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

/**
 * NSC VIII Issue — five-year fixed-tenure small-savings instrument
 * issued by Indian Post. Interest is fixed quarterly by the Ministry
 * of Finance and compounds annually but is paid only at maturity.
 *
 *   Maturity = P × (1 + r)^t        (t = 5)
 *
 * Interest accrued each year is eligible for §80C deduction (under the
 * old regime) — flagged in the result but not added back.
 */
export default function Page() {
  const meta = getCalculator("nsc")!;
  const [principal, setPrincipal] = useState<number>(1_00_000);
  const [rate, setRate] = useState<number>(7.7);
  const TENURE = 5;

  const { maturity, interest, schedule } = useMemo(() => {
    if (principal <= 0) return { maturity: 0, interest: 0, schedule: [] };
    const r = rate / 100;
    const maturity = principal * Math.pow(1 + r, TENURE);
    const interest = maturity - principal;
    const schedule: { year: number; openingBalance: number; interestEarned: number; closingBalance: number }[] = [];
    let bal = principal;
    for (let y = 1; y <= TENURE; y++) {
      const earned = bal * r;
      schedule.push({
        year: y,
        openingBalance: bal,
        interestEarned: earned,
        closingBalance: bal + earned,
      });
      bal += earned;
    }
    return { maturity, interest, schedule };
  }, [principal, rate]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Investment amount" hint="Minimum ₹1,000">
            <NumInput value={principal} onChange={setPrincipal} currency min={1000} />
          </Field>
          <Field label="Interest rate" hint="Quarterly notified by Ministry of Finance">
            <PercentSlider value={rate} onChange={setRate} min={6} max={9} step={0.05} />
          </Field>
          <div className="pt-3 border-t border-ink/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-2">
              ⌖ Fixed tenure
            </p>
            <p className="text-[15px] text-ink/85 leading-[1.5]">
              5 years, compounded annually.
            </p>
            <p className="text-[12px] text-smoke leading-[1.55] mt-2">
              The rate above is current as of Q3 FY 2025-26 (7.7%). It is
              revised quarterly — verify on{" "}
              <a
                href="https://www.indiapost.gov.in"
                target="_blank"
                rel="noreferrer"
                className="text-amber-dark border-b border-amber-dark/40 hover:border-amber-dark"
              >
                indiapost.gov.in
              </a>{" "}
              before investing.
            </p>
          </div>
        </>
      }
      results={
        <>
          <HeroResult
            label="Maturity value"
            value={maturity}
            hint={`After 5 years at ${rate.toFixed(2)}% compounded annually.`}
          />
          <div className="space-y-0 mb-7">
            <ResultRow label="Principal invested" value={principal} />
            <ResultRow label="Total interest earned" value={interest} emphasis />
            <ResultRow label="Maturity value" value={maturity} />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-4">
              ⌖ Year-wise growth
            </p>
            <div className="grid grid-cols-12 gap-2 text-[11px] uppercase tracking-[0.18em] text-smoke pb-2 border-b border-ink/15 mb-1">
              <div className="col-span-2">Year</div>
              <div className="col-span-4 text-right">Opening</div>
              <div className="col-span-3 text-right">Interest</div>
              <div className="col-span-3 text-right">Closing</div>
            </div>
            {schedule.map((s) => (
              <div
                key={s.year}
                className="grid grid-cols-12 gap-2 py-2 text-[13px] border-b border-ink/[0.06] last:border-b-0 num"
              >
                <div className="col-span-2 font-mono text-amber-dark">
                  {String(s.year).padStart(2, "0")}
                </div>
                <div className="col-span-4 text-right">{Math.round(s.openingBalance).toLocaleString("en-IN")}</div>
                <div className="col-span-3 text-right text-ink/70">{Math.round(s.interestEarned).toLocaleString("en-IN")}</div>
                <div className="col-span-3 text-right text-ink/55">{Math.round(s.closingBalance).toLocaleString("en-IN")}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[12.5px] text-amber-dark leading-[1.55] p-4 rounded-md border border-amber/30 bg-amber/5">
            <strong>§80C eligibility.</strong> Investment in NSC qualifies for
            deduction under §80C (Old Regime, up to ₹1.5L per FY). Accrued
            interest in years 1–4 is also re-invested and eligible. The
            interest paid in year 5 is taxable under "Income from Other
            Sources."
          </p>
        </>
      }
      formula={
        <>
          <p>
            NSC VIII Issue is a five-year small-savings certificate sold by
            Indian Post, with interest fixed at the time of purchase and
            credited annually — held back to maturity rather than disbursed
            year-on-year.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Maturity = Principal × (1 + r)<sup>5</sup>
          </p>
          <p>
            The interest rate is notified by the Department of Economic
            Affairs each quarter (current rate 7.7% for Q3 FY 2025-26). The
            rate applicable at the time of investment stays locked for the
            full five-year tenure.
          </p>
          <p>
            NSC qualifies for §80C deduction under the Old Regime — both the
            initial investment and the annual accrual that gets re-invested.
            Year-5 interest is taxable when received.
          </p>
        </>
      }
    />
  );
}
