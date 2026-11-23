# shivadeepak.dev

Personal site. Next.js 16 (App Router), React 19, TypeScript, hand-written CSS. No UI libraries.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## Where things live

| To change | Edit |
|---|---|
| Name, role, links, profile, capabilities, experience | `content/site.ts` |
| Case studies (`/work`) | `content/work.ts` |
| Colors, type scale, spacing | `:root` in `app/globals.css` (mirror color changes in `theme` in `content/site.ts`) |

Pages are static. Content is plain TypeScript, so a typo in a field fails the build.

**Contact email** is set in `content/site.ts` (`email`); every contact point reads it.

## Design rules

- Formal tone. No slogans, no quotations, no jokes.
- Graphite surfaces and one accent (`--accent`), used only for small markers.
- Motion is a single entrance fade. Nothing loops. `prefers-reduced-motion` turns it off.
- Production case studies are anonymized: no company or customer names, no internal metrics. Add numbers only after the employer approves.

## Deploy

Vercel. Set `NEXT_PUBLIC_SITE_URL` to whichever host is primary (apex or `www`), and make the other redirect to it, so the canonical URL, sitemap and social card all agree.

CI (`.github/workflows/ci.yml`) runs lint, typecheck, build and `npm audit --audit-level=high`.
