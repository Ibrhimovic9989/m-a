"use client";

import { useEffect, useState } from "react";

const ROTATING_WORDS = ["complexity", "compliance", "taxation", "audits", "growth"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2400
    );
    const ticker = () => {
      const d = new Date();
      const hh = d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(hh);
    };
    ticker();
    const c = setInterval(ticker, 60_000);
    return () => {
      clearInterval(t);
      clearInterval(c);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col pt-[100px] pb-6 lg:pt-[112px] lg:pb-8 overflow-hidden grain"
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
        <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        <div className="absolute left-1/2 top-0 bottom-0 vline opacity-25" />
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-12 flex-1 flex flex-col">
        {/* TOP STRIP: eyebrow left + meta module right */}
        <div className="flex items-start justify-between gap-6 mb-8 lg:mb-10">
          <div className="flex items-center gap-3 pt-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-smoke">
              Hyderabad &nbsp;·&nbsp; Est. 2012 &nbsp;·&nbsp; A Chartered Accountancy Practice
            </span>
          </div>

          {/* Right: tiny info card */}
          <div className="hidden md:flex flex-col items-end gap-1.5 text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-smoke">
                Hyderabad / IST
              </span>
              <span className="font-mono text-[12px] tracking-tight text-ink/80">
                {time || "—"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-smoke">
              <span className="w-6 h-px bg-ink/25" />
              No. 414, Downtown Mall, Lakdi Ka Pul
            </div>
          </div>
        </div>

        {/* MIDDLE: massive headline — full width, vertically centered */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-display tracking-ultra leading-[0.86] -mx-1">
            <span className="block text-[14.5vw] sm:text-[12.5vw] lg:text-[10.5vw] xl:text-[9.8vw] font-medium">
              Steady hands
            </span>
            <span className="block text-[14.5vw] sm:text-[12.5vw] lg:text-[10.5vw] xl:text-[9.8vw] font-medium">
              for{" "}
              <span className="relative inline-flex italic font-light">
                <span className="relative">
                  <span
                    key={wordIdx}
                    className="inline-block animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)] text-amber"
                  >
                    {ROTATING_WORDS[wordIdx]}
                  </span>
                </span>
                <span className="absolute -right-2 top-1 h-[0.65em] w-[2px] bg-amber animate-shimmer" />
              </span>
              .
            </span>
          </h1>
        </div>

        {/* BOTTOM: 3-column ledger — lede / begin / stats */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Lede */}
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mb-3">
              ⌖ &nbsp;The practice
            </p>
            <p className="text-[17px] lg:text-[18.5px] leading-[1.65] text-ink/85 prose-j max-w-[460px]">
              A thirteen-year-old chartered accountancy firm in Hyderabad,
              steering businesses and individuals through audit, taxation, GST
              and compliance with the same patient rigour we'd bring to our own
              books.
            </p>
          </div>

          {/* Begin */}
          <div className="lg:col-span-4 lg:col-start-5 flex flex-col items-start gap-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-smoke">
              ⌖ &nbsp;Begin
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ink text-bone text-[14px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
              >
                Speak with the firm
                <span className="relative w-4 h-4 rounded-full bg-bone/15 group-hover:bg-ink/15 flex items-center justify-center transition-colors duration-500">
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
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-2 py-3 text-[14px] tracking-tight border-b border-ink/30 hover:border-ink transition-colors duration-300"
              >
                See our services
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                >
                  <path
                    d="M6 2v8M2 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col items-start lg:items-end gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
              ⌖ &nbsp;A decade, in numbers
            </p>
            <div className="grid grid-cols-3 gap-5 w-full lg:w-auto">
              {[
                { v: "13+", k: "Years" },
                { v: "20.5K+", k: "Engagements" },
                { v: "07", k: "Disciplines" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="lg:text-right border-l lg:border-l-0 lg:border-r last:border-r-0 border-ink/15 lg:pr-4 lg:last:pr-0 pl-4 lg:pl-0 first:pl-0 first:border-l-0"
                >
                  <div className="text-ink text-[26px] lg:text-[32px] font-medium tracking-tight leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-smoke">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="mt-6 lg:mt-8 flex items-end justify-between gap-4 pt-4 border-t border-ink/10">
          <span className="text-[10px] uppercase tracking-[0.28em] text-smoke">
            001 / Home
          </span>
          <div className="hidden md:flex items-center gap-3 text-smoke">
            <span className="text-[10px] uppercase tracking-[0.28em]">Scroll to continue</span>
            <div className="w-12 h-px bg-gradient-to-r from-ink/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
