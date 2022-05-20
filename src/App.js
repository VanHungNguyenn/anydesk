import { useState, useEffect, useCallback } from 'react'
import {
	Routes,
	Route,
	Navigate,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import Home from './pages/Home'
import { languages } from './constants'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

function App() {
	const { i18n } = useTranslation()
	const navigate = useNavigate()

	const id = useLocation().pathname.split('/')[1]

	console.log(id)

	const [currentLang, setCurrentLang] = useState('en')

	//console.log({ currentLang })

	const handleChange = useCallback(async () => {
		// check current language === IP language, if not change language detector
		const res = await axios.get('https://geolocation-db.com/json/')

		if (res.data.country_code.toLowerCase()) {
			const newLang =
				languages.find(
					(lang) =>
						lang.country_code ===
						res.data.country_code.toLowerCase()
				)?.code || 'en'

			setCurrentLang(newLang)

			i18n.changeLanguage(newLang)
			navigate(`/${newLang}`)
		}
	}, [i18n, navigate])

	useEffect(() => {
		if (currentLang === 'en') {
			handleChange()
		}
		// reload
	}, [handleChange, currentLang])

	return (
		<Routes>
			<>
				{languages.map((lang, index) => (
					<Route
						path={`/${lang.code}`}
						element={<Home currentLang={lang.code} />}
						key={index}
					/>
				))}
				<Route path='/' element={<Navigate to={`/${currentLang}`} />} />
				{/* Page not found */}
			</>
		</Routes>
	)
}

export default App
