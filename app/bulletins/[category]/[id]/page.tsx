import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { fetchBulletinDetail, getCategoryBySlug } from "@/lib/bulletins";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { category: string; id: string };
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  const result = await fetchBulletinDetail(params.id);
  const title = result.ok ? result.data.title : null;
  return {
    title: title
      ? `${title} — ${category?.name ?? "Bulletins"} — Muneer & Associates`
      : "Bulletin — Muneer & Associates",
    description: title
      ? `${title}. From the ${category?.name ?? ""} feed, sourced from dcgargco.com.`
      : undefined,
  };
}

export default async function BulletinDetailPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const result = await fetchBulletinDetail(params.id);

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        id="top"
        className="relative pt-[140px] pb-10 lg:pt-[160px] lg:pb-14 overflow-hidden grain"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
          <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-smoke mb-8 lg:mb-10 flex-wrap"
          >
            <Link
              href="/"
              className="hover:text-ink transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href="/bulletins"
              className="hover:text-ink transition-colors duration-300"
            >
              Bulletins
            </Link>
            <span className="text-ink/25">/</span>
            <Link
              href={`/bulletins/${category.slug}`}
              className="hover:text-ink transition-colors duration-300"
            >
              {category.short}
            </Link>
            <span className="text-ink/25">/</span>
            <span className="text-ink">Detail</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-dark mb-5">
                ⌖ &nbsp;{category.name}
                {result.ok && result.data.number
                  ? ` · ${result.data.number.slice(0, 80)}`
                  : ""}
              </p>
              <h1 className="font-display tracking-ultra leading-[1.02] font-medium text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[56px] text-balance">
                {result.ok
                  ? result.data.title ?? "Untitled notification"
                  : "Unable to load this bulletin"}
              </h1>
              {result.ok && result.data.date && (
                <p className="mt-6 font-mono text-[13px] text-smoke">
                  {result.data.date}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-ivory border-y border-ink/[0.08] py-12 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8">
              {result.ok ? (
                <div
                  className="bulletin-body text-[15px] lg:text-[16px] leading-[1.65] text-ink/85"
                  dangerouslySetInnerHTML={{ __html: result.data.bodyHtml }}
                />
              ) : (
                <div className="bg-bone border border-ink/[0.08] p-8 lg:p-12">
                  <p className="text-[15px] text-ink/70 prose-j">
                    {result.error === "fetch_failed"
                      ? "We could not reach the source. Try refreshing the page, or open the original on dcgargco.com."
                      : "This bulletin could not be parsed. Please open it on dcgargco.com directly."}
                  </p>
                  <a
                    href={`https://www.dcgargco.com/detail/${params.id}.aspx`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-tight text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
                  >
                    Open on dcgargco.com →
                  </a>
                </div>
              )}
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-[110px] space-y-5">
                <div className="bg-bone border border-ink/[0.08] p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-3">
                    ⌖ Source
                  </p>
                  <p className="text-[14px] leading-[1.55] text-ink/80 mb-4">
                    Mirrored from dcgargco.com. Open the canonical version on
                    the issuing authority&rsquo;s site before relying on it.
                  </p>
                  <a
                    href={`https://www.dcgargco.com/detail/${params.id}.aspx`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] tracking-tight text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
                  >
                    View on dcgargco.com →
                  </a>
                </div>

                <div className="bg-bone border border-ink/[0.08] p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-3">
                    ⌖ Need advice?
                  </p>
                  <p className="text-[14px] leading-[1.55] text-ink/80 mb-4">
                    Notifications like this often interact with your existing
                    structure in non-obvious ways. We&rsquo;re happy to read
                    the fine print with you.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-[13px] tracking-tight text-amber-dark hover:text-ink border-b border-amber-dark/30 hover:border-ink pb-0.5 transition-colors"
                  >
                    Book a consult →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
