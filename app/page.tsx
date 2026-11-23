import Link from "next/link";
import { site, contact, profile, capabilities, timeline } from "@/content/site";
import { work } from "@/content/work";
import { CaseRow } from "@/components/case-row";

const Head = ({ id, n, label, title }: { id: string; n: string; label: string; title: string }) => (
  <header className="sec-head">
    <span className="meta">
      {n} — {label}
    </span>
    <h2 id={id} className="display">
      {title}
    </h2>
  </header>
);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-main">
            <p className="meta rise">
              {site.role} · {site.location}
            </p>
            <h1 className="display rise" style={{ ["--i" as string]: 1 }}>
              {site.line}
            </h1>
            <p className="lede rise" style={{ ["--i" as string]: 2 }}>
              {site.sub}
            </p>
            <div className="hero-cta rise" style={{ ["--i" as string]: 3 }}>
              <Link className="btn" href="/work">
                View selected work
              </Link>
              <a className="btn ghost" href={contact.href}>
                Get in touch
              </a>
            </div>
          </div>

          <aside className="profile rise" style={{ ["--i" as string]: 3 }} aria-label="Profile">
            <p className="meta">Profile</p>
            <dl>
              {profile.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="work-h">
        <div className="wrap">
          <Head id="work-h" n="01" label="Selected work" title="Systems in production and public builds" />
          <ul className="rows">
            {work.map((c) => (
              <CaseRow key={c.slug} c={c} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="cap-h">
        <div className="wrap">
          <Head id="cap-h" n="02" label="Capabilities" title="Areas of expertise" />
          <ul className="caps">
            {capabilities.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="tags">
                  {c.tools.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="exp-h">
        <div className="wrap">
          <Head id="exp-h" n="03" label="Background" title="Experience and education" />
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title}>
                <span className="meta">{t.period}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p className="org">{t.org}</p>
                  {t.text && <p>{t.text}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-h">
        <div className="wrap">
          <span className="meta">04 — Contact</span>
          <h2 id="contact-h" className="display">
            Open to internship and full-time roles in AI and backend engineering.
          </h2>
          <p className="contact-note">Email is the most reliable way to reach me.</p>
          <a className="mail" href={contact.href}>
            {contact.label}
          </a>
          <div className="out">
            <a href={site.github}>GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
