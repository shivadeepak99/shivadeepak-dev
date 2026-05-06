"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Brain, Package, Store, Code2, Globe, Plug, Monitor, type LucideIcon } from "lucide-react";
import { building } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Cpu, Brain, Package, Store, Code2, Globe, Plug, Monitor,
};

export function Building() {
  return (
    <section id="building" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Currently Shipping</div>

        <motion.a
          href={building.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="group block"
        >
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tightest text-foreground group-hover:text-accent transition-colors">
              {building.name}
            </h2>
            <span className="tag">{building.tag}</span>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-3xl">
            {building.pitch}
          </p>
        </motion.a>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40"
        >
          {building.metrics.map((m) => (
            <div key={m.label} className="bg-card p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {m.label}
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                {m.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Components grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {building.components.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Cpu;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="card-base card-hover p-4"
              >
                <Icon className="w-4 h-4 text-accent mb-3" />
                <div className="font-medium text-sm text-foreground">{c.label}</div>
                <div className="mt-1 text-xs text-muted leading-relaxed">{c.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Stack pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {building.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
