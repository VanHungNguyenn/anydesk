import React from 'react'
import footerLogo from '../images/footerLogo.svg'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container container'>
				<div className='footer__left'>
					<div className='footer__logo'>
						<img src={footerLogo} alt='Logo' />
					</div>
				</div>
				<div className='footer__right'>
					<div className='footer__menu-item'>
						<div className='footer__menu-item__title'>
							Why AnyDesk
						</div>
						<div className='footer__menu-item__list'>
							<div className='footer__menu-item__link'>
								Performance
							</div>
							<div className='footer__menu-item__link'>
								Security
							</div>
							<div className='footer__menu-item__link'>
								All Platforms
							</div>
							<div className='footer__menu-item__link'>
								Customization
							</div>
							<div className='footer__menu-item__link'>
								Case Studies
							</div>
							<div className='footer__menu-item__link'>
								Features
							</div>
						</div>
					</div>
					<div className='footer__menu-item'>
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
					</div>
				</div>
			</div>
			<div className='container sign'>
				<div className='sign__copyrights'>
					© 2022 AnyDesk Software GmbH
				</div>
				<div className='sign__social'>
					<div className='sign__social-link'>
						<i className='fa-brands fa-instagram'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-facebook-f'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-linkedin'></i>
					</div>
					<div className='sign__social-link'>
						<i className='fa-brands fa-youtube'></i>
					</div>

					<div className='sign__social-link'>
						<i className='fa-brands fa-reddit'></i>
					</div>

					<div className='sign__social-link'>
						<i className='fa-brands fa-twitter'></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
