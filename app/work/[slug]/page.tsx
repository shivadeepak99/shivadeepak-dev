import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/content/work";
import { Flow } from "@/components/flow";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = work.find((w) => w.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
  };
}

const H = ({ children }: { children: React.ReactNode }) => (
  <p className="meta" style={{ marginBottom: "var(--s3)" }}>
    {children}
  </p>
);

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const i = work.findIndex((w) => w.slug === slug);
  if (i < 0) notFound();
  const c = work[i];
  const next = work[(i + 1) % work.length];

  return (
    <article>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/work">
            ← All case files
          </Link>
          <p className="meta" style={{ marginTop: "var(--s4)" }}>
            {c.n} · {c.kicker} · {c.year}
          </p>
          <h1 className="display rise" style={{ marginTop: "var(--s2)" }}>
            {c.title}
          </h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            {c.summary}
          </p>
          <div className="case-meta">
            {c.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <H>System flow</H>
          <Flow steps={c.flow} />
        </div>
      </section>

      <div className="wrap">
        <hr className="rule" />
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <H>The problem</H>
            <ul className="plain">
              {c.problem.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <H>Constraints</H>
            <ul className="plain">
              {c.constraints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="dec-h">
        <div className="wrap">
          <h2 id="dec-h" className="display" style={{ margin: "0 0 var(--s4)", fontSize: "var(--t-h2)" }}>
            Decisions.
          </h2>
          <ol className="decisions">
            {c.decisions.map((d) => (
              <li key={d.title} className="reveal">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <H>What it gave me</H>
            <ul className="plain">
              {c.outcome.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          {c.hindsight.length > 0 && (
            <div>
              <H>In hindsight</H>
              <ul className="plain">
                {c.hindsight.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {c.links && (
          <div className="wrap hero-cta">
            {c.links.map((l) => (
              <a key={l.href} className="btn ghost" href={l.href}>
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </section>

      <Link href={`/work/${next.slug}`} className="next-case">
        <span className="wrap" style={{ display: "block" }}>
          <span className="meta">Next case file · {next.n}</span>
          <h3 className="display">{next.title}</h3>
        </span>
      </Link>
    </article>
  );
}
