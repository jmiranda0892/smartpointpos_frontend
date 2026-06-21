import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FeatureList } from '@/components/ui/feature-list'
import { PriceDisplay } from '@/components/ui/price-display'

export function MembershipFeatureCard({
  icon,
  price,
  priceLabel,
  benefits,
  bullets,
  note,
  ctaLabel,
  onCtaClick,
  loading,
}: {
  icon: ReactNode
  price: number
  priceLabel: string
  benefits?: readonly string[]
  bullets?: readonly string[]
  note?: string
  ctaLabel: string
  onCtaClick: () => void
  loading?: boolean
}) {
  return (
    <Card variant="feature" className="flex flex-col items-center gap-4 py-4">
      <div className="flex flex-col items-center gap-2">
        {icon}
        <p className="text-xs font-bold tracking-[-0.03em] text-white/90">
          {priceLabel}
        </p>
        <PriceDisplay amount={price} />
      </div>

      {benefits?.length ? (
        <div className="w-full px-1">
          <FeatureList items={benefits} />
        </div>
      ) : null}

      {bullets?.length ? (
        <ul className="w-full space-y-1 text-center">
          {bullets.map((b) => (
            <li key={b} className="text-xs leading-snug text-white/90">
              {b}
            </li>
          ))}
        </ul>
      ) : null}

      {note ? (
        <p className="px-2 text-center text-xs leading-snug tracking-[-0.03em] text-white/90">
          {note}
        </p>
      ) : null}

      <Button
        type="button"
        variant="primary"
        onClick={onCtaClick}
        disabled={loading}
      >
        {ctaLabel}
      </Button>
    </Card>
  )
}
