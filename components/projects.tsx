"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const statusColor: Record<string, string> = {
  live: "text-emerald-400",
  active: "text-accent",
  complete: "text-blue-400",
  experimental: "text-amber-400",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPrivate = !!project.privateNote;
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    project.href ? (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {children}
      </a>
    ) : (
      <div className="block">{children}</div>
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-base card-hover p-6 sm:p-7 h-full flex flex-col"
    >
      <Wrapper>
        <header className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              {project.status && (
                <span className={`font-mono text-[10px] uppercase tracking-widest ${statusColor[project.status]}`}>
                  ● {project.status}
                </span>
              )}
              {isPrivate && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                  <Lock className="w-3 h-3" />
                  private
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-muted">{project.oneLiner}</p>
          </div>
          {project.href && (
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
          )}
        </header>

        <p className="mt-4 text-sm text-muted leading-relaxed">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="text-sm text-muted/90 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent/60" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading">Things I&apos;ve built and shipped.</h2>
        <p className="mt-3 text-muted max-w-2xl">
          A mix of public projects you can read end-to-end and private work that&apos;s part of PromptForge AI.
          Both follow the same engineering principles.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
