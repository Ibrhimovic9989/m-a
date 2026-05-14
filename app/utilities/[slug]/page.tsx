import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UtilityRenderer from "@/components/utilities/UtilityRenderer";
import {
  UTILITIES,
  UTILITY_CATEGORY_META,
  getUtility,
  type UtilityData,
} from "@/lib/utilities-meta";

import { data as ratesOfTds } from "@/lib/utilities/rates-of-tds";
import { data as tdsRatesNri195 } from "@/lib/utilities/tds-rates-nri-195";
import { data as ratesOfIncomeTax } from "@/lib/utilities/rates-of-income-tax";
import { data as costInflationIndex } from "@/lib/utilities/cost-inflation-index";
import { data as deduction80TtaVs80Ttb } from "@/lib/utilities/deduction-80tta-vs-80ttb";
import { data as depreciationIncomeTax } from "@/lib/utilities/depreciation-income-tax";
import { data as depreciationCompaniesAct } from "@/lib/utilities/depreciation-companies-act";
import { data as rocFilingFees } from "@/lib/utilities/roc-filing-fees";
import { data as rocFeeStructure } from "@/lib/utilities/roc-fee-structure";
import { data as llpFees } from "@/lib/utilities/llp-fees";
import { data as ratesOfNscInterest } from "@/lib/utilities/rates-of-nsc-interest";
import { data as goldSilverRates } from "@/lib/utilities/gold-silver-rates";
import { data as ratesOfStampDuty } from "@/lib/utilities/rates-of-stamp-duty";
import { data as hsnRateList } from "@/lib/utilities/hsn-rate-list";
import { data as ifscCodes } from "@/lib/utilities/ifsc-codes";
import { data as micrCodes } from "@/lib/utilities/micr-codes";
import { data as nationalIndustriesClassification } from "@/lib/utilities/national-industries-classification";

const DATA_MAP: Record<string, UtilityData> = {
  "rates-of-tds": ratesOfTds,
  "tds-rates-nri-195": tdsRatesNri195,
  "rates-of-income-tax": ratesOfIncomeTax,
  "cost-inflation-index": costInflationIndex,
  "deduction-80tta-vs-80ttb": deduction80TtaVs80Ttb,
  "depreciation-income-tax": depreciationIncomeTax,
  "depreciation-companies-act": depreciationCompaniesAct,
  "roc-filing-fees": rocFilingFees,
  "roc-fee-structure": rocFeeStructure,
  "llp-fees": llpFees,
  "rates-of-nsc-interest": ratesOfNscInterest,
  "gold-silver-rates": goldSilverRates,
  "rates-of-stamp-duty": ratesOfStampDuty,
  "hsn-rate-list": hsnRateList,
  "ifsc-codes": ifscCodes,
  "micr-codes": micrCodes,
  "national-industries-classification": nationalIndustriesClassification,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return UTILITIES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const utility = getUtility(slug);
  if (!utility) return { title: "Utility not found" };
  return {
    title: `${utility.title} — Muneer & Associates`,
    description: utility.tagline,
  };
}

export default async function UtilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const utility = getUtility(slug);
  if (!utility) notFound();

  const data = DATA_MAP[slug];
  if (!data) notFound();

  const related = UTILITIES.filter(
    (u) => u.category === utility.category && u.slug !== utility.slug,
  ).slice(0, 4);

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[130px] pb-10 lg:pt-[150px] lg:pb-14 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-8 lg:mb-10 flex-wrap"
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
              href="/utilities"
              className="hover:text-ink transition-colors duration-300"
            >
              Utilities
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">{utility.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Utility &nbsp;/&nbsp; {UTILITY_CATEGORY_META[utility.category].label}
              </p>
              <h1 className="font-display tracking-ultra leading-[0.95] font-medium text-[36px] sm:text-[52px] lg:text-[68px] xl:text-[76px]">
                {utility.title}
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-[1.6] text-ink/80 max-w-[760px] prose-j">
                {utility.tagline}
              </p>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-2 lg:items-end">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke">
                As of
              </p>
              <p className="text-[13px] lg:text-[14px] text-ink/85 lg:text-right max-w-[280px]">
                {data.asOf}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 lg:py-12 bg-ivory border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                ⌖ Context
              </p>
            </div>
            <div className="lg:col-span-9 max-w-[820px]">
              <p className="text-[15px] lg:text-[16.5px] leading-[1.65] text-ink/85 prose-j">
                {data.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-[100px]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-2">
                  ⌖ Source
                </p>
                {utility.source && (
                  <p className="text-[12.5px] leading-[1.55] text-ink/75 mb-3">
                    {utility.source}
                  </p>
                )}
                {utility.sourceUrl && (
                  <a
                    href={utility.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                  >
                    Live source
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="lg:col-span-10">
              <UtilityRenderer sections={data.sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 lg:py-20 bg-ivory border-t border-ink/[0.06]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="mb-8 lg:mb-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-3">
                ⌖ Related in {UTILITY_CATEGORY_META[utility.category].label}
              </p>
              <h2 className="font-display text-[28px] lg:text-[40px] tracking-tightest font-medium">
                Keep{" "}
                <span className="italic font-light text-amber-dark">
                  reading.
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/utilities/${r.slug}`}
                  className="group bg-bone p-6 hover:bg-ivory transition-colors duration-500 min-h-[160px] flex flex-col justify-between"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                    {UTILITY_CATEGORY_META[r.category].short}
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] lg:text-[20px] leading-[1.15] tracking-tightest font-medium mb-1.5 group-hover:text-amber-dark transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-[12.5px] leading-[1.5] text-ink/65">
                      {r.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 lg:mt-10">
              <Link
                href="/utilities"
                className="inline-flex items-center gap-2 text-[14px] text-ink/80 hover:text-ink"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M9.5 2.5L2.5 9.5M2.5 9.5H8M2.5 9.5V4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="border-b border-ink/30 group-hover:border-ink transition-colors pb-0.5">
                  Back to all utilities
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
