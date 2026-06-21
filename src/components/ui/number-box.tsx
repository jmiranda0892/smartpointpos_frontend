import { cn } from '@/lib/cn'

export function NumberBox({
  value,
  className,
}: {
  value: string | number
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex h-[67px] w-[66px] items-center justify-center rounded-[8px] bg-kpu-gold',
        className,
      )}
    >
      <span className="text-2xl font-extrabold text-kpu-navy-text">{value}</span>
    </div>
  )
}
