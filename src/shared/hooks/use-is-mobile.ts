import { useState, useEffect } from 'react'

/**
 * Hook to detect if the app is running on a mobile platform
 * Returns true for 'android' and 'ios', false for desktop platforms
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're in a Telegram Mini App environment
    const telegramWebApp = (window as any).Telegram?.WebApp
    
    if (telegramWebApp?.platform) {
      const platform = telegramWebApp.platform.toLowerCase()
      // Mobile platforms: android, ios
      // Desktop platforms: web, tdesktop, macos, windows, linux, etc.
      setIsMobile(platform === 'android' || platform === 'ios')
    } else {
      // Fallback: check user agent if not in Telegram environment
      const userAgent = navigator.userAgent.toLowerCase()
      setIsMobile(/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent))
    }
  }, [])

  return isMobile
}

