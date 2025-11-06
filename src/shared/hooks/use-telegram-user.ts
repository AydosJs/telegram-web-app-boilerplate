import { useState, useEffect } from 'react'

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  language_code?: string
  is_premium?: boolean
  is_bot?: boolean
}

export function useTelegramUser(): TelegramUser | null {
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const telegramWebApp = window.Telegram?.WebApp
    const userData = telegramWebApp?.initDataUnsafe?.user

    if (userData) {
      setUser(userData)
    }
  }, [])

  return user
}

