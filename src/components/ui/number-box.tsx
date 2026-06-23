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
        'flex h-[4.1875rem] w-[4.125rem] items-center justify-center rounded-kpu-number bg-kpu-gold',
        className,
      )}
    >
      <span className="text-2xl font-extrabold text-kpu-navy-text">{value}</span>
    </div>
  )
}
