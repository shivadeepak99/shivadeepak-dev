import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short engineering notes on agents, queues and honest evaluation.",
  alternates: { canonical: "/notes" },
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function NotesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Link className="back" href="/">
            ← Home
          </Link>
          <h1 className="display rise">
            Notes, <em>short</em> on purpose.
          </h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            Things I learned the hard way while building systems that have to keep working.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="note-list">
            {notes.map((n) => (
              <li key={n.slug}>
                <Link href={`/notes/${n.slug}`}>
                  <span className="meta">
                    {fmt(n.date)} · {n.read}
                  </span>
                  <div>
                    <h3>{n.title}</h3>
                    <p>{n.dek}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
