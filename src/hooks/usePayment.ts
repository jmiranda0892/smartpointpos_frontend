import { useCallback, useState } from 'react'
import { createPayment } from '@/lib/api/client'
import type { PaymentProduct } from '@/types/api'

export function usePayment() {
  const [loading, setLoading] = useState(false)

  const startPayment = useCallback(async (product: PaymentProduct) => {
    setLoading(true)
    try {
      const returnUrl = `${window.location.origin}/payment/success`
      const cancelUrl = `${window.location.origin}/payment/cancel`
      const { approvalUrl } = await createPayment({ product, returnUrl, cancelUrl })

      if (import.meta.env.DEV) {
        console.warn('[KPU] Payment stub:', product, approvalUrl)
      }

      if (approvalUrl === '#paypal-stub') {
        window.alert(
          `Pago ${product} — PayPal próximamente. Serás redirigido a la web de PayPal cuando el backend esté listo.`,
        )
        return
      }

      window.location.href = approvalUrl
    } finally {
      setLoading(false)
    }
  }, [])

  return { startPayment, loading }
}
