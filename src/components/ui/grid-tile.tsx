import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { TileIcon, type TileIconName } from '@/components/icons/tile-icons'
import { cn } from '@/lib/cn'

export function GridTile({
  subtitle,
  title,
  to,
  icon,
  className,
}: {
  subtitle: string
  title: string
  to: string
  icon: TileIconName
  className?: string
}) {
  return (
    <Link to={to} className={cn('block', className)}>
      <Card className="flex h-[6.625rem] flex-col items-center justify-center gap-1.5 px-2 py-3 text-center">
        <TileIcon name={icon} />
        <div>
          <p className="text-sm font-extrabold leading-tight text-white">
            {title}
          </p>
          <p className="mt-0.5 text-[0.8125rem] font-semibold leading-none tracking-[-0.03em] text-white/90">
            {subtitle}
          </p>
        </div>
      </Card>
    </Link>
  )
}
