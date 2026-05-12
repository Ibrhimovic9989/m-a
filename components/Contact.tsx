"use client";

import { useState } from "react";

const PHONES = ["+91 99859 09898", "+91 75692 33364", "+91 91605 82865"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", note: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-ink text-bone py-24 lg:py-32 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-soft mb-5">
              ⌖ &nbsp;006 &nbsp;/&nbsp; Contact
            </p>
            <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[92px] leading-[0.9] tracking-ultra font-medium">
              Begin a<br />
              <span className="italic font-light text-amber-soft">conversation.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-[14px] leading-[1.6] text-bone/65 text-balance">
              Tell us where you are and what you need next. A senior member of
              the firm responds within one business day — usually sooner.
            </p>
          </div>
        </div>

        {/* Two-col: form + meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 space-y-7"
          >
            <Field
              label="Your name"
              num="01"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <Field
                label="Email"
                num="02"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <Field
                label="Phone"
                num="03"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
            </div>
            <Field
              label="What can we help with"
              num="04"
              value={form.topic}
              onChange={(v) => setForm({ ...form, topic: v })}
              placeholder="e.g. GST registration, statutory audit, ITR…"
            />
            <Field
              label="A few notes"
              num="05"
              value={form.note}
              onChange={(v) => setForm({ ...form, note: v })}
              textarea
            />

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-bone text-ink text-[12.5px] tracking-tight hover:bg-amber transition-all duration-500"
              >
                {sent ? "Thank you — we'll be in touch" : "Send the brief"}
                <span className="w-4 h-4 rounded-full bg-ink/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
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
              <p className="text-[11px] text-bone/50 max-w-[280px]">
                We never share your details. By sending you agree to be
                contacted regarding your enquiry.
              </p>
            </div>
          </form>

          {/* Meta column */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-9">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Head Office
              </p>
              <p className="text-[15px] leading-[1.55] text-bone/85">
                Office No. 414, 4<sup>th</sup> Floor,<br />
                Downtown Mall, Lakdi Ka Pul,<br />
                Hyderabad, Telangana — IND
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Speak directly
              </p>
              <ul className="space-y-1.5">
                {PHONES.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="group inline-flex items-center gap-3 text-[15px] text-bone/85 hover:text-amber-soft transition-colors duration-300"
                    >
                      <span className="font-mono text-[10px] text-bone/40 group-hover:text-amber-soft transition-colors duration-300">
                        →
                      </span>
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Write to us
              </p>
              <a
                href="mailto:info@muneerassociates.in"
                className="text-[16px] lg:text-[18px] tracking-tight text-bone hover:text-amber-soft transition-colors duration-300 border-b border-bone/20 hover:border-amber-soft pb-1"
              >
                info@muneerassociates.in
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-soft mb-3">
                ⌖ Hours
              </p>
              <p className="text-[13px] leading-[1.6] text-bone/75">
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

function Field({
  label,
  num,
  value,
  onChange,
  type = "text",
  placeholder,
  textarea = false,
}: {
  label: string;
  num: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block group">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-[10px] text-bone/40">{num}</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-bone/55 group-focus-within:text-amber-soft transition-colors duration-300">
          {label}
        </span>
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[16px] lg:text-[18px] py-2.5 resize-none transition-colors duration-300 placeholder:text-bone/25"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[16px] lg:text-[18px] py-2.5 transition-colors duration-300 placeholder:text-bone/25"
        />
      )}
    </label>
  );
}
