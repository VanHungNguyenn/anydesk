import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { languages } from './constants'
import Cookies from 'js-cookie'
import axios from 'axios'

function App() {
	const [currentLang, setCurrentLang] = useState(Cookies.get('i18next'))

	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')

		setCurrentLang(
			languages.find(
				(lang) =>
					lang.country_code === res.data.country_code.toLowerCase()
			)?.code
		)
	}

	useEffect(() => {
		getData()
	}, [])

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
