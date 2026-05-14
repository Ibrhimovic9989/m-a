"use client";

import { useState } from "react";
import CalcShell from "@/components/calculators/CalcShell";
import { Field, OptionGroup } from "@/components/calculators/Inputs";
import { getCalculator } from "@/lib/calculators-meta";

// Indicative coverage by GST rate band — the actual rate for any
// specific HSN/SAC code should be verified on the GST portal.
const RATE_BANDS: Array<{
  rate: 0 | 5 | 12 | 18 | 28;
  headline: string;
  examples: string[];
  notes?: string;
}> = [
  {
    rate: 0,
    headline: "Exempt or nil-rated",
    examples: [
      "Fresh fruits and vegetables",
      "Unbranded foodgrains, flour, milk, curd, lassi",
      "Salt, jaggery, eggs",
      "Books, newspapers, journals",
      "Healthcare and education services (notified)",
      "Court fees and judicial services",
    ],
    notes: "Either exempt under notification or charged at nil rate.",
  },
  {
    rate: 5,
    headline: "Essentials & mass-consumption",
    examples: [
      "Packaged foods (notified), edible oils, sugar",
      "Tea, coffee (other than instant), masala",
      "Footwear up to ₹1,000",
      "Apparel up to ₹1,000",
      "LPG for domestic use",
      "Transport of goods and passengers (notified)",
      "Restaurants (non-AC, takeaway)",
      "Coal, fertilisers",
    ],
  },
  {
    rate: 12,
    headline: "Standard goods & specified services",
    examples: [
      "Processed foods, fruit juices, butter and cheese",
      "Mobile phones",
      "Apparel above ₹1,000",
      "Ayurvedic medicines, glucose",
      "Business-class air travel",
      "Hotel rooms with tariff ₹1,001 – ₹7,500",
      "Construction services (with conditions)",
    ],
  },
  {
    rate: 18,
    headline: "General rate — most goods & services",
    examples: [
      "Most professional and business services",
      "Capital goods, machinery",
      "Soaps, toothpaste, detergents",
      "Restaurants with AC or alcohol service",
      "Telecommunication and IT services",
      "Hotel rooms with tariff ₹7,501 and above",
      "Footwear and apparel above the lower slabs (per notifications)",
    ],
    notes: "If you don't know the rate, it's most likely 18%.",
  },
  {
    rate: 28,
    headline: "Luxury & sin goods",
    examples: [
      "Motor cars (additional cess applies)",
      "Tobacco products and pan masala (with cess)",
      "Aerated drinks (with cess)",
      "Air conditioners, dishwashers",
      "Cement",
      "Casino and gambling services",
    ],
    notes:
      "Often combined with GST Compensation Cess at varying rates depending on the item.",
  },
];

export default function Page() {
  const meta = getCalculator("gst-rate")!;
  const [active, setActive] = useState<0 | 5 | 12 | 18 | 28>(18);
  const band = RATE_BANDS.find((b) => b.rate === active)!;

  return (
    <CalcShell
      meta={meta}
      inputs={
        <>
          <Field label="GST rate band">
            <OptionGroup
              options={RATE_BANDS.map((b) => ({
                value: b.rate,
                label: `${b.rate}%`,
              }))}
              value={active}
              onChange={setActive}
            />
          </Field>
          <div className="pt-4 border-t border-ink/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
              ⌖ Quick check
            </p>
            <p className="text-[14px] leading-[1.55] text-ink/75 prose-j max-w-[420px]">
              The bands listed here are indicative. The authoritative rate for
              any HSN or SAC code lives on{" "}
              <a
                href="https://services.gst.gov.in/services/searchhsnsac"
                target="_blank"
                rel="noreferrer"
                className="text-amber-dark border-b border-amber-dark/40 hover:border-amber-dark"
              >
                services.gst.gov.in
              </a>{" "}
              and changes through Council notifications.
            </p>
          </div>
        </>
      }
      results={
        <>
          <div className="pb-6 border-b border-ink/10 mb-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
              Band &nbsp;·&nbsp; {band.rate}%
            </p>
            <h3 className="font-display text-[28px] lg:text-[36px] leading-[1.05] tracking-tightest font-medium">
              {band.headline}
            </h3>
            {band.notes && (
              <p className="mt-3 text-[13.5px] text-ink/65 leading-[1.55] italic">
                {band.notes}
              </p>
            )}
          </div>

          <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-4">
            ⌖ Indicative items
          </p>
          <ul className="space-y-2.5">
            {band.examples.map((ex, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-[1.5] text-ink/85"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                {ex}
              </li>
            ))}
          </ul>
        </>
      }
      formula={
        <>
          <p>
            India's GST runs five main rate bands — 0%, 5%, 12%, 18% and 28% —
            plus a Compensation Cess on a narrow list of sin and luxury goods.
            A few items sit on special rates (3% on gold, 1.5% on cut and
            polished diamonds, 0.25% on rough diamonds, 1.5% on jewellery
            making charges).
          </p>
          <p>
            Rates are revised by the GST Council and notified through the
            Central and State Tax authorities. For any specific item you're
            invoicing, look up the HSN (goods) or SAC (services) code on the
            GST portal — the rate is bound to the code, not to a product name.
          </p>
          <p>
            For composite supplies, the rate of the principal supply applies to
            the whole bundle. For mixed supplies, the highest rate of any item
            in the bundle applies to the whole.
          </p>
        </>
      }
    />
  );
}
