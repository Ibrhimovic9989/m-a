import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  SERVICE_DETAILS,
  getServiceDetail,
  getAllServiceSlugs,
} from "@/lib/service-details";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = getServiceDetail(params.slug);
  if (!s) return { title: "Service — Muneer & Associates" };
  return {
    title: `${s.title} — Muneer & Associates`,
    description: s.tagline,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const s = getServiceDetail(params.slug);
  if (!s) notFound();

  // Determine next/previous in the linear ordering so we can offer
  // continued reading at the foot of the page.
  const idx = SERVICE_DETAILS.findIndex((x) => x.slug === s.slug);
  const prev = idx > 0 ? SERVICE_DETAILS[idx - 1] : null;
  const next =
    idx < SERVICE_DETAILS.length - 1 ? SERVICE_DETAILS[idx + 1] : null;

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[140px] pb-16 lg:pt-[160px] lg:pb-24 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-8 lg:mb-10"
          >
            <Link
              href="/"
              className="hover:text-ink transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/#services"
              className="hover:text-ink transition-colors duration-300"
            >
              Services
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/#services"
              className="hover:text-ink transition-colors duration-300"
            >
              {s.categoryTitle}
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">{s.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;{s.categoryTitle}
              </p>
              <h1 className="font-display tracking-ultra leading-[0.95] font-medium text-[48px] sm:text-[72px] lg:text-[96px] xl:text-[112px]">
                {s.title}
                <span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[19px] lg:text-[22px] leading-[1.5] text-ink/80 max-w-[720px] italic font-light text-balance">
                {s.tagline}
              </p>
            </div>
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-ink text-bone text-[14px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
              >
                Book a consultation
                <span className="relative w-4 h-4 rounded-full bg-bone/15 group-hover:bg-ink/15 flex items-center justify-center transition-colors duration-500">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/#services"
                className="text-[12px] uppercase tracking-[0.22em] text-smoke hover:text-ink transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>←</span> Back to catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §I — Intro */}
      <section className="py-16 lg:py-24 border-t border-ink/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <aside className="lg:col-span-3 lg:sticky lg:top-28">
              <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                ⌖ §I
              </p>
              <p className="font-display text-[28px] lg:text-[32px] tracking-tightest leading-[1.05] font-medium">
                The work,
                <br />
                <span className="italic font-light text-amber-dark">
                  briefly.
                </span>
              </p>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5 space-y-5 text-[17px] lg:text-[19px] leading-[1.65] text-ink/85 prose-j max-w-[760px]">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §II — Why */}
      <section className="py-16 lg:py-24 bg-ivory border-y border-ink/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 lg:mb-14">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                ⌖ §II &nbsp;/&nbsp; Why this matters
              </p>
              <h2 className="font-display text-[36px] lg:text-[52px] leading-[0.95] tracking-tightest font-medium">
                What the<br />
                <span className="italic font-light text-amber-dark">
                  registration
                </span>
                <br />
                actually gets you.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {s.whyItems.map((w, i) => (
              <div
                key={i}
                className="group bg-bone p-7 lg:p-8 min-h-[200px] flex flex-col justify-between transition-colors duration-500 hover:bg-ivory"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-mono text-[11px] text-amber-dark tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                    Benefit
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[20px] lg:text-[22px] tracking-tightest leading-[1.15] font-medium mb-2.5">
                    {w.heading}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-ink/75 prose-j">
                    {w.body}
                  </p>
                </div>
                <span className="mt-5 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §III — Applicability (optional) */}
      {s.applicability && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                  ⌖ §III &nbsp;/&nbsp; Scope
                </p>
                <h2 className="font-display text-[32px] lg:text-[44px] leading-[1] tracking-tightest font-medium">
                  {s.applicability.title}
                </h2>
              </div>

              <ul className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 gap-y-3">
                {s.applicability.items.map((it, i) => (
                  <li
                    key={i}
                    className="flex gap-4 py-3 border-b border-ink/[0.08] text-[16px] lg:text-[17px] leading-[1.5] text-ink/85"
                  >
                    <span className="font-mono text-[11px] text-amber-dark tracking-[0.2em] mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* §IV — Our package */}
      <section className="py-16 lg:py-24 bg-ink text-bone overflow-hidden">
        <div className="absolute pointer-events-none">
          {/* spacer parent — section already has its own bg */}
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-soft mb-4">
                ⌖ §IV &nbsp;/&nbsp; Our package
              </p>
              <h2 className="font-display text-[36px] lg:text-[56px] leading-[0.95] tracking-tightest font-medium">
                What you<br />
                <span className="italic font-light text-amber-soft">
                  receive.
                </span>
              </h2>
              <p className="mt-6 text-[15px] lg:text-[16px] leading-[1.6] text-bone/70 max-w-[420px] prose-j">
                A senior member of the firm runs the engagement end to end. We
                handle the filings, the follow-ups, and the calendar of
                what-comes-after.
              </p>
            </div>

            <ul className="lg:col-span-7 lg:col-start-6 space-y-1">
              {s.packageItems.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-4 py-4 border-b border-bone/15 text-[15px] lg:text-[16.5px] leading-[1.5] text-bone/90"
                >
                  <span className="font-mono text-[11px] text-amber-soft tracking-[0.2em] mt-1.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* §V — Process (optional) */}
      {s.processSteps && s.processSteps.length > 0 && (
        <section className="py-16 lg:py-24 grain">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 lg:mb-14">
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-4">
                  ⌖ §V &nbsp;/&nbsp; Process
                </p>
                <h2 className="font-display text-[36px] lg:text-[56px] leading-[0.95] tracking-tightest font-medium">
                  How it<br />
                  <span className="italic font-light text-amber-dark">
                    moves.
                  </span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-ink/10 border border-ink/10">
              {s.processSteps.map((step) => (
                <div
                  key={step.n}
                  className="group bg-bone p-6 lg:p-7 min-h-[200px] flex flex-col justify-between transition-colors duration-500 hover:bg-ivory"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] text-amber-dark tracking-[0.2em]">
                      {step.n}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                      Step
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[22px] lg:text-[26px] tracking-tightest leading-[1.05] font-medium mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-[1.55] text-ink/70 prose-j">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — book a consult */}
      <section className="py-20 lg:py-32 bg-ivory border-y border-ink/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-5">
                ⌖ Next step
              </p>
              <h2 className="font-display text-[40px] sm:text-[60px] lg:text-[84px] leading-[0.92] tracking-ultra font-medium">
                Talk to a<br />
                <span className="italic font-light text-amber-dark">
                  senior partner.
                </span>
              </h2>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-[1.6] text-ink/75 max-w-[560px] prose-j">
                Thirty minutes on the phone or in our Hyderabad office. We
                walk through the registration, the timeline, the fee and the
                ongoing compliance — and you decide.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ink text-bone text-[14.5px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
              >
                Book a consultation
                <span className="w-5 h-5 rounded-full bg-bone/15 group-hover:bg-ink/15 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <a
                href="mailto:info@muneerassociates.in?subject=Enquiry — {s.title}"
                className="text-[13px] tracking-tight text-ink/70 hover:text-amber-dark transition-colors duration-300 border-b border-ink/20 hover:border-amber-dark pb-0.5"
              >
                Or write to us directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border-y border-ink/15">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="group bg-bone p-7 lg:p-9 hover:bg-ivory transition-colors duration-500"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-3">
                  ← Previous
                </p>
                <p className="font-display text-[22px] lg:text-[26px] tracking-tightest leading-[1.1] font-medium group-hover:text-amber-dark transition-colors duration-300">
                  {prev.title}
                </p>
                <p className="text-[12px] text-smoke mt-2">{prev.tagline}</p>
              </Link>
            ) : (
              <div className="bg-bone p-7 lg:p-9 opacity-50">
                <p className="text-[10px] uppercase tracking-[0.24em] text-smoke">
                  ← First in catalog
                </p>
              </div>
            )}
            {next ? (
              <Link
                href={`/services/${next.slug}`}
                className="group bg-bone p-7 lg:p-9 hover:bg-ivory transition-colors duration-500 md:text-right"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-3">
                  Next →
                </p>
                <p className="font-display text-[22px] lg:text-[26px] tracking-tightest leading-[1.1] font-medium group-hover:text-amber-dark transition-colors duration-300">
                  {next.title}
                </p>
                <p className="text-[12px] text-smoke mt-2">{next.tagline}</p>
              </Link>
            ) : (
              <div className="bg-bone p-7 lg:p-9 opacity-50 md:text-right">
                <p className="text-[10px] uppercase tracking-[0.24em] text-smoke">
                  Last in catalog →
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
