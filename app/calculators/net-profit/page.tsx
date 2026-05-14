"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow, ResultSplitGrid, SplitCell } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

/**
 * Single-period P&L roll-up:
 *
 *   Gross Profit       = Revenue − COGS
 *   Operating Profit   = Gross Profit − OpEx
 *   PBT                = Operating Profit + Other income − Finance costs
 *   Net Profit         = PBT − Tax
 *
 * Margins are computed against revenue.
 */
export default function Page() {
  const meta = getCalculator("net-profit")!;
  const [revenue, setRevenue] = useState<number>(1_00_00_000);
  const [cogs, setCogs] = useState<number>(55_00_000);
  const [opex, setOpex] = useState<number>(25_00_000);
  const [otherIncome, setOtherIncome] = useState<number>(1_00_000);
  const [finance, setFinance] = useState<number>(3_00_000);
  const [tax, setTax] = useState<number>(4_50_000);

  const { gross, operating, pbt, net, grossM, operatingM, netM } = useMemo(() => {
    const gross = revenue - cogs;
    const operating = gross - opex;
    const pbt = operating + otherIncome - finance;
    const net = pbt - tax;
    return {
      gross,
      operating,
      pbt,
      net,
      grossM: revenue > 0 ? (gross / revenue) * 100 : 0,
      operatingM: revenue > 0 ? (operating / revenue) * 100 : 0,
      netM: revenue > 0 ? (net / revenue) * 100 : 0,
    };
  }, [revenue, cogs, opex, otherIncome, finance, tax]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="Revenue" hint="Top line">
            <NumInput value={revenue} onChange={setRevenue} currency />
          </Field>
          <Field label="Cost of goods sold" hint="Direct cost of revenue">
            <NumInput value={cogs} onChange={setCogs} currency />
          </Field>
          <Field label="Operating expenses" hint="SG&amp;A, salaries, rent">
            <NumInput value={opex} onChange={setOpex} currency />
          </Field>
          <Field label="Other income" hint="Interest, dividends, FX">
            <NumInput value={otherIncome} onChange={setOtherIncome} currency />
          </Field>
          <Field label="Finance costs" hint="Interest expense">
            <NumInput value={finance} onChange={setFinance} currency />
          </Field>
          <Field label="Tax expense" hint="Current + deferred">
            <NumInput value={tax} onChange={setTax} currency />
          </Field>
        </>
      }
      results={
        <>
          <HeroResult
            label="Net profit"
            value={net}
            hint={`${netM.toFixed(1)}% net margin on revenue.`}
          />

          <ResultSplitGrid>
            <SplitCell label="Gross margin" value={grossM} currency={false} hint={`₹${gross.toLocaleString("en-IN")}`} />
            <SplitCell label="Operating margin" value={operatingM} currency={false} hint={`₹${operating.toLocaleString("en-IN")}`} highlight />
          </ResultSplitGrid>

          <div className="space-y-0">
            <ResultRow label="Revenue" value={revenue} />
            <ResultRow label="Less: COGS" value={-cogs} />
            <ResultRow label="Gross profit" value={gross} emphasis />
            <ResultRow label="Less: Operating expenses" value={-opex} />
            <ResultRow label="Operating profit (EBIT-ish)" value={operating} />
            <ResultRow label="Add: Other income" value={otherIncome} />
            <ResultRow label="Less: Finance costs" value={-finance} />
            <ResultRow label="Profit before tax" value={pbt} />
            <ResultRow label="Less: Tax expense" value={-tax} />
            <ResultRow label="Net profit" value={net} emphasis />
          </div>
        </>
      }
      formula={
        <>
          <p>
            A single-period profit-and-loss summary follows a strict order —
            each line subtracts a class of cost, exposing margin at each
            level. The shape of the P&amp;L tells you where the business is
            making or losing money.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Gross profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= Revenue − COGS
            <br />
            Operating profit&nbsp;= Gross − Opex
            <br />
            Profit before tax = Operating + Other income − Finance
            <br />
            Net profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= PBT − Tax
          </p>
          <p>
            Margins (the percentages on the right) are the ratios that matter
            for benchmarking. They&apos;re comparable across companies of
            different sizes — a 12% net margin in a manufacturing business
            tells you more than a ₹3 Cr profit figure on its own.
          </p>
        </>
      }
    />
  );
}
