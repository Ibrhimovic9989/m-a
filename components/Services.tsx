"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_CATALOG } from "@/lib/services-catalog";

export default function Services() {
  const [active, setActive] = useState(0);
  const totalCount = SERVICES_CATALOG.reduce(
    (n, c) => n + c.items.length,
    0
  );

  return (
    <section id="services" className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;002 &nbsp;/&nbsp; Services
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[64px] leading-[1.02] tracking-tightest font-medium">
              Eight disciplines.{" "}
              <span className="italic font-light text-amber-dark">
                One firm.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <div>
              <p className="text-[17px] lg:text-[18.5px] leading-[1.65] text-ink/85 prose-j">
                Every practice area is led by experienced personnel with a
                decade of operating context — so the advice you receive is
                considered, not outsourced.
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.22em] text-smoke">
                <span className="text-amber-dark">{totalCount}+</span> &nbsp;
                line items &nbsp;·&nbsp; updated{" "}
                {new Date().toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Categorised accordion */}
        <div className="border-t border-ink/15">
          {SERVICES_CATALOG.map((cat, i) => {
            const isOpen = active === i;
            const featuredCount = cat.items.filter((s) => s.featured).length;
            return (
              <div
                key={cat.slug}
                className={`border-b border-ink/15 transition-colors duration-700 ${
                  isOpen ? "bg-ivory" : ""
                }`}
              >
                {/* Row */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full text-left grid grid-cols-12 gap-4 lg:gap-6 items-baseline py-7 lg:py-8 px-2 lg:px-5 group"
                >
                  <span className="col-span-2 lg:col-span-1 text-[12px] tracking-[0.2em] text-smoke font-mono">
                    {cat.num}
                  </span>
                  <h3
                    className={`col-span-8 lg:col-span-7 text-[22px] sm:text-[28px] lg:text-[34px] tracking-tightest leading-[1.05] transition-colors duration-500 ${
                      isOpen ? "text-ink" : "text-ink/75 group-hover:text-ink"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <span className="hidden lg:flex lg:col-span-3 items-baseline gap-3 text-[11px] uppercase tracking-[0.2em] text-smoke">
                    <span className="font-mono text-amber-dark">
                      {String(cat.items.length).padStart(2, "0")}
                    </span>
                    services
                    {featuredCount > 0 && (
                      <span className="text-ink/35 hidden xl:inline">
                        ·&nbsp;{featuredCount} documented
                      </span>
                    )}
                  </span>
                  <span className="col-span-2 lg:col-span-1 flex justify-end">
                    <span
                      className={`relative w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-ink border-ink"
                          : "group-hover:border-ink/60"
                      }`}
                    >
                      <span
                        className={`absolute w-3 h-px ${
                          isOpen ? "bg-bone" : "bg-ink"
                        } transition-colors duration-500`}
                      />
                      <span
                        className={`absolute w-3 h-px transition-all duration-500 ${
                          isOpen ? "bg-bone rotate-0" : "bg-ink rotate-90"
                        }`}
                      />
                    </span>
                  </span>
                </button>

                {/* Expanded panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 px-2 lg:px-5 pb-10">
                      {/* Blurb */}
                      <div className="col-start-3 col-span-10 lg:col-start-2 lg:col-span-9">
                        <p className="text-[16px] lg:text-[18px] leading-[1.6] text-ink/85 mb-7 prose-j max-w-[860px]">
                          {cat.blurb}
                        </p>
                      </div>

                      {/* Service grid — flows across columns */}
                      <div className="col-start-3 col-span-10 lg:col-start-2 lg:col-span-10">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-5">
                          ⌖ Catalog
                        </p>
                        <ul className="columns-1 sm:columns-2 lg:columns-3 gap-x-8 lg:gap-x-10 [column-fill:_balance]">
                          {cat.items.map((it, j) => {
                            const inner = (
                              <span className="flex gap-3 text-[14.5px] leading-[1.45] text-ink/85">
                                <span
                                  className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                                    it.featured ? "bg-amber" : "bg-ink/30"
                                  }`}
                                />
                                <span className="flex-1">
                                  {it.name}
                                  {it.slug && (
                                    <span
                                      aria-label="Read more"
                                      className="ml-1.5 inline-block align-middle text-amber-dark text-[10px] tracking-[0.18em] uppercase opacity-70 group-hover/item:opacity-100 transition-opacity"
                                    >
                                      ↗
                                    </span>
                                  )}
                                  {it.featured && !it.slug && (
                                    <span
                                      title="Detailed documentation available"
                                      aria-label="Detailed documentation available"
                                      className="ml-1.5 inline-block align-middle text-amber-dark text-[10px] tracking-[0.18em] uppercase opacity-70"
                                    >
                                      ⌖
                                    </span>
                                  )}
                                </span>
                              </span>
                            );
                            return (
                              <li
                                key={j}
                                className="break-inside-avoid mb-2.5"
                              >
                                {it.slug ? (
                                  <Link
                                    href={`/services/${it.slug}`}
                                    className="group/item block rounded-sm -mx-1.5 px-1.5 py-0.5 hover:bg-ink/[0.04] [&_.flex-1]:group-hover/item:text-ink transition-colors duration-200"
                                  >
                                    {inner}
                                  </Link>
                                ) : (
                                  inner
                                )}
                              </li>
                            );
                          })}
                        </ul>

                        {featuredCount > 0 && (
                          <p className="mt-7 text-[11.5px] tracking-tight text-smoke leading-[1.5] max-w-[560px]">
                            <span className="text-amber-dark">↗</span>{" "}
                            Items marked above are documented in full —
                            eligibility, scope, our package and the process.
                            Click to read the brief.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 lg:mt-16 max-w-[820px] text-[14px] leading-[1.6] text-smoke prose-j">
          The catalog above is comprehensive but not exhaustive — engagements
          frequently combine across categories. If you don&rsquo;t see what you
          need listed, ask: most cross-cutting work falls naturally into a
          retainer or a project-based brief.
        </p>
      </div>
    </section>
  );
}
