import { siteConfig } from '@/data/site.config'
import { usePayment } from '@/hooks/usePayment'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { MembershipFeatureCard } from '@/components/ui/membership-feature-card'
import { StarIcon } from '@/components/icons/tile-icons'

export function PaleMembershipPage() {
  const { startPayment, loading } = usePayment()
  const m = siteConfig.membership.pale

  return (
    <PageContent>
      <PageHeader title="Membresía Palé" subtitle={m.subtitle} />
      <MembershipFeatureCard
        icon={<StarIcon />}
        price={siteConfig.prices.pale}
        priceLabel={m.priceLabel}
        benefits={m.benefits}
        ctaLabel={m.cta}
        onCtaClick={() => startPayment('pale')}
        loading={loading}
      />
    </PageContent>
  )
}
