import React from 'react'
import { images } from '../constants'
import { useTranslation } from 'react-i18next'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import {
	facebookLink,
	twitterLink,
	telegramLink,
	youtubeLink,
} from '../constants/link'

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
				</div>
			</div>
			<div className='container sign'>
				<div className='sign__copyrights'>
					© 2022 MultiViewer Software GmbH
				</div>
				<div className='sign__social'>
					<a
						href={facebookLink}
						target='_blank'
						rel='noopener noreferrer'
						className='sign__social-link'
					>
						<i className='fa-brands fa-facebook-f'></i>
					</a>
					<a
						href={twitterLink}
						target='_blank'
						rel='noopener noreferrer'
						className='sign__social-link'
					>
						<i className='fa-brands fa-twitter'></i>
					</a>
					<a
						href={telegramLink}
						target='_blank'
						rel='noopener noreferrer'
						className='sign__social-link'
					>
						<i className='fa-brands fa-telegram'></i>
					</a>
					<a
						href={youtubeLink}
						target='_blank'
						rel='noopener noreferrer'
						className='sign__social-link'
					>
						<i className='fa-brands fa-youtube'></i>
					</a>
				</div>
			</div>
			<MessengerCustomerChat
				pageId='109906745066549'
				appId='1153399772117086'
			/>
		</div>
	)
}

export default Footer
