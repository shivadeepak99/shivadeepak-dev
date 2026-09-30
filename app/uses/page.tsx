import type { Metadata } from "next";
import Link from "next/link";
import { uses } from "@/content/site";

export const metadata: Metadata = {
  title: "Uses",
  description: "The tools I actually reach for.",
  alternates: { canonical: "/uses" },
};

export default function UsesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Link className="back" href="/">
            ← Home
          </Link>
          <h1 className="display rise">
            What I <em>reach</em> for.
          </h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            {uses.intro}
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gap: "var(--s5)" }}>
          {uses.sections.map((s) => (
            <div key={s.title} className="rail">
              <span className="meta">{s.title}</span>
              <dl className="facts">
                {s.items.map(([name, note]) => (
                  <div key={name}>
                    <dt style={{ color: "var(--bone)", textTransform: "none", letterSpacing: 0 }}>
                      {name}
                    </dt>
                    <dd style={{ color: "var(--ash)" }}>{note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="meta">Last revised {uses.updated}</p>
        </div>
      </section>
    </>
  );
}
