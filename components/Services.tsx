"use client";

import { useState } from "react";

type Service = {
  num: string;
  title: string;
  blurb: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Registrations & Incorporations",
    blurb:
      "From a single proprietorship to a private limited, we handle the paperwork, the filings and the small but compounding decisions that shape a business in its first year.",
    bullets: [
      "Private Limited / LLP / OPC formation",
      "MSME, Shop & Establishment, Trade licences",
      "Trust, Society and Section 8 registrations",
    ],
  },
  {
    num: "02",
    title: "Accounting & Bookkeeping",
    blurb:
      "Clean books, on time, every month. We design ledgers around how your business actually runs — not how a template thinks it should.",
    bullets: [
      "Monthly close, MIS and management dashboards",
      "Cloud-based bookkeeping (Tally, Zoho, QuickBooks)",
      "Payroll, reimbursements and reconciliations",
    ],
  },
  {
    num: "03",
    title: "Audit & Assurance",
    blurb:
      "Statutory, internal, tax and stock audits delivered with a senior-led team. Our reports read clearly because the work behind them was done thoroughly.",
    bullets: [
      "Statutory & Internal Audits",
      "Tax Audit u/s 44AB and Stock Audits",
      "Limited reviews and concurrent audits",
    ],
  },
  {
    num: "04",
    title: "GST Filing & Compliance",
    blurb:
      "India's indirect tax regime is a moving target. We file your returns, defend your input credits and keep notices off your desk.",
    bullets: [
      "GSTR-1, GSTR-3B, GSTR-9 filings",
      "Input tax credit reconciliation",
      "Department notices and assessments",
    ],
  },
  {
    num: "05",
    title: "Taxation & Income Tax",
    blurb:
      "Direct tax planning that's lawful, considered and built for the long arc — for individuals, partnerships, companies and NRIs.",
    bullets: [
      "ITR for individuals, firms and corporates",
      "Tax planning, advance tax and TDS",
      "Scrutiny, appeals and DRP representation",
    ],
  },
  {
    num: "06",
    title: "ROC & Secretarial",
    blurb:
      "Quiet, on-time MCA compliance — the kind that doesn't make headlines but keeps directors and companies in good standing.",
    bullets: [
      "Annual filings (AOC-4, MGT-7)",
      "Director additions, share transfers, charges",
      "Strike-off, revival and DPT-3 / DIR-3 KYC",
    ],
  },
  {
    num: "07",
    title: "Advisory & Other Services",
    blurb:
      "When the question is bigger than a return — valuations, structuring, due diligence — we sit on your side of the table.",
    bullets: [
      "Project reports, CMA & bank financing",
      "Due diligence and business valuations",
      "Virtual CFO and growth-stage advisory",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

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
              Seven <span className="italic font-light text-amber-dark">disciplines.</span> One firm.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[17px] lg:text-[18.5px] leading-[1.65] text-ink/85 prose-j">
              Every practice area is led by experienced personnel with a decade
              of operating context — so the advice you receive is considered,
              not outsourced.
            </p>
          </div>
        </div>

        {/* Services list — editorial accordion */}
        <div className="border-t border-ink/15">
          {SERVICES.map((s, i) => {
            const isOpen = active === i;
            return (
              <div
                key={s.num}
                className={`border-b border-ink/15 transition-colors duration-700 ${
                  isOpen ? "bg-ivory" : ""
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full text-left grid grid-cols-12 gap-4 lg:gap-6 items-baseline py-7 lg:py-8 px-2 lg:px-5 group"
                >
                  <span className="col-span-2 lg:col-span-1 text-[12px] tracking-[0.2em] text-smoke font-mono">
                    {s.num}
                  </span>
                  <h3
                    className={`col-span-8 lg:col-span-7 text-[22px] sm:text-[28px] lg:text-[34px] tracking-tightest leading-[1.05] transition-colors duration-500 ${
                      isOpen ? "text-ink" : "text-ink/75 group-hover:text-ink"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <span className="hidden lg:block lg:col-span-3 text-[11px] uppercase tracking-[0.2em] text-smoke">
                    {isOpen ? "Close" : "Expand"}
                  </span>
                  <span className="col-span-2 lg:col-span-1 flex justify-end">
                    <span
                      className={`relative w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center transition-all duration-500 ${
                        isOpen ? "bg-ink border-ink" : "group-hover:border-ink/60"
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

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 px-2 lg:px-5 pb-9">
                      <div className="col-start-3 col-span-10 lg:col-start-2 lg:col-span-7">
                        <p className="text-[18px] lg:text-[20px] leading-[1.6] text-ink/85 mb-7 prose-j">
                          {s.blurb}
                        </p>
                      </div>
                      <div className="col-start-3 col-span-10 lg:col-start-9 lg:col-span-4">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-4">
                          What&rsquo;s included
                        </p>
                        <ul className="space-y-3">
                          {s.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-[16px] leading-[1.55] text-ink/85"
                            >
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
