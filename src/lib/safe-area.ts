/**
 * Update CSS variables with safe area insets from Telegram WebApp API
 */
export function updateSafeAreaCSSVariables(): void {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.safeAreaInset) {
        const insets = window.Telegram.WebApp.safeAreaInset
        const root = document.documentElement
        console.log('Safe Area Insets:', insets)
        root.style.setProperty('--safe-area-inset-top', `${insets.top}px`)
        root.style.setProperty('--safe-area-inset-bottom', `${insets.bottom}px`)
    }
}
