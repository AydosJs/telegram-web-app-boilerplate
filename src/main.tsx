import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { initTelegram } from './app/init-telegram'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

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

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Initialize Telegram Mini Apps SDK and wait for it to complete before rendering
// This ensures safe areas are set before the app renders
initTelegram().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}).catch((error) => {
  console.error('Failed to initialize Telegram SDK:', error)
  // Still render the app even if initialization fails
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
})
