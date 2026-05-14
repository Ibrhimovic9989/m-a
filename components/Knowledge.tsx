const RESOURCES = [
  {
    tag: "Calculators",
    title: "Tax, EMI, GST & Investment Calculators",
    body:
      "A working library of utilities — income tax, advance tax, HRA, gratuity, GST late-fee, EMI, NPS — used in our own engagements every day.",
    cta: "Open the toolkit",
    href: "#contact",
  },
  {
    tag: "Acts & Rules",
    title: "Bare Acts and Rule Sets",
    body:
      "Companies Act, Income Tax Act, GST Acts, RBI directions and the major allied rules — searchable, indexed, and kept current.",
    cta: "Browse the library",
    href: "#contact",
  },
  {
    tag: "Bulletins",
    title: "Notifications, Circulars & Case Law",
    body:
      "A curated feed of CBDT and CBIC notifications, MCA circulars and recent rulings — with brief notes from our team on what they actually mean.",
    cta: "Read the bulletins",
    href: "#contact",
  },
  {
    tag: "Calendar",
    title: "Statutory Due-Date Calendar",
    body:
      "A rolling twelve-month view of every filing deadline a typical Indian business needs to plan around — cross-referenced with CBIC, CBDT, MCA and EPFO notifications.",
    cta: "Open the calendar",
    href: "/calendar",
  },
];

export default function Knowledge() {
  return (
    <section
      id="knowledge"
      className="relative bg-ivory border-y border-ink/[0.08] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;005 &nbsp;/&nbsp; Knowledge Bank
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              A working{" "}
              <span className="italic font-light text-amber-dark">library,</span>{" "}
              kept current.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] lg:text-[18.5px] leading-[1.65] text-ink/85 prose-j">
              The same calculators, bare acts, bulletins and due-date trackers
              we use internally — published openly, because financial knowledge
              works better when it isn&rsquo;t gatekept.
            </p>
          </div>
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {RESOURCES.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="group relative bg-bone p-7 lg:p-9 border border-ink/[0.08] hover:border-ink/30 transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-dark">
                  ⌖ {r.tag}
                </span>
                <span className="font-mono text-[11px] text-smoke">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
              </div>

              <h3 className="font-display text-[26px] lg:text-[32px] leading-[1.1] tracking-tightest font-medium mb-4 text-balance">
                {r.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-ink/80 mb-7 prose-j">
                {r.body}
              </p>

              <div className="flex items-center gap-3 text-[14px] tracking-tight">
                <span className="border-b border-ink/30 group-hover:border-ink transition-colors duration-300 pb-0.5">
                  {r.cta}
                </span>
                <span className="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-all duration-500">
                  <svg
                    width="11"
                    height="11"
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

              {/* corner accent */}
              <span className="absolute top-0 right-0 w-16 h-16 bg-amber/0 group-hover:bg-amber/10 transition-colors duration-700 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
