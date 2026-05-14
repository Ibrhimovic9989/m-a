"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput, OptionGroup } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

const GST_RATES = [0, 5, 12, 18, 28];

/**
 * GST MRP calculator: given a product cost and margin %, work out the
 * Maximum Retail Price including GST.
 *
 *   selling_pre_gst = cost × (1 + margin%)
 *   gst             = selling_pre_gst × rate%
 *   MRP             = selling_pre_gst + gst
 */
export default function Page() {
  const meta = getCalculator("gst-mrp")!;
  const [cost, setCost] = useState<number>(100);
  const [margin, setMargin] = useState<number>(40);
  const [rate, setRate] = useState<number>(18);

  const { sellingPreGst, gst, mrp, totalMarkup } = useMemo(() => {
    if (cost <= 0) return { sellingPreGst: 0, gst: 0, mrp: 0, totalMarkup: 0 };
    const sellingPreGst = cost * (1 + margin / 100);
    const gst = sellingPreGst * (rate / 100);
    const mrp = sellingPreGst + gst;
    return {
      sellingPreGst,
      gst,
      mrp,
      totalMarkup: cost > 0 ? ((mrp - cost) / cost) * 100 : 0,
    };
  }, [cost, margin, rate]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Product cost" hint="Landed cost to you">
            <NumInput value={cost} onChange={setCost} currency min={0} />
          </Field>
          <Field label="Margin" hint="% over cost">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={200}
                step={1}
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="flex-1 accent-amber-dark cursor-pointer"
              />
              <div className="flex items-baseline gap-1.5 min-w-[80px] justify-end">
                <input
                  type="number"
                  min={0}
                  max={500}
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-16 bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[18px] py-1 text-right num"
                />
                <span className="text-[14px] text-ink/55">%</span>
              </div>
            </div>
          </Field>
          <Field label="GST rate">
            <OptionGroup
              options={GST_RATES.map((r) => ({ value: r, label: `${r}%` }))}
              value={rate}
              onChange={setRate}
            />
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label="Maximum Retail Price (MRP)"
            value={mrp}
            hint={`Cost-plus-margin of ${margin}% with ${rate}% GST applied on top.`}
          />
          <div className="space-y-0">
            <ResultRow label="Product cost" value={cost} />
            <ResultRow
              label="Selling price (pre-GST)"
              value={sellingPreGst}
              hint={`Cost + ${margin}% margin`}
            />
            <ResultRow label={`GST @ ${rate}%`} value={gst} />
            <ResultRow label="MRP (inclusive)" value={mrp} emphasis />
            <ResultRow
              label="Effective markup over cost"
              value={`${totalMarkup.toFixed(1)}%`}
              currency={false}
            />
          </div>
        </>
      }
      formula={
        <>
          <p>
            MRP is the consumer-facing inclusive price — the cost stacked with
            margin, then GST applied on top. The reverse (extracting GST from a
            printed MRP) is handled by the standard{" "}
            <a
              href="/calculators/gst"
              className="text-amber-dark border-b border-amber-dark/40 hover:border-amber-dark"
            >
              GST Calculator
            </a>{" "}
            in extract mode.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Selling (pre-GST) = Cost × (1 + margin%)
            <br />
            MRP = Selling × (1 + GST rate%)
          </p>
          <p>
            For products under the Legal Metrology (Packaged Commodities) Rules,
            the MRP printed on the package must be the inclusive figure — the
            consumer pays exactly the MRP at the counter, regardless of any
            internal pre-tax pricing.
          </p>
        </>
      }
    />
  );
}
