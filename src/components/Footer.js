import React from 'react'
import { images } from '../constants'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className='footer'>
			<div className='footer__container container'>
				<div className='footer__left'>
					<div className='footer__logo'>
						<img src={images.footerLogo} alt='Logo' />
					</div>
				</div>
				<div className='footer__right'>
					<div className='footer__menu-item'>
						<div className='footer__menu-item__list'>
							<a href='#home' className='footer__menu-item__link'>
								{t('header__nav-links.home')}
							</a>
							<a
								href='#solutions'
								className='footer__menu-item__link'
							>
								{t('header__nav-links.solutions')}
							</a>
							<a
								href='#reviews'
								className='footer__menu-item__link'
							>
								{t('header__nav-links.reviews')}
							</a>
							<a
								href='#pricing'
								className='footer__menu-item__link'
							>
								{t('header__nav-links.pricing')}
							</a>
							<a
								href='#contact'
								className='footer__menu-item__link'
							>
								{t('header__nav-links.contact')}
							</a>
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
								MultiViewer Services
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
					© 2022 MultiViewer Software GmbH
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
