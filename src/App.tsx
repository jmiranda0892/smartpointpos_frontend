import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { HomePage } from '@/pages/HomePage'
import { NumbersPage } from '@/pages/NumbersPage'
import { PaleMembershipPage } from '@/pages/PaleMembershipPage'
import { VipMembershipPage } from '@/pages/VipMembershipPage'
import { DigitalBookPage } from '@/pages/DigitalBookPage'
import { SocialPage } from '@/pages/SocialPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="numeros" element={<NumbersPage />} />
        <Route path="membresia/pale" element={<PaleMembershipPage />} />
        <Route path="membresia/vip" element={<VipMembershipPage />} />
        <Route path="libro" element={<DigitalBookPage />} />
        <Route path="redes" element={<SocialPage />} />
      </Route>
      <Route path="payment/success" element={<Navigate to="/" replace />} />
      <Route path="payment/cancel" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
