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
| Name, email, links, the identity line, the portrait | `content/site.ts` |
| Case files (`/work`) | `content/work.ts` |
| Notes (`/notes`) | `content/notes.ts` |
| The hero's decision-trace scenarios | `content/trace.ts` |
| Colors, type scale, spacing, motion | `:root` in `app/globals.css` |

Pages are static. Content is plain TypeScript, so a typo in a field fails the build.

**Email is hidden for now** (`email: null` in `content/site.ts`). Every contact point falls back to LinkedIn. Set it to the address once the mailbox exists and the whole site switches to `mailto:`.


## The portrait

Drop the animated portrait into `/public` and set it in `content/site.ts`:

```ts
portrait: { src: "/portrait.mp4", poster: "/portrait.jpg", alt: "Shiva Deepak" },
```

Until then the arch shows the turning sigil. Keep the video under ~1.5 MB, muted, looping, and 3:4.3.

## Design rules

- **Ember** marks a decision (a refusal, a question). **Verdigris** marks something verified. Nothing else uses color.
- Motion is CSS only, and everything is visible without JavaScript. `prefers-reduced-motion` turns it all off.
- One motion signature: the hero trace. Everything else is still.
- Production case files are anonymized: no company or customer names, no internal metrics. Add numbers only after the employer approves.

## Deploy

Vercel. Set `NEXT_PUBLIC_SITE_URL` to whichever host is primary (apex or `www`), and make the other redirect to it, so the canonical URL, sitemap and social card all agree.

CI (`.github/workflows/ci.yml`) runs lint, typecheck, build and `npm audit --audit-level=high`.
