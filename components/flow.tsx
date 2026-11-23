// Numbered architecture steps, read left to right.
export function Flow({ steps }: { steps: { label: string; note: string }[] }) {
  return (
    <ol className="flow" aria-label="System flow">
      {steps.map((s) => (
        <li key={s.label}>
          <b>{s.label}</b>
          <small>{s.note}</small>
        </li>
      ))}
    </ol>
  );
}
