import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initTelegram } from './app/init-telegram'
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

// Enable dark mode
document.documentElement.classList.add('light')

// Initialize Telegram Mini Apps SDK and wait for it to complete before rendering
// This ensures safe areas are set before the app renders
initTelegram().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}).catch((error) => {
  console.error('Failed to initialize Telegram SDK:', error)
  // Still render the app even if initialization fails
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
