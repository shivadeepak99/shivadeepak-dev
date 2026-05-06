"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, FileText, Linkedin } from "lucide-react";
import { siteMeta } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/40">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="section-label justify-center">Contact</div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tightest text-foreground">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-muted max-w-md mx-auto">
            I&apos;m open to AI engineering roles, research collaborations, and interesting technical problems. Response usually within 24h.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {siteMeta.email}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted flex-wrap">
            <a
              href={siteMeta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={siteMeta.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <FileText className="w-4 h-4" />
              ORCID
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
