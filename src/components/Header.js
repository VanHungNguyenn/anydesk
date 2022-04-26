import React from 'react'
import Logo from '../images/logo.svg'

const Header = () => {
	return (
		<div className='header'>
			<div className='container header__container'>
				<div className='header__logo'>
					<img src={Logo} alt='Logo' />
				</div>
				<div className='header__menu'>
					<div className='header__nav'>
						<div className='header__nav-links'>Why AnyDesk</div>
						<div className='header__nav-links'>Solutions</div>
						<div className='header__nav-links'>Pricing</div>
						<div className='header__nav-links'>Services</div>
						<div className='header__nav-links'>Company</div>
					</div>
					<div className='header__buttons'>
						<div className='button button--primary'>
							Start Bussiness Trial
						</div>
						<div className='button button--default'>Downloads</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
