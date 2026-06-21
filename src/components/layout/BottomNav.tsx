import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { NavIcon, type NavIconName } from '@/components/icons/nav-icons'

const navItems: {
  to: string
  label: string
  icon: NavIconName
  width: string
  end?: boolean
}[] = [
  { to: '/', label: 'Inicio', icon: 'home', width: 'w-[54px]', end: true },
  { to: '/numeros', label: 'Números', icon: 'numbers', width: 'w-[55px]' },
  { to: '/membresia/pale', label: 'Palé', icon: 'pale', width: 'w-[54px]' },
  { to: '/membresia/vip', label: 'VIP', icon: 'vip', width: 'w-[54px]' },
  { to: '/libro', label: 'Libro', icon: 'book', width: 'w-[55px]' },
  { to: '/redes', label: 'Redes', icon: 'networks', width: 'w-[54px]' },
]

export function BottomNav() {
  return (
    <nav
      className="safe-bottom shrink-0 px-3.5 pb-3.5 pt-1"
      aria-label="Navegación principal"
    >
      <div className="flex h-[58px] items-center justify-between rounded-[15px] border-[0.5px] border-kpu-cream bg-kpu-navy px-[3px] py-[3px]">
        {navItems.map(({ to, label, icon, width, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={cn('flex flex-col shrink-0 justify-center', width)}
          >
            {({ isActive }) => (
              <span
                className={cn(
                  'flex h-[52px] flex-col items-center justify-center gap-[1.5px] rounded-[13px]',
                  isActive ? 'bg-kpu-gold text-kpu-navy' : 'text-white/50',
                )}
              >
                <NavIcon name={icon} active={isActive} />
                <span className="text-[9px] font-normal leading-none tracking-[-0.37px]">
                  {label}
                </span>
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
