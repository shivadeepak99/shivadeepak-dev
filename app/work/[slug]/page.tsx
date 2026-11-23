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

const H = ({ children }: { children: React.ReactNode }) => <p className="meta label">{children}</p>;

const List = ({ items }: { items: string[] }) => (
  <ul className="plain">
    {items.map((p) => (
      <li key={p}>{p}</li>
    ))}
  </ul>
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
            ← All work
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
          <div className="tags case-meta">
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
          <H>Architecture</H>
          <Flow steps={c.flow} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <H>Problem</H>
            <List items={c.problem} />
          </div>
          <div>
            <H>Constraints</H>
            <List items={c.constraints} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="dec-h">
        <div className="wrap">
          <H>Design decisions</H>
          <h2 id="dec-h" className="sr">
            Design decisions
          </h2>
          <ol className="decisions">
            {c.decisions.map((d) => (
              <li key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <H>Outcome</H>
            <List items={c.outcome} />
          </div>
          {c.hindsight.length > 0 && (
            <div>
              <H>Next steps</H>
              <List items={c.hindsight} />
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
          <span className="meta">Next case study · {next.n}</span>
          <h3 className="display">{next.title} →</h3>
        </span>
      </Link>
    </article>
  );
}
