import React from 'react'
import footerLogo from '../images/footerLogo.svg'
import DropdownLanguage from './utils/DropdownLanguage/DropdownLanguage'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container container'>
				<div className='footer__left'>
					<div className='footer__logo'>
						<img src={footerLogo} alt='Logo' />
					</div>
					<div className='footer__language'>
						<DropdownLanguage />
					</div>
				</div>
				<div className='footer__right'>
					<div className='footer__menu-item'>
						{/* <div className='footer__menu-item__title'>
							Why AnyDesk
						</div> */}
						<div className='footer__menu-item__list'>
							<div className='footer__menu-item__link'>Home</div>
							<div className='footer__menu-item__link'>
								Solutions
							</div>
							<div className='footer__menu-item__link'>
								Tutorial
							</div>
							<div className='footer__menu-item__link'>
								Pricing
							</div>
							<div className='footer__menu-item__link'>
								Contact
							</div>
						</div>
					</div>
					{/* <div className='footer__menu-item'>
						<div className='footer__menu-item__title'>
							Solutions
						</div>
						<div className='footer__menu-item__list'>
							<div className='footer__menu-item__link'>
								Remote Desktop
							</div>
							<div className='footer__menu-item__link'>
								Remote Support
							</div>
							<div className='footer__menu-item__link'>
								Remote Work
							</div>
							<div className='footer__menu-item__link'>
								Remote Access
							</div>
							<div className='footer__menu-item__link'>
								Pricing
							</div>
							<div className='footer__menu-item__link'>
								Downloads
							</div>
						</div>
					</div>
					<div className='footer__menu-item'>
						<div className='footer__menu-item__title'>Service</div>
						<div className='footer__menu-item__list'>
							<div className='footer__menu-item__link'>
								AnyDesk Services
							</div>
							<div className='footer__menu-item__link'>
								Customer Success
							</div>
							<div className='footer__menu-item__link'>
								Help Center
							</div>
							<div className='footer__menu-item__link'>
								Abuse Precention
							</div>
						</div>
					</div>
					<div className='footer__menu-item'>
						<div className='footer__menu-item__title'>Company</div>
						<div className='footer__menu-item__list'>
							<div className='footer__menu-item__link'>
								About Us
							</div>
							<div className='footer__menu-item__link'>
								Contact
							</div>
							<div className='footer__menu-item__link'>
								Career
							</div>
							<div className='footer__menu-item__link'>
								Partners
							</div>
							<div className='footer__menu-item__link'>Blog</div>
						</div>
					</div> */}
				</div>
			</div>
			<div className='container sign'>
				<div className='sign__copyrights'>
					© 2022 AnyDesk Software GmbH
				</div>
				<div className='sign__social'>
					<div className='sign__social-link'>
						<i className='fa-brands fa-facebook-f'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-twitter'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-telegram'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-youtube'></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
