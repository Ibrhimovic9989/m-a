"use client";

import { inr } from "@/lib/calculators-meta";

// -----------------------------------------------------------------
// Hero result — the big-numeral primary output. Most calculators
// have exactly one of these at the top of the result panel.
// -----------------------------------------------------------------
export function HeroResult({
  label,
  value,
  currency = true,
  fractionDigits = 0,
  hint,
}: {
  label: string;
  value: number;
  currency?: boolean;
  fractionDigits?: number;
  hint?: string;
}) {
  return (
    <div className="pb-7 border-b border-ink/10 mb-7">
      <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
        {label}
      </p>
      <p className="font-display tracking-tightest leading-none num text-[44px] sm:text-[60px] lg:text-[68px] font-medium">
        {currency && <span className="text-ink/55 text-[0.6em] align-super mr-1">₹</span>}
        {Number.isFinite(value) ? inr(value, fractionDigits) : "—"}
      </p>
      {hint && (
        <p className="mt-3 text-[12.5px] text-smoke leading-[1.5]">{hint}</p>
      )}
    </div>
  );
}

// -----------------------------------------------------------------
// ResultRow — secondary breakdown row.
// -----------------------------------------------------------------
export function ResultRow({
  label,
  value,
  currency = true,
  hint,
  emphasis = false,
}: {
  label: string;
  value: number | string;
  currency?: boolean;
  hint?: string;
  emphasis?: boolean;
}) {
  const display =
    typeof value === "number"
      ? Number.isFinite(value)
        ? inr(value)
        : "—"
      : value;
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-ink/[0.07] last:border-b-0">
      <div className="min-w-0">
        <p
          className={`text-[13px] uppercase tracking-[0.18em] ${
            emphasis ? "text-ink" : "text-smoke"
          }`}
        >
          {label}
        </p>
        {hint && (
          <p className="text-[11px] text-smoke/80 mt-0.5">{hint}</p>
        )}
      </div>
      <p
        className={`font-display tracking-tight num text-right shrink-0 ${
          emphasis
            ? "text-[22px] lg:text-[24px] font-medium text-amber-dark"
            : "text-[18px] lg:text-[20px] text-ink/85"
        }`}
      >
        {typeof value === "number" && currency && Number.isFinite(value) && (
          <span className="text-ink/45 text-[0.7em] align-super mr-0.5">₹</span>
        )}
        {display}
      </p>
    </div>
  );
}

// -----------------------------------------------------------------
// ResultSplitGrid — two-column comparison (e.g. Old vs New regime,
// CGST + SGST). Wraps two HeroResult-ish cells.
// -----------------------------------------------------------------
export function ResultSplitGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10 mb-7">{children}</div>;
}

export function SplitCell({
  label,
  value,
  currency = true,
  highlight = false,
  hint,
}: {
  label: string;
  value: number;
  currency?: boolean;
  highlight?: boolean;
  hint?: string;
}) {
  return (
    <div
      className={`p-5 lg:p-6 ${
        highlight ? "bg-amber/10" : "bg-ivory"
      }`}
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-smoke mb-2">
        {label}
      </p>
      <p className="font-display text-[28px] lg:text-[32px] tracking-tightest leading-none num font-medium">
        {currency && Number.isFinite(value) && (
          <span className="text-ink/55 text-[0.7em] align-super mr-0.5">₹</span>
        )}
        {Number.isFinite(value) ? inr(value) : "—"}
      </p>
      {hint && (
        <p className="text-[11.5px] text-smoke mt-2 leading-[1.45]">{hint}</p>
      )}
    </div>
  );
}
