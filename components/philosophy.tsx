"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/lib/data";

export function Philosophy() {
  return (
    <section id="thinking" className="py-20 border-t border-border/40">
      <div className="container-tight">
        <div className="section-label">Engineering Philosophy</div>
        <h2 className="section-heading">{philosophy.heading}</h2>

        <div className="mt-8 space-y-5">
          {philosophy.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={
                i === philosophy.paragraphs.length - 1
                  ? "text-foreground font-medium tracking-tight text-lg"
                  : "text-muted leading-relaxed"
              }
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
