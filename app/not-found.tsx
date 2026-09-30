import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Refused", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="refused">
      <div className="wrap">
        <p className="meta">404 · outcome: refuse</p>
        <h1 className="display rise" style={{ marginTop: "var(--s3)" }}>
          <em>Refused.</em>
        </h1>
        <p className="dek rise" style={{ ["--i" as string]: 1, marginTop: "var(--s4)", maxWidth: "40ch", color: "var(--ash)" }}>
          That path isn&rsquo;t one of the outcomes. Refusing is a first-class result here, so this
          isn&rsquo;t an error. It&rsquo;s the system working.
        </p>
        <p className="hero-cta rise" style={{ ["--i" as string]: 2 }}>
          <Link className="btn" href="/">
            Take the next step: home
          </Link>
        </p>
      </div>
    </section>
  );
}
