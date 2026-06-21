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
        'flex size-[73px] items-center justify-center rounded-full border border-kpu-cream/60 bg-black shadow-sm',
        className,
      )}
    >
      <span className="text-[23px] font-extrabold tracking-[-0.04em] text-kpu-gold-bright">
        {initials}
      </span>
    </div>
  )
}
