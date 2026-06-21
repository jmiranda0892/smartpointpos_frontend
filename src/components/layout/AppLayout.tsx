import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/layout/AppHeader'
import { BottomNav } from '@/components/layout/BottomNav'

/** Single bordered phone card: gold header + scroll content + bottom nav */
export function AppLayout() {
  return (
    <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-2 pt-3.5">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] border-[0.5px] border-kpu-cream shadow-kpu-shell">
        <AppHeader />
        <main className="min-h-0 flex-1 overflow-y-auto bg-kpu-content px-3.5 py-3">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
