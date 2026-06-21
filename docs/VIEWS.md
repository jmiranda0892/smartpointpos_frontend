# Vistas — KPU v0.1

Contenido extraído de Figma Group 989 (`679:781`). Implementar con componentes de [`COMPONENTS.md`](./COMPONENTS.md).

---

## Shell compartido (todas las vistas)

### AppHeader
- Gradiente dorado horizontal
- Avatar circular negro, texto **KPU** en `#ffc300`
- **Kelin Pérez Ulloa** (ExtraBold, `#09152f`)
- **Análisis • Membresías • Contenido Premium** (Regular, `#102148`)

### BottomNav (6 tabs)

| Tab | Label |
|-----|-------|
| 1 | Inicio |
| 2 | Números |
| 3 | Palé |
| 4 | VIP |
| 5 | Libro |
| 6 | Redes |

Activo: fondo `#e0c130`, texto/icono `#102148`. Inactivo: texto `rgba(255,255,255,0.5)`.

---

## 1. Panel principal — `/`

**PageHeader**
- Título: **Panel principal** (`#ffc300`)
- Subtítulo: App para comunidad y membresía

**Grid 2×2**

| Subtítulo | Título | Link |
|-----------|--------|------|
| Contenido diario | Números del día | `/numeros` |
| Acceso pago | Membresía Palé | `/membresia/pale` |
| Premium | Membresía VIP | `/membresia/vip` |
| PDF pago | Libro Digital | `/libro` |

**Card estado (full width)**
- Label: Estado del usuario
- Valor: **Cuenta Gratis** (`#ffd900`) — *mock; variaciones TBD*
- Nota: Las áreas premium se desbloquean después del pago.

---

## 2. Números del día — `/numeros`

**PageHeader**
- Título: **Números del día**
- Subtítulo: fecha larga es-DO (ej. Viernes 22 de mayo de 2026)

**Card contenido**
- **Análisis gratuito del día**
- 3 NumberBox: **14**, **29**, **80** (mock; API futura)
- Contenido diario publicado por el administrador.
- Aviso: Contenido informativo de entretenimiento. No garantiza resultados

---

## 3. Membresía Palé — `/membresia/pale`

**PageHeader**
- Título: **Membresía Palé**
- Subtítulo: Plan mensual de acceso exclusivo

**Card feature**
- Icono estrella
- **RD$1,500** — Pago mensual
- Beneficios:
  - Análisis especial de palé
  - Actualizaciones diarias
  - Acceso a grupo privado
  - Notificaciones importantes
- CTA: **Pagar membresía Palé** → PayPal stub

---

## 4. Membresía VIP — `/membresia/vip`

**PageHeader**
- Título: **Membresía VIP**
- Subtítulo: Acceso premium para miembros avanzados

**Card feature**
- Icono corona
- **RD$3,500** — Pago mensual premium
- Beneficios:
  - Todo lo de membresía Palé
  - Contenido VIP privado
  - Acceso temprano a análisis
  - Atención directa por WhatsApp
  - Videos privados para miembros
- CTA: **Entrar al VIP** → PayPal stub

---

## 5. Libro Digital — `/libro`

**PageHeader**
- Título: **Libro Digital**
- Subtítulo: Producto de pago único

**Card feature**
- Icono libro
- **RD$999**
- Título: Métodos de análisis y tendencias
- Libro PDF descargable
- Nota: Recibirás acceso al libro digital, después de realizar el pago.
- CTA: **Comprar libro digital** → PayPal stub

---

## 6. Contactos y Redes — `/redes`

**PageHeader**
- Título: **Contactos y Redes**
- Subtítulo: Conecta con la comunidad oficial

**Lista SocialRow (6)**

| Plataforma | Acción |
|------------|--------|
| WhatsApp | Abrir → URL externa |
| Telegram | Abrir |
| YouTube | Abrir |
| Instagram | Abrir |
| Facebook | Abrir |
| TikTok | Abrir |

URLs en `site.config.ts` hasta admin/backend.
