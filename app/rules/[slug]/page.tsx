import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  RULES_CATALOG,
  getRuleCategoryBySlug,
  type Rule,
} from "@/lib/rules-catalog";
import { getStatusLabel } from "@/lib/acts-catalog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return RULES_CATALOG.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getRuleCategoryBySlug(slug);
  if (!cat) return { title: "Rules & Regulations — Muneer & Associates" };
  return {
    title: `${cat.title} — Rules & Regulations — Muneer & Associates`,
    description: cat.blurb,
  };
}

export default async function RuleCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cat = getRuleCategoryBySlug(slug);
  if (!cat) notFound();

  const idx = RULES_CATALOG.findIndex((c) => c.slug === cat.slug);
  const prev = idx > 0 ? RULES_CATALOG[idx - 1] : null;
  const next =
    idx < RULES_CATALOG.length - 1 ? RULES_CATALOG[idx + 1] : null;

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[140px] pb-12 lg:pt-[160px] lg:pb-16 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-8 lg:mb-10"
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
              href="/rules"
              className="hover:text-ink transition-colors duration-300"
            >
              Rules &amp; Regulations
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">{cat.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Rules &amp; Regulations &nbsp;/&nbsp; §{cat.num}
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[84px] xl:text-[96px]">
                {cat.title}
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[820px] prose-j">
                {cat.blurb}
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <p className="text-[12px] uppercase tracking-[0.24em] text-smoke font-mono">
                {String(cat.rules.length).padStart(2, "0")} rules
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="border-y border-ink/[0.08] bg-bone/60 py-5 lg:py-6">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px]">
            <span className="text-smoke uppercase tracking-[0.22em]">
              Contents →
            </span>
            {cat.rules.map((r, i) => (
              <a
                key={i}
                href={`#${slugifyRule(r, i)}`}
                className="text-ink/70 hover:text-amber-dark transition-colors duration-300 border-b border-transparent hover:border-amber-dark pb-0.5 tracking-tight"
              >
                {r.shortCode || r.name}
                {r.year && (
                  <span className="text-ink/40">, {r.year}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-px bg-ink/10 border border-ink/10">
            {cat.rules.map((rule, i) => (
              <article
                key={i}
                id={slugifyRule(rule, i)}
                className="bg-bone p-8 lg:p-12 scroll-mt-[160px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-mono text-[11px] text-amber-dark tracking-[0.22em]">
                        §{cat.num}.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-[0.22em] ${statusColor(
                          rule.status
                        )}`}
                      >
                        {getStatusLabel(rule.status)}
                      </span>
                    </div>

                    <h2 className="font-display text-[26px] lg:text-[34px] leading-[1.05] tracking-tightest font-medium text-balance">
                      {rule.name}
                      {rule.year && (
                        <>
                          ,{" "}
                          <span className="italic font-light text-amber-dark">
                            {rule.year}
                          </span>
                        </>
                      )}
                    </h2>

                    {rule.shortCode && (
                      <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-smoke font-mono">
                        {rule.shortCode}
                      </p>
                    )}

                    <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-smoke">
                      ⌖ Made under
                      <br />
                      <span className="text-ink/85 normal-case tracking-tight text-[14px] font-sans">
                        {rule.parentAct}
                      </span>
                    </p>

                    {rule.authority && (
                      <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-smoke">
                        ⌖ Authority
                        <br />
                        <span className="text-ink/85 normal-case tracking-tight text-[14px] font-sans">
                          {rule.authority}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-[16px] lg:text-[18px] leading-[1.65] text-ink/85 prose-j">
                      {rule.blurb}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 text-[13px] tracking-tight border border-ink/15 hover:border-ink hover:bg-ink hover:text-bone transition-all duration-500"
                      >
                        Brief us on a matter under these Rules
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-ink/[0.08] py-10 lg:py-14 bg-ivory">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {prev ? (
              <Link
                href={`/rules/${prev.slug}`}
                className="group bg-bone p-7 lg:p-9 hover:bg-ivory transition-colors duration-500"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
                  ← Previous head
                </p>
                <p className="font-display text-[22px] lg:text-[26px] tracking-tightest font-medium">
                  §{prev.num} &nbsp;{prev.title}
                </p>
              </Link>
            ) : (
              <div className="bg-bone p-7 lg:p-9 opacity-40">
                <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                  ← Start of catalog
                </p>
              </div>
            )}

            {next ? (
              <Link
                href={`/rules/${next.slug}`}
                className="group bg-bone p-7 lg:p-9 hover:bg-ivory transition-colors duration-500 md:text-right"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
                  Next head →
                </p>
                <p className="font-display text-[22px] lg:text-[26px] tracking-tightest font-medium">
                  §{next.num} &nbsp;{next.title}
                </p>
              </Link>
            ) : (
              <div className="bg-bone p-7 lg:p-9 opacity-40 md:text-right">
                <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                  End of catalog →
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 lg:mt-10 flex justify-center gap-3">
            <Link
              href="/rules"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/15 text-[14px] tracking-tight hover:border-ink hover:bg-ink hover:text-bone transition-all duration-500"
            >
              ⌖ Back to all heads
            </Link>
            <Link
              href="/acts"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/15 text-[14px] tracking-tight hover:border-ink hover:bg-ink hover:text-bone transition-all duration-500"
            >
              ⌖ Parent Acts library
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function statusColor(status: string): string {
  switch (status) {
    case "in-force":
      return "text-emerald-700";
    case "partially-in-force":
      return "text-amber-dark";
    case "subsumed-by-gst":
      return "text-smoke";
    case "repealed":
    case "historical":
      return "text-ink/40";
    default:
      return "text-smoke";
  }
}

function slugifyRule(rule: Rule, index: number): string {
  const base = rule.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return rule.year ? `${base}-${rule.year}` : `${base}-${index}`;
}
