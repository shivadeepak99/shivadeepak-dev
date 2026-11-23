import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap meta">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.location}</span>
        <span>
          <a href={site.github}>GitHub</a>
        </span>
      </div>
    </footer>
  );
}
