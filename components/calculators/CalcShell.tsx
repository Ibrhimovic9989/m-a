"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  CALCULATORS,
  CalcCategory,
  CATEGORY_META,
  getCalculatorsByCategory,
  type CalculatorMeta,
} from "@/lib/calculators-meta";

type Props = {
  meta: CalculatorMeta;
  /** Inputs column (left) */
  inputs: React.ReactNode;
  /** Results column (right) */
  results: React.ReactNode;
  /** Long-form explanation below the calculator */
  formula?: React.ReactNode;
  /** Optional sidebar slot replacing the default "Related calculators" */
  sidebar?: React.ReactNode;
};

export default function CalcShell({
  meta,
  inputs,
  results,
  formula,
  sidebar,
}: Props) {
  const sameCategory = getCalculatorsByCategory(meta.category).filter(
    (c) => c.slug !== meta.slug
  );

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[120px] pb-10 lg:pt-[140px] lg:pb-14 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-6 lg:mb-8"
          >
            <Link href="/" className="hover:text-ink transition-colors duration-300">
              Home
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/#knowledge"
              className="hover:text-ink transition-colors duration-300"
            >
              Knowledge Bank
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/calculators"
              className="hover:text-ink transition-colors duration-300"
            >
              Calculators
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">{meta.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-4">
                ⌖ &nbsp;{CATEGORY_META[meta.category].label}
              </p>
              <h1 className="font-display tracking-ultra leading-[0.95] font-medium text-[40px] sm:text-[56px] lg:text-[76px]">
                {meta.title}
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-5 text-[16px] lg:text-[18px] leading-[1.55] text-ink/80 max-w-[640px] italic font-light">
                {meta.tagline}
              </p>
            </div>
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-3">
              <Link
                href="/calculators"
                className="text-[12px] uppercase tracking-[0.22em] text-smoke hover:text-ink transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>←</span> All calculators
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator body */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Inputs (left) */}
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-5">
                ⌖ Inputs
              </p>
              <div className="space-y-6">{inputs}</div>
            </div>

            {/* Results (right) */}
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-5">
                ⌖ Result
              </p>
              <div className="relative rounded-lg border border-ink/10 bg-ivory p-7 lg:p-10">
                {results}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula / explanation */}
      {formula && (
        <section className="py-14 lg:py-20 bg-ivory border-y border-ink/[0.08]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                  ⌖ §I &nbsp;/&nbsp; Formula
                </p>
                <p className="font-display text-[26px] lg:text-[30px] tracking-tightest leading-[1.05] font-medium">
                  The math,
                  <br />
                  <span className="italic font-light text-amber-dark">
                    in the open.
                  </span>
                </p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5 space-y-4 text-[14.5px] lg:text-[16px] leading-[1.65] text-ink/85 prose-j max-w-[760px]">
                {formula}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related calculators */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {sidebar ?? (
            <>
              <div className="flex items-end justify-between mb-8 lg:mb-10">
                <h2 className="font-display text-[28px] lg:text-[40px] tracking-tightest font-medium leading-[1]">
                  More{" "}
                  <span className="italic font-light text-amber-dark">
                    {CATEGORY_META[meta.category].label.toLowerCase()}
                  </span>{" "}
                  calculators
                </h2>
                <Link
                  href="/calculators"
                  className="text-[12px] uppercase tracking-[0.22em] text-smoke hover:text-ink transition-colors duration-300"
                >
                  View all →
                </Link>
              </div>

              {sameCategory.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
                  {sameCategory.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/calculators/${c.slug}`}
                      className="group bg-bone p-6 lg:p-7 hover:bg-ivory transition-colors duration-500"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-amber-dark mb-3">
                        ⌖ {CATEGORY_META[c.category].short}
                      </p>
                      <h3 className="font-display text-[20px] lg:text-[22px] tracking-tightest leading-[1.15] font-medium mb-2 group-hover:text-amber-dark transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-ink/65">
                        {c.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-[14px] text-smoke italic">
                  Other calculators in this category are coming soon.
                </p>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
