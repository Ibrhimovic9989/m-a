export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone border-t border-bone/10">
      {/* Massive wordmark */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-14 lg:pt-20">
        <div className="flex items-end justify-between mb-10 lg:mb-14 gap-6">
          <h2 className="font-display text-[16vw] lg:text-[12vw] leading-[0.85] tracking-ultra font-medium">
            Muneer
            <br />
            <span className="italic font-light text-amber-soft">&amp; Associates.</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          <div className="col-span-2 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bone/45 mb-4">
              The Practice
            </p>
            <p className="text-[15.5px] leading-[1.7] text-bone/75 max-w-[360px]">
              A Hyderabad-based chartered accountant firm simplifying financial
              and compliance complexities for businesses and individuals — in
              practice since 2012.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bone/45 mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-[15px] text-bone/85">
              <li><a href="#services" className="hover:text-amber-soft transition-colors">Audit</a></li>
              <li><a href="#services" className="hover:text-amber-soft transition-colors">Taxation</a></li>
              <li><a href="#services" className="hover:text-amber-soft transition-colors">GST</a></li>
              <li><a href="#services" className="hover:text-amber-soft transition-colors">ROC</a></li>
              <li><a href="#services" className="hover:text-amber-soft transition-colors">Advisory</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bone/45 mb-4">
              Firm
            </p>
            <ul className="space-y-2.5 text-[15px] text-bone/85">
              <li><a href="#firm" className="hover:text-amber-soft transition-colors">About</a></li>
              <li><a href="#approach" className="hover:text-amber-soft transition-colors">Approach</a></li>
              <li><a href="#knowledge" className="hover:text-amber-soft transition-colors">Knowledge</a></li>
              <li><a href="#contact" className="hover:text-amber-soft transition-colors">Appointment</a></li>
              <li><a href="#careers" className="hover:text-amber-soft transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bone/45 mb-4">
              Connect
            </p>
            <ul className="space-y-2.5 text-[15px] text-bone/85">
              <li>
                <a
                  href="https://www.linkedin.com/company/muneer-associates"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-soft transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/muneerassociates"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-soft transition-colors inline-flex items-center gap-1"
                >
                  Twitter / X <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/muneerassociates"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-soft transition-colors inline-flex items-center gap-1"
                >
                  Facebook <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@muneerassociates.in"
                  className="hover:text-amber-soft transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bone/10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px] text-bone/65">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Muneer &amp; Associates</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-bone/30" />
            <span>Chartered Accountants — ICAI Reg.</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-bone/30" />
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-soft transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-bone/30" />
            <a href="#" className="hover:text-amber-soft transition-colors">Disclaimer</a>
            <span className="w-1 h-1 rounded-full bg-bone/30" />
            <a href="#top" className="hover:text-amber-soft transition-colors group inline-flex items-center gap-1">
              Back to top
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:-translate-y-0.5">
                <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
