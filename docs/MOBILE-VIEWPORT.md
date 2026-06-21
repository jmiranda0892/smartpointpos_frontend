# Mobile viewport — blur pattern

KPU uses the same **desktop/tablet presentation** as [loto_scratch](C:\Users\Ulloa\Documents\GitHub\loto_scratch): full-screen blurred backdrop + centered sharp mobile column.

**Reference file:** `loto_scratch/frontend/src/pages/DobleBoomPage.tsx`

---

## Problem

App is **mobile-only**. On wide screens we must not stretch UI. Show a phone-width column centered with decorative blurred background filling the rest.

---

## Pattern (two layers)

### Layer 1 — Backdrop (fixed, full viewport)

```tsx
<div className="fixed inset-0 overflow-hidden" aria-hidden>
  {/* Blurred version of app bg — use navy + optional scaled bg image */}
  <div
    className="absolute inset-0 bg-kpu-navy bg-cover bg-center scale-150 blur-[10px]"
    aria-hidden
  />
  {/* Optional darkening overlay */}
  <div
    className="absolute inset-0 bg-linear-to-b from-kpu-navy/90 via-kpu-navy/80 to-black/90"
    aria-hidden
  />
</div>
```

**KPU note:** Figma uses solid `#102148`. Blur layer can use same color + subtle noise/image later. No requirement for background image in v0.1 — solid navy + blur is enough.

### Layer 2 — App column (relative, centered)

```tsx
<div
  className="
    relative z-10
    w-full max-w-[390px] h-dvh max-h-dvh min-h-0
    flex flex-col
    mx-auto
    shadow-[0_0_7.6px_rgba(0,0,0,0.25)]
  "
>
  {/* Inner sharp bg */}
  <div className="absolute inset-0 bg-kpu-navy pointer-events-none" aria-hidden />
  {children}
</div>
```

---

## Differences from loto_scratch

| loto_scratch | KPU |
|--------------|-----|
| `max-w-[430px]` | `max-w-[390px]` |
| Background image `RaspaditoBackground.png` | Solid `#102148` (v0.1) |
| Per-page inline layout | Extract to `MobileViewport` |
| `useViewport` for card sizing | Optional later; not required v0.1 |

---

## HTML / CSS globals

`index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

`index.css`:
```css
body {
  background: #102148;
  margin: 0;
}
#root {
  min-height: 100dvh;
}
```

---

## Safe areas (PWA)

On notched devices, pad shell:

```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

Apply to app column or bottom nav.

---

## Component API

```tsx
// src/components/layout/MobileViewport.tsx
export function MobileViewport({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* backdrop */}
      <div className="fixed inset-0 ..." aria-hidden>...</div>
      <div className="relative z-10 w-full max-w-[390px] h-dvh ... mx-auto">
        {children}
      </div>
    </>
  );
}
```

Wrap entire app in `main.tsx`:

```tsx
<MobileViewport>
  <BrowserRouter>...</BrowserRouter>
</MobileViewport>
```

---

## Testing checklist

- [ ] iPhone SE width (375) — column fills width
- [ ] iPhone 14 (390) — 1:1 design width
- [ ] Desktop 1920px — column centered, blur visible sides
- [ ] PWA standalone — `100dvh` respects home indicator
- [ ] No horizontal scroll on any page
