import { site } from "@/content/site";
import { Graph, Vigil, Watcher } from "./illustrations";

// An arch, like a niche in a wall. Holds the animated portrait when one is configured
// in content/site.ts; until then it shows the chosen illustration.
export function Portrait() {
  const p = site.portrait;
  return (
    <figure className="portrait rise" style={{ ["--i" as string]: 2, margin: 0 }}>
      {p ? (
        <video src={p.src} poster={p.poster} autoPlay muted loop playsInline aria-label={p.alt} />
      ) : site.illustration === "vigil" ? (
        <Vigil />
      ) : site.illustration === "watcher" ? (
        <Watcher />
      ) : site.illustration === "graph" ? (
        <Graph />
      ) : (
        <div className="sigil" role="img" aria-label={`${site.name}, monogram`}>
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <circle className="ring c" cx="100" cy="100" r="96" strokeDasharray="1 5" />
            <circle className="ring" cx="100" cy="100" r="78" strokeDasharray="2 3 14 3" />
            <circle className="ring b" cx="100" cy="100" r="60" strokeDasharray="30 8 4 8" />
            <text x="100" y="114" textAnchor="middle">
              SD
            </text>
          </svg>
        </div>
      )}
    </figure>
  );
}
