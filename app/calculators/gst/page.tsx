"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow, ResultSplitGrid, SplitCell } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

type Mode = "add" | "extract";
type Supply = "intra" | "inter";

const GST_RATES = [0, 5, 12, 18, 28];

/**
 * Forward mode  : Base × rate% = GST; Total = Base + GST
 * Reverse mode  : Base = Inclusive / (1 + rate%); GST = Inclusive − Base
 *
 * For intra-state supply, GST is split equally between CGST and SGST.
 * For inter-state supply, the full amount is IGST.
 */
export default function Page() {
  const meta = getCalculator("gst")!;
  const [amount, setAmount] = useState<number>(10_000);
  const [rate, setRate] = useState<number>(18);
  const [mode, setMode] = useState<Mode>("add");
  const [supply, setSupply] = useState<Supply>("intra");

  const { base, gst, total } = useMemo(() => {
    const r = rate / 100;
    if (amount <= 0) return { base: 0, gst: 0, total: 0 };
    if (mode === "add") {
      const gst = amount * r;
      return { base: amount, gst, total: amount + gst };
    }
    const base = amount / (1 + r);
    return { base, gst: amount - base, total: amount };
  }, [amount, rate, mode]);

  const cgst = supply === "intra" ? gst / 2 : 0;
  const sgst = supply === "intra" ? gst / 2 : 0;
  const igst = supply === "inter" ? gst : 0;

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Mode">
            <OptionGroup
              options={[
                { value: "add" as Mode, label: "Add GST to base" },
                { value: "extract" as Mode, label: "Extract from total" },
              ]}
              value={mode}
              onChange={setMode}
            />
          </Field>
          <Field
            label={mode === "add" ? "Base amount (pre-GST)" : "Inclusive amount"}
            hint="INR"
          >
            <NumInput value={amount} onChange={setAmount} currency min={0} />
          </Field>
          <Field label="GST rate">
            <OptionGroup
              options={GST_RATES.map((r) => ({
                value: r,
                label: `${r}%`,
              }))}
              value={rate}
              onChange={setRate}
            />
          </Field>
          <Field label="Supply type">
            <OptionGroup
              options={[
                { value: "intra" as Supply, label: "Intra-state (CGST + SGST)" },
                { value: "inter" as Supply, label: "Inter-state (IGST)" },
              ]}
              value={supply}
              onChange={setSupply}
            />
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label={mode === "add" ? "Total invoice value" : "Base amount (pre-GST)"}
            value={mode === "add" ? total : base}
            hint={`At ${rate}% GST · ${supply === "intra" ? "Intra-state" : "Inter-state"} supply`}
          />

          <ResultSplitGrid>
            {supply === "intra" ? (
              <>
                <SplitCell label="CGST" value={cgst} hint={`${(rate / 2).toFixed(2)}%`} />
                <SplitCell label="SGST / UTGST" value={sgst} hint={`${(rate / 2).toFixed(2)}%`} />
              </>
            ) : (
              <SplitCell label="IGST" value={igst} hint={`${rate.toFixed(2)}%`} highlight />
            )}
          </ResultSplitGrid>

          <div className="space-y-0">
            <ResultRow label="Base amount" value={base} />
            <ResultRow label="Total GST" value={gst} />
            <ResultRow label="Invoice total" value={total} emphasis />
          </div>
        </>
      }
      formula={
        <>
          <p>
            Forward calculation simply applies the rate to the base; reverse
            calculation undoes a tax-inclusive number by dividing through one
            plus the rate.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Forward: GST = Base × rate%; Total = Base + GST
            <br />
            Reverse: Base = Inclusive ÷ (1 + rate%); GST = Inclusive − Base
          </p>
          <p>
            On intra-state supplies the GST is split equally between CGST
            (central) and SGST or UTGST (state / UT). On inter-state supplies
            the full amount is IGST and is later apportioned between the
            originating and destination states by the GST Council mechanism.
          </p>
        </>
      }
    />
  );
}
