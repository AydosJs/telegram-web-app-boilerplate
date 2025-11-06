import { viewportSafeAreaInsets } from '@telegram-apps/sdk'

/**
 * Update CSS variables with safe area insets from Telegram Mini Apps SDK
 */
export function updateSafeAreaCSSVariables(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  const insets = viewportSafeAreaInsets()
  if (insets) {
    const root = document.documentElement
    console.log('Safe Area Insets:', insets)
    root.style.setProperty('--safe-area-inset-top', `${insets.top + 44}px`)
    root.style.setProperty('--safe-area-inset-bottom', `${insets.bottom}px`)
    return true
  }

  return false
}

