# KPU — Project memory

Persistent decisions. Update when the user or implementation locks something new.

**Last updated:** 2026-06-21

---

## Identity

| Key | Value |
|-----|-------|
| App name | **KPU** |
| Full brand | Kelin Pérez Ulloa |
| Tagline (header) | Análisis • Membresías • Contenido Premium |
| Repo | `smartpointpos_frontend` ✓ correct |
| Figma file | `l1eDiuBAKeYFePP3o3YKuW` — Tu-Jugada-RD |
| v0.1 design scope | Group 989, node `679:781` (6 screens) |

---

## Stack (locked)

- Vite SPA + React + TypeScript
- Tailwind CSS
- React Router
- PWA via `vite-plugin-pwa`
- PayPal (web redirect, not native)
- Spanish only

---

## Scope v0.1

### In

- 6 views: Home, Números, Palé, VIP, Libro, Redes
- Mobile shell + bottom nav (6 tabs)
- MobileViewport blur pattern (from loto_scratch)
- Design tokens + reusable components
- PWA installable
- PayPal flow stub (redirect to web when backend ready)
- Mock data / API types for future backend

### Out (later, same repo)

- Auth (login/registro)
- Admin panel
- Real backend integration
- Analytics
- Push notifications
- Multi-idioma

---

## Business (partial / TBD)

| Topic | Status |
|-------|--------|
| Precios | Palé RD$1,500/mes, VIP RD$3,500/mes, Libro RD$999 (from Figma) |
| PayPal | Confirmed; payment opens in browser (PWA limitation accepted) |
| Números del día | Admin panel will publish; mock until backend |
| User state label | "Cuenta Gratis" exists in design; **variations undefined** — use mock enum, don't invent rules |
| Social URLs | Not provided yet — placeholders in config |
| Legal copy | Use Figma text; typo "privador" → use "privados" unless client says otherwise |

---

## Design implementation

- Logical viewport width: **390px**
- Figma artboard ~254px → scale factor ~1.535×
- Assets: **from Figma exports**, not generic icon libs
- Reference implementation: `C:\Users\Ulloa\Documents\GitHub\loto_scratch\frontend\src\pages\DobleBoomPage.tsx` (blur + centered column)
- No theme switching (single navy + gold theme)

---

## Delivery order (approved)

1. Fase 0 — Scaffold + MobileViewport + tokens
2. Fase 1 — Shell + routing
3. Fase 2 — UI kit
4. Fase 3 — 6 screens
5. Fase 4 — Figma assets
6. Fase 5 — PWA polish
7. Fase 6 — PayPal + API stubs

Priority within screens if incremental: **Shell → Home → Números → Redes → Membresías → Libro**

---

## Backend assumption (non-blocking)

- REST API will exist separately
- Frontend will consume: auth, user membership, daily numbers, payment session creation
- See `docs/BACKEND.md` for planned endpoints
- Admin panel will live in this frontend later

---

## Open questions (do not guess in code)

- [ ] Production domain for PWA scope
- [ ] Real social media URLs
- [ ] PayPal plan IDs / sandbox credentials
- [ ] Membership state machine (free / pale / vip / expired)
- [ ] Auth method (email, phone, OAuth?)
- [ ] Admin routes structure

---

## Session log

| Date | Note |
|------|------|
| 2026-06-21 | Initial spec from Figma Group 989; docs scaffold created; repo empty |
| 2026-06-21 | Docs: README, agent.md, memory.md, docs/*, .cursor/rules/kpu.mdc |
| 2026-06-21 | v0.1 implemented: Vite+React+Tailwind PWA, 6 views, mock API, PayPal stub |
