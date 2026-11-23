import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/content/work";
import { CaseRow } from "@/components/case-row";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies of production AI and backend systems.",
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
          <h1 className="display rise">Selected work</h1>
          <p className="dek rise" style={{ ["--i" as string]: 1 }}>
            Each case study sets out the problem, its constraints, the design decisions and the
            outcome. Production work is described without client names or internal figures.
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
    </>
  );
}
