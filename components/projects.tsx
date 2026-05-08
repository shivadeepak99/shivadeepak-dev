"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { projectCategories, type Project, type ProjectStatus } from "@/lib/data";

const statusMeta: Record<ProjectStatus, { label: string; className: string }> = {
  active: { label: "active", className: "text-accent" },
  complete: { label: "complete", className: "text-blue-400" },
  experimental: { label: "experimental", className: "text-amber-400" },
  private: { label: "private / active", className: "text-muted" },
  foundational: { label: "foundational", className: "text-emerald-400" },
};

function SystemMap({ steps }: { steps: string[] }) {
  return (
    <div className="mt-5 rounded-lg border border-border/50 bg-subtle/20 p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
        System shape
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="flex items-center gap-2">
            <span className="rounded-md border border-border/60 bg-card px-2 py-1 font-mono text-[11px] leading-snug text-foreground">
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className="hidden sm:inline font-mono text-[11px] text-muted">
                -&gt;
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusMeta[project.status];
  const isPrivate = !!project.privateNote;
  const Wrapper = ({ children }: { children: ReactNode }) =>
    project.href ? (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {children}
      </a>
    ) : (
      <div className="block h-full">{children}</div>
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`card-base card-hover p-6 sm:p-7 h-full flex flex-col ${
        project.priority === "primary" ? "lg:col-span-2" : ""
      }`}
    >
      <Wrapper>
        <div className="flex h-full flex-col">
          <header className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${status.className}`}>
                  ● {status.label}
                </span>
                {isPrivate && (
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <Lock className="w-3 h-3" />
                    {project.privateNote}
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

          {project.diagram && <SystemMap steps={project.diagram} />}

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

          {project.tradeoffs && project.tradeoffs.length > 0 && (
            <div className="mt-5 rounded-lg border border-border/50 bg-card-hover/50 p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Engineering notes
              </div>
              <ul className="mt-3 space-y-2">
                {project.tradeoffs.map((note) => (
                  <li key={note} className="text-xs leading-relaxed text-muted">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.article>
  );
}

function ProjectPreviewCard({ project, index }: { project: Project; index: number }) {
  const status = statusMeta[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="card-base card-hover p-5"
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-semibold tracking-tight text-foreground">{project.name}</h3>
        <span className={`font-mono text-[10px] uppercase tracking-widest ${status.className}`}>
          ● {status.label}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">{project.oneLiner}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects({ compact = false }: { compact?: boolean }) {
  if (compact) {
    const previewProjects = projectCategories
      .flatMap((category) => category.projects)
      .filter((project) => ["Agentic-RAG", "Deus Ex Machina", "PromptLens"].includes(project.name));

    return (
      <section id="work" className="py-20 border-t border-border/40">
        <div className="container-wide">
          <div className="section-label">Selected Work</div>
          <h2 className="section-heading">Systems worth opening separately.</h2>
          <p className="mt-3 text-muted max-w-2xl">
            A short preview of the work. The full project page goes deeper into architecture, tradeoffs, and implementation notes without making the landing page a long scroll.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {previewProjects.map((project, index) => (
              <ProjectPreviewCard key={project.name} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading">Curated systems, not a project dump.</h2>
        <p className="mt-3 text-muted max-w-2xl">
          Public repositories are grounded in GitHub metadata and READMEs. Private or evolving systems are labeled as such.
        </p>

        <div className="mt-12 space-y-14">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.eyebrow}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.04 }}
                className="mb-6"
              >
                <div className="section-label mb-2">{category.eyebrow}</div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-3xl">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.projects.map((p, i) => (
                  <ProjectCard key={p.name} project={p} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
