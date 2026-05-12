"use client";

import { useEffect, useState } from "react";

type Theme = "sepia" | "light" | "dark";

const ORDER: Theme[] = ["sepia", "light", "dark"];

const META: Record<
  Theme,
  { label: string; swatch: string; ring: string; icon: JSX.Element }
> = {
  sepia: {
    label: "Sepia",
    swatch: "#F2EDE3",
    ring: "#B8853A",
    // leaf / paper glyph
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 13 Q3 6 8 3 Q13 6 13 13 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M8 3 V13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  light: {
    label: "Light",
    swatch: "#FFFFFF",
    ring: "#A86E26",
    // sun
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M8 1.5V3" />
          <path d="M8 13V14.5" />
          <path d="M1.5 8H3" />
          <path d="M13 8H14.5" />
          <path d="M3.4 3.4l1 1" />
          <path d="M11.6 11.6l1 1" />
          <path d="M12.6 3.4l-1 1" />
          <path d="M4.4 11.6l-1 1" />
        </g>
      </svg>
    ),
  },
  dark: {
    label: "Dark",
    swatch: "#0E0E10",
    ring: "#D9B07A",
    // moon
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M13 9.5 A6 6 0 1 1 6.5 3 A4.5 4.5 0 0 0 13 9.5 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("sepia");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial =
      (document.documentElement.getAttribute("data-theme") as Theme) || "sepia";
    setTheme(initial);
    setMounted(true);
  }, []);

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const m = META[theme];
  const nextLabel = META[ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]].label;

  return (
    <button
      type="button"
      aria-label={`Theme: ${m.label}. Click to switch to ${nextLabel}.`}
      title={`Theme: ${m.label} — click for ${nextLabel}`}
      onClick={cycle}
      className="group inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full border border-ink/25 bg-ivory/70 backdrop-blur-md hover:border-ink/50 transition-colors duration-300"
    >
      {/* swatch + icon cluster */}
      <span
        className="relative w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[18deg]"
        style={{
          backgroundColor: m.swatch,
          boxShadow: `0 0 0 1.5px ${m.ring}, inset 0 0 0 1px rgba(0,0,0,0.10)`,
          color: theme === "dark" ? "#D9B07A" : "#B8853A",
        }}
      >
        <span
          key={mounted ? theme : "ssr"}
          className="animate-[fadeUp_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        >
          {m.icon}
        </span>
      </span>

      <span className="flex flex-col items-start leading-none">
        <span className="text-[9px] uppercase tracking-[0.22em] text-smoke">
          Theme
        </span>
        <span
          key={`label-${mounted ? theme : "ssr"}`}
          className="text-[12px] tracking-tight font-medium mt-0.5 animate-[fadeUp_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        >
          {m.label}
        </span>
      </span>
    </button>
  );
}
