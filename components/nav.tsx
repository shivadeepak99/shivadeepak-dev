"use client";

import Link from "next/link";
import { siteMeta } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container-wide flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          shivadeepak<span className="text-accent">.dev</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#work" className="hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#thinking" className="hover:text-foreground transition-colors">
            Thinking
          </a>
          <a href="#notes" className="hidden sm:inline hover:text-foreground transition-colors">
            Notes
          </a>
          <Link href="/uses" className="hover:text-foreground transition-colors">
            /uses
          </Link>
          <a
            href={`mailto:${siteMeta.email}`}
            className="hidden sm:inline-flex rounded-md border border-border/60 bg-subtle/40 px-3 py-1 text-foreground hover:border-accent/60 hover:bg-accent/10 transition-colors"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
