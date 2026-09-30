import type { Metadata } from "next";
import Link from "next/link";
import { work, smallBuilds } from "@/content/work";
import { CaseRow } from "@/components/case-row";

export const metadata: Metadata = {
  title: "Work",
  description: "Case files: production systems, anonymized, and public builds.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Link className="back" href="/">
            ← Home
          </Link>
          <h1 className="display rise">
            Case files, <em>not</em> a project dump.
          </h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            Each one is a problem, its constraints, the decisions I made, and what I&rsquo;d change.
            Production work is described without names or internal numbers.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="rows">
            {work.map((c) => (
              <CaseRow key={c.slug} c={c} as="h2" />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap rail">
          <span className="meta">Smaller builds</span>
          <ul className="builds">
            {smallBuilds.map((b) => (
              <li key={b.name}>
                <a href={b.href}>
                  <b>{b.name} ↗</b>
                  <span>{b.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
