"use client";

import { useEffect, useRef, useState } from "react";
import { inr } from "@/lib/calculators-meta";

// -----------------------------------------------------------------
// Field wrapper — provides the editorial label / hint pattern used
// across every calculator input.
// -----------------------------------------------------------------
export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[11px] uppercase tracking-[0.24em] text-smoke">
          {label}
        </span>
        {hint && (
          <span className="text-[11px] tracking-tight text-smoke/80">
            {hint}
          </span>
        )}
      </div>
      {children}
    </label>
  );
}

// -----------------------------------------------------------------
// NumInput — currency / number input with Indian comma formatting.
// Pass `currency` to prepend ₹.
// -----------------------------------------------------------------
export function NumInput({
  value,
  onChange,
  currency = false,
  suffix,
  placeholder,
  min,
  max,
}: {
  value: number | "";
  onChange: (v: number) => void;
  currency?: boolean;
  suffix?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}) {
  const [text, setText] = useState<string>(
    value === "" || value === undefined ? "" : inr(value as number)
  );

  // Keep the displayed string in sync when the parent forces a value
  // (e.g. via a preset chip). Skip when the user is mid-edit.
  const focused = useRef(false);
  useEffect(() => {
    if (!focused.current) {
      setText(
        value === "" || value === undefined || !Number.isFinite(value as number)
          ? ""
          : inr(value as number)
      );
    }
  }, [value]);

  const handle = (raw: string) => {
    const cleaned = raw.replace(/[^0-9.-]/g, "");
    setText(cleaned);
    if (cleaned === "" || cleaned === "-") return;
    let n = Number(cleaned);
    if (Number.isNaN(n)) return;
    if (typeof min === "number" && n < min) n = min;
    if (typeof max === "number" && n > max) n = max;
    onChange(n);
  };

  return (
    <div className="relative flex items-center">
      {currency && (
        <span className="absolute left-0 text-[20px] text-ink/55 select-none">
          ₹
        </span>
      )}
      <input
        type="text"
        inputMode="decimal"
        value={text}
        placeholder={placeholder}
        onFocus={() => {
          focused.current = true;
        }}
        onBlur={() => {
          focused.current = false;
          // Reformat with commas on blur
          if (text && !Number.isNaN(Number(text.replace(/,/g, "")))) {
            setText(inr(Number(text.replace(/,/g, ""))));
          }
        }}
        onChange={(e) => handle(e.target.value)}
        className={`w-full bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[20px] lg:text-[24px] py-2.5 transition-colors duration-300 placeholder:text-ink/25 num ${
          currency ? "pl-5" : ""
        }`}
      />
      {suffix && (
        <span className="ml-2 text-[14px] text-ink/55 uppercase tracking-[0.18em] select-none">
          {suffix}
        </span>
      )}
    </div>
  );
}

// -----------------------------------------------------------------
// PercentSlider — range slider with editable percent input alongside.
// -----------------------------------------------------------------
export function PercentSlider({
  value,
  onChange,
  min = 0,
  max = 30,
  step = 0.1,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-amber-dark cursor-pointer"
      />
      <div className="flex items-baseline gap-1.5 min-w-[80px] justify-end">
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 bg-transparent border-b border-ink/20 focus:border-amber-dark outline-none text-[18px] py-1 text-right num"
        />
        <span className="text-[14px] text-ink/55">%</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------
// OptionGroup — segmented control / chip selector.
// -----------------------------------------------------------------
export function OptionGroup<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={String(opt.value)}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-3.5 py-1.5 text-[12.5px] tracking-tight rounded-full border transition-all duration-300 ${
              active
                ? "bg-ink text-bone border-ink"
                : "bg-transparent text-ink/65 border-ink/20 hover:border-ink/60 hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
