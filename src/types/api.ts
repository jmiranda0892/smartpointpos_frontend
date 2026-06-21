export type MembershipTier = 'free' | 'pale' | 'vip'

export type PaymentProduct = 'pale' | 'vip' | 'book'

export interface DailyNumbers {
  date: string
  numbers: [number, number, number]
  publishedAt: string
  disclaimer?: string
}

export interface CreatePaymentRequest {
  product: PaymentProduct
  returnUrl: string
  cancelUrl: string
}

export interface CreatePaymentResponse {
  paymentId: string
  approvalUrl: string
}

export interface ApiError {
  error: string
  code?: string
}
