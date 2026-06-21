# Backend contract (future)

Backend **does not exist yet**. This document defines the interface the frontend will expect. Implement mocks until API is ready.

**Principle:** swap `src/lib/api/client.ts` from mock → real without changing page components.

---

## Base URL

```env
VITE_API_URL=https://api.example.com
```

Dev: Vite proxy `/api` → localhost (same pattern as loto_scratch).

---

## Auth (future — not v0.1)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/register` | Create account |
| POST | `/auth/login` | Returns JWT / session |
| POST | `/auth/logout` | Invalidate session |
| GET | `/auth/me` | Current user + membership |

**Frontend types:**

```ts
type MembershipTier = 'free' | 'pale' | 'vip';

interface User {
  id: string;
  email: string;
  displayName?: string;
  membership: MembershipTier;
  membershipExpiresAt?: string; // ISO
}
```

---

## Daily numbers (admin publishes)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/numbers/today` | Today's published numbers |
| GET | `/numbers/:date` | Historical (optional) |

**Admin (future panel in this frontend):**

| Method | Path | Description |
|--------|------|-------------|
| POST | `/admin/numbers` | Publish numbers for date |
| PUT | `/admin/numbers/:date` | Update |

**Response:**

```ts
interface DailyNumbers {
  date: string; // ISO date
  numbers: [number, number, number]; // or string[] for 00-99
  publishedAt: string;
  disclaimer?: string;
}
```

**v0.1 mock:**

```ts
{ date: '2026-05-22', numbers: [14, 29, 80] }
```

---

## Payments (PayPal)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/payments/create` | Create PayPal order/subscription |
| GET | `/payments/status/:id` | Poll status (optional) |
| POST | `/webhooks/paypal` | Server only — not frontend |

**Request:**

```ts
interface CreatePaymentRequest {
  product: 'pale' | 'vip' | 'book';
  returnUrl: string;
  cancelUrl: string;
}
```

**Response:**

```ts
interface CreatePaymentResponse {
  paymentId: string;
  approvalUrl: string;
}
```

---

## Site config (optional API)

Could remain static in `site.config.ts` or move to:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/config/public` | Social URLs, prices, feature flags |

---

## Admin panel (future — same frontend)

Suggested routes (not v0.1):

```
/admin
/admin/numbers
/admin/users
/admin/payments
```

Protected by auth + role `admin`.

---

## Error shape

```ts
interface ApiError {
  error: string;
  code?: string;
  details?: unknown;
}
```

---

## Mock mode

```ts
// src/lib/api/client.ts
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';

export async function getTodayNumbers(): Promise<DailyNumbers> {
  if (USE_MOCK) return mockDailyNumbers;
  return fetchJson('/numbers/today');
}
```

Default `VITE_USE_MOCK=true` in dev until backend ships.

---

## Membership gating (TBD)

User said **"Cuenta Gratis" variations undefined**. Do not implement gating logic in v0.1.

When defined, likely rules:
- `free` — home + números + redes only
- `pale` — + pale content / group link
- `vip` — + vip content

Frontend should read `user.membership` from `/auth/me` when auth exists.
