import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/content/notes";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) return {};
  return { title: n.title, description: n.dek, alternates: { canonical: `/notes/${n.slug}` } };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) notFound();

  return (
    <article>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/notes">
            ← All notes
          </Link>
          <p className="meta" style={{ marginTop: "var(--s4)" }}>
            {new Date(n.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {n.read}
          </p>
          <h1 className="display rise" style={{ marginTop: "var(--s2)" }}>
            {n.title}
          </h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            {n.dek}
          </p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          {n.body.map((b, i) =>
            "p" in b ? (
              <p key={i}>{b.p}</p>
            ) : (
              <pre key={i} tabIndex={0} aria-label="Code sample">
                <code>{b.code}</code>
              </pre>
            ),
          )}
        </div>
      </section>
    </article>
  );
}
