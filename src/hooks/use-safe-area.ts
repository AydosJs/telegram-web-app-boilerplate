import { useEffect } from 'react'
import { updateSafeAreaCSSVariables } from '@/lib/safe-area'

export function useSafeArea(): void {
  useEffect(() => {
    updateSafeAreaCSSVariables()

    const update = () => updateSafeAreaCSSVariables()

    if (window.Telegram?.WebApp?.onEvent) {
      window.Telegram.WebApp.onEvent('safeAreaChanged', update)
      window.Telegram.WebApp.onEvent('viewportChanged', update)
    }

    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      if (window.Telegram?.WebApp?.offEvent) {
        window.Telegram.WebApp.offEvent('safeAreaChanged', update)
        window.Telegram.WebApp.offEvent('viewportChanged', update)
      }
    }
  }, [])
}
