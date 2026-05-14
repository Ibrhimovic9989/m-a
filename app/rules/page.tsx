import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RULES_CATALOG } from "@/lib/rules-catalog";
import { getStatusLabel } from "@/lib/acts-catalog";

export const metadata: Metadata = {
  title: "Rules & Regulations Library — Muneer & Associates",
  description:
    "The subordinate legislation made under each Indian statute — Income-tax Rules, Companies Rules, CGST Rules, FEMA Regulations, SEBI Regulations and the allied state and central Rules. Organised the way Indian CA practice consults them.",
};

const TOTAL_RULES = RULES_CATALOG.reduce((n, c) => n + c.rules.length, 0);

export default function RulesIndexPage() {
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
            <span className="text-ink">Rules &amp; Regulations</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Knowledge Bank &nbsp;/&nbsp; Rules &amp; Regulations
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px]">
                The{" "}
                <span className="italic font-light text-amber-dark">
                  rule
                </span>{" "}
                book<span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                {TOTAL_RULES} sets of Rules and Regulations across{" "}
                {RULES_CATALOG.length} heads — the subordinate legislation
                made under each statute in the{" "}
                <Link
                  href="/acts"
                  className="border-b border-amber-dark/40 hover:border-amber-dark transition-colors duration-300"
                >
                  Acts library
                </Link>
                . Every form, valuation methodology, withholding mechanic and
                appellate procedure lives here.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <p className="text-[12px] uppercase tracking-[0.24em] text-smoke font-mono">
                {String(TOTAL_RULES).padStart(2, "0")} rules indexed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick jump */}
      <section className="border-y border-ink/[0.08] bg-bone/60 py-5 lg:py-6 sticky top-[80px] z-30 backdrop-blur-xl">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.22em]">
            <span className="text-smoke">Jump to →</span>
            {RULES_CATALOG.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="text-ink/70 hover:text-amber-dark transition-colors duration-300 border-b border-transparent hover:border-amber-dark pb-0.5"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {RULES_CATALOG.map((cat, ci) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`py-12 lg:py-20 scroll-mt-[160px] ${
            ci % 2 === 0 ? "" : "bg-ivory border-y border-ink/[0.06]"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 lg:mb-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                  ⌖ §{cat.num} &nbsp;/&nbsp; {cat.title}
                </p>
                <h2 className="font-display text-[32px] lg:text-[48px] leading-[0.98] tracking-tightest font-medium">
                  {cat.title.replace(/ \(Pre-GST\)/, "")}
                  <span className="italic font-light text-amber-dark">.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-[15px] lg:text-[17px] leading-[1.6] text-ink/80 prose-j">
                  {cat.blurb}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {cat.rules.map((rule, i) => (
                <Link
                  key={`${cat.slug}-${i}`}
                  href={`/rules/${cat.slug}#${slugifyRule(rule, i)}`}
                  className="group relative bg-bone p-7 lg:p-8 hover:bg-ivory transition-colors duration-500 flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="font-mono text-[10px] text-amber-dark tracking-[0.2em]">
                      {cat.num}.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-[0.22em] ${statusColor(
                        rule.status
                      )}`}
                    >
                      {getStatusLabel(rule.status)}
                    </span>
                  </div>

                  <h3 className="font-display text-[20px] lg:text-[24px] leading-[1.15] tracking-tightest font-medium mb-2 text-balance">
                    {rule.name}
                    {rule.year && (
                      <span className="text-ink/45 font-light">
                        , {rule.year}
                      </span>
                    )}
                  </h3>

                  {rule.shortCode && (
                    <p className="text-[11px] uppercase tracking-[0.22em] text-smoke mb-3 font-mono">
                      {rule.shortCode}
                    </p>
                  )}

                  <p className="text-[14px] lg:text-[15px] leading-[1.6] text-ink/75 prose-j flex-1">
                    {rule.blurb}
                  </p>

                  <p className="mt-5 pt-4 border-t border-ink/[0.08] text-[11px] uppercase tracking-[0.22em] text-smoke">
                    ⌖ Made under{" "}
                    <span className="text-ink/75 normal-case tracking-tight">
                      {rule.parentAct}
                    </span>
                  </p>

                  <span className="absolute left-7 lg:left-8 right-7 lg:right-8 bottom-0 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footnote */}
      <section className="py-12 lg:py-16 bg-ink text-bone">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft">
                ⌖ On Rules vs Acts
              </p>
            </div>
            <div className="lg:col-span-9 space-y-4 text-[14px] lg:text-[15px] leading-[1.65] text-bone/75 prose-j max-w-[820px]">
              <p>
                A statute names the levy and the offence; the Rules tell you
                the form to file, the time-limit to keep, the procedure to
                follow and the manner of valuation. Almost every working
                question in CA practice ends in a Rule, a sub-rule or a
                Form number — which is why we maintain this index alongside the
                bare-act catalog.
              </p>
              <p>
                Rules are amended several times a year by Notification — the
                CGST Rules and Income-tax Rules both run on near-monthly
                amendment cycles. For the operative text and the latest
                Notification, the authoritative sources remain the department
                portals (CBIC, CBDT, MCA, SEBI, RBI) and{" "}
                <span className="text-bone">indiacode.nic.in</span> for
                consolidated bare acts.
              </p>
              <p>
                Engagement clients receive a working note tied to the specific
                Rule, sub-rule and Form relevant to their entity. These public
                pages are the generic index — useful for orientation,
                cross-reference and educational use.
              </p>
            </div>
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

function slugifyRule(
  rule: { name: string; year?: number },
  index: number
): string {
  const base = rule.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return rule.year ? `${base}-${rule.year}` : `${base}-${index}`;
}
