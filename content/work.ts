// Case studies. Production entries are anonymized on purpose: no company, customer or
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
    title: "Asynchronous document extraction service",
    kicker: "Production · Backend and GPU infrastructure",
    year: "2026",
    summary:
      "An asynchronous service that converts long technical PDFs into structured blocks, markdown and search-ready chunks for a maritime software platform. Customer files remain in the customer's own storage; the service reads each file once and deletes its working copy when the job completes.",
    tags: ["TypeScript", "Python", "AWS SQS · S3 · EC2", "PostgreSQL", "PyTorch", "Vision models"],
    problem: [
      "Technical manuals, drawings and scanned pages do not convert reliably with standard PDF-to-text tools. Tables span pages, drawings contain text that layout models miss, and scanned pages require OCR.",
      "Several product teams required the same capability behind one stable interface, without each team operating its own GPU pipeline.",
    ],
    constraints: [
      "A single GPU instance at launch, with jobs that must survive a restart.",
      "The PDF parsing stack leaks memory on long documents.",
      "The vision model is non-deterministic, even at temperature zero.",
      "Customer files must not be retained.",
    ],
    flow: [
      { label: "Customer storage", note: "files remain with the customer" },
      { label: "API", note: "stateless, no file contents" },
      { label: "Queue", note: "job identifiers only" },
      { label: "GPU worker", note: "one job at a time" },
      { label: "Result store", note: "time-limited retention" },
      { label: "Polling or webhook", note: "both supported" },
    ],
    decisions: [
      {
        title: "Asynchronous processing only",
        body: "Synchronous extraction fails under load: the client times out while the GPU continues working and the result is never collected. The service therefore exposes a single asynchronous code path.",
      },
      {
        title: "Single read, then deletion",
        body: "Callers keep each PDF in their own bucket and grant read access to the service. Each tenant has a bucket allowlist, so one tenant cannot direct the service to read another tenant's bucket. The working copy is held on temporary disk and deleted in a finally block, with a scheduled cleanup as a fallback.",
      },
      {
        title: "Database leases for job ownership",
        body: "Claiming a job writes an owner token and an expiry in one conditional update. A crashed worker's job becomes available when its lease expires, an active worker's job cannot be taken, and writes from a stale worker match no rows. Extending the queue visibility timeout acts as the liveness signal, so no heartbeat table is needed.",
      },
      {
        title: "Idempotent submission",
        body: "Submitting the same job again returns the response from the original submission instead of creating a second job, so a client that retries after a timeout cannot create duplicate work.",
      },
      {
        title: "Process isolation for memory reclamation",
        body: "Because the parser leaks memory, documents are divided into short slices and each slice runs in its own child process. On the earlier prototype, a 90-page document failed in all four attempts as a single process and succeeded in all five attempts as five 20-page processes. Pages carry absolute page numbers, so results are merged in document order rather than completion order.",
      },
      {
        title: "One shared contract",
        body: "The TypeScript API and the Python worker generate their types from a single shared schema. Continuous integration regenerates both and fails on any difference.",
      },
      {
        title: "Per-page escalation",
        body: "Pages are sent to a vision model only when local quality checks fail. Truncated or filtered model output is discarded in favour of the local text. A failed slice is recorded as an explicit gap, and partial completion is a defined result state.",
      },
    ],
    outcome: [
      "Five job states, including partial completion, with a machine-readable list of unreliable regions.",
      "Routing thresholds derived from a labelled evaluation rather than from the parser's own confidence scores, which did not separate good pages from bad ones.",
      "Cost and per-page provenance recorded for every job.",
    ],
    hindsight: [
      "One routing threshold remains provisional until it is measured on the target hardware.",
    ],
  },
  {
    slug: "scoped-graph-agent",
    n: "02",
    title: "Tenant-scoped natural-language search agent",
    kicker: "Production · AI agent",
    year: "2026",
    summary:
      "Natural-language search over a graph database of candidates for a specialist staffing platform. A single tool-calling loop, with a deterministic safety gate between the model and the database.",
    tags: ["TypeScript", "LangGraph", "Neo4j", "Fastify", "Gemini", "Zod"],
    problem: [
      "Recruiters search in plain language, for example for chief engineers with tanker experience who are available soon. Every answer must be grounded in the data and limited to the requesting organisation.",
    ],
    constraints: [
      "Multi-tenant data: exposure across organisations is the most serious possible failure.",
      "The model can be manipulated, so it cannot serve as the security boundary.",
      "Each model call has a cost, so unnecessary calls must be avoided.",
    ],
    flow: [
      { label: "Question", note: "plain language" },
      { label: "Pre-filter", note: "no model call" },
      { label: "Agent loop", note: "single tool-calling loop" },
      { label: "Safety gate", note: "deterministic code" },
      { label: "Read-only graph", note: "scoped session" },
      { label: "Answer", note: "with candidate references" },
    ],
    decisions: [
      {
        title: "Tenant identity outside the model",
        body: "The organisation identifier comes from the verified authentication token and is injected by the safety gate. The model only ever writes a placeholder.",
      },
      {
        title: "Fail-closed query validation",
        body: "A query that cannot be proven to be limited to the requesting organisation is rejected, not executed. Write operations are blocked and result sizes are capped in code. The gate is the only path from the model to the database.",
      },
      {
        title: "Deterministic handling where possible",
        body: "A rule-based pre-filter handles greetings, simple meta questions and prompt-injection attempts without a model call.",
      },
      {
        title: "A minimal graph around one loop",
        body: "The LangGraph workflow has four steps: load context, pre-filter, agent loop and persistence. The loop streams reasoning, tool calls and text in a format the frontend renders directly.",
      },
      {
        title: "Failure analysis before tuning",
        body: "Reviewing every miss on a labelled question set showed that several failures came from defects in the upstream data pipeline rather than from the agent. Correcting the ETL improved results more than further prompt changes.",
      },
    ],
    outcome: [
      "Tenant isolation enforced in testable code rather than in prompt instructions.",
      "Usage quotas checked per organisation before any model call.",
      "Each failure on the question set classified as an agent, data or question defect before any tuning.",
    ],
    hindsight: [
      "The question set should be expanded with real, anonymised queries before any single headline figure is relied upon.",
    ],
  },
  {
    slug: "forecast-error-bars",
    n: "03",
    title: "Fuel-consumption forecasting with calibrated uncertainty",
    kicker: "Production · Machine learning",
    year: "2026",
    summary:
      "A daily fuel-consumption model for one vessel class, with prediction intervals, served through a web console. The most consequential work was a full audit of the first version.",
    tags: ["Python", "FastAPI", "scikit-learn", "Conformal prediction", "Next.js"],
    problem: [
      "Predict daily fuel consumption from speed, loading condition, trim and weather, with prediction intervals, using a few hundred cleaned daily reports.",
    ],
    constraints: [
      "Limited data, with no genuine examples of slow steaming.",
      "Every prediction is displayed with an interval, so the interval must be accurate.",
    ],
    flow: [
      { label: "Physics baseline", note: "hull resistance model" },
      { label: "Learned corrections", note: "loading and trim" },
      { label: "Weather terms", note: "scaled by speed" },
      { label: "Hull condition", note: "adaptive filter" },
      { label: "Calibrated interval", note: "validated on unseen data" },
    ],
    decisions: [
      {
        title: "Physics for shape, data for level",
        body: "A speed curve learned only from daily reports would misjudge slow steaming, which the data does not contain. A hull-resistance baseline defines the shape of the curve, and a robust regression learns the loading and weather corrections.",
      },
      {
        title: "Strictly forward-looking evaluation",
        body: "Every score uses only earlier data. Evaluation is walk-forward, and the final holdout set is used once.",
      },
      {
        title: "Independent audit of the first version",
        body: "An audit from first principles found that intervals labelled 90% covered far less than 90%, because calibration used residuals from the training data. The calibration was replaced with a disjoint split-conformal method, and coverage was re-measured until it matched its label.",
      },
      {
        title: "Directional testing",
        body: "The physics-based component responded to head wind with the wrong sign in most conditions, which cross-validated accuracy did not detect. A counterfactual test, varying only wind direction, exposed and confirmed the fix.",
      },
      {
        title: "Explicit statement of limits",
        body: "The documentation states that the model is reliable within the observed operating range and that slow-steaming behaviour is a data gap rather than a modelling gap.",
      },
    ],
    outcome: [
      "Interval coverage now matches its stated level.",
      "Errors are reported per day and per voyage, together with the noise floor of the underlying readings.",
    ],
    hindsight: [
      "Interval coverage should be verified before the first interval is presented, not after.",
    ],
  },
  {
    slug: "agentic-rag",
    n: "04",
    title: "Agentic retrieval over research papers",
    kicker: "Public · Research build",
    year: "2026",
    summary:
      "A seven-node LangGraph agent over arXiv cs.AI papers. Before each response it decides whether to retrieve, call a tool, ask a clarifying question, decline, or respond conversationally.",
    tags: ["Python", "LangGraph", "FastAPI", "Chroma", "BM25", "Groq"],
    problem: [
      "Single-step retrieval answers every question, including questions the corpus cannot support.",
    ],
    constraints: [
      "Must run on a laptop and be reproducible.",
      "Every architectural choice must be supported by an ablation.",
    ],
    flow: [
      { label: "Route", note: "select a path first" },
      { label: "Memory context", note: "three distinct stores" },
      { label: "Retrieve or tool", note: "hybrid search, safe calculator" },
      { label: "Clarify or decline", note: "defined outcomes" },
      { label: "Grounded answer", note: "or conversational reply" },
    ],
    decisions: [
      {
        title: "Routing before retrieval",
        body: "A routing node selects among retrieval, tool use, clarification, declining, answering and conversation. Greetings and meta questions never reach the corpus.",
      },
      {
        title: "Clarification and declining as outcomes",
        body: "The evaluation covers retrieval, memory, declining, clarification, tool routing and conversation, so every path is tested.",
      },
      {
        title: "Three separate memory stores",
        body: "Recent turns verbatim, a model-generated summary of older turns, and structured facts about the user. The system reports which store it used.",
      },
      {
        title: "Ablation over assumption",
        body: "In the ablation, the lighter hybrid approach of vector search with BM25 reranking outperformed the cross-encoder, which added compute without improving retrieval.",
      },
      {
        title: "A sandboxed calculator",
        body: "The calculator tool is an AST-based evaluator rather than eval().",
      },
    ],
    outcome: [
      "An 18-case evaluation published with the full ablation, including the components that did not help.",
    ],
    hindsight: [
      "Eighteen cases are sufficient to detect regressions but not to claim generality. The README states this.",
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/shivadeepak99/Agentic-RAG" }],
  },
];
