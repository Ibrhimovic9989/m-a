import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  CALCULATORS,
  CalcCategory,
  CATEGORY_META,
} from "@/lib/calculators-meta";

export const metadata: Metadata = {
  title: "Calculators — Muneer & Associates",
  description:
    "A working library of finance and tax calculators — GST, income tax, TDS, HRA, EMI, NSC, RERA and more. Built on the same formulas we use in our own engagements every day.",
};

const ORDER: CalcCategory[] = ["gst", "tax", "loan", "finance", "compliance"];

export default function CalculatorsIndexPage() {
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
            <span className="text-ink">Calculators</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Knowledge Bank &nbsp;/&nbsp; Calculators
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px]">
                The{" "}
                <span className="italic font-light text-amber-dark">
                  toolkit
                </span>
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                {CALCULATORS.length} calculators we use in our own engagements
                every day — GST, income tax, TDS, HRA, EMI, NSC, RERA and a few
                more. All formulas current to FY 2025-26 and cross-referenced
                with statutory rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {ORDER.map((cat, ci) => {
        const items = CALCULATORS.filter((c) => c.category === cat);
        if (items.length === 0) return null;
        return (
          <section
            key={cat}
            className={`py-10 lg:py-16 ${
              ci % 2 === 0 ? "" : "bg-ivory border-y border-ink/[0.06]"
            }`}
          >
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-7 lg:mb-9">
                <div className="lg:col-span-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                    ⌖ §{ci + 1} &nbsp;/&nbsp; {CATEGORY_META[cat].label}
                  </p>
                  <h2 className="font-display text-[32px] lg:text-[48px] leading-[0.98] tracking-tightest font-medium">
                    {cat === "gst" && (
                      <>
                        Goods &amp; <span className="italic font-light text-amber-dark">Services Tax.</span>
                      </>
                    )}
                    {cat === "tax" && (
                      <>
                        Income tax &amp;{" "}
                        <span className="italic font-light text-amber-dark">withholdings.</span>
                      </>
                    )}
                    {cat === "loan" && (
                      <>
                        Loans &amp;{" "}
                        <span className="italic font-light text-amber-dark">instalments.</span>
                      </>
                    )}
                    {cat === "finance" && (
                      <>
                        Personal &amp;{" "}
                        <span className="italic font-light text-amber-dark">business finance.</span>
                      </>
                    )}
                    {cat === "compliance" && (
                      <>
                        Statutory &amp;{" "}
                        <span className="italic font-light text-amber-dark">compliance.</span>
                      </>
                    )}
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                  <p className="text-[12px] uppercase tracking-[0.24em] text-smoke font-mono">
                    {String(items.length).padStart(2, "0")} calculators
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
                {items.map((c, i) => (
                  <Link
                    key={c.slug}
                    href={`/calculators/${c.slug}`}
                    className={`group relative ${
                      ci % 2 === 0 ? "bg-bone" : "bg-bone"
                    } p-6 lg:p-7 hover:bg-ivory transition-colors duration-500 min-h-[180px] flex flex-col justify-between`}
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-mono text-[10px] text-amber-dark tracking-[0.2em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                        {CATEGORY_META[c.category].short}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] lg:text-[24px] leading-[1.1] tracking-tightest font-medium mb-2 group-hover:text-amber-dark transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-ink/70">
                        {c.tagline}
                      </p>
                    </div>
                    <span className="absolute left-6 lg:left-7 right-6 lg:right-7 bottom-0 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Footnote */}
      <section className="py-12 lg:py-16 bg-ink text-bone">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft">
                ⌖ On accuracy
              </p>
            </div>
            <div className="lg:col-span-9 space-y-4 text-[14px] lg:text-[15px] leading-[1.65] text-bone/75 prose-j max-w-[820px]">
              <p>
                These tools implement the statutory formulas as currently
                notified. Tax slabs, surcharge thresholds and TDS rates change
                each Union Budget — the calculator labels make the relevant FY
                explicit. Where a state-level variation exists (PT, RERA
                interest), the calculator either lets you set the rate or
                flags the default in copy.
              </p>
              <p>
                Engagement clients receive personalised workings filed under
                their entity — these public calculators are the generic
                version, useful for first-cut estimates and educational use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
