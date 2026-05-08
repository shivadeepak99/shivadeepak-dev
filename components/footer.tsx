import { siteMeta } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="container-wide py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <div className="font-mono">
          © {new Date().getFullYear()} {siteMeta.name}
        </div>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href={siteMeta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${siteMeta.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href={siteMeta.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <span className="text-muted/60">·</span>
          <span className="text-muted/60">{siteMeta.location}</span>
        </div>
      </div>
    </footer>
  );
}
