# Design tokens — KPU

Single theme. Map these into Tailwind `@theme` / `tailwind.config` extension.

Figma reference frame: **254px** wide → implement at **`390px`** (`--app-width`).

Scale factor: `390 / 254 ≈ 1.535`. Use Tailwind spacing where close enough; use arbitrary values for Figma-exact when needed.

---

## Colors

```js
// tailwind theme extend — colors
kpu: {
  navy: '#102148',           // bg app, nav, text on gold tabs
  'navy-deep': '#09152f',    // brand name on header
  'navy-text': '#0a142b',    // numbers on gold boxes
  'navy-button': '#0d1a39',  // CTA text on gold buttons
  gold: '#e0c130',           // accent, active nav, number boxes
  'gold-bright': '#ffc300',  // section titles, KPU logo text
  'gold-highlight': '#ffd900', // Cuenta Gratis, prices emphasis
  cream: '#fff5da',          // borders
}
```

### Semantic aliases

| Token | Value | Usage |
|-------|-------|-------|
| `bg-app` | `kpu.navy` | Shell background |
| `text-primary` | `#ffffff` | Body on dark |
| `text-muted` | `rgba(255,255,255,0.5)` | Inactive nav |
| `border-default` | `kpu.cream` @ 0.5px | Card borders |

---

## Gradients

```css
/* Header — horizontal gold */
--gradient-header: linear-gradient(
  -90deg,
  #bf7530 0%,
  #d6ba40 50%,
  #bf7530 100%
);

/* Primary button */
--gradient-button: linear-gradient(
  176deg,
  #e0c130 27.5%,
  #cdaf1e 76.7%
);

/* Glass card */
--gradient-glass: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.1) 0%,
  rgba(255, 255, 255, 0.5) 100%
);

/* Content area behind cards */
--gradient-content: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.5) 0%,
  rgba(0, 0, 0, 0.2) 100%
);

/* Status card (home) */
--gradient-status: linear-gradient(
  180deg,
  rgba(131, 128, 92, 0.69) 0%,
  rgba(131, 128, 92, 0.48) 85.6%
);
```

Tailwind: use `bg-[linear-gradient(...)]` or CSS variables in `@layer utilities`.

---

## Typography

**Family:** Montserrat

| Weight | Tailwind | Figma name |
|--------|----------|------------|
| 400 | `font-normal` | Regular |
| 700 | `font-bold` | Bold |
| 800 | `font-extrabold` | ExtraBold |

### Scale (at 390px viewport — approximate)

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Brand name | ~23px | 800 | `#09152f` |
| Section title | ~18px | 800 | `#ffc300` |
| Card title | ~14px | 800 | white |
| Body | ~12px | 400 | white |
| Body small | ~11px | 400 | white |
| Nav label | ~9px | 400 | muted / navy |
| Price | ~25px | 800 | `#e0c130` |
| Number display | ~25px | 800 | `#0a142b` |
| CTA button | ~12px | 700 | `#0d1a39` |
| Abrir button | ~9px | 700 | `#0d1a39` |

Letter-spacing: `-0.02em` to `-0.04em` on small text (Figma tracking negative).

---

## Radii

| Token | px (390) | Figma (254) | Use |
|-------|----------|-------------|-----|
| `radius-shell` | 15px | 15px | Main card, nav bar |
| `radius-card` | 10px | 10px | Grid tiles, content cards |
| `radius-button` | 11px | 11px | Primary CTAs |
| `radius-button-sm` | 5px | 5px | Abrir |
| `radius-nav-item` | 13px | 13px | Nav icon background |
| `radius-number` | 8px | 8px | Number boxes |

---

## Shadows

```css
--shadow-shell: 0 0 7.6px rgba(0, 0, 0, 0.25);
```

---

## Layout constants

| Token | Value |
|-------|-------|
| `--app-width` | `390px` |
| `--header-height` | ~166px scaled (108px Figma × 1.535) |
| `--nav-height` | ~58px scaled |
| `--content-padding-x` | ~14px scaled |

---

## Tailwind setup notes

1. Extend `theme.extend.colors` with `kpu.*`
2. Add utility classes: `.bg-kpu-header`, `.bg-kpu-button`, `.bg-kpu-glass`, `.bg-kpu-status`
3. Load Montserrat in `index.html` or `@fontsource/montserrat`
4. Do **not** add dark mode variant

---

## Figma MCP workflow

When implementing a component:
1. `get_design_context` on specific node ID
2. Convert generated Tailwind to theme tokens (replace hex with `kpu-*`)
3. Export SVG assets via MCP `download_assets` or manual Figma export → `public/assets/`
