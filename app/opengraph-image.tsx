import { ImageResponse } from "next/og";
import { site, paletteHex as c } from "@/content/site";

export const alt = `${site.name}: ${site.line}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const [before, after] = site.line.split(site.emphasis);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 84,
          background: c.ink,
          backgroundImage:
            `radial-gradient(circle at 100% 100%, ${c.glow}, rgba(0,0,0,0) 55%)`,
          color: c.bone,
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: c.dim }}>
          SHIVADEEPAK.DEV
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 92, lineHeight: 1.02 }}>
          <span>{before}</span>
          <span style={{ color: c.accent, fontStyle: "italic" }}>{site.emphasis}</span>
          <span>{after}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: c.ash }}>
          <span>{site.name}</span>
          <span>{site.sub}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
