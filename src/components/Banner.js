import React from 'react'
import { useTranslation } from 'react-i18next'

const Banner = () => {
	const { t } = useTranslation()

	return (
		<div className='banner container' id='home'>
			<h1 className='banner__title'>
				{t('banner__title.access')}{' '}
				<span>{t('banner__title.now')}</span>
			</h1>
			<h4 className='banner__subtitle'>{t('banner__subtitle')}.</h4>
			<div className='banner__button button button--primary button--large'>
				{t('banner__button')}
			</div>
			<div className='fs-5 mb-4'>Windows (3.8MB)</div>
			<div className='fs-5 mb-5'>{t('banner__text')}</div>
		</div>
	)
}

export default Banner
