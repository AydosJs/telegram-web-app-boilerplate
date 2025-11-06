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

interface TelegramUser {
  /**
   * A unique identifier for the user or bot
   */
  id: number

  /**
   * True, if this user is a bot
   */
  is_bot?: boolean

  /**
   * User's or bot's first name
   */
  first_name: string

  /**
   * User's or bot's last name
   */
  last_name?: string

  /**
   * User's or bot's username
   */
  username?: string

  /**
   * IETF language tag of the user's language
   */
  language_code?: string

  /**
   * True, if this user is a Telegram Premium user
   */
  is_premium?: boolean

  /**
   * URL of the user's profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
   */
  photo_url?: string
}

interface InitDataUnsafe {
  /**
   * A JSON-serialized object with data about the user
   */
  user?: TelegramUser

  /**
   * A JSON-serialized object with data about the chat
   */
  chat?: any

  /**
   * A JSON-serialized object with data about the chat type
   */
  chat_type?: string

  /**
   * A JSON-serialized object with data about the chat instance
   */
  chat_instance?: string

  /**
   * Unix time when the form was opened
   */
  auth_date?: number

  /**
   * A hash of all passed parameters
   */
  hash?: string
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
   * An object containing data about the current user
   * This is the unsafe version of initData - use with caution
   */
  initDataUnsafe?: InitDataUnsafe

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
