import Link from "next/link";
import type { CaseFile } from "@/content/work";

export function CaseRow({ c, as: H = "h3" }: { c: CaseFile; as?: "h2" | "h3" }) {
  return (
    <li>
      <Link href={`/work/${c.slug}`} className="row">
        <span className="n">{c.n}</span>
        <div>
          <span className="meta">{c.kicker}</span>
          <H>{c.title}</H>
          <p>{c.summary}</p>
        </div>
        <div className="side">
          {c.tags.slice(0, 4).map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
          <span className="go" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </li>
  );
}
