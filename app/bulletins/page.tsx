import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BULLETIN_CATEGORIES } from "@/lib/bulletins";

export const metadata: Metadata = {
  title: "Bulletins — RBI, SEBI, CBDT, CBIC, MCA — Muneer & Associates",
  description:
    "A live feed of RBI, SEBI, CBDT, CBIC, MCA and allied notifications, circulars and rulings — organised across nineteen heads. Sourced from dcgargco.com.",
};

export const revalidate = 3600;

export default function BulletinsIndexPage() {
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
            <span className="text-ink">Bulletins</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;Knowledge Bank &nbsp;/&nbsp; Bulletins
              </p>
              <h1 className="font-display tracking-ultra leading-[0.92] font-medium text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px]">
                Notifications,
                <br />
                <span className="italic font-light text-amber-dark">
                  circulars
                </span>{" "}
                &amp; press<span className="text-amber">.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-[1.55] text-ink/80 max-w-[720px] prose-j">
                A live feed of statutory issuances across RBI, SEBI, CBDT,
                CBIC, MCA and allied authorities — organised across nineteen
                heads. Pick a category to see what has been issued, in order
                of publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="relative bg-ivory border-y border-ink/[0.08] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {BULLETIN_CATEGORIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/bulletins/${c.slug}`}
                className="group relative bg-bone p-6 lg:p-7 border border-ink/[0.08] hover:border-ink/30 transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-amber-dark">
                    ⌖ {c.short}
                  </span>
                  <span className="font-mono text-[11px] text-smoke">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(BULLETIN_CATEGORIES.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-[22px] lg:text-[26px] leading-[1.15] tracking-tightest font-medium mb-3 text-balance">
                  {c.name}
                </h3>
                <p className="text-[14px] leading-[1.55] text-ink/70 mb-6">
                  {c.available
                    ? c.note
                      ? "Legacy head. Most notifications now under GST."
                      : "Latest notifications, circulars and press releases."
                    : "Catalogue empty at source — coming soon."}
                </p>

                <div className="flex items-center gap-3 text-[13px] tracking-tight">
                  <span className="border-b border-ink/30 group-hover:border-ink transition-colors duration-300 pb-0.5">
                    {c.available ? "Open feed" : "Browse anyway"}
                  </span>
                  <span className="w-5 h-5 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-all duration-500">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="group-hover:[&_path]:stroke-bone transition-all duration-500"
                    >
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <span className="absolute top-0 right-0 w-12 h-12 bg-amber/0 group-hover:bg-amber/10 transition-colors duration-700 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footnote */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                ⌖ Sourcing &amp; accuracy
              </p>
            </div>
            <div className="lg:col-span-9 space-y-4 text-[14px] lg:text-[15px] leading-[1.65] text-ink/75 prose-j max-w-[820px]">
              <p>
                Items in this feed are fetched live from{" "}
                <a
                  href="https://www.dcgargco.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                >
                  dcgargco.com
                </a>
                {" "}with a one-hour refresh window. The dcgargco bulletin board
                aggregates official issuances from{" "}
                <a
                  href="https://www.rbi.org.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink transition-colors"
                >
                  rbi.org.in
                </a>
                , SEBI, CBDT, CBIC, MCA and the EPFO — read the originating
                source before relying on any item operationally.
              </p>
              <p>
                Some categories (IGST, UTGST, Compensation Cess, IBC) are not
                yet populated upstream; those cards link through to the
                eventual feed and surface an empty state until data appears.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
