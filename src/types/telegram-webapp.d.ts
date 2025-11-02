/**
 * TypeScript definitions for Telegram WebApp SDK
 * Reference: https://core.telegram.org/bots/webapps
 * Bot API 8.0+ (November 17, 2024)
 */

interface SafeAreaInset {
  top: number
  bottom: number
  left: number
  right: number
}

interface TelegramWebApp {
  /**
   * Current safe area insets (Bot API 8.0+)
   * The safe area insets for the entire viewport
   */
  safeAreaInset?: SafeAreaInset

  /**
   * Content safe area insets (Bot API 8.0+)
   * The safe area insets for the content area (excluding header)
   */
  contentSafeAreaInset?: SafeAreaInset

  /**
   * Current viewport height
   */
  viewportHeight?: number

  /**
   * Stable viewport height (without expansion)
   */
  viewportStableHeight?: number

  /**
   * A method to enable the viewport to expand to full height
   */
  expand?: () => void

  /**
   * A method to disable the viewport expansion
   */
  close?: () => void

  /**
   * Request full-screen mode (Bot API 8.0+)
   * Makes the mini app full-screen in both portrait and landscape
   */
  requestFullscreen?: () => void

  /**
   * Exit full-screen mode (Bot API 8.0+)
   */
  exitFullscreen?: () => void

  /**
   * Check if the app is in full-screen mode (Bot API 8.0+)
   */
  isFullscreen?: boolean

  /**
   * Platform where the mini app is running
   * Possible values: 'android', 'ios', 'web', 'tdesktop', 'macos', etc.
   */
  platform?: string

  /**
   * Subscribe to events
   */
  onEvent?: (eventType: string, callback: (data?: any) => void) => void

  /**
   * Unsubscribe from events
   */
  offEvent?: (eventType: string, callback: (data?: any) => void) => void
}

interface Telegram {
  WebApp?: TelegramWebApp
}

interface Window {
  Telegram?: Telegram
}
