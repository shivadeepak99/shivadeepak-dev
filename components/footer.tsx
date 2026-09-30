import { site } from "@/content/site";
import { Clock } from "./clock";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap meta">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <Clock />
        <span>
          <a href={site.github}>GitHub</a> · <a href={site.linkedin}>LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
