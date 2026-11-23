// Site-wide facts. Case studies live in work.ts.

export const site = {
  name: "Shanigaram Shivadeepak",
  short: "Shivadeepak",
  role: "AI Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivadeepak.dev",
  // Every contact point on the site reads this.
  email: "shivadeepak.dev@gmail.com",
  github: "https://github.com/shivadeepak99",
  location: "Hyderabad, India",
  // Used on every surface: hero, <title>, social card.
  line: "AI engineer building reliable agents, retrieval systems and data pipelines.",
  sub: "I design and ship production AI systems end to end: tool-using agents with access control enforced in code, document extraction services, and the evaluation work that keeps them accurate.",
};

export const profile = [
  { label: "Current role", text: "AI Engineering Intern, maritime software company" },
  { label: "Since", text: "May 2026" },
  { label: "Education", text: "B.Tech, Computer Science (AI & Data Science), IIIT Kottayam" },
  { label: "Focus", text: "AI agents, retrieval, backend systems" },
  { label: "Location", text: "Hyderabad, India (IST)" },
];

export const capabilities = [
  {
    title: "AI agents and evaluation",
    body: "Tool-calling agents built on LangGraph, with permissions enforced in code rather than in the prompt. Every agent ships with a labelled test set, and each failure is classified before anything is tuned.",
    tools: ["LangGraph", "Gemini", "RAG", "Hybrid search", "LLM evaluation"],
  },
  {
    title: "Document and data pipelines",
    body: "Extraction of long technical PDFs, including scanned pages, into structured data, and ETL pipelines that verify no value is lost between the source document and the database.",
    tools: ["Python", "OCR", "Vision models", "Neo4j", "PostgreSQL"],
  },
  {
    title: "Backend systems",
    body: "Asynchronous services designed for failure: crash recovery through database leases, idempotent submission, typed contracts shared between services, and deployment on AWS.",
    tools: ["TypeScript", "FastAPI", "Fastify", "AWS SQS / S3 / EC2", "Docker"],
  },
];

export const timeline = [
  {
    period: "May 2026 – Present",
    title: "AI Engineering Intern",
    org: "Maritime software company",
    text: "Built and operate a natural-language candidate search agent, the ETL pipeline behind it, a PDF extraction service, and a fuel-consumption forecasting model.",
  },
  {
    period: "2023 – 2027",
    title: "B.Tech, Computer Science and Engineering (AI & Data Science)",
    org: "Indian Institute of Information Technology, Kottayam",
    text: "CGPA 8.35 / 10. Expected graduation March–April 2027.",
  },
  {
    period: "Completed",
    title: "BS in Data Science and Programming, foundation level",
    org: "Indian Institute of Technology Madras",
    text: "",
  },
];

export const uses = {
  updated: "November 2026",
  intro: "Languages, infrastructure and tools used in current work.",
  sections: [
    {
      title: "Engineering",
      items: [
        ["Python", "Agents, retrieval, data pipelines and GPU workers."],
        ["TypeScript", "APIs, typed service contracts and web interfaces."],
        ["PostgreSQL", "Primary datastore. Neo4j where the data is fundamentally a graph."],
        ["AWS", "SQS, S3 and EC2."],
      ],
    },
    {
      title: "AI",
      items: [
        ["LangGraph", "Explicit state for routing, memory and recovery."],
        ["Gemini, Claude, Groq", "Selected per task on measured results."],
        ["MCP", "Tool and context interfaces for assistant workflows."],
      ],
    },
    {
      title: "Workflow",
      items: [
        ["VS Code", "Primary editor."],
        ["Claude Code", "Code review, debugging and design review."],
      ],
    },
  ] as { title: string; items: [string, string][] }[],
};

// The single place every contact link reads from.
export const contact = { href: `mailto:${site.email}`, label: site.email, cta: "Contact" };

// Same values as the CSS tokens, for the places CSS can't reach (social card, theme-color).
export const theme = {
  bg: "#0a0a0b",
  fg: "#ededef",
  muted: "#a1a1aa",
  dim: "#71717a",
  line: "#26262a",
  accent: "#e5484d",
};
