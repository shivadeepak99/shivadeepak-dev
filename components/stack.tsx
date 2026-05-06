"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

export function Stack() {
  const entries = Object.entries(stack);

  return (
    <section id="stack" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Stack</div>
        <h2 className="section-heading">What I actually use.</h2>
        <p className="mt-3 text-muted max-w-2xl">
          Not everything I&apos;ve touched — what I reach for when I&apos;m building.
        </p>

        <div className="mt-10 space-y-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {entries.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted sm:w-32 flex-shrink-0">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border/60 bg-subtle/40 px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
