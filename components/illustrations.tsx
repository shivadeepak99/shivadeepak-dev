import type { CSSProperties } from "react";

// Three illustrations for the arch. Pure SVG + CSS (keyframes live in globals.css),
// drawn on a 300x430 board so they fill the 3:4.3 arch exactly. Colors come from the
// palette tokens, so they follow `site.palette`. With prefers-reduced-motion they
// hold a still composition.

const v = (o: Record<string, string>) => o as CSSProperties;

/* 1 · Vigil: a flame over an open book. The book's lines light up as if being read. */
export function Vigil() {
  const embers = [
    { x: 138, y: 258, dx: "-14px", d: "5.2s", dl: "0s" },
    { x: 162, y: 254, dx: "12px", d: "4.4s", dl: "1.1s" },
    { x: 150, y: 262, dx: "4px", d: "6s", dl: "2.3s" },
    { x: 130, y: 266, dx: "-22px", d: "5.6s", dl: "3.2s" },
    { x: 170, y: 262, dx: "20px", d: "4.8s", dl: "0.6s" },
    { x: 146, y: 250, dx: "-6px", d: "5s", dl: "4s" },
  ];
  const rows = [306, 315, 324];
  return (
    <svg viewBox="0 0 300 430" className="il" aria-hidden="true">
      <defs>
        <radialGradient id="vg" cx="50%" cy="52%" r="50%">
          <stop offset="0" style={v({ stopColor: "var(--ember)", stopOpacity: "0.5" })} />
          <stop offset="1" style={v({ stopColor: "var(--ember)", stopOpacity: "0" })} />
        </radialGradient>
      </defs>
      <circle className="v-glow" cx="150" cy="235" r="150" fill="url(#vg)" />
      <path d="M22 430 V190 A128 128 0 0 1 278 190 V430" className="v-arch" />
      <rect x="86" y="348" width="128" height="82" className="v-plinth" />
      <path d="M150 342 L84 330 L90 298 L150 308 Z" className="v-page" />
      <path d="M150 342 L216 330 L210 298 L150 308 Z" className="v-page" />
      {rows.map((y, i) => (
        <g key={y}>
          <path className="v-line" d={`M96 ${y - 2} L142 ${y + 3}`} style={v({ ["--k"]: String(i) })} />
          <path className="v-line" d={`M204 ${y - 2} L158 ${y + 3}`} style={v({ ["--k"]: String(i + 3) })} />
        </g>
      ))}
      {embers.map((e, i) => (
        <circle
          key={i}
          className="v-ember"
          cx={e.x}
          cy={e.y}
          r={i % 2 ? 1.2 : 1.7}
          style={v({ ["--dx"]: e.dx, ["--d"]: e.d, ["--dl"]: e.dl })}
        />
      ))}
      <path
        className="v-flame"
        d="M150 196 C168 222 180 240 171 262 C164 276 136 276 129 262 C120 240 132 222 150 196 Z"
      />
      <path
        className="v-core"
        d="M150 232 C159 245 163 254 158 263 C154 270 146 270 142 263 C137 254 141 245 150 232 Z"
      />
    </svg>
  );
}

/* 2 · Watcher: an eye whose pupil keeps choosing somewhere new to look. */
export function Watcher() {
  const rays = Array.from({ length: 56 }, (_, i) => {
    const a = (i / 56) * Math.PI * 2;
    const r1 = 27;
    const r2 = 58 + (i % 3) * 2;
    return { x1: 150 + Math.cos(a) * r1, y1: 215 + Math.sin(a) * r1, x2: 150 + Math.cos(a) * r2, y2: 215 + Math.sin(a) * r2 };
  });
  return (
    <svg viewBox="0 0 300 430" className="il" aria-hidden="true">
      <defs>
        <clipPath id="almond">
          <path d="M26 215 Q150 92 274 215 Q150 338 26 215 Z" />
        </clipPath>
        <radialGradient id="wg" cx="50%" cy="50%" r="50%">
          <stop offset="0" style={v({ stopColor: "var(--ember)", stopOpacity: "0.28" })} />
          <stop offset="1" style={v({ stopColor: "var(--ember)", stopOpacity: "0" })} />
        </radialGradient>
      </defs>
      <circle cx="150" cy="215" r="150" fill="url(#wg)" />
      <circle className="w-halo a" cx="150" cy="215" r="132" />
      <circle className="w-halo b" cx="150" cy="215" r="112" />
      <g className="w-eye">
        <path className="w-sclera" d="M26 215 Q150 92 274 215 Q150 338 26 215 Z" />
        <g clipPath="url(#almond)">
          <g className="w-gaze">
            <circle className="w-iris" cx="150" cy="215" r="60" />
            <g className="w-rays">
              {rays.map((r, i) => (
                <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
              ))}
            </g>
            <circle className="w-pupil" cx="150" cy="215" r="25" />
            <circle className="w-spark" cx="141" cy="205" r="5" />
          </g>
        </g>
        <path className="w-lid" d="M26 215 Q150 92 274 215" />
        <path className="w-lid" d="M26 215 Q150 338 274 215" />
      </g>
    </svg>
  );
}

/* 3 · Graph: a decision graph. One route dead-ends in a refusal; the other arrives. */
export function Graph() {
  const nodes: [number, number][] = [
    [150, 384], [88, 306], [212, 306], [56, 222], [124, 222], [184, 222], [246, 222], [104, 138], [172, 138], [150, 66],
  ];
  const edges = [
    "M150 384 L88 306", "M150 384 L212 306", "M88 306 L56 222", "M88 306 L124 222",
    "M212 306 L184 222", "M212 306 L246 222", "M124 222 L104 138", "M184 222 L172 138",
    "M184 222 L104 138", "M104 138 L150 66", "M172 138 L150 66",
  ];
  return (
    <svg viewBox="0 0 300 430" className="il" aria-hidden="true">
      <defs>
        <radialGradient id="gg" cx="50%" cy="16%" r="60%">
          <stop offset="0" style={v({ stopColor: "var(--verd)", stopOpacity: "0.22" })} />
          <stop offset="1" style={v({ stopColor: "var(--verd)", stopOpacity: "0" })} />
        </radialGradient>
      </defs>
      <rect width="300" height="430" fill="url(#gg)" />
      {edges.map((d) => (
        <path key={d} d={d} className="g-edge" />
      ))}
      <path className="g-route b" pathLength={1} d="M150 384 L88 306 L56 222" />
      <path className="g-route a" pathLength={1} d="M150 384 L212 306 L184 222 L172 138 L150 66" />
      {nodes.map(([x, y], i) => (
        <circle key={i} className="g-node" cx={x} cy={y} r={i === 9 ? 0 : 4} />
      ))}
      <g className="g-x">
        <path d="M48 214 L64 230 M64 214 L48 230" />
      </g>
      <circle className="g-goal" cx="150" cy="66" r="9" />
      <circle className="g-goal-core" cx="150" cy="66" r="3.4" />
    </svg>
  );
}
