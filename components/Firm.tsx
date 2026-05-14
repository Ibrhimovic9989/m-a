import Image from "next/image";

export default function Firm() {
  return (
    <section id="firm" className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] bg-ivory border border-ink/10 rounded-sm overflow-hidden group">
              <Image
                src="/founder.jpg"
                alt="CA Muneer Ahmed, Founding Partner"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                priority
              />
              {/* duotone wash */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-40 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(var(--amber) / 0.15) 0%, rgb(14 14 16 / 0.55) 100%)",
                }}
              />

              {/* meta strip */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-1 text-[10px] uppercase tracking-[0.24em] text-bone/90">
                <span>Founder</span>
                <span>F-2012</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="text-[10px] uppercase tracking-[0.24em] text-bone/90">
                  Hyderabad &nbsp;·&nbsp; IND
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-bone/90">
                  ICAI Member
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-[24px] tracking-tightest font-medium">
                CA Muneer Ahmed
              </h3>
              <span className="text-[11px] uppercase tracking-[0.18em] text-smoke">
                Founding Partner
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;004 &nbsp;/&nbsp; The Firm
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[0.95] tracking-tightest font-medium mb-10">
              A practice<br />
              built on<br />
              <span className="italic font-light text-amber-dark">
                quiet integrity.
              </span>
            </h2>

            <div className="space-y-5 text-[16px] lg:text-[17px] leading-[1.65] text-ink/85 prose-j">
              <p>
                Muneer &amp; Associates was founded in 2012 in Hyderabad with a
                big vision — to build the kind of chartered accountancy firm
                that answers when you call, files before the deadline, and
                explains the reasoning behind every recommendation it makes.
              </p>
              <p>
                Thirteen years on, the firm has grown into a senior-led
                practice of qualified chartered accountants and GST
                specialists, serving everyone from first-time founders to
                multi-entity groups. The ethos hasn&rsquo;t changed; it has
                only deepened.
              </p>
              <p>
                We work in industries we can speak about credibly, accept
                engagements we can deliver excellently, and politely decline
                the rest. It is a measured way to build a firm. It is also
                the only way we know.
              </p>
            </div>

            {/* Pull quote */}
            <figure className="mt-12 pl-6 border-l-2 border-amber">
              <blockquote className="font-display text-[22px] lg:text-[26px] leading-[1.3] tracking-tightest italic font-light text-balance">
                &ldquo;Numbers never lie. Our work is to make sure they are
                never misheard either.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-smoke">
                — CA Muneer Ahmed, Founding Partner
              </figcaption>
            </figure>

            {/* Credentials grid */}
            <div className="mt-12 grid grid-cols-2 gap-px bg-ink/10">
              {[
                { k: "ICAI", v: "Members of the Institute of Chartered Accountants of India" },
                { k: "GSTN", v: "Authorised GST Practitioners across India" },
                { k: "MCA", v: "Registered for ROC and Secretarial filings" },
                { k: "ITD", v: "Authorised Income Tax Return Intermediaries" },
              ].map((c) => (
                <div key={c.k} className="bg-bone p-5">
                  <div className="font-display text-[24px] tracking-tightest font-medium mb-2 text-amber-dark">
                    {c.k}
                  </div>
                  <div className="text-[12px] leading-[1.55] text-ink/75">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
