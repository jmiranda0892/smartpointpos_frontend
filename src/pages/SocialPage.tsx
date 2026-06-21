import { siteConfig } from '@/data/site.config'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { SocialRow } from '@/components/ui/social-row'
import type { SocialIconName } from '@/components/icons/social-icons'

export function SocialPage() {
  return (
    <PageContent>
      <PageHeader
        title="Contactos y Redes"
        subtitle="Conecta con la comunidad oficial"
      />

      <div className="space-y-2.5">
        {siteConfig.socialPlatforms.map((p) => (
          <SocialRow
            key={p.id}
            platform={p.label}
            icon={p.id as SocialIconName}
            href={siteConfig.social[p.hrefKey]}
          />
        ))}
      </div>
    </PageContent>
  )
}
