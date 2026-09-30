"use client";

import { useEffect, useState } from "react";
import { trace } from "@/content/trace";

const stamp = (i: number) => {
  const s = 0.12 + i * 0.31;
  return `00:0${Math.floor(s)}.${String(Math.round((s % 1) * 100)).padStart(2, "0")}`;
};

// Server renders scenario 0 in full, so the panel is complete without JavaScript.
// After mount it cycles through the scenarios, typing one line at a time.
export function Trace() {
  const [s, setS] = useState(0);
  const [n, setN] = useState(trace[0].lines.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: ReturnType<typeof setTimeout>;
    let si = 1;
    let ni = 0;
    const tick = () => {
      const lines = trace[si].lines;
      if (ni < lines.length) {
        ni += 1;
        setS(si);
        setN(ni);
        id = setTimeout(tick, 780);
      } else {
        id = setTimeout(() => {
          si = (si + 1) % trace.length;
          ni = 0;
          setS(si);
          setN(0);
          tick();
        }, 2800);
      }
    };
    id = setTimeout(() => {
      setS(1);
      setN(0);
      tick();
    }, 4200);
    return () => clearTimeout(id);
  }, []);

  const sc = trace[s];
  return (
    <aside className="ledger rise" style={{ ["--i" as string]: 4 }} aria-hidden="true">
      <header>
        <span>decision trace</span>
        <span>{sc.name}</span>
      </header>
      <ol>
        {sc.lines.slice(0, n).map((l, i) => (
          <li key={`${s}-${i}`} className={l.tone}>
            <span className="t">{stamp(i)}</span>
            <span className="v">{l.verb}</span>
            <span className="x">{l.text}</span>
          </li>
        ))}
      </ol>
      <span className="cursor" />
    </aside>
  );
}
