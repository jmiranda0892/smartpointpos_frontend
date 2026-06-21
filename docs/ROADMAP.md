# Roadmap — KPU v0.1

Check off items as completed. **Do not skip phases** unless the user explicitly reprioritizes.

---

## Fase 0 — Scaffold

- [x] `npm create vite@latest` — React + TS template in repo root
- [x] Tailwind CSS v4 + `@tailwindcss/vite`
- [x] React Router setup
- [x] `vite-plugin-pwa` minimal config
- [x] Montserrat font loaded
- [x] Tailwind theme extended per `DESIGN-TOKENS.md`
- [x] `MobileViewport` component per `MOBILE-VIEWPORT.md`
- [x] `src/data/site.config.ts` skeleton
- [x] Dev/build/preview scripts working

**Done when:** blank app renders in phone column with navy background + blur on desktop.

---

## Fase 1 — Shell + routing

- [x] `AppLayout` with header slot, main, bottom nav
- [x] `AppHeader` (gold gradient, KPU avatar, name, tagline)
- [x] `BottomNav` — 6 tabs with active/inactive states
- [x] `PageHeader` — section title + subtitle
- [x] Routes:

| Path | Page | Nav active |
|------|------|------------|
| `/` | HomePage | Inicio |
| `/numeros` | NumbersPage | Números |
| `/membresia/pale` | PaleMembershipPage | Palé |
| `/membresia/vip` | VipMembershipPage | VIP |
| `/libro` | DigitalBookPage | Libro |
| `/redes` | SocialPage | Redes |

- [x] Placeholder content per route

**Done when:** all routes navigable; nav highlights correct tab; header identical on all pages.

---

## Fase 2 — UI kit

- [x] `Button` — `primary`, `open` variants
- [x] `Card` — `glass`, `status`, `feature` variants
- [x] `GridTile` — home 2×2 tiles
- [x] `NumberBox` — gold number display
- [x] `FeatureList` — bullet/check list
- [x] `SocialRow` — platform + Abrir
- [x] `PriceDisplay` — RD$ formatting
- [x] `Avatar` — KPU circle
- [x] Nav icons (SVG from Figma)

**Done when:** Storybook optional; components used in at least one placeholder page.

---

## Fase 3 — Pantallas (Figma parity)

Order:

1. [x] **Home** — grid 2×2 + status card
2. [x] **Números del día** — date, 3 numbers, legal disclaimer
3. [x] **Redes** — 6 social rows
4. [x] **Membresía Palé** — price, benefits, CTA
5. [x] **Membresía VIP** — price, benefits, CTA
6. [x] **Libro Digital** — price, description, CTA

**Done when:** side-by-side with Figma Group 989 screenshots at 390px width.

---

## Fase 4 — Assets

- [x] Export icons from Figma (nav, social, decorative)
- [x] PWA icons 192 + 512 (maskable)
- [x] Optimize SVGs
- [x] Replace any temporary placeholders

**Done when:** no broken images; icons match Figma.

---

## Fase 5 — PWA polish

- [x] `manifest.webmanifest` — name "KPU", standalone, theme `#102148`
- [x] iOS meta tags + apple-touch-icon
- [x] Service worker caches shell
- [x] `env(safe-area-inset-*)` on shell and bottom nav
- [ ] Manual test: Add to Home Screen Android + iOS

**Done when:** installs and opens fullscreen without browser chrome.

---

## Fase 6 — Payments + API stubs

- [x] `src/types/api.ts` — types from `BACKEND.md`
- [x] `src/lib/api/client.ts` — fetch wrapper with mock mode
- [x] `usePayment()` hook — calls mock → future `POST /payments/create`
- [x] PayPal redirect placeholder on CTAs:
  - Pagar membresía Palé
  - Entrar al VIP
  - Comprar libro digital
- [x] Mock `GET /numbers/today` for Números page
- [x] Mock user state in config (enum: `free` | `pale` | `vip` — UI only)

**Done when:** buttons trigger stub flow; types ready for backend swap.

---

## Post v0.1 (not started)

- [ ] Auth views
- [ ] Admin panel
- [ ] Real backend + PayPal
- [ ] Membership gating logic
- [ ] Admin: publish daily numbers
