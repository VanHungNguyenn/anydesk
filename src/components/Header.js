import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

const Header = () => {
	return (
		<div className='header'>
			<div className='container header__container'>
				<div className='header__logo'>
					<Link to='/'>
						<img src={Logo} alt='Logo' />
					</Link>
				</div>
				<div className='header__menu'>
					<div className='header__nav'>
						<Link to='/' className='header__nav-links'>
							Why AnyDesk
						</Link>
						<Link to='/' className='header__nav-links'>
							Solutions
						</Link>
						<Link to='/' className='header__nav-links'>
							Pricing
						</Link>
						<Link to='/' className='header__nav-links'>
							Services
						</Link>
						<Link to='/' className='header__nav-links'>
							Company
						</Link>
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
