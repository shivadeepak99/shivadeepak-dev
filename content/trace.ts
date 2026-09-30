// The hero "decision trace": an agent deciding what to do next, including when to refuse.
// tone: "ok" = verified (verdigris), "decision" = a refusal or a question (ember).

export type Line = { verb: string; text: string; tone?: "ok" | "decision" };

export const trace: { name: string; lines: Line[] }[] = [
  {
    name: "answers",
    lines: [
      { verb: "observe", text: "question received" },
      { verb: "plan", text: "three paths: retrieve, tool, answer" },
      { verb: "act", text: "retrieve → 12 chunks" },
      { verb: "verify", text: "claims grounded in sources", tone: "ok" },
      { verb: "answer", text: "cited answer sent", tone: "ok" },
    ],
  },
  {
    name: "refuses",
    lines: [
      { verb: "observe", text: "question received" },
      { verb: "plan", text: "one path: retrieve" },
      { verb: "act", text: "retrieve → 0 relevant chunks" },
      { verb: "verify", text: "nothing supports the claim", tone: "decision" },
      { verb: "refuse", text: "“I can't support that.”", tone: "decision" },
      { verb: "next", text: "offer to widen the search" },
    ],
  },
  {
    name: "asks",
    lines: [
      { verb: "observe", text: "“which is best?” has no criterion" },
      { verb: "plan", text: "cannot choose a path yet" },
      { verb: "clarify", text: "best by cost, speed, or risk?", tone: "decision" },
      { verb: "next", text: "wait for the human" },
    ],
  },
  {
    name: "blocks",
    lines: [
      { verb: "observe", text: "query reaches for another tenant" },
      { verb: "act", text: "generated query → gate" },
      { verb: "verify", text: "scope cannot be proven", tone: "decision" },
      { verb: "refuse", text: "rejected. never executed.", tone: "decision" },
    ],
  },
];
