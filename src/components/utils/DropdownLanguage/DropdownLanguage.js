import React, { useState, useRef } from 'react'
import { languages } from '../../../constants'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import './dropdownLanguage.css'

const DropdownLanguage = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [language, setLanguage] = useState('en')
	const ref = useRef()

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleChange = (lang) => {
		setLanguage(lang)
		setIsOpen(false)
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
								languages.find((lang) => lang.code === language)
									.country_code
							}`}
						></div>
						{/* language */}
						<div className='dropdown-language-current__name'>
							{
								languages.find((lang) => lang.code === language)
									.name
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
							<div
								className='dropdown-language-dropdown__item'
								key={index}
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
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default DropdownLanguage
