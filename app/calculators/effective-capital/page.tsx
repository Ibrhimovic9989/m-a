"use client";

import { useMemo, useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, NumInput } from "@/components/calculators/Inputs";
import { HeroResult, ResultRow } from "@/components/calculators/ResultCard";
import { getCalculator, inrShort } from "@/lib/calculators-meta";

/**
 * Effective Capital under Schedule V of the Companies Act, 2013.
 *
 *   Effective Capital = Paid-up share capital
 *                     + Securities premium
 *                     + Reserves & surplus (excl. revaluation)
 *                     + Long-term loans & deposits
 *                     − Investments
 *                     − Accumulated losses
 *                     − Preliminary / pre-operative expenses
 *                     − Intangible assets (other than software)
 *
 * The figure determines the maximum managerial remuneration that can
 * be paid without Central Government approval (Section II, Part II).
 *
 * Statutory caps (per annum, can be doubled by special resolution):
 *   Negative or < ₹5 Cr         → ₹60 lakh
 *   ₹5 Cr – ₹100 Cr             → ₹84 lakh
 *   ₹100 Cr – ₹250 Cr           → ₹120 lakh
 *   > ₹250 Cr                   → ₹120 lakh + 0.01% of EC above ₹250 Cr
 */
export default function Page() {
  const meta = getCalculator("effective-capital")!;
  const [paidUp, setPaidUp] = useState<number>(10_00_00_000);
  const [premium, setPremium] = useState<number>(5_00_00_000);
  const [reserves, setReserves] = useState<number>(40_00_00_000);
  const [longTerm, setLongTerm] = useState<number>(15_00_00_000);
  const [investments, setInvestments] = useState<number>(8_00_00_000);
  const [losses, setLosses] = useState<number>(0);
  const [prelim, setPrelim] = useState<number>(0);
  const [intangibles, setIntangibles] = useState<number>(2_00_00_000);

  const ec = useMemo(() => {
    return (
      paidUp +
      premium +
      reserves +
      longTerm -
      investments -
      losses -
      prelim -
      intangibles
    );
  }, [paidUp, premium, reserves, longTerm, investments, losses, prelim, intangibles]);

  const { cap, capDouble, band } = useMemo(() => {
    const FIVE_CR = 5_00_00_000;
    const HUNDRED_CR = 1_00_00_00_000;
    const TWO_FIFTY_CR = 2_50_00_00_000;
    let cap = 0;
    let band = "";
    if (ec < FIVE_CR) {
      cap = 60_00_000;
      band = "Negative or below ₹5 Cr";
    } else if (ec < HUNDRED_CR) {
      cap = 84_00_000;
      band = "₹5 Cr – ₹100 Cr";
    } else if (ec < TWO_FIFTY_CR) {
      cap = 1_20_00_000;
      band = "₹100 Cr – ₹250 Cr";
    } else {
      cap = 1_20_00_000 + 0.0001 * (ec - TWO_FIFTY_CR);
      band = "Above ₹250 Cr";
    }
    return { cap, capDouble: cap * 2, band };
  }, [ec]);

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-4">
              ⌖ Add
            </p>
            <div className="space-y-5">
              <Field label="Paid-up share capital"><NumInput value={paidUp} onChange={setPaidUp} currency /></Field>
              <Field label="Securities premium"><NumInput value={premium} onChange={setPremium} currency /></Field>
              <Field label="Reserves &amp; surplus" hint="Excl. revaluation reserve">
                <NumInput value={reserves} onChange={setReserves} currency />
              </Field>
              <Field label="Long-term loans &amp; deposits">
                <NumInput value={longTerm} onChange={setLongTerm} currency />
              </Field>
            </div>
          </div>
          <div className="pt-3 border-t border-ink/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-dark mb-4">
              ⌖ Less
            </p>
            <div className="space-y-5">
              <Field label="Investments"><NumInput value={investments} onChange={setInvestments} currency /></Field>
              <Field label="Accumulated losses"><NumInput value={losses} onChange={setLosses} currency /></Field>
              <Field label="Preliminary / pre-operative expenses">
                <NumInput value={prelim} onChange={setPrelim} currency />
              </Field>
              <Field label="Intangible assets" hint="Other than software">
                <NumInput value={intangibles} onChange={setIntangibles} currency />
              </Field>
            </div>
          </div>
        </>
      }
      results={
        <>
          <HeroResult
            label="Effective Capital"
            value={ec}
            hint={`Band: ${band} (${inrShort(ec)})`}
          />

          <div className="space-y-0 mb-7">
            <ResultRow label="Managerial remuneration cap (per annum)" value={cap} emphasis />
            <ResultRow
              label="Doubled cap (with special resolution)"
              value={capDouble}
              hint="§II Part II Schedule V — limits can be doubled by special resolution"
            />
          </div>

          <div className="text-[12.5px] text-smoke leading-[1.6] p-4 rounded-md border border-ink/10 bg-bone/60">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-dark mb-2">
              ⌖ Schedule V remuneration bands
            </p>
            <ul className="space-y-1 num">
              <li>Below ₹5 Cr or negative — ₹60 lakh</li>
              <li>₹5 Cr to ₹100 Cr — ₹84 lakh</li>
              <li>₹100 Cr to ₹250 Cr — ₹1.2 Cr</li>
              <li>Above ₹250 Cr — ₹1.2 Cr + 0.01% of excess</li>
            </ul>
          </div>
        </>
      }
      formula={
        <>
          <p>
            Effective capital is the Companies Act&rsquo;s yardstick for
            determining the maximum managerial remuneration that a company
            with inadequate profits can pay without Central Government
            approval. The calculation is laid out in Section II, Part II of
            Schedule V.
          </p>
          <p className="font-mono text-[13px] text-ink/75 bg-bone/50 border-l-2 border-amber pl-4 py-2 my-3">
            EC = Paid-up capital + Securities premium
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Reserves &amp; Surplus (excl. revaluation)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Long-term loans &amp; deposits
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Investments
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Accumulated losses
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Preliminary / pre-operative expenses
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Intangibles (other than software)
          </p>
          <p>
            The remuneration cap moves up in bands. Most operating businesses
            sit in the ₹5–100 Cr band with an ₹84 lakh ceiling. The cap can
            be doubled by a special resolution of shareholders; beyond that,
            Central Government approval is required.
          </p>
          <p>
            For companies with adequate profits — those clearing the §198
            net-profit threshold — managerial remuneration is computed as a
            percentage of net profit (typically 11% in total, with sub-caps
            per director). The Schedule V route only kicks in when profits
            fall short.
          </p>
        </>
      }
    />
  );
}
