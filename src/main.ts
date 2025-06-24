import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

// Import translation files
import es from './locales/es.json'
import en from './locales/en.json'

// Get browser language or default to Spanish
const getBrowserLanguage = () => {
  const savedLang = localStorage.getItem('language')
  if (savedLang) return savedLang
  
  const browserLang = navigator.language.split('-')[0]
  return ['es', 'en'].includes(browserLang) ? browserLang : 'es'
}

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  fallbackLocale: 'es',
  messages: {
    es,
    en
  }
})

createApp(App).use(i18n).mount('#app')
