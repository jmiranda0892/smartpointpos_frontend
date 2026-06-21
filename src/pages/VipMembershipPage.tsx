import { siteConfig } from '@/data/site.config'
import { usePayment } from '@/hooks/usePayment'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { MembershipFeatureCard } from '@/components/ui/membership-feature-card'
import { CrownIcon } from '@/components/icons/tile-icons'

export function VipMembershipPage() {
  const { startPayment, loading } = usePayment()
  const m = siteConfig.membership.vip

  return (
    <PageContent>
      <PageHeader title="Membresía VIP" subtitle={m.subtitle} />
      <MembershipFeatureCard
        icon={<CrownIcon />}
        price={siteConfig.prices.vip}
        priceLabel={m.priceLabel}
        benefits={m.benefits}
        ctaLabel={m.cta}
        onCtaClick={() => startPayment('vip')}
        loading={loading}
      />
    </PageContent>
  )
}
