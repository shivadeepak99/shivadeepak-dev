import { ImageResponse } from "next/og";
import { site, theme as c } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: c.bg,
          color: c.fg,
          borderTop: `6px solid ${c.accent}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: 4, color: c.dim }}>
          {/* satori cannot draw SVG text, so the monogram is rebuilt from boxes here */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#17171a",
              border: "2px solid #3a3a40",
              color: c.fg,
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            SD
            <div style={{ display: "flex", width: 22, height: 3, borderRadius: 2, background: c.accent, marginTop: 2 }} />
          </div>
          <span style={{ display: "flex" }}>SHIVADEEPAK.DEV</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: c.muted, lineHeight: 1.3, maxWidth: 980 }}>
            {site.line}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: c.dim, letterSpacing: 2 }}>
          {`${site.role.toUpperCase()} · ${site.location.toUpperCase()}`}
        </div>
      </div>
    ),
    size,
  );
}
