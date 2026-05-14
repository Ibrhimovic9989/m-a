const STEPS = [
  {
    n: "I",
    title: "Listen",
    body:
      "We begin with a quiet conversation. No pitch decks, no jargon — just the questions that matter to your business right now.",
  },
  {
    n: "II",
    title: "Map",
    body:
      "We chart the compliance terrain you're standing on: where you are, where the deadlines are, and where the quiet risks live.",
  },
  {
    n: "III",
    title: "Build",
    body:
      "We design ledgers, filings and processes that fit your shape — not a template's. Every workpaper traces back to a senior CA.",
  },
  {
    n: "IV",
    title: "Steward",
    body:
      "We don't disappear after the engagement. Returns get filed, registers get maintained, and you get a single point of contact for life.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-ink text-bone py-24 lg:py-32 overflow-hidden"
    >
      {/* subtle backdrop */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgb(var(--amber)) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgb(var(--amber)) 0%, transparent 35%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-soft mb-5">
              ⌖ &nbsp;003 &nbsp;/&nbsp; Approach
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[72px] leading-[0.95] tracking-tightest font-medium">
              We work patiently,<br />
              <span className="italic font-light text-amber-soft">
                so your numbers
              </span>{" "}
              move with pace.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[15px] lg:text-[16px] leading-[1.6] text-bone/75 prose-j">
              Good accountancy is, at its best, invisible work — returns filed
              without drama, books closed cleanly, audits delivered on the day
              they were promised. That kind of quiet excellence isn&rsquo;t
              accidental. It is built four steps at a time.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-ink p-8 lg:p-9 min-h-[260px] flex flex-col justify-between transition-colors duration-500 hover:bg-ash"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-[13px] tracking-[0.3em] text-amber-soft">
                  {s.n}
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-bone/50">
                  Step {i + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[34px] lg:text-[42px] leading-[0.95] tracking-tightest font-medium mb-4 text-bone">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-bone/75 prose-j">
                  {s.body}
                </p>
              </div>

              {/* Hover line */}
              <span className="absolute left-8 right-8 bottom-8 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
