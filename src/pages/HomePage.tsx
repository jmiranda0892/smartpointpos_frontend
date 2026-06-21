import { siteConfig } from '@/data/site.config'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { GridTile } from '@/components/ui/grid-tile'
import { Card } from '@/components/ui/card'

export function HomePage() {
  const tier = siteConfig.membershipTier
  const statusLabel = siteConfig.membershipLabels[tier]

  return (
    <PageContent>
      <PageHeader title="Panel principal" subtitle={siteConfig.home.subtitle} />

      <div className="grid grid-cols-2 gap-2.5">
        {siteConfig.homeTiles.map((tile) => (
          <GridTile
            key={tile.to}
            subtitle={tile.subtitle}
            title={tile.title}
            to={tile.to}
            icon={tile.icon}
          />
        ))}
      </div>

      <Card variant="status" className="mt-3 border-[0.3px] border-white/30 px-3.5 py-3">
        <p className="text-xs tracking-[-0.03em] text-white/90">
          {siteConfig.home.statusLabel}
        </p>
        <p className="mt-1 text-sm font-extrabold text-kpu-gold-highlight">
          {statusLabel}
        </p>
        <p className="mt-2 text-[11px] leading-snug tracking-[-0.03em] text-white/80">
          {siteConfig.legal.premiumUnlockNote}
        </p>
      </Card>
    </PageContent>
  )
}
