import React from 'react'
import { useTranslation } from 'react-i18next'

const Community = () => {
	const { t } = useTranslation()

	return (
		<div className='community container' id='contact'>
			<div className='community__title'>{t('community__title')}</div>
			<div className='community__list'>
				<div className='community__item'>
					{/* fontawesome facebook */}
					<i className='fa-brands fa-facebook-f'></i>
					<div className='community__item-title'>Facebook</div>
				</div>
				<div className='community__item'>
					{/* fontawesome twitter */}
					<i className='fa-brands fa-twitter'></i>
					<div className='community__item-title'>Twitter</div>
				</div>
				<div className='community__item'>
					{/* fontawesome telegram */}
					<i className='fa-brands fa-telegram'></i>
					<div className='community__item-title'>Telegram</div>
				</div>
				<div className='community__item'>
					{/* fontawesome youtube */}
					<i className='fa-brands fa-youtube'></i>
					<div className='community__item-title'>Youtube</div>
				</div>
			</div>
		</div>
	)
}

export default Community
