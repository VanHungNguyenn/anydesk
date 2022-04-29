import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { languages } from './constants'
import Cookies from 'js-cookie'
import axios from 'axios'
import PageNotFound from './components/utils/PageNotFound/PageNotFound'

function App() {
	const [currentLang, setCurrentLang] = useState(
		window.location.pathname.split('/')[1] || Cookies.get('i18next')
	)

	console.log('A', currentLang)

	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		console.log(res.data)
		setCurrentLang(
			languages.find(
				(lang) =>
					lang.country_code === res.data.country_code.toLowerCase()
			)?.code || 'en'
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
					<Route path='*' element={<PageNotFound />} />
				</>
			)}
		</Routes>
	)
}

export default App
