// All site content lives here. Edit this file to update the site.
// Components consume this data — no hard-coded copy in JSX.

export const siteMeta = {
  name: "Shiva Deepak",
  title: "Founder · AI Engineer · Full-Stack",
  description:
    "Building agentic AI systems. Founder of PromptForge AI — a production cognitive graph engine. AI & Data Science @ IIT Madras + IIIT Kottayam.",
  url: "https://shivadeepak.dev",
  email: "shivadeepak.dev@gmail.com",
  github: "https://github.com/shivadeepak99",
  linkedin: "https://www.linkedin.com/in/shivadeepak-shanigaram-77b475314/",
  orcid: "https://orcid.org/0009-0008-5214-1303",
  location: "India · UTC +05:30",
  avatar: "/avatar.png", // Drop your AI-generated anime avatar here as public/avatar.png
};

export const hero = {
  greeting: "Hey, I'm Shiva Deepak.",
  tagline:
    "I build agentic AI systems — the kind that decide what to do next, not just what to say next.",
  status: {
    label: "Currently",
    text: "building PromptForge AI",
    href: "https://promptforgeai.tech",
  },
  open: {
    label: "Open to",
    text: "AI engineering roles, research collabs, interesting problems",
  },
};

export const building = {
  name: "PromptForge AI",
  url: "https://promptforgeai.tech",
  tag: "Live SaaS · Founder",
  pitch:
    "An agentic AI development toolkit. Powered by a 14-node cognitive graph engine that turns a single prompt into a complete technical architecture — system design, database schema, API specs, security recommendations.",
  // Honest, verifiable metrics only — no marketing-page numbers.
  metrics: [
    { label: "Cognitive graph", value: "14 nodes" },
    { label: "Product surfaces", value: "8" },
    { label: "Team", value: "4 people" },
    { label: "Models routed", value: "3 vendors" },
  ],
  components: [
    { icon: "Cpu", label: "Architect Engine", desc: "14-node cognitive graph: idea → full technical blueprint" },
    { icon: "Brain", label: "Brain Engine", desc: "Multi-model reasoning — OpenAI, Anthropic, Google" },
    { icon: "Package", label: "Prompt Vault", desc: "Cross-platform prompt sync" },
    { icon: "Store", label: "Marketplace", desc: "Buy and sell prompts" },
    { icon: "Code2", label: "VS Code Extension", desc: "Live in production" },
    { icon: "Globe", label: "Chrome Extension", desc: "Live in production" },
    { icon: "Plug", label: "MCP Server", desc: "Model Context Protocol — native Claude integration" },
    { icon: "Monitor", label: "Electron Desktop App", desc: "Cross-platform desktop client" },
  ],
  stack: ["Python", "TypeScript", "LangGraph", "MCP Protocol", "OpenAI", "Anthropic", "Google Gemini", "Electron", "Node.js"],
};

export type Project = {
  name: string;
  href?: string;
  privateNote?: string;
  oneLiner: string;
  description: string;
  stack: string[];
  highlights?: string[];
  status?: "live" | "active" | "complete" | "experimental";
};

export const projects: Project[] = [
  {
    name: "Agentic-RAG",
    href: "https://github.com/shivadeepak99/Agentic-RAG",
    oneLiner: "7-node LangGraph agent over arXiv cs.AI papers.",
    description:
      "An agentic RAG system that decides for itself whether to retrieve, ask for clarification, call a tool, refuse, or answer directly. Built with LangGraph for explicit state, three-type memory (conversation + episodic + semantic), and four retrieval modes with an honest ablation showing which actually helped.",
    stack: ["Python", "LangGraph", "Chroma", "Groq", "BM25", "Sentence-Transformers", "FastAPI", "Docker"],
    highlights: [
      "7-node graph: decide → retrieve / clarify / tool / refuse / answer",
      "Three-type memory: conversation, episodic (LLM-summarized), semantic (user-profile)",
      "4 retrieval modes benchmarked — vector, lightweight hybrid, true hybrid, cross-encoder",
      "17 hand-written eval cases, scored on action accuracy + content match",
      "Honest result: cross-encoder didn't help. I said so in the README.",
    ],
    status: "complete",
  },
  {
    name: "Senthium AI",
    href: "https://github.com/shivadeepak99/senthium-ai",
    oneLiner: "AI-powered PC security daemon with face recognition.",
    description:
      "Monitors your PC for unauthorized access while long jobs run. Face recognition via OpenCV + DeepFace, Go WebSocket backend, Next.js dashboard, and a rules engine for process/CPU/network triggers. Alerts via Discord, Telegram, and email.",
    stack: ["Python", "Go", "Next.js", "OpenCV", "DeepFace", "WebSocket", "Streamlit"],
    highlights: [
      "v0.6.0 — actively maintained with versioned releases",
      "Multi-channel alerts: Discord · Telegram · Email · Windows toast",
      "Rules engine: process, CPU, network, disk, schedule triggers",
    ],
    status: "active",
  },
  {
    name: "Quantum Image Shield",
    href: "https://github.com/shivadeepak99/quantum-image-shield",
    oneLiner: "Quantum-classical hybrid image encryption using IBM Qiskit.",
    description:
      "Hadamard gates generate truly random cryptographic keys; XOR + pixel permutation encrypts the image. Includes full statistical analysis — entropy, histogram uniformity, correlation, and PSNR metrics — with a Streamlit interface.",
    stack: ["Python", "Qiskit", "Streamlit", "NumPy", "PIL"],
    highlights: [
      "Hadamard-gate quantum key generation",
      "Hybrid XOR + permutation cipher",
      "Statistical security analysis built in",
      "Perfect lossless reconstruction on decrypt",
    ],
    status: "experimental",
  },
  {
    name: "Agent Trace",
    href: "https://github.com/shivadeepak99/agent-trace",
    oneLiner: "Standard format for tracing AI-generated code execution.",
    description:
      "A proposed standard for tracing what an AI coding agent actually did — file-level changes, decisions, and reasoning — so the next agent (or human) can audit it.",
    stack: ["TypeScript"],
    status: "experimental",
  },
  {
    name: "Project Supervisor DeepAgent",
    privateNote: "Private — part of PromptForge AI",
    oneLiner: "Python agent that autonomously monitors running software projects.",
    description:
      "An always-on agent that watches the projects you're shipping. Flags anomalies, summarizes status, and suggests fixes. Built on the same LangGraph patterns as the public Agentic-RAG project, but tuned for long-horizon supervision rather than single-turn QA.",
    stack: ["Python", "LangGraph", "FastAPI"],
    status: "active",
  },
  {
    name: "pfai-mcp-server",
    privateNote: "Private — part of PromptForge AI",
    oneLiner: "MCP (Model Context Protocol) server for native Claude integration.",
    description:
      "An MCP server built to Anthropic's open spec, exposing PromptForge tools (architect, vault, marketplace) directly inside Claude. This is integration at the protocol layer — not a chat wrapper.",
    stack: ["TypeScript", "MCP Protocol", "Node.js"],
    status: "active",
  },
];

export const philosophy = {
  heading: "How I think about AI systems",
  paragraphs: [
    "I build agentic systems, not pipelines. The difference: a pipeline retrieves, stuffs context, and answers — it has no judgment. An agent decides what to do next based on context, memory, and confidence. It can refuse. It can ask. It can use a tool when the question demands it.",
    "The most underrated skill in agent design is knowing when not to answer. Most RAG systems happily fabricate citations when they should be saying \"I don't know.\" Most chat agents bulldoze through ambiguous questions instead of clarifying. I care more about the refuse path than the happy path.",
    "I run ablations on my own assumptions. When I added a cross-encoder reranker to Agentic-RAG, I expected it to help. It didn't. I wrote that in the README rather than quietly turning it off. Honest negative results are the difference between a portfolio and a paper.",
    "I can explain every line.",
  ],
};

export const stack = {
  AI: ["LangGraph", "LangChain", "Anthropic Claude", "OpenAI GPT", "Groq", "Google Gemini", "MCP Protocol"],
  Retrieval: ["ChromaDB", "BM25", "Sentence-Transformers", "Hybrid Search", "Cross-Encoder Reranking"],
  Backend: ["Python", "FastAPI", "Go", "Node.js", "Express"],
  Frontend: ["TypeScript", "Next.js", "React", "Electron", "Tailwind CSS"],
  Extensions: ["VS Code API", "Chrome Extension API", "MCP Server SDK"],
  Infra: ["Docker", "GitHub Actions", "Vercel", "Redis", "MySQL"],
  Quantum: ["IBM Qiskit"],
};

export const background = {
  education: [
    {
      institution: "IIT Madras",
      degree: "BSc — AI & Data Science",
      status: "ongoing",
    },
    {
      institution: "IIIT Kottayam",
      degree: "Computer Science",
      status: "ongoing",
    },
  ],
  organizations: [
    { name: "PromptForge AI", role: "Founder", url: "https://promptforgeai.tech" },
    { name: "QiText-Engine", role: "Member" },
  ],
  research: {
    orcid: "0009-0008-5214-1303",
    note: "ORCID-registered researcher",
  },
};

export const uses = {
  intro:
    "Tools and stack I actually reach for. Updated when something changes — not when something trends.",
  sections: [
    {
      title: "Editor",
      items: [
        { name: "VS Code", note: "Primary editor — with my own PromptForge extension installed." },
        { name: "Claude Code", note: "Pair programming. Used as a senior I can argue with." },
      ],
    },
    {
      title: "Languages I reach for",
      items: [
        { name: "Python", note: "AI/ML, agents, FastAPI backends." },
        { name: "TypeScript", note: "Frontend, extensions, Electron, MCP servers." },
        { name: "Go", note: "When I need a fast WebSocket service." },
      ],
    },
    {
      title: "AI / Agents",
      items: [
        { name: "LangGraph", note: "Explicit state machines for agent logic." },
        { name: "Anthropic Claude", note: "Primary reasoning model." },
        { name: "Groq", note: "When I need fast structured JSON output." },
        { name: "Sentence-Transformers", note: "Local embeddings — free and good enough." },
      ],
    },
  ],
};
