import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalendarBrowser from "@/components/CalendarBrowser";

export const metadata: Metadata = {
  title: "Statutory Compliance Calendar — Muneer & Associates",
  description:
    "A rolling twelve-month statutory compliance calendar for Indian businesses — GST, TDS, Income Tax, ROC, LLP, PF, ESI, FEMA and FSSAI. Cross-referenced with CBIC, CBDT, MCA and EPFO sources.",
};

export default function CalendarPage() {
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
            <a
              href="/"
              className="hover:text-ink transition-colors duration-300"
            >
              Home
            </a>
            <span className="text-ink/25">/</span>
            <a
              href="/#knowledge"
              className="hover:text-ink transition-colors duration-300"
            >
              Knowledge Bank
            </a>
            <span className="text-ink/25">/</span>
            <span className="text-ink">Compliance Calendar</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Knowledge Bank &nbsp;/&nbsp; Calendar
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px]">
                Statutory
                <br />
                <span className="italic font-light text-amber-dark">
                  compliance
                </span>{" "}
                calendar<span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                A rolling twelve-month deadline register for businesses
                operating in India — drawn from CBIC, CBDT, MCA, EPFO, RBI and
                FSSAI notifications. Pick a month, filter the act, and read
                the brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CalendarBrowser />

      {/* Footnote */}
      <section className="py-12 lg:py-20 bg-ivory border-t border-ink/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                ⌖ Notes on accuracy
              </p>
            </div>
            <div className="lg:col-span-9 space-y-4 text-[14px] lg:text-[15px] leading-[1.65] text-ink/75 prose-j max-w-[820px]">
              <p>
                Due dates above reflect the statutory position as notified
                under the respective Acts and rules at the time of publication.
                The government issues periodic extensions, relaxations and
                state-specific deviations — always confirm against the live
                notification on{" "}
                <a
                  href="https://www.cbic.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                >
                  cbic.gov.in
                </a>
                ,{" "}
                <a
                  href="https://incometaxindia.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                >
                  incometaxindia.gov.in
                </a>
                {" "}or{" "}
                <a
                  href="https://www.mca.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                >
                  mca.gov.in
                </a>{" "}
                before filing.
              </p>
              <p>
                Professional Tax due dates vary by state — Telangana 10th,
                Karnataka 20th, Maharashtra end-of-month, others by
                notification. AGM-linked dates (AOC-4, MGT-7) assume the AGM
                is held on or before 30 September; companies obtaining
                extensions should re-base accordingly.
              </p>
              <p>
                Engagement clients of Muneer &amp; Associates receive a
                personalised, applicability-filtered calendar synced to their
                entity's compliance footprint. The version on this page is the
                generic baseline, published openly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
