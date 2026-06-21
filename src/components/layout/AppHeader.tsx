import { siteConfig } from '@/data/site.config'
import { Avatar } from '@/components/ui/avatar'

export function AppHeader() {
  const { brand } = siteConfig

  return (
    <header className="shrink-0 bg-kpu-header px-3 pb-3 pt-4">
      <div className="flex flex-col items-center gap-2.5">
        <Avatar initials={brand.initials} />
        <div className="text-center">
          <h1 className="text-[23px] font-extrabold leading-tight tracking-[-0.04em] text-kpu-navy-deep">
            {brand.name}
          </h1>
          <p className="mt-1 text-xs font-normal leading-snug tracking-[-0.03em] text-kpu-navy">
            {brand.tagline}
          </p>
        </div>
      </div>
    </header>
  )
}
