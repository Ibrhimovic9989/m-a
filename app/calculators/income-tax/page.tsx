"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow, ResultSplitGrid, SplitCell } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

type AgeBand = "below-60" | "60-80" | "above-80";

// ---------------------------------------------------------------
// FY 2025-26 slabs — Budget 2025 (Feb 2025).
// ---------------------------------------------------------------
const NEW_REGIME_SLABS: Array<{ upTo: number; rate: number }> = [
  { upTo: 4_00_000, rate: 0 },
  { upTo: 8_00_000, rate: 5 },
  { upTo: 12_00_000, rate: 10 },
  { upTo: 16_00_000, rate: 15 },
  { upTo: 20_00_000, rate: 20 },
  { upTo: 24_00_000, rate: 25 },
  { upTo: Infinity, rate: 30 },
];

const NEW_STD_DEDUCTION = 75_000;
const NEW_87A_LIMIT = 12_00_000;
const NEW_87A_MAX_REBATE = 60_000;

// Old regime slabs differ by age band — senior / super-senior get a
// higher basic exemption.
function oldRegimeSlabs(age: AgeBand): Array<{ upTo: number; rate: number }> {
  const basicExemption =
    age === "above-80" ? 5_00_000 : age === "60-80" ? 3_00_000 : 2_50_000;
  return [
    { upTo: basicExemption, rate: 0 },
    { upTo: 5_00_000, rate: 5 },
    { upTo: 10_00_000, rate: 20 },
    { upTo: Infinity, rate: 30 },
  ];
}

const OLD_STD_DEDUCTION = 50_000;
const OLD_87A_LIMIT = 5_00_000;
const OLD_87A_MAX_REBATE = 12_500;

function computeSlabTax(
  taxable: number,
  slabs: Array<{ upTo: number; rate: number }>
): number {
  if (taxable <= 0) return 0;
  let remaining = taxable;
  let lastCap = 0;
  let tax = 0;
  for (const s of slabs) {
    const slabSize = s.upTo - lastCap;
    const inThisSlab = Math.min(remaining, slabSize);
    tax += (inThisSlab * s.rate) / 100;
    remaining -= inThisSlab;
    lastCap = s.upTo;
    if (remaining <= 0) break;
  }
  return tax;
}

function surchargeRate(taxableIncome: number, regime: "old" | "new"): number {
  if (taxableIncome <= 50_00_000) return 0;
  if (taxableIncome <= 1_00_00_000) return 10;
  if (taxableIncome <= 2_00_00_000) return 15;
  if (regime === "new") return 25;
  // Old regime — 25% beyond ₹2Cr up to ₹5Cr; 37% above ₹5Cr.
  if (taxableIncome <= 5_00_00_000) return 25;
  return 37;
}

type Computed = {
  taxable: number;
  baseTax: number;
  rebate: number;
  taxAfterRebate: number;
  surcharge: number;
  cess: number;
  total: number;
};

function computeRegime(
  gross: number,
  deductions: number,
  age: AgeBand,
  regime: "old" | "new"
): Computed {
  const stdDeduction = regime === "new" ? NEW_STD_DEDUCTION : OLD_STD_DEDUCTION;
  const otherDeductions = regime === "new" ? 0 : deductions; // 80C etc. only old
  const taxable = Math.max(0, gross - stdDeduction - otherDeductions);

  const slabs = regime === "new" ? NEW_REGIME_SLABS : oldRegimeSlabs(age);
  const baseTax = computeSlabTax(taxable, slabs);

  // Rebate u/s 87A
  const limit = regime === "new" ? NEW_87A_LIMIT : OLD_87A_LIMIT;
  const maxRebate = regime === "new" ? NEW_87A_MAX_REBATE : OLD_87A_MAX_REBATE;
  const rebate = taxable <= limit ? Math.min(baseTax, maxRebate) : 0;
  const taxAfterRebate = Math.max(0, baseTax - rebate);

  const surchargePct = surchargeRate(taxable, regime);
  const surcharge = (taxAfterRebate * surchargePct) / 100;
  const cess = (taxAfterRebate + surcharge) * 0.04;
  const total = taxAfterRebate + surcharge + cess;

  return {
    taxable,
    baseTax,
    rebate,
    taxAfterRebate,
    surcharge,
    cess,
    total,
  };
}

export default function Page() {
  const meta = getCalculator("income-tax")!;
  const [gross, setGross] = useState<number>(15_00_000);
  const [deductions, setDeductions] = useState<number>(1_50_000);
  const [age, setAge] = useState<AgeBand>("below-60");

  const { newR, oldR } = useMemo(() => {
    return {
      newR: computeRegime(gross, deductions, age, "new"),
      oldR: computeRegime(gross, deductions, age, "old"),
    };
  }, [gross, deductions, age]);

  const better: "old" | "new" = newR.total <= oldR.total ? "new" : "old";
  const savings = Math.abs(oldR.total - newR.total);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Gross annual income" hint="Salary + other heads">
            <NumInput value={gross} onChange={setGross} currency min={0} />
          </Field>
          <Field label="Age band">
            <OptionGroup<AgeBand>
              options={[
                { value: "below-60", label: "Below 60" },
                { value: "60-80", label: "Senior (60-80)" },
                { value: "above-80", label: "Super senior (80+)" },
              ]}
              value={age}
              onChange={setAge}
            />
          </Field>
          <Field
            label="Eligible deductions (Old regime only)"
            hint="80C, 80D, HRA, NPS etc."
          >
            <NumInput
              value={deductions}
              onChange={setDeductions}
              currency
              min={0}
            />
          </Field>
          <p className="text-[11.5px] text-smoke leading-[1.5] pt-2 border-t border-ink/[0.08]">
            Calculations use FY 2025-26 slabs (Budget 2025). Standard deduction of ₹75,000 (New) / ₹50,000 (Old) is applied automatically for salaried assessees. 4% Health &amp; Education Cess is added to the tax + surcharge.
          </p>
        </>
      }
      results={
        <>
          <ResultSplitGrid>
            <SplitCell
              label="New regime — total tax"
              value={newR.total}
              highlight={better === "new"}
              hint={better === "new" ? `Lower by ₹${Math.round(savings).toLocaleString("en-IN")}` : undefined}
            />
            <SplitCell
              label="Old regime — total tax"
              value={oldR.total}
              highlight={better === "old"}
              hint={better === "old" ? `Lower by ₹${Math.round(savings).toLocaleString("en-IN")}` : undefined}
            />
          </ResultSplitGrid>

          <HeroResult
            label={`${better === "new" ? "New" : "Old"} regime — recommended`}
            value={better === "new" ? newR.total : oldR.total}
            hint={`Saves ₹${Math.round(savings).toLocaleString("en-IN")} vs. the other regime.`}
          />

          {/* New regime breakdown */}
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-dark mb-3">
              ⌖ New regime breakdown
            </p>
            <div className="space-y-0">
              <ResultRow label="Taxable income (post std. deduction)" value={newR.taxable} />
              <ResultRow label="Income tax at slabs" value={newR.baseTax} />
              {newR.rebate > 0 && (
                <ResultRow label="Less: §87A rebate" value={-newR.rebate} />
              )}
              <ResultRow label="Surcharge" value={newR.surcharge} />
              <ResultRow label="Health & Education Cess (4%)" value={newR.cess} />
              <ResultRow label="Total tax payable" value={newR.total} emphasis />
            </div>
          </div>

          {/* Old regime breakdown */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-dark mb-3">
              ⌖ Old regime breakdown
            </p>
            <div className="space-y-0">
              <ResultRow label="Taxable income (after deductions)" value={oldR.taxable} />
              <ResultRow label="Income tax at slabs" value={oldR.baseTax} />
              {oldR.rebate > 0 && (
                <ResultRow label="Less: §87A rebate" value={-oldR.rebate} />
              )}
              <ResultRow label="Surcharge" value={oldR.surcharge} />
              <ResultRow label="Health & Education Cess (4%)" value={oldR.cess} />
              <ResultRow label="Total tax payable" value={oldR.total} emphasis />
            </div>
          </div>
        </>
      }
      formula={
        <>
          <p>
            Indian income tax for individuals runs on two parallel regimes for
            FY 2025-26. The New Regime, default from AY 2024-25 onwards, runs
            on broader slabs with a higher standard deduction (₹75,000) and a
            generous §87A rebate (up to ₹60,000 of tax for taxable income
            ≤ ₹12L), but disallows most chapter-VI-A deductions like 80C, 80D
            and HRA. The Old Regime keeps the historical slabs (basic
            exemption ₹2.5L / ₹3L / ₹5L depending on age), allows the full
            deduction stack, and gives a smaller §87A rebate (up to ₹12,500
            for taxable income ≤ ₹5L).
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Total tax = Slab tax − §87A rebate
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;+ Surcharge × (10% / 15% / 25% / 37%)
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;+ 4% Health &amp; Education Cess
          </p>
          <p>
            Surcharge kicks in at the ₹50L / ₹1Cr / ₹2Cr / ₹5Cr thresholds. The
            New Regime caps the surcharge at 25% even above ₹5Cr; the Old
            Regime goes up to 37%. Marginal relief applies when an additional
            rupee of income would push tax up by more than the rupee itself —
            CBDT does the arithmetic automatically in the return filing
            software, and we don&apos;t model it here.
          </p>
          <p>
            Edge cases the calculator does not currently handle: AMT under
            §115JC, capital gains taxed at special rates (LTCG/STCG, 112A,
            111A), agricultural income aggregation, foreign tax credit. For
            anything beyond the slab + cess + surcharge structure, book a
            consultation.
          </p>
        </>
      }
    />
  );
}
