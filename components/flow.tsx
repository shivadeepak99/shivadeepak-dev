import type { CSSProperties } from "react";

// A schematic, not a pill chain: numbered nodes, with a pulse travelling each connector.
export function Flow({ steps }: { steps: { label: string; note: string }[] }) {
  return (
    <ol className="flow" aria-label="System flow">
      {steps.map((s, i) => (
        <li key={s.label}>
          {i > 0 && <i aria-hidden="true" style={{ "--k": i } as CSSProperties} />}
          <b>{s.label}</b>
          <small>{s.note}</small>
        </li>
      ))}
    </ol>
  );
}
