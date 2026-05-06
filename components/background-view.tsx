"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, BarChart3, FileText } from "lucide-react";
import { background } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

const fmt = (n: number) => n.toLocaleString("en-US");

export function BackgroundView({ stats }: { stats: GitHubStats }) {
  const statCards = [
    { label: "Contributions / 12 mo", value: fmt(stats.totalContributions) },
    { label: "Longest streak", value: `${fmt(stats.longestStreak)} days` },
    { label: "Current streak", value: stats.currentStreak > 0 ? `${fmt(stats.currentStreak)} days` : "—" },
    { label: "Public repos", value: fmt(stats.publicRepos) },
  ];

  return (
    <section id="background" className="py-20 border-t border-border/40">
      <div className="container-wide">
        <div className="section-label">Background</div>
        <h2 className="section-heading">Where I&apos;m from, by the numbers.</h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-base p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Education
              </span>
            </div>
            <ul className="space-y-3">
              {background.education.map((e) => (
                <li key={e.institution} className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-foreground">{e.institution}</div>
                    <div className="text-sm text-muted">{e.degree}</div>
                  </div>
                  <span className="tag flex-shrink-0 capitalize">{e.status}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card-base p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Organizations
              </span>
            </div>
            <ul className="space-y-3">
              {background.organizations.map((o) => (
                <li key={o.name} className="flex items-start justify-between gap-4">
                  <div>
                    {o.url ? (
                      <a
                        href={o.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {o.name}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{o.name}</span>
                    )}
                  </div>
                  <span className="tag flex-shrink-0">{o.role}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Live GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-base p-6 lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  GitHub by the numbers
                </span>
              </div>
              {stats.source === "live" && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/80 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                  live
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statCards.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-base p-6 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Research
              </span>
            </div>
            <p className="text-sm text-muted">
              {background.research.note} ·{" "}
              <a
                href={`https://orcid.org/${background.research.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link font-mono"
              >
                ORCID {background.research.orcid}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
