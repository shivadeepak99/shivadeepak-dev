# shivadeepak.dev

Personal portfolio for Shiva Deepak — Founder of PromptForge AI, AI Engineer.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Geist font.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy lives in **`lib/data.ts`** — that's the only file you usually need to touch.

- `siteMeta` — your name, email, social links
- `hero` — landing greeting + tagline + status pills
- `building` — PromptForge AI showcase block
- `projects` — list of project cards (public + private)
- `philosophy` — the "how I think" section
- `stack` — categorized tech stack
- `background` — education, orgs, GitHub stats
- `uses` — the `/uses` page content

Components consume this data — no hard-coded copy in JSX.

## Project structure

```
app/
  layout.tsx         # Root layout, metadata, fonts
  page.tsx           # Main portfolio (single-page)
  globals.css        # Tailwind + custom utilities
  uses/page.tsx      # /uses page
  opengraph-image.tsx# Auto-generated OG image
  icon.tsx           # Auto-generated favicon

components/
  nav.tsx
  hero.tsx
  building.tsx       # PromptForge showcase
  projects.tsx
  philosophy.tsx
  stack.tsx
  background.tsx
  contact.tsx
  footer.tsx

lib/
  data.ts            # ALL CONTENT
  utils.ts
```

## Deploy

```bash
npm i -g vercel
vercel
```

Then point `shivadeepak.dev` at Vercel via your DNS provider:

| Type  | Name | Value                |
|-------|------|----------------------|
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

## TODO before going live

Search the codebase for `TODO:` and fill in:

- LinkedIn URL (`lib/data.ts` → `siteMeta.linkedin`)
- Twitter handle if any (`lib/data.ts` → `siteMeta.twitter`, `app/layout.tsx`)
- Hardware in `/uses` page
- Confirm terminal preference in `/uses`
