import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize mobile debugging tools (development only)
if (import.meta.env.DEV) {
  // Initialize Eruda
  import('eruda').then((eruda) => {
    eruda.default.init()
  })

  // Initialize vConsole
  // import('vconsole').then((VConsole) => {
  //   new VConsole.default()
  // })
}

// Request full-screen mode for Telegram mini app (mobile only)
if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
  const webApp = window.Telegram.WebApp
  const platform = webApp.platform || ''

  // Check if it's a mobile platform (not desktop)
  const isMobile = platform === 'android' || platform === 'ios'

  // First expand the viewport (works on all platforms)
  if (webApp.expand) {
    webApp.expand()
  }

  // Request full-screen mode only on mobile devices (Bot API 8.0+)
  if (isMobile && webApp.requestFullscreen) {
    webApp.requestFullscreen()
  }
}

// Enable dark mode
document.documentElement.classList.add('light')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
