// Case files. Production entries are anonymized on purpose: no company, customer or
// vessel names, and no internal metrics. Add figures only after the employer approves.

export type CaseFile = {
  slug: string;
  n: string;
  title: string;
  kicker: string;
  year: string;
  summary: string;
  tags: string[];
  problem: string[];
  constraints: string[];
  flow: { label: string; note: string }[];
  decisions: { title: string; body: string }[];
  outcome: string[];
  hindsight: string[];
  links?: { label: string; href: string }[];
};

export const work: CaseFile[] = [
  {
    slug: "document-extraction",
    n: "01",
    title: "Turning long, ugly PDFs into structured data",
    kicker: "Production · GPU service",
    year: "2026",
    summary:
      "An asynchronous extraction service for a maritime software platform. Long technical documents go in; structured blocks, markdown and search-ready chunks come out. The customer's file is read once and never stored.",
    tags: ["TypeScript", "Python", "SQS · S3 · EC2", "PostgreSQL", "PyTorch", "Vision LLM"],
    problem: [
      "Technical manuals, drawings and scans defeat naive PDF-to-text. Tables break across pages, drawings hold text a layout model never sees, and scanned pages need OCR.",
      "Several teams needed the same capability behind one stable contract, without each of them owning a GPU pipeline.",
    ],
    constraints: [
      "One GPU instance to start, and jobs must survive a restart.",
      "The PDF-parsing stack leaks memory without bound on long documents.",
      "The vision model is non-deterministic, even at temperature zero.",
      "Customer files must not be retained.",
    ],
    flow: [
      { label: "Caller's bucket", note: "the file stays theirs" },
      { label: "API", note: "stateless, no bytes" },
      { label: "Queue", note: "job id only" },
      { label: "GPU worker", note: "one job at a time" },
      { label: "Result store", note: "expires in days" },
      { label: "Poll or webhook", note: "never the only path" },
    ],
    decisions: [
      {
        title: "Async only, one code path.",
        body: "A synchronous mode is the first thing every caller asks for and the first thing to break: the client times out, the GPU keeps working, and nobody collects the result. So there is no synchronous endpoint at all.",
      },
      {
        title: "We never store the input.",
        body: "Callers keep the PDF in their own bucket and grant a role to read it. Each tenant carries a bucket allowlist, otherwise one tenant could name another's bucket and read it through us. The working copy lives on disposable scratch disk and is deleted in a finally block, backed by a janitor.",
      },
      {
        title: "A lease on the row, not a supervisor.",
        body: "Claiming a job stamps an owner token and an expiry in one conditional update. A crashed worker's job becomes claimable when the lease lapses, a live worker can't be robbed, and a stale worker's writes match nothing. Extending queue visibility is the liveness signal, so there is no heartbeat table to maintain.",
      },
      {
        title: "End the process to free the memory.",
        body: "The parser leaks, and only ending the process reclaims it. Documents are cut into short slices, each in its own child process. A long document that failed every attempt as one process passed every attempt as several. Pages carry absolute numbers, so merging follows the plan, never the completion order.",
      },
      {
        title: "One contract, generated on both sides.",
        body: "The TypeScript API and the Python worker generate their types from a shared schema, and CI regenerates them and fails on any difference. The schema has exactly one owner.",
      },
      {
        title: "Escalate per page; prefer missing to wrong.",
        body: "Pages go to a vision model only when local checks fail. A truncated or filtered AI answer is thrown away and the local text kept. A failed slice leaves a marked hole, never a silent gap, and “partial” is a first-class result.",
      },
    ],
    outcome: [
      "Five job states, including partial, with a machine-readable list of what not to trust.",
      "Routing thresholds come from a labelled evaluation, not from the parser's own confidence scores, which turned out not to separate good pages from bad.",
      "Cost and per-page provenance are recorded on every job.",
    ],
    hindsight: [
      "One routing threshold is still a placeholder until it is measured on the target hardware. I'd rather say so than dress it up.",
    ],
  },
  {
    slug: "scoped-graph-agent",
    n: "02",
    title: "An agent that cannot leak another tenant's data",
    kicker: "Production · Agent",
    year: "2026",
    summary:
      "Natural-language search over a graph of candidates for a specialist staffing platform. One tool-calling loop, and between the model and the database sits a deterministic gate.",
    tags: ["TypeScript", "LangGraph", "Neo4j", "Fastify", "Gemini", "Zod"],
    problem: [
      "People ask in plain language, for example “chief engineers with tanker experience, available soon”. The answer has to be grounded in data and scoped to the asker's organisation.",
    ],
    constraints: [
      "Multi-tenant: a leak across organisations is the worst possible failure.",
      "The model can be manipulated, so it cannot be the security boundary.",
      "Every question costs money, so unnecessary model calls are waste.",
    ],
    flow: [
      { label: "Question", note: "plain language" },
      { label: "Pre-filter", note: "no model call" },
      { label: "Agent loop", note: "one tool-calling loop" },
      { label: "Safety gate", note: "deterministic code" },
      { label: "Read-only graph", note: "scoped session" },
      { label: "Answer", note: "with references" },
    ],
    decisions: [
      {
        title: "The model never sees the tenant id.",
        body: "It comes from the verified token and is injected by the gate. The model only ever writes a placeholder.",
      },
      {
        title: "Fail closed.",
        body: "A query that cannot be proven to be scoped to the tenant is rejected, not executed. Write clauses are blocked and row limits capped in plain code. The gate is the only path from model to database.",
      },
      {
        title: "Don't call the model for what code can answer.",
        body: "A deterministic pre-filter handles social filler, cheap meta questions and injection attempts with zero model calls.",
      },
      {
        title: "A thin graph around one loop.",
        body: "The LangGraph shell is four steps: load context, pre-filter, loop, persist. The loop streams reasoning, tool calls and text, so a frontend can render it without translation.",
      },
      {
        title: "Audit the failures before blaming the agent.",
        body: "When I hand-checked every miss on a labelled question set, several were upstream data-pipeline bugs rather than reasoning errors. Fixing the ETL moved the score more than another round of prompt work.",
      },
    ],
    outcome: [
      "Scope is enforced in code that can be tested, not in a prompt that can be argued with.",
      "Quotas are checked per organisation before any model call.",
      "Each failure on the question set is classified as agent, data or question before anything is tuned.",
    ],
    hindsight: [
      "I would widen the question set with real, anonymised queries before trusting any single headline number.",
    ],
  },
  {
    slug: "forecast-error-bars",
    n: "03",
    title: "Forecasts that admit how wrong they can be",
    kicker: "Production · Modelling",
    year: "2026",
    summary:
      "A fuel-consumption model for one vessel class, served through a small web console. The work that mattered most was the audit that came after the first version.",
    tags: ["Python", "FastAPI", "scikit-learn", "Conformal prediction", "Next.js"],
    problem: [
      "Predict daily consumption from speed, loading, trim and weather, with ranges, from a couple of years of noon reports: a few hundred clean rows.",
    ],
    constraints: [
      "Very little data, and no real examples of slow steaming.",
      "Every number in the app is shown with an interval, so the interval has to be honest.",
    ],
    flow: [
      { label: "Physics baseline", note: "sets the shape" },
      { label: "Learned corrections", note: "loading and trim" },
      { label: "Weather terms", note: "scaled by speed" },
      { label: "Hull condition", note: "a filter that adapts" },
      { label: "Calibrated interval", note: "checked on unseen data" },
    ],
    decisions: [
      {
        title: "Physics sets the shape, data sets the level.",
        body: "Learned directly from daily reports, the speed curve would badly misjudge slow steaming, a regime the data never contains. A hull-resistance baseline carries the shape, and a robust regression learns the loading and weather corrections.",
      },
      {
        title: "Every score uses only earlier data.",
        body: "Replay is walk-forward, and the final holdout is touched once.",
      },
      {
        title: "Audit your own claims.",
        body: "A from-scratch audit found the “90%” intervals covered far less than 90%, because calibration used residuals from inside the training set. I replaced it with a disjoint split-conformal calibration and re-measured coverage until it matched its label.",
      },
      {
        title: "Test the direction, not just the score.",
        body: "The physics-based part had a head-wind response that flipped sign in most conditions. Cross-validated R² could not see it. A counterfactual test can: hold everything fixed, change only the wind direction.",
      },
      {
        title: "Say what the data cannot tell you.",
        body: "The write-up states plainly that the model is good inside the observed envelope and that slow-steaming claims are a data gap, not a modelling gap.",
      },
    ],
    outcome: [
      "Interval coverage now matches the label printed on it.",
      "Errors are reported per day and per voyage, and the model states its noise floor: the underlying readings disagree by a few percent day to day, so error cannot reach zero.",
    ],
    hindsight: [
      "I would run the coverage check before showing the first interval, not after.",
    ],
  },
  {
    slug: "agentic-rag",
    n: "04",
    title: "A retrieval agent that's allowed to say no",
    kicker: "Public · Research build",
    year: "2026",
    summary:
      "A seven-node LangGraph agent over arXiv cs.AI papers. Before every answer it decides whether to retrieve, call a tool, ask a clarifying question, refuse, or just talk.",
    tags: ["Python", "LangGraph", "FastAPI", "Chroma", "BM25", "Groq"],
    problem: [
      "One-shot retrieval answers everything, including questions the corpus cannot support.",
    ],
    constraints: [
      "Must run on a laptop and be reproducible.",
      "Every architectural claim has to survive an ablation.",
    ],
    flow: [
      { label: "Decide", note: "pick a path first" },
      { label: "Memory context", note: "three kinds, kept apart" },
      { label: "Retrieve or tool", note: "hybrid search, safe calculator" },
      { label: "Clarify or refuse", note: "real outcomes" },
      { label: "Grounded answer", note: "or plain chat" },
    ],
    decisions: [
      {
        title: "Decide before you retrieve.",
        body: "A routing node chooses among retrieve, tool, clarify, refuse, answer and chat. Greetings and meta questions never touch the corpus.",
      },
      {
        title: "Clarify and refuse are outcomes, not errors.",
        body: "The evaluation covers retrieval, memory, refusal, clarification, tool routing and small talk, so the “no” paths are tested like any other.",
      },
      {
        title: "Three memories, kept distinct.",
        body: "Recent turns verbatim, an LLM-compressed digest of older turns, and structured facts about the user. The system can say which one it used.",
      },
      {
        title: "Heavier was not better.",
        body: "In the ablation, the lightweight hybrid (vector search with BM25 reranking) beat the cross-encoder, which added compute without improving retrieval.",
      },
      {
        title: "A calculator that can't run your code.",
        body: "The tool is an AST-based evaluator, not eval().",
      },
    ],
    outcome: [
      "An 18-case evaluation with the ablation published alongside it, including the parts that did not help.",
    ],
    hindsight: [
      "Eighteen cases is enough to catch regressions, not to claim generality. The README says so.",
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/shivadeepak99/Agentic-RAG" }],
  },
  {
    slug: "promptlens",
    n: "05",
    title: "Prompt logs as a data-warehouse problem",
    kicker: "Public · Data platform",
    year: "2026",
    summary:
      "An analytics platform for LLM prompt telemetry: about 4.6 million raw execution events normalised, feature-engineered, warehoused and mined.",
    tags: ["Python", "PostgreSQL", "FastAPI", "R", "Next.js"],
    problem: [
      "Teams tune prompts by feel. The logs that could show what actually works are unstructured and huge.",
    ],
    constraints: ["Millions of events, one machine, and queries that have to stay fast."],
    flow: [
      { label: "Raw logs", note: "unstructured" },
      { label: "ETL", note: "adapters and validation" },
      { label: "Feature engine", note: "15+ attributes" },
      { label: "Star schema", note: "views and indexes" },
      { label: "Analytics API", note: "and a dashboard" },
    ],
    decisions: [
      {
        title: "Treat prompt engineering as observability.",
        body: "Logs go through schema adapters and validation before anything is counted, so the analysis sits on data you can trust.",
      },
      {
        title: "A warehouse, not a pile of files.",
        body: "A PostgreSQL star schema with materialized views and indexes supports OLAP-style questions in real time.",
      },
      {
        title: "Start with boring models.",
        body: "K-Means clustering, Apriori association rules and a baseline logistic regression tell you whether there is signal before you reach for anything heavier.",
      },
    ],
    outcome: [
      "A FastAPI layer over the warehouse and a dashboard on top, so the backend data work is the product and the UI is a view of it.",
    ],
    hindsight: [],
    links: [{ label: "Source on GitHub", href: "https://github.com/shivadeepak99/PromptLens" }],
  },
];

export const smallBuilds = [
  {
    name: "GuardianPulse",
    text: "Real-time safety and anomaly detection. Strict-TypeScript pnpm monorepo, Postgres and Prisma, a Redis buffer, Socket.IO.",
    href: "https://github.com/shivadeepak99/GuardianPulse",
  },
  {
    name: "senthium-ai",
    text: "Presence-aware workstation security: face recognition, rule-based automation, telemetry.",
    href: "https://github.com/shivadeepak99/senthium-ai",
  },
  {
    name: "deus_ex_machina",
    text: "Goal-driven multi-agent orchestration on LangGraph with vector-memory retrieval.",
    href: "https://github.com/shivadeepak99/deus_ex_machina",
  },
  {
    name: "quantum-image-shield",
    text: "Image encryption with quantum-generated keys and classical permutation, with statistical analysis of the result.",
    href: "https://github.com/shivadeepak99/quantum-image-shield",
  },
];
