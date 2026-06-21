# Agent instructions — KPU Frontend

You are building **KPU**, a mobile-first React SPA (Vite + Tailwind + PWA). Read this file first every session.

## Mandatory reads

1. [`memory.md`](./memory.md) — locked decisions
2. [`docs/ROADMAP.md`](./docs/ROADMAP.md) — current phase and done criteria
3. Relevant doc for the task (SPEC, VIEWS, DESIGN-TOKENS, COMPONENTS, MOBILE-VIEWPORT)

## Project identity

- **App name:** KPU
- **Repo:** `smartpointpos_frontend` (correct)
- **Language:** Spanish (Dominican Republic copy from Figma)
- **Design source:** Figma file `l1eDiuBAKeYFePP3o3YKuW`, node **`679:781`** (Group 989)

## Stack (do not change without user approval)

- Vite SPA + React + TypeScript
- React Router
- Tailwind CSS (tokens mapped from `docs/DESIGN-TOKENS.md`)
- `vite-plugin-pwa` for installable app
- PayPal via **web redirect** (not native IAP)

## Architecture rules

### Layout

- Extract **`MobileViewport`** from loto_scratch pattern → [`docs/MOBILE-VIEWPORT.md`](./docs/MOBILE-VIEWPORT.md)
- Fixed blur backdrop full screen; inner column `max-w-[390px]` (or token `--app-width`), `h-dvh`, `mx-auto`
- **`AppLayout`**: `AppHeader` + scrollable `<main>` + fixed `BottomNav`
- Bottom nav always visible; 6 tabs route-driven

### Components

- Build from [`docs/COMPONENTS.md`](./docs/COMPONENTS.md); do not invent parallel abstractions
- Prefer composition over deep prop drilling; keep variants in Tailwind + `cva` if needed
- Assets from Figma exports in `public/assets/`; SVG preferred for icons

### Styling

- Extend Tailwind theme with KPU tokens (colors, radii, gradients)
- Font: **Montserrat** (400, 700, 800) via Google Fonts or self-host
- Figma frame is ~254px wide — implement at **390px** logical width; scale proportionally
- No dark/light theme toggle — single theme only

### Data & API

- Backend **does not exist yet** — use mocks in `src/data/` and types in `src/types/api.ts`
- Follow future contract in [`docs/BACKEND.md`](./docs/BACKEND.md)
- User membership state ("Cuenta Gratis" vs paid) is **undefined** — use configurable mock; do not hardcode business rules

### Out of scope for v0.1

- Auth pages (future)
- Admin panel (future, same frontend repo)
- Real PayPal integration (stub redirect OK)
- Analytics, push notifications
- i18n

## Implementation workflow

1. Check ROADMAP phase — only work on current phase unless user says otherwise
2. Figma MCP: `get_design_context` on specific screen nodes when implementing a view
3. Implement smallest diff that matches Figma
4. Reuse components; add new UI primitives only if used twice or listed in COMPONENTS.md
5. After phase completion, update ROADMAP checkboxes and `memory.md` if decisions changed

## PayPal / PWA

- PWA cannot do native in-app purchases → **always open PayPal in browser** (same tab or `_blank` per UX test)
- Flow: button → `POST /api/payments/create` (future) → redirect to PayPal approval URL
- Until backend: button shows loading or opens `#` with TODO comment + console warning in dev

## Quality bar

- Visual match to Figma Group 989 screens
- Works installed as PWA on Android/iOS (standalone, safe areas)
- Desktop: centered phone column, blurred outer background
- TypeScript strict; no `any` in new code
- ponytail: delete over add; no unused deps

## Files to update when you learn something new

| Event | Update |
|-------|--------|
| User decision | `memory.md` |
| Phase done | `docs/ROADMAP.md` |
| New component | `docs/COMPONENTS.md` |
| API shape agreed | `docs/BACKEND.md` |
| Token change | `docs/DESIGN-TOKENS.md` |

## Do not

- Commit unless user asks
- Add Next.js, Redux, or UI libraries beyond Tailwind + minimal headless if needed
- Replace Figma assets with Lucide unless user approves visual parity
- Build auth/admin in v0.1
- Create empty boilerplate tests unless requested
