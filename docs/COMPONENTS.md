# Component catalog — KPU

Reusable building blocks. **Do not duplicate** — extend variants here before creating new components.

---

## Layout

### `MobileViewport`

Wrapper full-page. See [`MOBILE-VIEWPORT.md`](./MOBILE-VIEWPORT.md).

**Props:** `children`

**Structure:**
- Layer 1: fixed blur backdrop (full viewport)
- Layer 2: centered column `max-w-[390px] h-dvh mx-auto`

---

### `AppLayout`

**Props:** `children` (page content)

**Slots:** renders `AppHeader`, `<main>` scroll, `BottomNav`

---

### `AppHeader`

Static brand header. No props v0.1 (copy from config later).

**Content:** gradient, Avatar, name, tagline

---

### `PageHeader`

**Props:**
- `title: string`
- `subtitle?: string`

**Style:** title gold `#ffc300` ExtraBold; subtitle white Regular

---

### `BottomNav`

Uses React Router `NavLink`. 6 items hardcoded v0.1.

**Props:** none (routes internal)

---

## UI

### `Button`

| Variant | Size | Use |
|---------|------|-----|
| `primary` | `md` (full width ~180px) | Pay CTAs |
| `open` | `sm` (36×14 scaled) | Social Abrir |

**Props:** `variant`, `children`, `onClick`, `disabled`, `loading?`

**Style:** `--gradient-button`, text `#0d1a39`, radius per variant

---

### `Card`

| Variant | Use |
|---------|-----|
| `glass` | Grid tiles, números card, social rows |
| `status` | Home "Estado del usuario" |
| `feature` | Membership / libro main card |

**Props:** `variant`, `className?`, `children`

---

### `GridTile`

Home navigation tile.

**Props:**
- `subtitle: string`
- `title: string`
- `icon: ReactNode`
- `to: string` (Link)

**Style:** glass card ~98×69 scaled, icon top, text bottom

---

### `NumberBox`

**Props:** `value: string | number`

**Style:** bg `#e0c130`, radius 8px, number ExtraBold `#0a142b`

---

### `FeatureList`

**Props:** `items: string[]`

**Style:** check/bullet icon + white text ~12px

---

### `SocialRow`

**Props:**
- `platform: string`
- `icon: ReactNode`
- `href: string`

**Renders:** glass row + platform name + `Button variant="open"` → opens external URL

---

### `PriceDisplay`

**Props:** `amount: number`, `currency?: 'DOP'` (default)

**Format:** `RD$1,500` — locale `es-DO`, no decimals for whole pesos

---

### `Avatar`

**Props:** `initials?: string` (default "KPU")

**Style:** 48px circle scaled, black bg, gold text

---

### `MembershipFeatureCard` (composition)

Composes: `Card feature` + icon + `PriceDisplay` + label + `FeatureList` + `Button primary`

**Props:**
- `title`, `subtitle` (page level — use PageHeader outside)
- `price`, `priceLabel`
- `benefits: string[]`
- `ctaLabel`, `onCtaClick`
- `icon: ReactNode`

Used by Palé, VIP, Libro with different props.

---

## Icons

Location: `public/assets/icons/` or `src/components/icons/`

| Icon | Used in |
|------|---------|
| home | Nav Inicio |
| numbers | Nav Números |
| star | Nav Palé, Palé card |
| crown | Nav VIP, VIP card |
| book | Nav Libro, Libro card |
| share/network | Nav Redes |
| check | FeatureList |
| platform icons | SocialRow (WhatsApp, Telegram, etc.) |

**Source:** Figma export required. Name files: `nav-home.svg`, `social-whatsapp.svg`, etc.

---

## Config-driven content

`src/data/site.config.ts`:

```ts
export const siteConfig = {
  brand: { name: 'Kelin Pérez Ulloa', initials: 'KPU', tagline: '...' },
  prices: { pale: 1500, vip: 3500, book: 999 },
  social: { whatsapp: '', telegram: '', ... },
  legal: { numbersDisclaimer: '...' },
}
```

Components read from config; pages compose components.

---

## File naming convention

```
src/components/layout/AppHeader.tsx
src/components/layout/BottomNav.tsx
src/components/layout/MobileViewport.tsx
src/components/ui/button.tsx      // lowercase if shadcn-style
src/components/ui/card.tsx
```

Prefer one component per file. Co-locate tiny subcomponents only if private.
