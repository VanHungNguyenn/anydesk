import React from 'react'
import ReactDOM from 'react-dom/client'
import 'flag-icons/css/flag-icons.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
