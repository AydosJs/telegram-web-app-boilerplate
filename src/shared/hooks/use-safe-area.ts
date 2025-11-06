import { useEffect } from 'react'
import { updateSafeAreaCSSVariables } from '@/shared/lib/safe-area'

export function useSafeArea(): void {
  useEffect(() => {
    // Set safe area insets only once when component mounts
    // They should not change on scroll or viewport changes
    updateSafeAreaCSSVariables()
  }, [])
}

