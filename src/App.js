import { useRef, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { languages } from './constants'
import Cookies from 'js-cookie'
import axios from 'axios'

function App() {
	const currentLang = useRef(
		window.location.pathname.split('/')[1] || Cookies.get('i18next') || 'en'
	)

	const [lang, setLang] = useState('')

	console.log(lang)

	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		console.log(res.data)
		setLang(
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
			<Route
				path='/'
				element={<Navigate to={`/${currentLang.current}`} />}
			/>
			{languages.map((lang, index) => (
				<Route
					path={`/${lang.code}`}
					element={<Home currentLang={lang.code} />}
					key={index}
				/>
			))}
		</Routes>
	)
}

export default App
