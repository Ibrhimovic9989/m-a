"use client";

import { useMemo, useState } from "react";
import {
  CATEGORY_META,
  EventCategory,
  FY_MONTH_ORDER,
  getEventsForMonth,
  MONTHS,
  monthLabel,
} from "@/lib/compliance-calendar";

const ALL_CATEGORIES: EventCategory[] = [
  "gst",
  "income-tax",
  "tds",
  "companies-act",
  "llp",
  "labour",
  "fema",
  "fssai",
];

function getCurrentMonth(): number {
  return new Date().getMonth() + 1;
}

export default function CalendarBrowser() {
  const [month, setMonth] = useState<number>(getCurrentMonth());
  const [activeCats, setActiveCats] = useState<EventCategory[] | null>(null);

  const events = useMemo(() => getEventsForMonth(month), [month]);

  const filteredEvents = useMemo(() => {
    if (!activeCats || activeCats.length === 0) return events;
    return events.filter((e) => activeCats.includes(e.category));
  }, [events, activeCats]);

  // Group events by day for the editorial render.
  const byDay = useMemo(() => {
    const m = new Map<number, typeof filteredEvents>();
    for (const e of filteredEvents) {
      if (!m.has(e.day)) m.set(e.day, []);
      m.get(e.day)!.push(e);
    }
    return Array.from(m.entries()).sort(([a], [b]) => a - b);
  }, [filteredEvents]);

  const totalForMonth = events.length;
  const shownCount = filteredEvents.length;

  const toggleCategory = (cat: EventCategory) => {
    setActiveCats((prev) => {
      const current = prev ?? [];
      if (current.includes(cat)) {
        const next = current.filter((c) => c !== cat);
        return next.length === 0 ? null : next;
      }
      return [...current, cat];
    });
  };

  const clearFilters = () => setActiveCats(null);

  return (
    <>
      {/* Month selector + category filter */}
      <section className="border-y border-ink/[0.08] bg-bone/60 backdrop-blur-sm sticky top-[80px] z-30">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-5 lg:py-6">
          {/* Month tabs */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto -mx-2 px-2 scrollbar-none">
            <span className="text-[10px] uppercase tracking-[0.24em] text-smoke shrink-0 mr-2">
              ⌖ Month
            </span>
            {FY_MONTH_ORDER.map((m) => {
              const active = m === month;
              return (
                <button
                  key={m}
                  onClick={() => setMonth(m)}
                  className={`shrink-0 px-3.5 py-1.5 text-[12px] tracking-tight rounded-full border transition-all duration-300 ${
                    active
                      ? "bg-ink text-bone border-ink"
                      : "bg-transparent text-ink/65 border-ink/20 hover:border-ink/60 hover:text-ink"
                  }`}
                >
                  {monthLabel(m)}
                </button>
              );
            })}
          </div>

          {/* Category chips */}
          <div className="flex items-center gap-2 overflow-x-auto -mx-2 px-2 scrollbar-none">
            <span className="text-[10px] uppercase tracking-[0.24em] text-smoke shrink-0 mr-2">
              ⌖ Act
            </span>
            <button
              onClick={clearFilters}
              className={`shrink-0 px-3 py-1 text-[11.5px] tracking-tight rounded-full border transition-all duration-300 ${
                !activeCats || activeCats.length === 0
                  ? "bg-amber/15 text-amber-dark border-amber/40"
                  : "bg-transparent text-ink/55 border-ink/15 hover:border-ink/40 hover:text-ink"
              }`}
            >
              All
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const active =
                activeCats !== null && activeCats.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`shrink-0 px-3 py-1 text-[11.5px] tracking-tight rounded-full border transition-all duration-300 ${
                    active
                      ? "bg-amber/15 text-amber-dark border-amber/40"
                      : "bg-transparent text-ink/55 border-ink/15 hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {CATEGORY_META[cat].short}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Month header strip */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 lg:mb-14 pb-6 border-b border-ink/15">
            <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.95] tracking-tightest font-medium">
              {monthLabel(month)}
              <span className="text-amber">.</span>
            </h2>
            <div className="flex flex-col items-end text-right">
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke">
                {activeCats && activeCats.length > 0
                  ? `${shownCount} of ${totalForMonth}`
                  : `${totalForMonth} events`}
              </p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-smoke mt-1">
                ⌖ FY ordering · April → March
              </p>
            </div>
          </div>

          {byDay.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-[28px] tracking-tightest italic font-light text-amber-dark">
                Nothing scheduled.
              </p>
              <p className="mt-3 text-[14px] text-smoke max-w-[420px] mx-auto">
                No filings match the selected filter for this month. Clear
                the filter to see all events.
              </p>
            </div>
          ) : (
            <div className="space-y-0 border-t border-ink/15">
              {byDay.map(([day, list]) => (
                <DayRow
                  key={day}
                  day={day}
                  month={month}
                  events={list}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function DayRow({
  day,
  month,
  events,
}: {
  day: number;
  month: number;
  events: ReturnType<typeof getEventsForMonth>;
}) {
  // Day-of-week helper — useful for at-a-glance "is this a weekend?" reads.
  // Uses the current year's notional date; primarily a visual hint.
  const now = new Date();
  const year =
    month >= 1 && month <= 3 ? now.getFullYear() + 1 : now.getFullYear();
  let dow = "";
  try {
    const d = new Date(year, month - 1, day);
    dow = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][d.getDay()];
  } catch {
    dow = "";
  }

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8 py-7 lg:py-8 border-b border-ink/15">
      {/* Day cell */}
      <div className="col-span-3 lg:col-span-2">
        <div className="flex items-baseline gap-2.5">
          <span className="font-display text-[44px] lg:text-[64px] leading-none tracking-tightest font-medium">
            {String(day).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
            {dow}
          </span>
        </div>
      </div>

      {/* Events for this day */}
      <ul className="col-span-9 lg:col-span-10 space-y-4 lg:space-y-5">
        {events.map((e) => (
          <li
            key={e.id}
            className="group grid grid-cols-12 gap-3 lg:gap-5 items-baseline"
          >
            <span
              className="col-span-3 sm:col-span-2 lg:col-span-2 text-[10px] uppercase tracking-[0.22em] text-amber-dark"
              title={CATEGORY_META[e.category].label}
            >
              {CATEGORY_META[e.category].short}
            </span>
            <div className="col-span-9 sm:col-span-10 lg:col-span-10">
              <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-1.5">
                <span className="font-display text-[16px] lg:text-[18px] tracking-tightest font-medium leading-[1.25]">
                  {e.title}
                </span>
                <span className="font-mono text-[11px] text-smoke tracking-tight">
                  {e.formCode}
                </span>
              </div>
              <p className="text-[14px] lg:text-[15px] leading-[1.55] text-ink/75 max-w-[760px] prose-j">
                {e.description}
              </p>
              {e.applicability && (
                <p className="mt-1.5 text-[11.5px] uppercase tracking-[0.18em] text-smoke">
                  Applies to: <span className="text-ink/70 normal-case tracking-tight">{e.applicability}</span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
