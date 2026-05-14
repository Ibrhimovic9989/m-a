"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

type City = "metro" | "non-metro";

/**
 * Section 10(13A) — House Rent Allowance exemption.
 *
 * Exempt HRA = minimum of three figures, taken month-by-month or
 * annualised when basic and rent stay constant through the year:
 *
 *   (i)   Actual HRA received
 *   (ii)  50% of (Basic + DA) for metros — 40% for non-metros
 *   (iii) Actual rent paid less 10% of (Basic + DA)
 *
 * Metros for HRA purposes: Mumbai, Delhi, Kolkata, Chennai. Hyderabad,
 * Bengaluru and other cities count as non-metro despite being large.
 */
export default function Page() {
  const meta = getCalculator("hra")!;
  const [basic, setBasic] = useState<number>(6_00_000);
  const [hra, setHra] = useState<number>(3_00_000);
  const [rent, setRent] = useState<number>(2_40_000);
  const [city, setCity] = useState<City>("metro");

  const { exempt, taxableHra, breakdown } = useMemo(() => {
    if (basic <= 0 || hra <= 0) {
      return { exempt: 0, taxableHra: hra, breakdown: { a: 0, b: 0, c: 0 } };
    }
    const a = hra;
    const b = (city === "metro" ? 0.5 : 0.4) * basic;
    const c = Math.max(0, rent - 0.1 * basic);
    const exempt = Math.min(a, b, c);
    return {
      exempt,
      taxableHra: Math.max(0, hra - exempt),
      breakdown: { a, b, c },
    };
  }, [basic, hra, rent, city]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Basic salary + DA" hint="Annual">
            <NumInput value={basic} onChange={setBasic} currency min={0} />
          </Field>
          <Field label="HRA received" hint="Annual">
            <NumInput value={hra} onChange={setHra} currency min={0} />
          </Field>
          <Field label="Rent paid" hint="Annual">
            <NumInput value={rent} onChange={setRent} currency min={0} />
          </Field>
          <Field label="City">
            <OptionGroup<City>
              options={[
                { value: "metro", label: "Metro (Mumbai · Delhi · Kolkata · Chennai)" },
                { value: "non-metro", label: "Non-metro" },
              ]}
              value={city}
              onChange={setCity}
            />
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label="HRA exempt under §10(13A)"
            value={exempt}
            hint={
              exempt === breakdown.a
                ? "Limited by the actual HRA received."
                : exempt === breakdown.b
                ? `Limited by ${city === "metro" ? "50%" : "40%"} of (Basic + DA).`
                : "Limited by rent paid less 10% of (Basic + DA)."
            }
          />

          <div className="space-y-0 mb-6">
            <ResultRow
              label="(i) Actual HRA received"
              value={breakdown.a}
              emphasis={exempt === breakdown.a}
            />
            <ResultRow
              label={`(ii) ${city === "metro" ? "50%" : "40%"} of (Basic + DA)`}
              value={breakdown.b}
              emphasis={exempt === breakdown.b}
            />
            <ResultRow
              label="(iii) Rent paid − 10% of (Basic + DA)"
              value={breakdown.c}
              emphasis={exempt === breakdown.c}
            />
          </div>

          <div className="pt-6 border-t border-ink/10 space-y-0">
            <ResultRow label="HRA received" value={hra} />
            <ResultRow label="Less: exempt portion" value={-exempt} />
            <ResultRow label="Taxable HRA" value={taxableHra} emphasis />
          </div>

          {rent > 1_00_000 && (
            <p className="mt-6 text-[12.5px] text-amber-dark leading-[1.55] p-4 rounded-md border border-amber/30 bg-amber/5">
              Annual rent above ₹1,00,000 requires you to furnish the
              landlord&rsquo;s PAN to the employer to claim HRA exemption.
            </p>
          )}
        </>
      }
      formula={
        <>
          <p>
            HRA exemption is governed by Section 10(13A) of the Income Tax Act
            read with Rule 2A. The exempt amount is the minimum of three
            figures — the actual HRA received, a percentage of basic salary
            (plus DA, where DA forms part of retirement benefits), and the
            rent paid above a 10% threshold of basic.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Exempt HRA = min(
            <br />
            &emsp;Actual HRA,
            <br />
            &emsp;(50% / 40%) × (Basic + DA),
            <br />
            &emsp;Rent paid − 10% × (Basic + DA)
            <br />)
          </p>
          <p>
            For HRA purposes only four cities are notified as metro — Mumbai,
            Delhi, Kolkata and Chennai. Every other city, including
            Bengaluru, Hyderabad and Pune, counts as non-metro and attracts
            the 40% cap, not 50%.
          </p>
          <p>
            HRA is allowable only under the Old Regime — if you opt for the
            New Regime, the exemption is forfeited regardless of how much
            rent you pay. Use the{" "}
            <a
              href="/calculators/income-tax"
              className="text-amber-dark border-b border-amber-dark/40 hover:border-amber-dark"
            >
              Income Tax Calculator
            </a>{" "}
            to compare the two regimes side-by-side.
          </p>
        </>
      }
    />
  );
}
