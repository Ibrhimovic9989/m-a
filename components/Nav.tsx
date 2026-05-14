"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Firm", href: "#firm" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/80 backdrop-blur-xl border-b border-ink/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <div className="relative h-11 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Muneer & Associates"
                width={180}
                height={48}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2.5 text-[14px] tracking-tight text-ink/75 hover:text-ink transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-4 right-4 bottom-1.5 h-px bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex">
              <ThemeSwitcher />
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex group items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-bone text-[13.5px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
            >
              Book a consult
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-ink/15"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-4 h-px bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block w-4 h-px bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-[400px] border-t border-ink/[0.06]" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1 bg-bone/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-[18px] tracking-tight border-b border-ink/[0.06]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-full bg-ink text-bone text-[14px]"
          >
            Book a consult →
          </a>
          <div className="pt-5 flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
              Theme
            </span>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
