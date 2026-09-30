import Link from "next/link";
import { site, contact, principles, now, elsewhere } from "@/content/site";
import { work } from "@/content/work";
import { Headline } from "@/components/headline";
import { Portrait } from "@/components/portrait";
import { Trace } from "@/components/trace";
import { CaseRow } from "@/components/case-row";

const Rule = () => (
  <div className="wrap">
    <hr className="rule" />
  </div>
);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <Headline />

          <div className="hero-left">
            <p className="lede rise" style={{ ["--i" as string]: 1 }}>
              {site.sub}
            </p>
            <div className="hero-cta rise" style={{ ["--i" as string]: 2 }}>
              <Link className="btn" href="/work">
                Read the case files
              </Link>
              <a className="btn ghost" href={contact.href}>
                {site.email ?? "LinkedIn ↗"}
              </a>
            </div>
          </div>

          <Trace />
          <Portrait />
        </div>
      </section>

      <Rule />

      <section className="section" aria-labelledby="work-h">
        <div className="wrap rail">
          <span className="meta">01 · Selected work</span>
          <div>
            <h2 id="work-h" className="display">
              Case files.
            </h2>
            <ul className="rows reveal">
              {work.slice(0, 3).map((c) => (
                <CaseRow key={c.slug} c={c} />
              ))}
            </ul>
            <Link className="more" href="/work" style={{ marginTop: "var(--s3)" }}>
              All case files →
            </Link>
          </div>
        </div>
      </section>

      <Rule />

      <section className="section" aria-labelledby="how-h">
        <div className="wrap rail">
          <span className="meta">02 · How I work</span>
          <div>
            <h2 id="how-h" className="display">
              Three things I won&rsquo;t compromise on.
            </h2>
            <ul className="principles reveal">
              {principles.map((p) => (
                <li key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Rule />

      <section className="section" aria-labelledby="now-h">
        <div className="wrap rail">
          <span className="meta">03 · Status</span>
          <div>
            <h2 id="now-h" className="display">
              Where things stand.
            </h2>
            <dl className="facts reveal">
              {[...now, ...elsewhere].map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Rule />

      <section className="contact" aria-labelledby="hi-h">
        <div className="wrap">
          <span className="meta" id="hi-h">
            04 · Contact
          </span>
          <p style={{ margin: "var(--s3) 0 var(--s4)", color: "var(--ash)", maxWidth: "44ch" }}>
            Serious technical problems, agents that need to be reliable, or something strange and
            interesting. {contact.pitch}
          </p>
          <a className="mail" href={contact.href}>
            {contact.label}
          </a>
          <div className="out">
            <a href={site.github}>GitHub</a>
            <a href={site.linkedin}>LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
