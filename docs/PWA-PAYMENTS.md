# PWA + PayPal

## PWA — instalable sin app nativa

### Por qué PWA

El cliente quiere que usuarios **tengan la app en el dispositivo** sin desarrollo móvil nativo. PWA es la vía correcta para un frontend React.

### Capacidades v0.1

| Feature | Incluido |
|---------|----------|
| Add to Home Screen | ✅ |
| Standalone (sin barra URL) | ✅ |
| Offline shell cache | ✅ básico |
| Push notifications | ❌ |
| App Store listing | ❌ |

### Implementación

**Plugin:** `vite-plugin-pwa`

**Manifest mínimo:**

```json
{
  "name": "KPU",
  "short_name": "KPU",
  "description": "Kelin Pérez Ulloa — Análisis, Membresías, Contenido Premium",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#102148",
  "theme_color": "#102148",
  "lang": "es",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

**iOS extras (`index.html`):**
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<link rel="apple-touch-icon" href="/icons/icon-192.png" />
```

### Instalación por plataforma

| Platform | UX |
|----------|-----|
| Android Chrome | Banner "Instalar app" o menú |
| iOS Safari | Compartir → Añadir a pantalla de inicio (instrucción opcional in-app) |

### Requisitos producción

- HTTPS obligatorio
- Service worker registrado
- Icons reales (export from Figma / brand)

---

## PayPal — pagos vía web

### Limitación PWA

Las PWA **no pueden usar IAP nativo** (App Store / Play Billing). PayPal checkout ocurre en **página web de PayPal**.

**Decisión aceptada:** al pagar, el usuario **entra a la web** (PayPal hosted checkout). Al completar, PayPal redirige de vuelta a la app vía `return_url`.

### Productos

| Producto | Precio | Tipo |
|----------|--------|------|
| Membresía Palé | RD$1,500 | Suscripción mensual (PayPal plan) |
| Membresía VIP | RD$3,500 | Suscripción mensual |
| Libro Digital | RD$999 | Pago único |

*Confirmar con cliente si PayPal soporta DOP directamente o conversión USD.*

### Flujo (producción)

```
User taps CTA
    → POST /api/payments/create { product: 'pale' | 'vip' | 'book' }
    → Backend creates PayPal order/subscription
    → Returns { approvalUrl: 'https://paypal.com/...' }
    → window.location.href = approvalUrl   // leaves PWA briefly
    → User pays on PayPal
    → Redirect to /payment/success?token=...
    → Backend webhook confirms → updates membership
    → App shows success state
```

### Flujo v0.1 (stub)

```ts
async function startPayment(product: 'pale' | 'vip' | 'book') {
  if (import.meta.env.DEV) {
    console.warn('[KPU] Payment stub:', product);
  }
  // TODO: POST /api/payments/create when backend exists
  alert(`Pago ${product} — PayPal próximamente`);
}
```

### Return URLs (planificar)

| Route | Purpose |
|-------|---------|
| `/payment/success` | PayPal approved |
| `/payment/cancel` | User cancelled |

### PWA + redirect behavior

- Use **same window** redirect (`location.href`) so return URL reopens installed PWA on mobile when configured correctly
- Test on Android installed PWA and iOS home screen app
- `start_url` and return URLs must share same origin

### Security (backend, future)

- Verify PayPal webhook signatures server-side
- Never trust client-only payment confirmation
- Store membership state server-side

---

## Qué decir al cliente

> La app se instala como PWA desde el navegador. Los pagos se procesan en PayPal (página segura de PayPal); al terminar, vuelves automáticamente a KPU.
