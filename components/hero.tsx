"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { hero, siteMeta } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 glow" aria-hidden />

      <div className="container-wide relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <Avatar />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Available for new opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-7xl font-semibold tracking-tightest text-foreground"
        >
          {hero.greeting}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-mono text-xs uppercase tracking-widest text-muted"
        >
          {hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 text-sm"
        >
          <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {hero.status.label}
            </span>
            <a
              href={hero.status.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              {hero.status.text}
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {hero.open.label}
            </span>
            <span className="text-foreground">{hero.open.text}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            View work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteMeta.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-subtle/40 px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/60 hover:bg-accent/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Avatar() {
  return (
    <div
      aria-label={siteMeta.name}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-soft p-[2px] flex-shrink-0"
    >
      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
        <span className="font-mono text-sm font-semibold text-foreground/90 select-none">
          SD
        </span>
      </div>
    </div>
  );
}
