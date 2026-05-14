import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  UTILITIES,
  UTILITY_CATEGORY_META,
  UTILITY_CATEGORY_ORDER,
} from "@/lib/utilities-meta";

export const metadata: Metadata = {
  title: "Utilities — Reference Library — Muneer & Associates",
  description:
    "Reference tables we keep open on the second monitor — TDS rates, depreciation schedules, Cost Inflation Index, ROC/LLP fees, stamp duty, HSN brackets, IFSC/MICR and NIC codes. Current to FY 2025-26.",
};

export default function UtilitiesIndexPage() {
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
            <span className="text-ink">Utilities</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Knowledge Bank &nbsp;/&nbsp; Utilities
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px]">
                The{" "}
                <span className="italic font-light text-amber-dark">
                  reference
                </span>
                <br />
                library<span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                {UTILITIES.length} reference tables we keep open on the second
                monitor — TDS rates, depreciation schedules, Cost Inflation
                Index, ROC and LLP fees, stamp duty, HSN brackets, IFSC, MICR
                and NIC codes. Cross-referenced with CBDT, CBIC, MCA, RBI and
                state notifications, current to FY 2025-26.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {UTILITY_CATEGORY_ORDER.map((cat, ci) => {
        const items = UTILITIES.filter((u) => u.category === cat);
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
                    ⌖ §{ci + 1} &nbsp;/&nbsp; {UTILITY_CATEGORY_META[cat].label}
                  </p>
                  <h2 className="font-display text-[32px] lg:text-[48px] leading-[0.98] tracking-tightest font-medium">
                    {cat === "tax" && (
                      <>
                        Direct{" "}
                        <span className="italic font-light text-amber-dark">
                          tax tables.
                        </span>
                      </>
                    )}
                    {cat === "company" && (
                      <>
                        Companies &amp;{" "}
                        <span className="italic font-light text-amber-dark">
                          LLP fees.
                        </span>
                      </>
                    )}
                    {cat === "investment" && (
                      <>
                        Investments &amp;{" "}
                        <span className="italic font-light text-amber-dark">
                          notified rates.
                        </span>
                      </>
                    )}
                    {cat === "indirect" && (
                      <>
                        Indirect tax &amp;{" "}
                        <span className="italic font-light text-amber-dark">
                          HSN.
                        </span>
                      </>
                    )}
                    {cat === "lookup" && (
                      <>
                        Bank &amp; industry{" "}
                        <span className="italic font-light text-amber-dark">
                          codes.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                  <p className="text-[12px] uppercase tracking-[0.24em] text-smoke font-mono">
                    {String(items.length).padStart(2, "0")} utilities
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
                {items.map((u, i) => (
                  <Link
                    key={u.slug}
                    href={`/utilities/${u.slug}`}
                    className="group relative bg-bone p-6 lg:p-7 hover:bg-ivory transition-colors duration-500 min-h-[180px] flex flex-col justify-between"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-mono text-[10px] text-amber-dark tracking-[0.2em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                        {UTILITY_CATEGORY_META[u.category].short}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-[22px] lg:text-[24px] leading-[1.1] tracking-tightest font-medium mb-2 group-hover:text-amber-dark transition-colors">
                        {u.title}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-ink/70">
                        {u.tagline}
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
                These reference tables are kept current with the latest
                notifications from CBDT, CBIC, MCA, RBI and the State
                Sub-Registrars. NSC and small savings rates change quarterly;
                stamp duty and circle rates change at the State level — always
                cross-check against the live source before remitting tax or
                stamp duty.
              </p>
              <p>
                Where datasets are too large to bake into the page (IFSC, MICR,
                the full NIC and HSN directories), we surface a curated subset
                plus a pointer to the authoritative master. Engagement clients
                receive these utilities filed under their entity with
                personalised workings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
