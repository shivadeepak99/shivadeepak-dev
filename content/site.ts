// Site-wide facts. Long-form content lives in work.ts and notes.ts.

export const site = {
  name: "Shiva Deepak",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivadeepak.dev",
  // Hidden until the mailbox exists. Set it to the address to switch every
  // contact point on the site back to email; while null they all point to LinkedIn.
  email: null as string | null,
  github: "https://github.com/shivadeepak99",
  linkedin: "https://www.linkedin.com/in/shivadeepak-shanigaram-77b475314/",
  // "crimson" (black + reds) or "ember" (original warm look). Tokens live in app/globals.css.
  palette: "crimson" as "crimson" | "ember",
  // One sentence, used on every surface: hero, <title>, social card, GitHub bio.
  line: "I build AI systems that decide what to do next.",
  emphasis: "decide", // the word set in ember italic inside `line`
  sub: "Agents, extraction pipelines, and the plumbing that keeps them honest.",
  tz: "Asia/Kolkata",
  // What the arch shows until a real portrait exists: "vigil" | "watcher" | "graph" | "sigil".
  illustration: "vigil" as "vigil" | "watcher" | "graph" | "sigil",
  // Drop the animated portrait in here when it exists, e.g.
  //   portrait: { src: "/portrait.mp4", poster: "/portrait.jpg", alt: "Shiva Deepak" }
  // Put the files in /public. While this is null, the arch shows the animated sigil.
  portrait: null as null | { src: string; poster?: string; alt: string },
};

export const now = [
  {
    label: "Now",
    text: "Owning production AI systems end to end at a maritime software company, as an engineering intern with a senior's scope.",
  },
  {
    label: "Studying",
    text: "B.Tech in Computer Science (AI & Data Science) at IIIT Kottayam, 2023–2027. IIT Madras BS, foundation level completed.",
  },
];

export const elsewhere = [
  {
    label: "Earlier",
    text: "PromptForge, an agentic prompt-to-system platform. Paused. What I learned there is in everything I've built since.",
  },
  {
    label: "Quietly",
    text: "On the side, helping very old books find new readers.",
  },
];

export const principles = [
  {
    title: "Confidence is not verification.",
    body: "A model will rate a wrong answer as certain. I check outputs against something outside the model.",
  },
  {
    title: "Refusal is an outcome.",
    body: "A system that can't say “I can't support that” will eventually say something false.",
  },
  {
    title: "Measure it, then print the misses.",
    body: "Ablations, held-out sets and failure audits belong in the write-up, not in a drawer.",
  },
];

export const uses = {
  updated: "September 2026",
  intro: "What I actually reach for. Revised when something changes, not when something trends.",
  sections: [
    {
      title: "Build",
      items: [
        ["Python", "Agents, retrieval, data pipelines, GPU workers."],
        ["TypeScript", "APIs, typed contracts, and the interfaces on top."],
        ["PostgreSQL", "The default answer. Neo4j when the question is really about relationships."],
        ["AWS", "SQS, S3, EC2. Boring on purpose."],
      ],
    },
    {
      title: "Agents",
      items: [
        ["LangGraph", "Explicit state for routing, memory and recovery."],
        ["Gemini, Claude, Groq", "Picked per task and measured, never assumed."],
        ["MCP", "Tool and context surface for assistant-native workflows."],
      ],
    },
    {
      title: "Daily",
      items: [
        ["VS Code", "Primary editor."],
        ["Claude Code", "Review, debugging, and arguing through design decisions."],
      ],
    },
  ] as { title: string; items: [string, string][] }[],
};

// The single place every "say hello" link reads from.
export const contact = site.email
  ? { href: `mailto:${site.email}`, label: site.email, cta: "Say hello", pitch: "Email is the fastest way." }
  : { href: site.linkedin, label: "Say hello on LinkedIn", cta: "Say hello", pitch: "A message on LinkedIn is the fastest way." };

// Same values as the CSS tokens, for the places CSS can't reach (social card, theme-color).
export const paletteHex = {
  crimson: { ink: "#000000", bone: "#f3ecec", ash: "#b9acac", dim: "#9e8f8f", accent: "#ff0000", glow: "rgba(188,2,2,0.45)" },
  ember: { ink: "#0e0d0b", bone: "#ebe5d8", ash: "#a8a193", dim: "#928b7c", accent: "#ff6a3d", glow: "rgba(255,106,61,0.22)" },
}[site.palette];
