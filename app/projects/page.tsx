import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Projects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated project catalog for Shiva Deepak, focused on AI systems, backend workflows, retrieval, memory, orchestration, telemetry, and automation.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-wide">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>
          <div className="mt-8 section-label">Project Catalog</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tightest text-foreground">
            Systems, workflows, and engineering artifacts.
          </h1>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            A deeper look at the projects behind the portfolio, grouped by engineering signal rather than chronology.
          </p>
        </div>
      </section>
      <Projects />
    </>
  );
}
