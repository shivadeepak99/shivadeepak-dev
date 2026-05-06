import type { Metadata } from "next";
import { uses } from "@/lib/data";

export const metadata: Metadata = {
  title: "/uses",
  description: "Tools, hardware, and setup I actually use day-to-day.",
};

export default function UsesPage() {
  return (
    <section className="py-20">
      <div className="container-tight">
        <div className="section-label">/uses</div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tightest text-foreground">
          What I use.
        </h1>
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">{uses.intro}</p>

        <div className="mt-12 space-y-10">
          {uses.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                {section.title}
              </h2>
              <ul className="space-y-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="bg-card p-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                  >
                    <span className="font-medium text-foreground sm:w-48 flex-shrink-0">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-muted/70 font-mono">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>
      </div>
    </section>
  );
}
