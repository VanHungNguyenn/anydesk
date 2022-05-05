import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { languages } from './constants'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

function App() {
	const { i18n } = useTranslation()

	const [currentLang, setCurrentLang] = useState(Cookies.get('i18next'))

	const getData = useCallback(async () => {
		const res = await axios.get('https://geolocation-db.com/json/')

		setCurrentLang(
			languages.find(
				(lang) =>
					lang.country_code === res.data.country_code.toLowerCase()
			)?.code || 'en'
		)
		console.log(currentLang)
		i18n.changeLanguage(currentLang)
	}, [currentLang, i18n])

	useEffect(() => {
		if (!currentLang) {
			getData()
			// reload page
			window.location.reload()
		}
	}, [currentLang, getData])

	return (
		<Routes>
			{currentLang && (
				<>
					<Route
						path='/'
						element={<Navigate to={`/${currentLang}`} />}
					/>
					{languages.map((lang, index) => (
						<Route
							path={`/${lang.code}`}
							element={<Home currentLang={lang.code} />}
							key={index}
						/>
					))}
					{/* Page not found */}
				</>
			)}
		</Routes>
	)
}

export default App
