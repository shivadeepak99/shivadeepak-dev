import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-head notfound">
      <div className="wrap">
        <p className="meta">Error 404</p>
        <h1 className="display">Page not found</h1>
        <p className="dek">The requested page does not exist or has been moved.</p>
        <div className="hero-cta">
          <Link className="btn" href="/">
            Return to home
          </Link>
        </div>
      </div>
    </section>
  );
}
