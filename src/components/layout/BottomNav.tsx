import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { NavIcon, type NavIconName } from '@/components/icons/nav-icons'

const navItems: {
  to: string
  label: string
  icon: NavIconName
  end?: boolean
}[] = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/numeros', label: 'Números', icon: 'numbers' },
  { to: '/membresia/pale', label: 'Palé', icon: 'pale' },
  { to: '/membresia/vip', label: 'VIP', icon: 'vip' },
  { to: '/libro', label: 'Libro', icon: 'book' },
  { to: '/redes', label: 'Redes', icon: 'networks' },
]

export function BottomNav() {
  return (
    <nav
      className="safe-bottom shrink-0 px-3.5 pb-3.5 pt-2"
      aria-label="Navegación principal"
    >
      <div className="mb-1.5 flex h-[3.625rem] min-w-0 items-center overflow-hidden rounded-kpu-nav border-[0.5px] border-kpu-cream bg-kpu-navy px-[0.1875rem] py-[0.1875rem]">
        {navItems.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className="flex min-w-0 flex-1 flex-col justify-center"
          >
            {({ isActive }) => (
              <span
                className={cn(
                  'flex h-[3.25rem] w-full min-w-0 flex-col items-center justify-center gap-[0.09375rem] rounded-kpu-nav',
                  isActive ? 'bg-kpu-gold text-kpu-navy' : 'text-white/50',
                )}
              >
                <NavIcon name={icon} active={isActive} />
                <span className="text-[0.5625rem] font-normal leading-none tracking-[-0.37px]">
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
