// Simple i18n setup for localization
const translations: Record<string, Record<string, string>> = {
  en: {
    'app.header.title': 'Telegram Mini App',
    'app.footer.text': 'Footer',
    'user.info.notAvailable': 'User information not available',
  },
}

let currentLocale = 'en'

export function t(key: string): string {
  return translations[currentLocale]?.[key] || key
}

export function setLocale(locale: string): void {
  currentLocale = locale
}

export function getLocale(): string {
  return currentLocale
}

