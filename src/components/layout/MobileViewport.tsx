import { useLayoutEffect, type ReactNode } from 'react'
import {
  applyMobileUiScale,
  KPU_DESKTOP_MQ,
} from '@/lib/mobile-ui-scale'

export function MobileViewport({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    applyMobileUiScale()

    const mq = window.matchMedia(KPU_DESKTOP_MQ)
    const onChange = () => applyMobileUiScale()

    mq.addEventListener('change', onChange)
    window.addEventListener('resize', onChange)
    window.addEventListener('orientationchange', onChange)
    window.visualViewport?.addEventListener('resize', onChange)

    return () => {
      mq.removeEventListener('change', onChange)
      window.removeEventListener('resize', onChange)
      window.removeEventListener('orientationchange', onChange)
      window.visualViewport?.removeEventListener('resize', onChange)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 scale-150 bg-kpu-navy blur-[10px]"
          aria-hidden
        />
      </div>
      <div
        className="relative z-10 flex h-dvh max-h-dvh w-full min-w-0 flex-col sm:mx-auto sm:max-w-[390px] sm:border-[0.5px] sm:border-kpu-cream"
      >
        <div className="pointer-events-none absolute inset-0 bg-kpu-navy" aria-hidden />
        <div className="relative flex h-full min-h-0 flex-1 flex-col">
          {children}
        </div>
      </div>
    </>
  )
}
