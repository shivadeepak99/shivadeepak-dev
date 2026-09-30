import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site, paletteHex as c } from "@/content/site";
import { LogoMark } from "@/components/logo-mark";

export const alt = `${site.name}: ${site.line}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static Fraunces instances (subset), so the card matches the site's headline.
const font = (f: string) => readFile(join(process.cwd(), "app/fonts", f));

export default async function OpengraphImage() {
  const [roman, italic] = await Promise.all([font("fraunces-roman.ttf"), font("fraunces-italic.ttf")]);
  // Three fixed lines, like the site hero (update them if site.line changes).
  // whiteSpace keeps the spaces around the emphasised word.
  const line = { display: "flex", whiteSpace: "pre" } as const;

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
          background: c.ink,
          backgroundImage: `radial-gradient(circle at 100% 100%, ${c.glow}, rgba(0,0,0,0) 55%)`,
          color: c.bone,
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 24, letterSpacing: 5, color: c.dim }}>
          <LogoMark size={88} />
          <span style={{ display: "flex" }}>SHIVADEEPAK.DEV</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1.04, letterSpacing: -2 }}>
          <div style={line}>I build AI systems</div>
          <div style={line}>
            <span>that </span>
            <span style={{ color: c.accent, fontStyle: "italic" }}>{site.emphasis}</span>
            <span> what</span>
          </div>
          <div style={line}>to do next.</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: c.ash }}>{site.sub}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: roman, weight: 400, style: "normal" },
        { name: "Fraunces", data: italic, weight: 400, style: "italic" },
      ],
    },
  );
}
