"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, site } from "@/content/site";
import { LogoMark } from "./logo-mark";

const items = [
  ["/work", "Work"],
  ["/notes", "Notes"],
  ["/uses", "Uses"],
] as const;

export function Nav() {
  const path = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => menu.current?.removeAttribute("open"), [path]);
  const cur = (href: string) => (path === href || path.startsWith(href + "/") ? "page" : undefined);

  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${site.name}, home`}>
          <LogoMark size={34} />
          <span>
            Shiva <i>Deepak</i>
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="links">
            {items.map(([href, label]) => (
              <li key={href}>
                <Link href={href} aria-current={cur(href)}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a className="btn" href={contact.href}>
                {contact.cta}
              </a>
            </li>
          </ul>

          <details className="menu" ref={menu}>
            <summary>Menu</summary>
            <div className="sheet">
              {items.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <a href={contact.href}>{contact.cta}</a>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
