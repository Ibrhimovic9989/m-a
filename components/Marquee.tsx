const TOKENS = [
  "Direct Tax",
  "GST",
  "Statutory Audit",
  "ROC",
  "Internal Audit",
  "TDS",
  "Income Tax",
  "Bookkeeping",
  "Incorporations",
  "Advisory",
  "Indirect Tax",
  "Compliance",
];

export default function Marquee() {
  const items = [...TOKENS, ...TOKENS];
  return (
    <section className="border-y border-ink/[0.08] bg-ivory overflow-hidden">
      <div className="relative flex whitespace-nowrap py-5">
        <div className="flex animate-marquee gap-10 pr-10">
          {items.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-10 text-[12px] uppercase tracking-[0.18em] text-ink/65"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
