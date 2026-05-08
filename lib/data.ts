// All site content lives here. Edit this file to update the site.
// Components consume this data; JSX stays focused on presentation.

export const siteMeta = {
  name: "Shiva Deepak",
  title: "AI Systems Engineer • Backend Engineer • Agentic AI Builder",
  description:
    "AI systems and backend engineering portfolio focused on orchestration, retrieval, memory systems, telemetry, and long-running automation workflows.",
  url: "https://shivadeepak.dev",
  email: "hello@shivadeepak.dev",
  github: "https://github.com/shivadeepak99",
  linkedin: "https://www.linkedin.com/in/shivadeepak-shanigaram-77b475314/",
  instagram: "https://www.instagram.com/shivadeepakshanigaram/",
  location: "India · UTC +05:30",
  avatar: "/avatar.png",
};

export const hero = {
  greeting: "Shiva Deepak",
  role: "AI Systems Engineer • Backend Engineer • Agentic AI Builder",
  tagline:
    "I build AI systems and backend workflows that decide what to do next — not just what to say next.",
  status: {
    label: "Currently",
    text: "building PromptForgeAI",
    href: "https://promptforgeai.tech",
  },
  open: {
    label: "Open to",
    text: "AI engineering roles, backend engineering roles, and research collaborations",
  },
};

export const building = {
  name: "PromptForgeAI",
  url: "https://promptforgeai.tech",
  tag: "ACTIVE · FLAGSHIP",
  pitch:
    "Agentic AI development infrastructure for turning prompts into structured technical systems: architecture plans, API specifications, database schemas, orchestration flows, and engineering workflows.",
  signals: [
    { label: "Runtime", value: "Multi-agent orchestration" },
    { label: "Model layer", value: "OpenAI / Anthropic / Gemini routing" },
    { label: "Tooling", value: "MCP-native integrations" },
    { label: "Execution", value: "Async local + cloud workflows" },
  ],
  architecture: [
    "Prompt intake",
    "System planner",
    "Model router",
    "Artifact generators",
    "Tool surfaces",
  ],
  components: [
    {
      icon: "Workflow",
      label: "Orchestration Runtime",
      desc: "Coordinates staged system-design workflows instead of single-shot prompt output.",
    },
    {
      icon: "Brain",
      label: "Cognitive Workflows",
      desc: "Breaks vague goals into architecture, API, schema, security, and execution tasks.",
    },
    {
      icon: "GitBranch",
      label: "Model Routing",
      desc: "Routes work across OpenAI, Anthropic, and Gemini-style provider surfaces.",
    },
    {
      icon: "Plug",
      label: "MCP Integrations",
      desc: "Exposes tools through protocol-native assistant workflows.",
    },
    {
      icon: "Package",
      label: "Prompt Vault",
      desc: "Organizes reusable prompt and system patterns across development contexts.",
    },
    {
      icon: "Code2",
      label: "VS Code Workflow",
      desc: "Brings system-generation loops closer to day-to-day engineering work.",
    },
    {
      icon: "Globe",
      label: "Browser Surface",
      desc: "Connects prompt workflows to web-based research and generation contexts.",
    },
    {
      icon: "Monitor",
      label: "Desktop Tooling",
      desc: "Supports local-first workflows where long-running tasks need a durable surface.",
    },
  ],
  stack: [
    "TypeScript",
    "Python",
    "LangGraph",
    "MCP",
    "OpenAI",
    "Anthropic",
    "Gemini",
    "Electron",
    "Node.js",
  ],
};

export type ProjectStatus =
  | "active"
  | "complete"
  | "experimental"
  | "private"
  | "foundational";

export type Project = {
  name: string;
  href?: string;
  privateNote?: string;
  oneLiner: string;
  description: string;
  stack: string[];
  highlights?: string[];
  diagram?: string[];
  tradeoffs?: string[];
  status: ProjectStatus;
  priority?: "primary";
};

export type ProjectCategory = {
  title: string;
  eyebrow: string;
  description: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    eyebrow: "Featured Systems",
    title: "Retrieval, orchestration, telemetry, and document intelligence.",
    description:
      "The strongest systems work: explicit routing, memory-aware reasoning, data pipelines, and agentic execution loops.",
    projects: [
      {
        name: "Agentic-RAG",
        href: "https://github.com/shivadeepak99/Agentic-RAG",
        oneLiner: "Evaluation-driven retrieval and reasoning system over arXiv cs.AI papers.",
        description:
          "A LangGraph-based agentic retrieval system that decides whether to retrieve, clarify, call a tool, refuse, or answer directly using memory-aware reasoning and multiple retrieval strategies.",
        stack: [
          "Python",
          "LangGraph",
          "FastAPI",
          "Chroma",
          "BM25",
          "Sentence-Transformers",
          "Groq",
          "Docker",
        ],
        highlights: [
          "Seven-node routing graph with retrieve, tool, clarify, refuse, answer, and chat paths.",
          "Conversation, episodic, and semantic memory are injected into decision and answer prompts.",
          "Vector, lightweight hybrid, true hybrid, and cross-encoder retrieval modes are benchmarked.",
          "The evaluation covers retrieval, memory, refusal, clarification, tool routing, and smalltalk cases.",
        ],
        diagram: ["User query", "Decide", "Memory context", "Retrieve / tool / refuse", "Grounded answer"],
        tradeoffs: [
          "Lightweight hybrid performed best on the benchmark; the cross-encoder added compute without improving retrieval quality.",
          "Refusal and clarification are treated as first-class system outcomes, not error states.",
        ],
        status: "complete",
        priority: "primary",
      },
      {
        name: "Deus Ex Machina",
        href: "https://github.com/shivadeepak99/deus_ex_machina",
        oneLiner: "Autonomous multi-agent orchestration framework for goal-driven execution.",
        description:
          "An autonomous orchestration framework for goal-driven AI execution using LangGraph, vector-memory retrieval, and multi-agent planning loops.",
        stack: [
          "Python",
          "LangGraph",
          "Groq / Llama3",
          "ChromaDB",
          "Ollama embeddings",
          "Playwright",
          "Rich",
        ],
        highlights: [
          "Cognitive core decomposes goals into structured task plans.",
          "Router dispatches work to specialist agent teams with distinct tool access.",
          "Execution results are embedded into persistent vector memory for later runs.",
          "Workspace isolation keeps file and terminal actions scoped to a sandboxed directory.",
        ],
        diagram: ["Goal", "Cognitive core", "Router", "Agent teams", "Memory loop"],
        tradeoffs: [
          "The project explores long-running planning loops, not chat-only interaction.",
          "Architecture is intentionally cyclic so outcomes can feed future planning steps.",
        ],
        status: "active",
      },
      {
        name: "PromptLens",
        href: "https://github.com/shivadeepak99/PromptLens",
        oneLiner: "Prompt telemetry, ETL, warehousing, and analytics platform.",
        description:
          "An analytics and warehousing platform for LLM prompt telemetry with ETL pipelines, feature engineering, prompt observability, and behavior analysis workflows.",
        stack: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "ETL",
          "OLAP",
          "R",
          "Next.js",
          "Data Warehousing",
        ],
        highlights: [
          "Raw prompt logs are normalized through schema adapters and validation layers.",
          "Feature extraction maps prompt structure into warehouse-ready analytical fields.",
          "PostgreSQL star schema, materialized views, and indexes support OLAP-style queries.",
          "Analytics layer includes clustering, association rules, and baseline outcome models.",
        ],
        diagram: ["Raw logs", "ETL", "Feature engine", "Warehouse", "Analytics API"],
        tradeoffs: [
          "The project frames prompt engineering as an observability and data problem, not a guessing loop.",
          "Dashboard work sits on top of backend data workflows rather than replacing them.",
        ],
        status: "active",
      },
      {
        name: "Agent-Author",
        privateNote: "Private active system",
        oneLiner: "AI document intelligence and publication pipeline.",
        description:
          "A document intelligence pipeline combining OCR, translation workflows, semantic retrieval, commentary generation, export orchestration, and audit telemetry for structured publication systems.",
        stack: [
          "OCR",
          "Semantic Retrieval",
          "Translation",
          "Export Pipelines",
          "Telemetry",
          "Document Intelligence",
        ],
        highlights: [
          "Treats document processing as a multi-stage workflow rather than a single generation step.",
          "Combines extraction, retrieval, commentary, export, and audit concerns in one pipeline.",
          "Architecture is private; public implementation notes are currently evolving.",
        ],
        diagram: ["Documents", "OCR / translation", "Semantic index", "Commentary", "Exports + audit"],
        tradeoffs: [
          "The useful part is orchestration: keeping provenance, generated commentary, and exports aligned.",
          "Telemetry matters because document workflows need debuggable processing histories.",
        ],
        status: "private",
      },
    ],
  },
  {
    eyebrow: "Infrastructure & Automation",
    title: "Daemon systems, event loops, media pipelines, and long-running agents.",
    description:
      "Backend-heavy projects that coordinate background work, telemetry, assets, and external tools.",
    projects: [
      {
        name: "Senthium-AI",
        href: "https://github.com/shivadeepak99/senthium-ai",
        oneLiner: "Presence-aware workstation monitoring and automation platform.",
        description:
          "A daemon-based workstation monitoring and automation platform with telemetry collection, rule-based triggers, dashboard orchestration, and real-time event monitoring.",
        stack: [
          "Python",
          "OpenCV",
          "DeepFace",
          "Streamlit",
          "IPC",
          "JSONL telemetry",
          "CLI",
          "WebSocket",
        ],
        highlights: [
          "Background daemon and service commands support long-running workstation monitoring.",
          "Rules engine evaluates process, CPU, network, disk, and schedule triggers.",
          "Activity logging, analytics summaries, and multi-channel alerting make behavior observable.",
        ],
        diagram: ["Daemon", "Rule triggers", "Telemetry log", "Dashboard", "Alerts"],
        status: "active",
      },
      {
        name: "project-storybook",
        href: "https://github.com/shivadeepak99/project-storybook",
        oneLiner: "AI-assisted multimedia orchestration pipeline.",
        description:
          "An automation pipeline that coordinates story generation, asset extraction, and FFmpeg-based synthesis workflows for narrated multimedia content.",
        stack: [
          "Python",
          "FastAPI",
          "Next.js",
          "SSE",
          "Playwright",
          "FFmpeg",
          "Azure Speech",
          "NVIDIA NIM",
        ],
        highlights: [
          "FastAPI backend manages background generation work and streams stage updates over SSE.",
          "Playwright extraction aligns generated text and image assets into a structured story file.",
          "FFmpeg filtergraphs, SSML, subtitles, and scene stitching produce the final media artifact.",
        ],
        diagram: ["Source", "Planning", "Asset extraction", "TTS + subtitles", "FFmpeg render"],
        tradeoffs: [
          "The engineering value is in durable media orchestration and fallback handling, not content novelty.",
        ],
        status: "active",
      },
      {
        name: "project-LIFE",
        privateNote: "No public repository yet",
        oneLiner: "Autonomous Discord-based AI workflow agent.",
        description:
          "An asynchronous AI agent with persistent memory, intent-driven execution, multimodal generation, and long-running workflow orchestration within Discord environments.",
        stack: [
          "Async agents",
          "Discord workflows",
          "Persistent memory",
          "Intent routing",
          "Multimodal generation",
          "Automation",
        ],
        highlights: [
          "Architecture is experimental and currently evolving.",
          "Focus is on persistent memory, async event handling, and workflow continuity.",
          "Presented as a research-oriented agent system rather than a finished product.",
        ],
        diagram: ["Discord event", "Intent router", "Memory", "Tools / media", "Long-running job"],
        status: "experimental",
      },
    ],
  },
  {
    eyebrow: "Foundations",
    title: "Earlier full-stack systems work.",
    description:
      "Foundational engineering work that shows comfort with persistent state, role-based workflows, and larger application surfaces.",
    projects: [
      {
        name: "bank-management-system",
        href: "https://github.com/shivadeepak99/bank-management-system",
        oneLiner: "Large foundational full-stack banking workflow system.",
        description:
          "A full-stack banking application with customer and admin workflows, transactional operations, loan processing, and persistent account management built using Node.js, Express, EJS, and MySQL.",
        stack: ["Node.js", "Express", "EJS", "MySQL", "bcrypt", "express-session", "jQuery"],
        highlights: [
          "Customer and admin portals cover account opening, approval, transactions, loans, and profile workflows.",
          "MySQL-backed request flow uses Express routes, session authentication, and server-rendered views.",
          "Positioned as earlier systems experience, not as a current AI infrastructure project.",
        ],
        diagram: ["Browser", "Express routes", "Handlers", "MySQL", "Admin / customer workflows"],
        status: "foundational",
      },
    ],
  },
];

export const philosophy = {
  heading: "How I think about AI systems",
  paragraphs: [
    "I prefer agentic systems with explicit state over one-shot prompt chains. The useful part is not that a model can answer; it is that a system can decide whether to retrieve, clarify, use a tool, refuse, or continue a workflow.",
    "The most underrated path in retrieval systems is the one that does not answer. Good AI infrastructure needs refusal paths, ambiguity handling, memory boundaries, and traces that make failure cases inspectable.",
    "I run ablations on my assumptions. In Agentic-RAG, heavier reranking added latency and complexity without improving the benchmark. That kind of result matters because evaluation is how systems stay honest.",
    "I optimize for systems I can reason about, debug, and evolve long-term.",
  ],
};

export const engineeringNotes = {
  heading: "System notes",
  intro:
    "Short engineering fragments behind the projects: what I pay attention to when a workflow needs to last longer than a single model response.",
  items: [
    {
      title: "Orchestration before interface",
      text:
        "The UI can be minimal if the system underneath has clear routing, durable state, and recoverable execution steps.",
    },
    {
      title: "Evaluation over complexity",
      text:
        "A reranker, agent team, or memory layer is only useful when it improves behavior under real test cases.",
    },
    {
      title: "Memory as a contract",
      text:
        "Conversation, episodic, semantic, and domain memory should stay distinct so the system can explain what it used and why.",
    },
    {
      title: "Telemetry is infrastructure",
      text:
        "Prompt logs, node traces, activity logs, and audit trails are what make long-running AI workflows debuggable.",
    },
  ],
};

export const stack = {
  Agents: ["LangGraph", "LangChain", "MCP", "OpenAI", "Anthropic Claude", "Groq", "Google Gemini"],
  Retrieval: ["ChromaDB", "BM25", "Sentence-Transformers", "Hybrid Search", "Cross-Encoder Reranking"],
  Backend: ["Python", "FastAPI", "Node.js", "Express", "Go", "WebSocket", "SSE"],
  Data: ["PostgreSQL", "MySQL", "OLAP", "ETL", "Feature Engineering", "Materialized Views"],
  Automation: ["Playwright", "FFmpeg", "CLI Tools", "Daemon Systems", "Discord Workflows"],
  Frontend: ["TypeScript", "Next.js", "React", "Electron", "Tailwind CSS"],
  Observability: ["Structured Logs", "Telemetry Pipelines", "Activity Logs", "Evaluation Harnesses"],
};

export const background = {
  education: [
    {
      institution: "IIIT Kottayam",
      degree: "CSE - specialization in AI and DS, 2023-2027",
      status: "ongoing",
    },
    {
      institution: "IIT Madras BS",
      degree: "AI & Data Science foundation",
      status: "completed",
    },
  ],
  organizations: [
    { name: "PromptForgeAI", role: "Building", url: "https://promptforgeai.tech" },
    { name: "QiText-Engine", role: "Member" },
  ],
};

export const uses = {
  intro:
    "Tools and stack I actually reach for. Updated when something changes, not when something trends.",
  sections: [
    {
      title: "Editor",
      items: [
        { name: "VS Code", note: "Primary editor, especially for TypeScript, backend work, and extensions." },
        { name: "Claude Code", note: "Used for code review, debugging, and arguing through design decisions." },
      ],
    },
    {
      title: "Languages I reach for",
      items: [
        { name: "Python", note: "AI systems, agents, retrieval, data pipelines, and FastAPI backends." },
        { name: "TypeScript", note: "Frontend surfaces, extensions, Electron, and protocol tooling." },
        { name: "Go", note: "When a small real-time service needs to stay simple and fast." },
      ],
    },
    {
      title: "AI / Agents",
      items: [
        { name: "LangGraph", note: "Explicit state machines for routing, memory, and agent execution." },
        { name: "MCP", note: "Tool and context integration layer for assistant-native workflows." },
        { name: "Sentence-Transformers", note: "Local embeddings for practical retrieval experiments." },
        { name: "Groq", note: "Fast structured responses and evaluation loops." },
      ],
    },
  ],
};
