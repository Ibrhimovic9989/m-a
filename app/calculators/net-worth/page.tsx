"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow, ResultSplitGrid, SplitCell } from "@/components/calculators/ResultCard";
import { getCalculator } from "@/lib/calculators-meta";

/**
 * Net Worth = Total Assets − Total Liabilities.
 *
 * Inputs are split into liquid vs. illiquid assets so the result panel
 * can surface a "liquid net worth" figure alongside the total.
 */
export default function Page() {
  const meta = getCalculator("net-worth")!;

  // Liquid assets
  const [cash, setCash] = useState<number>(2_00_000);
  const [bank, setBank] = useState<number>(5_00_000);
  const [stocks, setStocks] = useState<number>(8_00_000);
  const [mutualFunds, setMutualFunds] = useState<number>(6_00_000);

  // Illiquid assets
  const [property, setProperty] = useState<number>(60_00_000);
  const [vehicles, setVehicles] = useState<number>(5_00_000);
  const [retirement, setRetirement] = useState<number>(12_00_000);
  const [otherAssets, setOtherAssets] = useState<number>(0);

  // Liabilities
  const [homeLoan, setHomeLoan] = useState<number>(30_00_000);
  const [vehicleLoan, setVehicleLoan] = useState<number>(2_50_000);
  const [creditCard, setCreditCard] = useState<number>(50_000);
  const [otherLiabilities, setOtherLiabilities] = useState<number>(0);

  const { liquidAssets, illiquidAssets, totalAssets, totalLiabilities, netWorth, liquidNetWorth } =
    useMemo(() => {
      const liquid = cash + bank + stocks + mutualFunds;
      const illiquid = property + vehicles + retirement + otherAssets;
      const liabilities = homeLoan + vehicleLoan + creditCard + otherLiabilities;
      return {
        liquidAssets: liquid,
        illiquidAssets: illiquid,
        totalAssets: liquid + illiquid,
        totalLiabilities: liabilities,
        netWorth: liquid + illiquid - liabilities,
        liquidNetWorth: liquid - (creditCard + otherLiabilities),
      };
    }, [
      cash,
      bank,
      stocks,
      mutualFunds,
      property,
      vehicles,
      retirement,
      otherAssets,
      homeLoan,
      vehicleLoan,
      creditCard,
      otherLiabilities,
    ]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-4">
              ⌖ Liquid assets
            </p>
            <div className="space-y-5">
              <Field label="Cash in hand"><NumInput value={cash} onChange={setCash} currency /></Field>
              <Field label="Bank balances"><NumInput value={bank} onChange={setBank} currency /></Field>
              <Field label="Stocks &amp; equities"><NumInput value={stocks} onChange={setStocks} currency /></Field>
              <Field label="Mutual funds"><NumInput value={mutualFunds} onChange={setMutualFunds} currency /></Field>
            </div>
          </div>

          <div className="pt-3 border-t border-ink/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-4">
              ⌖ Illiquid assets
            </p>
            <div className="space-y-5">
              <Field label="Real estate"><NumInput value={property} onChange={setProperty} currency /></Field>
              <Field label="Vehicles"><NumInput value={vehicles} onChange={setVehicles} currency /></Field>
              <Field label="Retirement (PF · NPS · gratuity)">
                <NumInput value={retirement} onChange={setRetirement} currency />
              </Field>
              <Field label="Other assets" hint="Jewellery, art, etc.">
                <NumInput value={otherAssets} onChange={setOtherAssets} currency />
              </Field>
            </div>
          </div>

          <div className="pt-3 border-t border-ink/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-4">
              ⌖ Liabilities
            </p>
            <div className="space-y-5">
              <Field label="Home loan outstanding"><NumInput value={homeLoan} onChange={setHomeLoan} currency /></Field>
              <Field label="Vehicle loan outstanding"><NumInput value={vehicleLoan} onChange={setVehicleLoan} currency /></Field>
              <Field label="Credit card balances"><NumInput value={creditCard} onChange={setCreditCard} currency /></Field>
              <Field label="Other liabilities"><NumInput value={otherLiabilities} onChange={setOtherLiabilities} currency /></Field>
            </div>
          </div>
        </>
      }
      results={
        <>
          <HeroResult label="Total net worth" value={netWorth} />

          <ResultSplitGrid>
            <SplitCell label="Liquid net worth" value={liquidNetWorth} hint="Liquid assets less short-term debts" highlight />
            <SplitCell label="Illiquid assets" value={illiquidAssets} hint="Locked up in property, vehicles, retirement" />
          </ResultSplitGrid>

          <div className="space-y-0">
            <ResultRow label="Total assets" value={totalAssets} emphasis />
            <ResultRow label="Liquid assets" value={liquidAssets} />
            <ResultRow label="Illiquid assets" value={illiquidAssets} />
            <ResultRow label="Total liabilities" value={-totalLiabilities} />
          </div>

          {totalAssets > 0 && (
            <p className="mt-6 text-[12.5px] text-smoke leading-[1.55] p-4 rounded-md border border-ink/10 bg-bone/60">
              <span className="text-amber-dark">⌖</span> Debt-to-asset ratio is{" "}
              <span className="num">{((totalLiabilities / totalAssets) * 100).toFixed(1)}%</span>.
              {totalLiabilities / totalAssets > 0.5
                ? " Above half — worth a conversation about deleveraging."
                : totalLiabilities / totalAssets > 0.3
                ? " In a healthy range, but watch for concentration risk."
                : " Conservative — strong balance-sheet flexibility."}
            </p>
          )}
        </>
      }
      formula={
        <>
          <p>
            Net worth is simply the value of everything you own less
            everything you owe — a single-number snapshot of financial
            position, useful for tracking trajectory year-on-year more than
            as an absolute measure of wealth.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            Net Worth = Σ Assets − Σ Liabilities
          </p>
          <p>
            <em>Liquid net worth</em> is the more useful operating number — it
            tells you what you could realistically deploy in an emergency
            without taking a fire-sale haircut on illiquid assets. Real estate
            and retirement accounts are wealth; they are not the same kind of
            wealth as cash in the bank.
          </p>
          <p>
            For HNI and business-owner net-worth structuring — across personal
            holdings, family-office vehicles, partnership stakes and FEMA
            considerations — book a consultation.
          </p>
        </>
      }
    />
  );
}
