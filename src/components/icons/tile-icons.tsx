import { cn } from '@/lib/cn'

export type TileIconName = 'numbers' | 'pale' | 'vip' | 'book'

const icons: Record<TileIconName, { src: string; w: number; h: number }> = {
  numbers: { src: '/assets/icons/tile/numbers.svg', w: 16, h: 16 },
  pale: { src: '/assets/icons/tile/pale.svg', w: 14, h: 14 },
  vip: { src: '/assets/icons/tile/vip.svg', w: 18, h: 16 },
  book: { src: '/assets/icons/tile/book.svg', w: 18, h: 14 },
}

function TileGlyph({
  name,
  className,
}: {
  name: TileIconName
  className?: string
}) {
  const meta = icons[name]
  return (
    <img
      src={meta.src}
      alt=""
      aria-hidden
      width={meta.w}
      height={meta.h}
      className={cn('block shrink-0', className)}
      draggable={false}
    />
  )
}

export function TileIcon({
  name,
  className,
}: {
  name: TileIconName
  className?: string
}) {
  return <TileGlyph name={name} className={cn('h-8 w-auto', className)} />
}

export function StarIcon({ className }: { className?: string }) {
  return <TileGlyph name="pale" className={cn('h-10 w-auto', className)} />
}

export function CrownIcon({ className }: { className?: string }) {
  return <TileGlyph name="vip" className={cn('h-10 w-auto', className)} />
}

export function BookIcon({ className }: { className?: string }) {
  return <TileGlyph name="book" className={cn('h-10 w-auto', className)} />
}
