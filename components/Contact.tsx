"use client";

import { useEffect, useState } from "react";

// Cal.com event link rendered inside the booking iframe.
// Override per environment via NEXT_PUBLIC_CAL_LINK in Vercel.
// Format: "<username>/<event-type-slug>".
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "ca-muneer-ahmed/30min";

const PHONES = ["+91 99859 09898", "+91 75692 33364", "+91 91605 82865"];

export default function Contact() {
  const [calTheme, setCalTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const update = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setCalTheme(t === "dark" ? "dark" : "light");
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
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
            <p className="text-[15px] lg:text-[16px] leading-[1.6] text-bone/75 prose-j">
              Pick a date. Pick a time. A senior partner walks through it with
              you. The booking, a calendar invite and an automated reminder
              follow — in that order.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Cal.com embed */}
          <div className="lg:col-span-8">
            {/* Embed frame — subtle border + drop shadow so the iframe feels
                seated in the page rather than tacked on. */}
            <div className="relative rounded-lg overflow-hidden border border-bone/15 shadow-[0_30px_60px_-20px_rgb(0_0_0_/_0.35)] bg-bone">
              <iframe
                key={calTheme}
                src={`https://cal.com/${CAL_LINK}?embed=true&theme=${calTheme}&layout=month_view`}
                title="Schedule an appointment with Muneer & Associates"
                className="block w-full h-[760px] bg-bone"
                allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-bone/45 flex items-center gap-2">
              <span className="w-6 h-px bg-bone/30" />
              Booking handled by Cal.com &nbsp;·&nbsp; Calendar invite + reminder
              follow automatically
            </p>
          </div>

          {/* Meta column */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-9">
            {/* Brochure CTA */}
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
                <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-1">
                  ⌖ Brochure
                </p>
                <p className="text-[14.5px] tracking-tight leading-[1.4] text-bone">
                  Download the firm&rsquo;s corporate profile
                </p>
                <p className="text-[12px] text-bone/55 mt-1 leading-[1.5]">
                  A bird&rsquo;s-eye view of every service we offer.
                </p>
              </div>
            </a>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Head Office
              </p>
              <p className="text-[15px] leading-[1.6] text-bone/85">
                Office No. 414, 4<sup>th</sup> Floor,<br />
                Downtown Mall, Lakdi Ka Pul,<br />
                Hyderabad, Telangana — IND
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Speak directly
              </p>
              <ul className="space-y-1.5">
                {PHONES.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="group inline-flex items-center gap-3 text-[15px] text-bone/85 hover:text-amber-soft transition-colors duration-300"
                    >
                      <span className="font-mono text-[11px] text-bone/45 group-hover:text-amber-soft transition-colors duration-300">
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
                className="text-[17px] lg:text-[19px] tracking-tight text-bone hover:text-amber-soft transition-colors duration-300 border-b border-bone/20 hover:border-amber-soft pb-1"
              >
                info@muneerassociates.in
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Hours
              </p>
              <p className="text-[14px] leading-[1.6] text-bone/75">
                Mon — Sat &nbsp;·&nbsp; 10:00 — 19:00 IST<br />
                Sundays &amp; public holidays — by appointment
              </p>
            </div>

            {/* Cal.com setup hint — visible only at dev time via a comment.
                Replace CAL_LINK above with your real cal.com event slug. */}
          </aside>
        </div>
      </div>
    </section>
  );
}
