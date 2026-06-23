import { cn } from '@/lib/cn'

export type TileIconName = 'numbers' | 'pale' | 'vip' | 'book'

const icons: Record<TileIconName, { src: string; w: number; h: number }> = {
  numbers: { src: '/assets/icons/tile/numbers.svg', w: 16, h: 16 },
  pale: { src: '/assets/icons/tile/pale.svg', w: 14, h: 14 },
  vip: { src: '/assets/icons/tile/vip.svg', w: 18, h: 16 },
  book: { src: '/assets/icons/tile/book.svg', w: 18, h: 14 },
}

function iconRem(w: number, h: number, targetH: number) {
  const heightRem = targetH / 16
  return {
    width: `${heightRem * (w / h)}rem`,
    height: `${heightRem}rem`,
  }
}

function TileGlyph({
  name,
  targetH,
  className,
}: {
  name: TileIconName
  targetH: number
  className?: string
}) {
  const meta = icons[name]
  return (
    <img
      src={meta.src}
      alt=""
      aria-hidden
      className={cn('block shrink-0 object-contain', className)}
      style={iconRem(meta.w, meta.h, targetH)}
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
  return <TileGlyph name={name} targetH={32} className={className} />
}

export function StarIcon({ className }: { className?: string }) {
  return <TileGlyph name="pale" targetH={40} className={className} />
}

export function CrownIcon({ className }: { className?: string }) {
  return <TileGlyph name="vip" targetH={40} className={className} />
}

export function BookIcon({ className }: { className?: string }) {
  return <TileGlyph name="book" targetH={40} className={className} />
}
