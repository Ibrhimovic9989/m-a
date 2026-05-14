"use client";

import { useMemo, useState } from "react";

const PHONES = ["+91 99859 09898", "+91 75692 33364", "+91 91605 82865"];

const TIMES = ["10:30", "11:30", "14:00", "15:30", "17:00"];

const TOPICS = [
  "Registrations & Incorporations",
  "Accounting & Bookkeeping",
  "Audit & Assurance",
  "GST Filing & Compliance",
  "Income Tax & Direct Taxation",
  "ROC & Secretarial",
  "Advisory / Virtual CFO",
  "Other",
];

function nextWorkingDays(count: number): Date[] {
  const out: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1); // start tomorrow
  while (out.length < count) {
    const d = cursor.getDay();
    if (d !== 0) {
      out.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

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

export default function Contact() {
  const days = useMemo(() => nextWorkingDays(8), []);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const isOther = topic === "Other";
  const canSubmit =
    date && time && topic && (!isOther || customTopic.trim()) && name && email;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 6000);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
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
              Pick a date. Pick a topic. Walk through it with a senior partner.
              A confirmation, a Google Calendar invite and an automated
              reminder follow — in that order.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Booking flow */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 space-y-12"
          >
            {/* Step 01 — Date */}
            <Step n="01" label="Pick a date">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {days.map((d) => {
                  const id = d.toISOString().slice(0, 10);
                  const active = id === date;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setDate(id)}
                      className={`group flex flex-col items-center justify-center py-3 px-2 rounded-md border transition-all duration-300 ${
                        active
                          ? "bg-bone text-ink border-bone"
                          : "border-bone/20 hover:border-amber-soft text-bone/85"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] opacity-65">
                        {DAY_NAMES[d.getDay()]}
                      </span>
                      <span className="font-display text-[22px] font-medium tracking-tight mt-1 leading-none">
                        {d.getDate()}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] opacity-65 mt-1">
                        {MON_NAMES[d.getMonth()]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Step>

            {/* Step 02 — Time */}
            <Step n="02" label="Pick a time slot (IST)">
              <div className="flex flex-wrap gap-2.5">
                {TIMES.map((t) => {
                  const active = t === time;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`px-5 py-2.5 rounded-full text-[14px] tracking-tight border transition-all duration-300 ${
                        active
                          ? "bg-bone text-ink border-bone"
                          : "border-bone/20 hover:border-amber-soft text-bone/85"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </Step>

            {/* Step 03 — Topic */}
            <Step n="03" label="What's on the agenda">
              <div className="relative">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[17px] lg:text-[19px] py-3 appearance-none cursor-pointer text-bone"
                >
                  <option value="" disabled className="bg-ink text-bone">
                    Select a topic…
                  </option>
                  {TOPICS.map((t) => (
                    <option key={t} value={t} className="bg-ink text-bone">
                      {t}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-amber-soft">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              {isOther && (
                <input
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="Tell us in a few words…"
                  className="mt-4 w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[16px] lg:text-[18px] py-3 transition-colors duration-300 placeholder:text-bone/30"
                />
              )}
            </Step>

            {/* Step 04 — Contact */}
            <Step n="04" label="Your details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Field
                  placeholder="Full name"
                  value={name}
                  onChange={setName}
                />
                <Field
                  placeholder="Phone (optional)"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                />
                <div className="md:col-span-2">
                  <Field
                    placeholder="Email address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                  />
                </div>
              </div>
            </Step>

            {/* Step 05 — Notes */}
            <Step n="05" label="A few notes (optional)">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Anything we should review before the call…"
                className="w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[16px] lg:text-[18px] py-3 resize-none transition-colors duration-300 placeholder:text-bone/30"
              />
            </Step>

            {/* Submit */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={!canSubmit}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-bone text-ink text-[14px] tracking-tight hover:bg-amber transition-all duration-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {confirmed ? "Confirmed — invite on its way" : "Confirm appointment"}
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
              <p className="text-[12.5px] text-bone/55 max-w-[340px] leading-[1.5]">
                You will receive a Google Calendar invite and an automated
                reminder one working day before the appointment.
              </p>
            </div>
          </form>

          {/* Meta column */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-9">
            {/* Brochure */}
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
                      <span className="font-mono text-[11px] text-bone/40 group-hover:text-amber-soft transition-colors duration-300">
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
          </aside>
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono text-[11px] text-amber-soft tracking-[0.2em]">
          {n}
        </span>
        <span className="text-[11px] uppercase tracking-[0.24em] text-bone/65">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function Field({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-bone/20 focus:border-amber-soft outline-none text-[16px] lg:text-[18px] py-3 transition-colors duration-300 placeholder:text-bone/30"
    />
  );
}
