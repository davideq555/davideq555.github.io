import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export const useLanguage = () => {
  const { locale, t } = useI18n()

  const currentLanguage = computed(() => locale.value)
  
  const availableLanguages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const setLanguage = (lang: string) => {
    locale.value = lang
    localStorage.setItem('language', lang)
  }

  const toggleLanguage = () => {
    const newLang = locale.value === 'es' ? 'en' : 'es'
    setLanguage(newLang)
  }

  return {
    currentLanguage,
    availableLanguages,
    setLanguage,
    toggleLanguage,
    t
  }
}