import { cn } from '@/lib/cn'

export function Avatar({
  initials = 'KPU',
  className,
}: {
  initials?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex size-[4.5625rem] items-center justify-center rounded-full border-[0.21875rem] border-kpu-cream bg-kpu-navy-deep shadow-sm',
        className,
      )}
    >
      <span className="text-[1.4375rem] font-extrabold tracking-[-0.04em] text-kpu-gold-bright">
        {initials}
      </span>
    </div>
  )
}
