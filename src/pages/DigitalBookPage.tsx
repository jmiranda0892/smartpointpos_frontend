import { siteConfig } from '@/data/site.config'
import { usePayment } from '@/hooks/usePayment'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { MembershipFeatureCard } from '@/components/ui/membership-feature-card'
import { BookIcon } from '@/components/icons/tile-icons'

export function DigitalBookPage() {
  const { startPayment, loading } = usePayment()
  const m = siteConfig.membership.book

  return (
    <PageContent>
      <PageHeader title="Libro Digital" subtitle={m.subtitle} />
      <MembershipFeatureCard
        icon={<BookIcon />}
        price={siteConfig.prices.book}
        priceLabel={m.title}
        bullets={m.bullets}
        note={m.note}
        ctaLabel={m.cta}
        onCtaClick={() => startPayment('book')}
        loading={loading}
      />
    </PageContent>
  )
}
