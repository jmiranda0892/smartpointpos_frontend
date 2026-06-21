import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MobileViewport } from '@/components/layout/MobileViewport'
import App from '@/App'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobileViewport>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MobileViewport>
  </StrictMode>,
)
