import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shiva Deepak — Founder · AI Engineer · Full-Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #2a1758 0%, #0a0a0a 60%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            color: "#a78bfa",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#10b981",
            }}
          />
          shivadeepak.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Shiva Deepak
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Founder · AI Engineer · Full-Stack
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#71717a",
              marginTop: 8,
              maxWidth: 900,
            }}
          >
            Building agentic AI systems. PromptForge AI · LangGraph · MCP.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          <div>IIT Madras · IIIT Kottayam</div>
          <div>shivadeepak.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
