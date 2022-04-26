import React from 'react'

const Banner = () => {
	return (
		<div className='banner container'>
			<h1 className='banner__title'>
				Access. <span>Now.</span>
			</h1>
			<h4 className='banner__subtitle'>
				Access any device at any time. From anywhere. Always secure and
				fast.
			</h4>
			<div className='button button--primary button--large'>
				Download Now
			</div>
			<div className='fs-5 mb-4'>Windows (3.8MB)</div>
			<div className='fs-5'>AnyDesk is free for personal use.</div>
			<div className='fs-5 mb-5'>
				Professional users need a license. Get started with a free 14
				day trial now.
			</div>
			<div className='banner__buttons'>
				<div className='button button--default'>
					Start Business Trial
				</div>
				<div>
					<div className='button button--default'>Order Now</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
