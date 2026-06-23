import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MobileViewport } from '@/components/layout/MobileViewport'
import { applyMobileUiScale } from '@/lib/mobile-ui-scale'
import App from '@/App'
import '@/index.css'

applyMobileUiScale()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobileViewport>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MobileViewport>
  </StrictMode>,
)
