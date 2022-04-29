import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.svg'
import DropdownLanguage from './utils/DropdownLanguage/DropdownLanguage'
import { HashLink } from 'react-router-hash-link'

const Header = ({ currentLang }) => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	const handleOffToggleMenu = () => {
		setToggleMenu(false)
	}

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth)
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<div className='header'>
			<div className='container header__container'>
				<div className='header__logo'>
					<img src={Logo} alt='Logo' />
				</div>
				{(toggleMenu || screenWidth > 1024) && (
					<div className='header__menu slide-bottom'>
						<div
							className='header__close'
							onClick={handleOffToggleMenu}
						>
							<i className='fa-solid fa-xmark'></i>
						</div>
						<div className='header__nav'>
							{/* click home, scroll id home */}

							{/* <a
								href='#home'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Home
							</a>
							<a
								href='#solutions'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Solutions
							</a>

							<a
								href='#tutorial'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Tutorial
							</a>
							<a
								href='#pricing'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Pricing
							</a>
							<a
								href='#contact'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Contact
							</a> */}
							<HashLink
								to='#home'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Home
							</HashLink>
							<HashLink
								to='#solutions'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Solutions
							</HashLink>
							<HashLink
								to='#tutorial'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Tutorial
							</HashLink>
							<HashLink
								to='#pricing'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Pricing
							</HashLink>
							<HashLink
								to='#contact'
								className='header__nav-links'
								onClick={handleOffToggleMenu}
							>
								Contact
							</HashLink>
						</div>
						<div className='header__language'>
							<DropdownLanguage currentLang={currentLang} />
						</div>
						{/* <div className='header__buttons'>
						<div className='button button--primary'>
							Start Bussiness Trial
						</div>
						<div className='button button--default'>Downloads</div>
					</div> */}
					</div>
				)}
				<div className='header__bar' onClick={handleToggleMenu}>
					{/* font awesome bar */}
					<i className='fa-solid fa-bars'></i>
				</div>
			</div>
		</div>
	)
}

export default Header
