# Especificación — KPU v0.1

## Producto

**KPU** es la app móvil de Kelin Pérez Ulloa para su comunidad: análisis de números (entretenimiento/informativo), membresías de pago (Palé, VIP), libro digital PDF, y enlaces a redes oficiales.

## Usuario objetivo

Miembros y visitantes de la comunidad KPU en República Dominicana. Uso principal en **móvil**, instalable como app (PWA).

## v0.1 — Alcance funcional

### Pantallas incluidas

Ver detalle en [`VIEWS.md`](./VIEWS.md).

1. Panel principal (home hub)
2. Números del día
3. Membresía Palé
4. Membresía VIP
5. Libro Digital
6. Contactos y Redes

### Navegación

Bottom bar fija con 6 tabs. Cada tab = ruta. Header de marca (KPU) compartido en todas las vistas.

### Datos dinámicos (v0.1)

| Dato | v0.1 | Producción |
|------|------|------------|
| Números del día | Mock / config | API admin |
| Fecha en Números | `Intl` es-DO | Servidor o local |
| Precios | Estáticos (Figma) | API o config |
| Estado membresía | Mock configurable | API auth |
| URLs redes | Config placeholders | Config / admin |
| Pagos | Stub → PayPal web | API + PayPal |

### Pagos

- Pasarela: **PayPal**
- PWA no soporta IAP nativo → el usuario **sale a PayPal en el navegador** y vuelve vía return URL
- CTAs de pago en Palé, VIP y Libro Digital

### PWA

- Instalable en home screen (Android/iOS)
- `display: standalone`
- Sin push en v0.1

### Idioma

Español únicamente. Copy desde Figma salvo corrección acordada ("privados" vs "privador").

## Fuera de v0.1

- Login / registro
- Panel de administración (mismo frontend, rutas futuras)
- Integración backend real
- Analytics
- Notificaciones push

## Referencias

- Figma: [Group 989](https://www.figma.com/design/l1eDiuBAKeYFePP3o3YKuW/Tu-Jugada-RD?node-id=679-781)
- Viewport: [`MOBILE-VIEWPORT.md`](./MOBILE-VIEWPORT.md)
- Tokens: [`DESIGN-TOKENS.md`](./DESIGN-TOKENS.md)
