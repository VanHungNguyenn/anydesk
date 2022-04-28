import React, { useState, useRef } from 'react'
import { languages } from '../../../constants'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import './dropdownLanguage.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const DropdownLanguage = ({ currentLang }) => {
	const [isOpen, setIsOpen] = useState(false)

	const ref = useRef()
	const { i18n } = useTranslation()

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleChange = (lang) => {
		setIsOpen(false)
		i18n.changeLanguage(lang)
	}

	useOnClickOutside(ref, () => setIsOpen(false))

	return (
		<>
			<div ref={ref} className='dropdown-language'>
				<div
					className='dropdown-language__current'
					onClick={handleClick}
				>
					<div className='dropdown-language-current__block'>
						{/* flags */}
						<div
							className={`dropdown-language-current__flag fi fi-${
								languages.find(
									(lang) => lang.code === currentLang
								).country_code
							}`}
						></div>
						{/* language */}
						<div className='dropdown-language-current__name'>
							{
								languages.find(
									(lang) => lang.code === currentLang
								).name
							}
						</div>
					</div>
					{/* fontawesome arrow */}
					<i className='fas fa-angle-down dropdown-language-current__arrow'></i>
				</div>
				{/* dropdown */}
				{isOpen && (
					<div className='dropdown-language__dropdown'>
						{languages.map((lang, index) => (
							<Link to={`/${lang.code}`} key={index}>
								<div
									className='dropdown-language-dropdown__item'
									value={lang.code}
									onClick={() => handleChange(lang.code)}
								>
									{/* flags */}
									<div
										className={`dropdown-language-dropdown__flag fi fi-${lang.country_code}`}
									></div>
									{/* language */}
									<div className='dropdown-language-dropdown__name'>
										{lang.name}
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default DropdownLanguage
