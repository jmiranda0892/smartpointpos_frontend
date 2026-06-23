import type { ReactNode } from 'react'

export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-4 mt-3.5 text-center">
      <h2 className="text-lg font-extrabold leading-tight text-kpu-gold-bright">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1.5 text-xs font-normal leading-snug tracking-[-0.03em] text-white/90">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

/** Scroll area wrapper for page sections (shell border lives in AppLayout) */
export function PageContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">{children}</div>
  )
}
