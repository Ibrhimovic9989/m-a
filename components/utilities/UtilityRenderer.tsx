import type { UtilitySection } from "@/lib/utilities-meta";

export default function UtilityRenderer({
  sections,
}: {
  sections: UtilitySection[];
}) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} index={i} />
      ))}
    </div>
  );
}

function SectionBlock({
  section,
  index,
}: {
  section: UtilitySection;
  index: number;
}) {
  const tag = String(index + 1).padStart(2, "0");

  if (section.kind === "table") {
    return (
      <section>
        {section.caption && (
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-[10px] text-amber-dark tracking-[0.22em]">
              {tag}
            </span>
            <h3 className="font-display text-[20px] lg:text-[24px] tracking-tightest font-medium">
              {section.caption}
            </h3>
          </div>
        )}
        <div className="overflow-x-auto border border-ink/[0.08] bg-bone">
          <table className="w-full text-[13.5px] lg:text-[14px]">
            <thead>
              <tr className="bg-ivory border-b border-ink/[0.08]">
                {section.headers.map((h, hi) => (
                  <th
                    key={hi}
                    className="text-left px-4 lg:px-5 py-3 lg:py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/70 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={`border-b border-ink/[0.06] last:border-b-0 ${
                    ri % 2 === 1 ? "bg-ivory/40" : ""
                  } hover:bg-amber/[0.05] transition-colors`}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 lg:px-5 py-3 lg:py-3.5 align-top leading-[1.45] ${
                        ci === 0 ? "text-ink" : "text-ink/85"
                      } ${typeof cell === "number" ? "font-mono tabular-nums" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {section.footnote && (
          <p className="mt-3 text-[12.5px] leading-[1.6] text-ink/65 italic prose-j max-w-[820px]">
            {section.footnote}
          </p>
        )}
      </section>
    );
  }

  if (section.kind === "keyvalue") {
    return (
      <section>
        {section.caption && (
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-[10px] text-amber-dark tracking-[0.22em]">
              {tag}
            </span>
            <h3 className="font-display text-[20px] lg:text-[24px] tracking-tightest font-medium">
              {section.caption}
            </h3>
          </div>
        )}
        <dl className="border border-ink/[0.08] divide-y divide-ink/[0.06] bg-bone">
          {section.pairs.map((p, pi) => (
            <div
              key={pi}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 lg:px-5 py-3.5"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65 md:col-span-1">
                {p.label}
              </dt>
              <dd className="text-[14px] text-ink/90 md:col-span-2">{p.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    );
  }

  if (section.kind === "external") {
    return (
      <section className="bg-ivory border border-ink/[0.08] p-6 lg:p-8">
        <div className="flex items-baseline gap-4 mb-3">
          <span className="font-mono text-[10px] text-amber-dark tracking-[0.22em]">
            {tag}
          </span>
          <h3 className="font-display text-[20px] lg:text-[24px] tracking-tightest font-medium">
            {section.title}
          </h3>
        </div>
        <div className="space-y-3 text-[14px] lg:text-[15px] leading-[1.65] text-ink/80 prose-j max-w-[820px] mb-5">
          {section.body.map((p, pi) => (
            <p key={pi}>{p}</p>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {section.links.map((l, li) => (
            <li key={li}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 border border-ink/15 rounded-full text-[12.5px] tracking-tight text-ink/85 hover:bg-ink hover:text-bone hover:border-ink transition-all duration-300"
              >
                {l.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  // note
  return (
    <section className="border-l-2 border-amber pl-5 lg:pl-6 py-1">
      {section.title && (
        <div className="flex items-baseline gap-4 mb-3">
          <span className="font-mono text-[10px] text-amber-dark tracking-[0.22em]">
            {tag}
          </span>
          <h3 className="font-display text-[18px] lg:text-[22px] tracking-tightest font-medium">
            {section.title}
          </h3>
        </div>
      )}
      <div className="space-y-3 text-[14px] lg:text-[15px] leading-[1.65] text-ink/80 prose-j max-w-[820px]">
        {section.body.map((p, pi) => (
          <p key={pi}>{p}</p>
        ))}
      </div>
    </section>
  );
}
