import { cn } from '@/lib/cn'

export type NavIconName =
  | 'home'
  | 'numbers'
  | 'pale'
  | 'vip'
  | 'book'
  | 'networks'

const icons: Record<
  NavIconName,
  { active: string; inactive: string; w: number; h: number }
> = {
  home: {
    active: '/assets/icons/nav/home-active.svg',
    inactive: '/assets/icons/nav/home-inactive.svg',
    w: 14,
    h: 15,
  },
  numbers: {
    active: '/assets/icons/nav/numbers-active.svg',
    inactive: '/assets/icons/nav/numbers-inactive.svg',
    w: 23,
    h: 11,
  },
  pale: {
    active: '/assets/icons/nav/pale-active.svg',
    inactive: '/assets/icons/nav/pale-inactive.svg',
    w: 14,
    h: 14,
  },
  vip: {
    active: '/assets/icons/nav/vip-active.svg',
    inactive: '/assets/icons/nav/vip-inactive.svg',
    w: 17,
    h: 15,
  },
  book: {
    active: '/assets/icons/nav/book-active.svg',
    inactive: '/assets/icons/nav/book-inactive.svg',
    w: 14,
    h: 11,
  },
  networks: {
    active: '/assets/icons/nav/networks-active.svg',
    inactive: '/assets/icons/nav/networks-inactive.svg',
    w: 14,
    h: 15,
  },
}

function iconRem(w: number, h: number) {
  return {
    width: `${w / 16}rem`,
    height: `${h / 16}rem`,
  }
}

export function NavIcon({
  name,
  active,
  className,
}: {
  name: NavIconName
  active: boolean
  className?: string
}) {
  const meta = icons[name]
  return (
    <img
      src={active ? meta.active : meta.inactive}
      alt=""
      aria-hidden
      className={cn('block shrink-0 object-contain', className)}
      style={iconRem(meta.w, meta.h)}
      draggable={false}
    />
  )
}
