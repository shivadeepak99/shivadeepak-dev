export type Block = { p: string } | { code: string; lang?: string };

export type Note = {
  slug: string;
  title: string;
  date: string; // ISO
  read: string;
  dek: string;
  body: Block[];
};

export const notes: Note[] = [
  {
    slug: "refusal-is-an-outcome",
    title: "Refusal is an outcome",
    date: "2026-09-30",
    read: "3 min",
    dek: "The most underrated path in a retrieval system is the one that does not answer.",
    body: [
      {
        p: "Most retrieval demos have one exit: an answer. Ask something the corpus cannot support and the system does what it was built to do. It finds the nearest chunks, however far away, and writes fluent prose over them.",
      },
      {
        p: "The fix isn't a better prompt. It is a bigger set of outcomes. When I built a retrieval agent over research papers, the first node decides what kind of turn this is: retrieve, call a tool, ask a clarifying question, refuse, or simply chat. Refusing and clarifying are not error states. They are paths with their own tests.",
      },
      {
        p: "That changes how you evaluate. A benchmark of only answerable questions rewards a system that never says no. So the evaluation includes questions that should be refused, questions that are ambiguous, and greetings that should never touch the corpus. If the “no” paths aren't in the test set, they will quietly rot.",
      },
      {
        p: "A system that can't say “I can't support that” will eventually say something false. Give it the sentence, and then make sure it's tested.",
      },
    ],
  },
  {
    slug: "a-lease-not-a-heartbeat",
    title: "A lease, not a heartbeat",
    date: "2026-09-30",
    read: "4 min",
    dek: "How to make duplicate delivery and crashed workers boring, with one SQL statement.",
    body: [
      {
        p: "A queue with at-least-once delivery will hand you the same job twice, and a worker will sometimes die halfway through one. The usual answer is a supervisor process that watches heartbeats and requeues silent jobs. That is another moving part that can itself fail.",
      },
      {
        p: "Put the ownership on the row instead. Claiming a job is one conditional update that stamps an owner token and an expiry:",
      },
      {
        code: "UPDATE jobs\n   SET status = 'processing',\n       worker_token = $2,\n       lease_expires_at = $3,\n       attempt_count = attempt_count + 1\n WHERE id = $1\n   AND (status = 'queued'\n        OR (status = 'processing' AND lease_expires_at < now()))\nRETURNING *;",
        lang: "sql",
      },
      {
        p: "If no row comes back, someone else holds a live lease or the job is finished: delete the message and move on. That single statement makes duplicates a non-event, and the expired-lease branch makes a crashed worker's job recoverable without anything having to notice the crash.",
      },
      {
        p: "Every later write matches on the owner token and checks whether it hit a row. A worker that stalled past its lease updates nothing, and, importantly, doesn't delete its queue message on the strength of a write that never landed. Extending the queue's visibility timeout while you work is the liveness signal, so there is no heartbeat table at all.",
      },
    ],
  },
  {
    slug: "calibrate-on-data-the-model-never-saw",
    title: "Calibrate on data the model never saw",
    date: "2026-09-30",
    read: "4 min",
    dek: "Why an interval labelled 90% can cover far less, and the small change that fixes it.",
    body: [
      {
        p: "Conformal prediction is wonderfully simple: take the model's errors on a calibration set, find the error size that covers 90% of them, and add that band around every prediction. The guarantee, though, depends on one condition that is easy to break: the calibration errors must come from data the model did not train on.",
      },
      {
        p: "Flexible models nearly memorise their training data, so their in-sample errors are tiny. Calibrate on those and the band is far too narrow. The interval still says 90%. It just no longer means it, and no aggregate accuracy metric will tell you.",
      },
      {
        code: "# split-conformal, the honest version\ntrain, calib = split(data)          # disjoint\nmodel.fit(train)\nscores = abs(calib.y - model.predict(calib.x))\nq_hat = quantile(scores, ceil((n + 1) * 0.9) / n)\ninterval = (pred - q_hat, pred + q_hat)",
        lang: "python",
      },
      {
        p: "The check is one more measurement, not one more model: replay the data forward in time, and count how often the true value falls inside the interval. If the label says 90% and the count says something else, the label is the bug. Run it before you show the first interval to anyone.",
      },
    ],
  },
];
