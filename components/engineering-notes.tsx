"use client";

import { motion } from "framer-motion";
import { engineeringNotes } from "@/lib/data";

export function EngineeringNotes() {
  return (
    <section id="notes" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Engineering Notes</div>
        <h2 className="section-heading">{engineeringNotes.heading}</h2>
        <p className="mt-3 text-muted max-w-2xl leading-relaxed">
          {engineeringNotes.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/40 bg-border/40">
          {engineeringNotes.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bg-card p-5"
            >
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
