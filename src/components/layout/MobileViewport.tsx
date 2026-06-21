import type { ReactNode } from 'react'

export function MobileViewport({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 scale-150 bg-kpu-navy blur-[10px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-kpu-navy/90 via-kpu-navy/80 to-black/90"
          aria-hidden
        />
      </div>
      <div
        className="relative z-10 mx-auto flex h-dvh max-h-dvh min-h-0 w-full max-w-[390px] flex-col safe-top"
      >
        <div className="pointer-events-none absolute inset-0 bg-kpu-navy" aria-hidden />
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </>
  )
}
