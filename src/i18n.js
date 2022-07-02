import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'vi',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		whitelist: ['vi', 'en', 'fr', 'de', 'es', 'it', 'pt', 'ru'],
		detection: {
			order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
			caches: ['cookie', 'localStorage'],
			lookupFromPathIndex: 0,
			checkWhitelist: true,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	})

export default i18n
