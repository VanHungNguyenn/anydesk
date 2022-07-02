import { useEffect, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { languages } from './constants'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

function App() {
	const { i18n } = useTranslation()

	console.log('Hehe', i18n)

	const detectFirstVisitedIP = useCallback(async () => {
		// check current language === IP language, if not change language detector
		const res = await axios.get('https://lumtest.com/myip.json')

		if (res.data.country.toLowerCase()) {
			const newLang =
				languages.find(
					(lang) =>
						lang.country_code === res.data.country.toLowerCase()
				)?.code || 'vi'

			i18n.changeLanguage(newLang)
		}
	}, [i18n])

	// call api, detect language by IP, set first language to currentLang
	useEffect(() => {
		detectFirstVisitedIP()
	}, [detectFirstVisitedIP])

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	)
}

export default App
