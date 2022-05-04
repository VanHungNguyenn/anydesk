import { useTranslation } from 'react-i18next'
import React from 'react'

const Intro = () => {
	const { t } = useTranslation()

	return (
		<div className='intro'>
			<div className='container intro__container'>
				<div className='intro__content'>
					<h4 className='intro__subtitle'>{t('intro__subtitle')}</h4>
					<h1 className='intro__title'>
						<div>{t('intro__title.overcoming')}</div>
						<div>{t('intro__title.distance')}</div>
					</h1>
					<p className='intro__desc'>{t('intro__desc')}</p>
				</div>
			</div>
		</div>
	)
}

export default Intro
