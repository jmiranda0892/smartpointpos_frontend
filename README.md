# KPU — Frontend

App móvil web de **Kelin Pérez Ulloa (KPU)**: comunidad, análisis de números, membresías y contenido premium. Instalable como **PWA**; pagos vía **PayPal** (redirect web).

**Repo:** `smartpointpos_frontend`  
**Figma:** [Tu-Jugada-RD — Group 989 (679:781)](https://www.figma.com/design/l1eDiuBAKeYFePP3o3YKuW/Tu-Jugada-RD?node-id=679-781)  
**Referencia viewport:** [`loto_scratch`](../loto_scratch) (`frontend/src/pages/DobleBoomPage.tsx`)

---

## Qué es v0.1

| In scope | Out of scope (futuro) |
|----------|------------------------|
| 6 vistas del Group 989 Figma | Auth (login/registro) |
| Shell móvil + bottom nav | Panel admin |
| Design system (Tailwind tokens) | Backend real conectado |
| PWA instalable | Push notifications |
| PayPal redirect (stub hasta API) | Analytics |
| Español (RD) únicamente | Multi-idioma |

---

## Stack

| Capa | Elección |
|------|----------|
| Framework | React 19 + TypeScript |
| Build | Vite SPA |
| Routing | React Router |
| Estilos | Tailwind CSS v4 + tokens en `tailwind.config` / `@theme` |
| PWA | `vite-plugin-pwa` |
| Pagos | PayPal (checkout web; no IAP nativo) |
| Idioma | Español |

---

## Documentación (leer en este orden)

| Archivo | Para qué |
|---------|----------|
| [`agent.md`](./agent.md) | Instrucciones para el agente de IA |
| [`memory.md`](./memory.md) | Decisiones persistentes del proyecto |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md) | Fases de entrega incremental |
| [`docs/SPEC.md`](./docs/SPEC.md) | Especificación funcional |
| [`docs/VIEWS.md`](./docs/VIEWS.md) | Contenido de las 6 pantallas |
| [`docs/DESIGN-TOKENS.md`](./docs/DESIGN-TOKENS.md) | Colores, tipografía, gradientes |
| [`docs/COMPONENTS.md`](./docs/COMPONENTS.md) | Catálogo de componentes |
| [`docs/MOBILE-VIEWPORT.md`](./docs/MOBILE-VIEWPORT.md) | Wrapper móvil + blur (patrón loto_scratch) |
| [`docs/PWA-PAYMENTS.md`](./docs/PWA-PAYMENTS.md) | PWA + flujo PayPal |
| [`docs/BACKEND.md`](./docs/BACKEND.md) | Contrato API futuro (no bloqueante) |
| [`docs/SKILLS.md`](./docs/SKILLS.md) | Skills Cursor / Figma a usar |

---

## Estructura objetivo del código

```
src/
├── app/              # AppShell, layout, routes
├── components/
│   ├── layout/       # AppHeader, BottomNav, PageHeader, MobileViewport
│   └── ui/           # Button, Card, GridTile, NumberBox, etc.
├── pages/            # 6 vistas v0.1
├── data/             # site.config.ts (URLs, precios, mocks)
├── hooks/
├── lib/              # utils (cn, etc.)
├── styles/
└── types/
public/
├── icons/            # PWA icons
└── assets/           # exports Figma (SVG/PNG)
```

---

## Comandos (tras scaffold)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

---

## Entrega incremental (v0.1)

1. **Fase 0** — Vite + React + TS + Tailwind + PWA scaffold + `MobileViewport`
2. **Fase 1** — Shell: header + bottom nav + rutas (placeholders)
3. **Fase 2** — UI kit: Button, Card, GridTile, NumberBox, FeatureList, SocialRow
4. **Fase 3** — Pantallas pixel-perfect vs Figma
5. **Fase 4** — Assets Figma + Montserrat
6. **Fase 5** — PWA polish (manifest, icons, safe areas)
7. **Fase 6** — Stubs PayPal + tipos API (sin backend)

Detalle por fase → [`docs/ROADMAP.md`](./docs/ROADMAP.md)

---

## Reglas de implementación

- **Fidelidad:** diseño idéntico a Figma Group 989; medir contra node `679:781`.
- **Assets:** exportar desde Figma; no sustituir por icon genérico salvo que sea visualmente idéntico.
- **Mobile-only:** en desktop/tablet, columna centrada + fondo difuminado (ver `docs/MOBILE-VIEWPORT.md`).
- **Lazy:** mínimo código; sin abstracciones no usadas; backend asumido pero mockeado.
- **Agente:** seguir [`agent.md`](./agent.md) y actualizar [`memory.md`](./memory.md) al cerrar decisiones nuevas.

---

## Skills recomendados (Cursor / agente)

Cargar cuando aplique (ya instalados globalmente en la máquina del dev):

- `vercel-react-best-practices` — rendimiento React
- `frontend-design` — calidad visual al implementar UI
- `ponytail` — mínimo código viable
- Figma MCP + `figma-use` — exportar assets y validar medidas

No instalar skills extra de terceros para Tailwind; los tokens viven en este repo.
