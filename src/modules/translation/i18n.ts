import i18n, { Resource } from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationPT from './locales/pt/translation.json'
import translationEN from './locales/en/translation.json'

const resources: Resource = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    detection: {
      order: ['navigator']
    },
    interpolation: {
      escapeValue: false
    }
  })
