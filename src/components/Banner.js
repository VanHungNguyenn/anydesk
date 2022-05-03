import React from 'react'
// import { useTranslation } from 'react-i18next'

const Banner = () => {
	// const { t, i18n } = useTranslation()

	return (
		<div className='banner container' id='home'>
			<h1 className='banner__title'>
				Access. <span>Now.</span>
			</h1>
			<h4 className='banner__subtitle'>
				Access any device at any time. From anywhere. Always secure and
				fast.
			</h4>
			<div className='banner__button button button--primary button--large'>
				Download Now
			</div>
			<div className='fs-5 mb-4'>Windows (3.8MB)</div>
			<div className='fs-5'>MutilViewer is free for personal use.</div>
			<div className='fs-5 mb-5'>
				Professional users need a license. Get started with a free 14
				day trial now.
			</div>
		</div>
	)
}

export default Banner
