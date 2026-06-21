import type {
  CreatePaymentRequest,
  CreatePaymentResponse,
  DailyNumbers,
} from '@/types/api'

const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false'
const API_URL = import.meta.env.VITE_API_URL ?? ''

const mockDailyNumbers: DailyNumbers = {
  date: '2026-05-22',
  numbers: [14, 29, 80],
  publishedAt: new Date().toISOString(),
  disclaimer:
    'Aviso: Contenido informativo de entretenimiento. No garantiza resultados',
}

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })
  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`)
  }
  return res.json() as Promise<T>
}

export async function getTodayNumbers(): Promise<DailyNumbers> {
  if (USE_MOCK) return mockDailyNumbers
  return fetchJson<DailyNumbers>('/api/numbers/today')
}

export async function createPayment(
  body: CreatePaymentRequest,
): Promise<CreatePaymentResponse> {
  if (USE_MOCK) {
    return {
      paymentId: `mock-${body.product}-${Date.now()}`,
      approvalUrl: '#paypal-stub',
    }
  }
  return fetchJson<CreatePaymentResponse>('/api/payments/create', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export { USE_MOCK }
