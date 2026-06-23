import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/layout/AppHeader'
import { BottomNav } from '@/components/layout/BottomNav'

/** Full-bleed phone shell: gold header + scroll content + bottom nav */
export function AppLayout() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-kpu-navy">
      <AppHeader />
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3.5 pt-3 pb-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
