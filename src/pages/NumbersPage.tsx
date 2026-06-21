import { siteConfig } from '@/data/site.config'
import { useDailyNumbers } from '@/hooks/useDailyNumbers'
import { PageContent, PageHeader } from '@/components/layout/PageHeader'
import { Card } from '@/components/ui/card'
import { NumberBox } from '@/components/ui/number-box'

export function NumbersPage() {
  const { data, loading, formattedDate } = useDailyNumbers()

  return (
    <PageContent>
      <PageHeader
        title="Números del día"
        subtitle={loading ? 'Cargando…' : formattedDate}
      />

      <Card className="px-3.5 py-4">
        <p className="text-center text-sm font-extrabold text-white">
          Análisis gratuito del día
        </p>

        <div className="mt-4 flex justify-center gap-2.5">
          {(data?.numbers ?? ['—', '—', '—']).map((n, i) => (
            <NumberBox key={i} value={n} />
          ))}
        </div>

        <p className="mt-4 text-center text-xs leading-snug tracking-[-0.03em] text-white/90">
          Contenido diario publicado por el administrador.
        </p>
        <p className="mt-2 text-center text-xs leading-snug tracking-[-0.03em] text-white/80">
          {data?.disclaimer ?? siteConfig.legal.numbersDisclaimer}
        </p>
      </Card>
    </PageContent>
  )
}
