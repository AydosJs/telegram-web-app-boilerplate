import {
  init,
  expandViewport,
  requestFullscreen,
  isViewportExpanded,
  mountViewport,
  isViewportMounted,
  mountMiniAppSync,
  isMiniAppMounted,
  miniAppReady,
  isTMA
} from '@telegram-apps/sdk'
import { updateSafeAreaCSSVariables } from '@/shared/lib/safe-area'

/**
 * Check if the app is running on a mobile platform
 * Returns true for 'android' and 'ios', false for desktop platforms
 */
function isMobilePlatform(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  const telegramWebApp = (window as any).Telegram?.WebApp
  
  if (telegramWebApp?.platform) {
    const platform = telegramWebApp.platform.toLowerCase()
    // Mobile platforms: android, ios
    // Desktop platforms: web, tdesktop, macos, windows, linux, etc.
    return platform === 'android' || platform === 'ios'
  }

  // Fallback: check user agent if not in Telegram environment
  const userAgent = navigator.userAgent.toLowerCase()
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
}

/**
 * Initialize Telegram Mini Apps SDK
 * Handles mounting, expanding viewport, and requesting fullscreen
 */
export async function initTelegram(): Promise<void> {
  if (typeof window === 'undefined') {
    return
  }

  // Check if we're in a Telegram Mini App environment
  if (!(await isTMA())) {
    return
  }

  // Initialize the SDK
  init()

  // Mount mini app component first (synchronous)
  if (mountMiniAppSync.isAvailable() && !isMiniAppMounted()) {
    mountMiniAppSync()
  }

  // Notify Telegram that the app is ready
  if (miniAppReady.isAvailable()) {
    miniAppReady()
  }

  // Mount viewport component and wait for it to complete
  if (mountViewport.isAvailable() && !isViewportMounted()) {
    await mountViewport()
  }

  // First expand the viewport (works on all platforms) - only if not already expanded
  if (expandViewport.isAvailable() && !isViewportExpanded()) {
    expandViewport()
    // Wait a bit for viewport to expand
    await new Promise(resolve => setTimeout(resolve, 200))
  }

  // Update safe area CSS variables after viewport is mounted and expanded
  // Retry a few times to ensure insets are available
  let retries = 0
  while (retries < 5 && !updateSafeAreaCSSVariables()) {
    await new Promise(resolve => setTimeout(resolve, 50))
    retries++
  }

  // Request full-screen mode (Bot API 8.0+)
  // Only request fullscreen on mobile platforms, not on desktop
  if (isMobilePlatform() && requestFullscreen.isAvailable()) {
    try {
      await requestFullscreen()
      // Update safe area again after fullscreen (might change)
      updateSafeAreaCSSVariables()
    } catch (error) {
      console.error('Failed to request fullscreen:', error)
    }
  }
}

