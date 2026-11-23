// The SD monogram: initials in a rounded square with a thin accent rule.
// Same artwork as app/icon.svg. Used by the header.
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#17171a" stroke="#3a3a40" strokeWidth="2" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill="#ededef"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-0.5"
        style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
      >
        SD
      </text>
      <rect x="22" y="47" width="20" height="2.5" rx="1.25" fill="#e5484d" />
    </svg>
  );
}
