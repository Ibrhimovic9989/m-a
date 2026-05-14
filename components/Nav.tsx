"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { BULLETIN_CATEGORIES } from "@/lib/bulletins";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Firm", href: "/#firm" },
  { label: "Knowledge", href: "/#knowledge" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bulletinsOpen, setBulletinsOpen] = useState(false);
  const [mobileBulletinsOpen, setMobileBulletinsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setBulletinsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setBulletinsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setBulletinsOpen(false), 160);
  };

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
          <a href="/#top" className="group flex items-center gap-3">
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
                className="relative px-4 py-2.5 text-[16px] tracking-tight text-ink/80 hover:text-ink transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-4 right-4 bottom-1.5 h-px bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            ))}

            {/* Bulletins dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setBulletinsOpen((v) => !v)}
                aria-expanded={bulletinsOpen}
                aria-haspopup="true"
                className="relative px-4 py-2.5 text-[16px] tracking-tight text-ink/80 hover:text-ink transition-colors duration-300 group inline-flex items-center gap-1.5"
              >
                Bulletins
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    bulletinsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute left-4 right-7 bottom-1.5 h-px bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute right-0 top-full pt-3 transition-all duration-300 ${
                  bulletinsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="w-[560px] bg-bone/95 backdrop-blur-xl border border-ink/[0.08] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="px-5 pt-5 pb-3 border-b border-ink/[0.06]">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-amber-dark mb-1">
                      ⌖ Live feed
                    </p>
                    <Link
                      href="/bulletins"
                      onClick={() => setBulletinsOpen(false)}
                      className="font-display text-[20px] tracking-tight leading-tight hover:text-amber-dark transition-colors"
                    >
                      Notifications, circulars &amp; press →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 p-3">
                    {BULLETIN_CATEGORIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/bulletins/${c.slug}`}
                        onClick={() => setBulletinsOpen(false)}
                        className="group flex items-center justify-between px-3 py-2 text-[13.5px] tracking-tight text-ink/80 hover:text-ink hover:bg-amber/[0.08] transition-colors duration-200"
                      >
                        <span>{c.name}</span>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="opacity-0 group-hover:opacity-50 transition-opacity"
                        >
                          <path
                            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex">
              <ThemeSwitcher />
            </div>
            <a
              href="/#contact"
              className="hidden md:inline-flex group items-center gap-2 px-5 py-3 rounded-full bg-ink text-bone text-[15px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
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
          open ? "max-h-[640px] border-t border-ink/[0.06]" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1 bg-bone/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-[20px] tracking-tight border-b border-ink/[0.06]"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Bulletins accordion */}
          <button
            type="button"
            onClick={() => setMobileBulletinsOpen((v) => !v)}
            className="py-4 text-[20px] tracking-tight border-b border-ink/[0.06] flex items-center justify-between"
          >
            <span>Bulletins</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-300 ${
                mobileBulletinsOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileBulletinsOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <Link
              href="/bulletins"
              onClick={() => setOpen(false)}
              className="block py-3 pl-4 text-[15px] text-amber-dark border-b border-ink/[0.04]"
            >
              ⌖ All bulletins →
            </Link>
            {BULLETIN_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/bulletins/${c.slug}`}
                onClick={() => setOpen(false)}
                className="block py-3 pl-4 text-[15px] text-ink/80 border-b border-ink/[0.04]"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-ink text-bone text-[16px]"
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
