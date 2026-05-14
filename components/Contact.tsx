"use client";

import { useEffect, useMemo } from "react";
import { getCalApi } from "@calcom/embed-react";

// Cal.com event link. Override via NEXT_PUBLIC_CAL_LINK in Vercel.
// Format: "<username>/<event-type-slug>".
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "info-zydfog/30min";
const CAL_NAMESPACE = "30min";

const PHONES = ["+91 99859 09898", "+91 75692 33364", "+91 91605 82865"];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function nextWorkingDays(count: number): Date[] {
  const out: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);
  while (out.length < count) {
    if (cursor.getDay() !== 0) out.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

export default function Contact() {
  const days = useMemo(() => nextWorkingDays(5), []);

  // Initialise the Cal.com modal: load the script, set theme + brand
  // colours so the popup picks up our amber palette and dark surface
  // instead of Cal.com's default blue/white.
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;

      const apply = () => {
        const t = document.documentElement.getAttribute("data-theme");
        const theme: "light" | "dark" = t === "dark" ? "dark" : "light";
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme,
          // hideBranding is honoured only on Cal.com paid plans —
          // setting it is harmless on free, and works as soon as the
          // workspace is upgraded.
          // @ts-expect-error — present in the Cal.com runtime API
          hideBranding: true,
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#B8853A",
              "cal-brand-emphasis": "#7C5826",
              "cal-brand-text": "#FFFFFF",
            },
            dark: {
              "cal-brand": "#D9B07A",
              "cal-brand-emphasis": "#F2EDE3",
              "cal-brand-text": "#0E0E10",
            },
          },
        });
      };

      apply();

      observer = new MutationObserver(apply);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-ink text-bone py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--amber) / 0.18) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-amber-soft mb-5">
              ⌖ &nbsp;006 &nbsp;/&nbsp; Appointment
            </p>
            <h2 className="font-display text-[44px] sm:text-[60px] lg:text-[84px] leading-[0.92] tracking-ultra font-medium">
              Appointment{" "}
              <span className="italic font-light text-amber-soft">system.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-[17px] lg:text-[18.5px] leading-[1.65] text-bone/80 prose-j">
              Pick a date. Pick a time. A senior partner walks through it with
              you. The booking, a calendar invite and an automated reminder
              follow — in that order.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Booking CTA panel — fully on-theme */}
          <div className="lg:col-span-8">
            <div className="relative rounded-lg overflow-hidden border border-bone/15 p-8 lg:p-12">
              {/* Decorative grid backdrop */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(var(--bone)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--bone)) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                  }}
                />
              </div>

              <div className="relative">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-mono text-[11px] text-amber-soft tracking-[0.22em]">
                    §A &nbsp;·&nbsp; Schedule a consultation
                  </span>
                  <span className="font-mono text-[11px] text-bone/45 tracking-[0.22em]">
                    30 min &nbsp;·&nbsp; IST
                  </span>
                </div>

                <h3 className="font-display text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.02] tracking-tightest font-medium mb-7">
                  Thirty minutes,
                  <br />
                  <span className="italic font-light text-amber-soft">
                    with a senior partner.
                  </span>
                </h3>

                <p className="text-[16px] lg:text-[18.5px] leading-[1.65] text-bone/80 prose-j max-w-[560px] mb-10">
                  A short, focused call to review your situation, discuss the
                  next steps, and follow up with a written summary by the end
                  of the day. Booking, calendar invite and automated reminder
                  are handled by Cal.com.
                </p>

                {/* Decorative date strip */}
                <div className="mb-10">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-bone/50 mb-4">
                    ⌖ Next available
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {days.map((d) => (
                      <div
                        key={d.toISOString()}
                        className="flex flex-col items-center justify-center py-3 px-3.5 rounded-md border border-bone/20 min-w-[66px] bg-bone/[0.02]"
                      >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-bone/55">
                          {DAY_NAMES[d.getDay()]}
                        </span>
                        <span className="font-display text-[22px] font-medium tracking-tight mt-1 leading-none text-bone">
                          {d.getDate()}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-bone/55 mt-1">
                          {MON_NAMES[d.getMonth()]}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-center py-3 px-5 rounded-md border border-dashed border-bone/25 text-[11px] uppercase tracking-[0.2em] text-bone/55">
                      + more in the overlay
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  {/* The button below has data-cal-* attributes that
                      Cal.com's embed script auto-binds — clicking opens
                      the booking flow as a modal overlay rather than
                      embedding it in the page. */}
                  <button
                    type="button"
                    data-cal-namespace={CAL_NAMESPACE}
                    data-cal-link={CAL_LINK}
                    data-cal-config='{"layout":"month_view"}'
                    className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-bone text-ink text-[15px] tracking-tight hover:bg-amber transition-all duration-500"
                  >
                    Book a consultation
                    <span className="w-5 h-5 rounded-full bg-ink/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
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
                  </button>
                  <p className="text-[13.5px] text-bone/65 max-w-[320px] leading-[1.55]">
                    Opens in a quick-book overlay. Calendar invite and
                    reminder arrive automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meta column — brochure, address, phones, email, hours */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-9">
            <a
              href="#"
              className="group flex items-start gap-4 p-5 rounded-md border border-bone/15 hover:border-amber-soft transition-colors duration-500"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-bone/5 group-hover:bg-amber-soft/20 flex items-center justify-center transition-colors duration-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1.5v9.5M3.5 6.5L8 11l4.5-4.5M2 14h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-1.5">
                  ⌖ Brochure
                </p>
                <p className="text-[16px] tracking-tight leading-[1.4] text-bone">
                  Download the firm&rsquo;s corporate profile
                </p>
                <p className="text-[13.5px] text-bone/65 mt-1.5 leading-[1.55]">
                  A bird&rsquo;s-eye view of every service we offer.
                </p>
              </div>
            </a>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Head Office
              </p>
              <p className="text-[16.5px] leading-[1.65] text-bone/85">
                Office No. 414, 4<sup>th</sup> Floor,<br />
                Downtown Mall, Lakdi Ka Pul,<br />
                Hyderabad, Telangana — IND
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Speak directly
              </p>
              <ul className="space-y-2">
                {PHONES.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="group inline-flex items-center gap-3 text-[16.5px] text-bone/85 hover:text-amber-soft transition-colors duration-300"
                    >
                      <span className="font-mono text-[12px] text-bone/45 group-hover:text-amber-soft transition-colors duration-300">
                        →
                      </span>
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Write to us
              </p>
              <a
                href="mailto:info@muneerassociates.in"
                className="text-[18px] lg:text-[20px] tracking-tight text-bone hover:text-amber-soft transition-colors duration-300 border-b border-bone/20 hover:border-amber-soft pb-1"
              >
                info@muneerassociates.in
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Hours
              </p>
              <p className="text-[15.5px] leading-[1.65] text-bone/80">
                Mon — Sat &nbsp;·&nbsp; 10:00 — 19:00 IST<br />
                Sundays &amp; public holidays — by appointment
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
