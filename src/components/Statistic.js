import React from 'react'

const Statistic = () => {
	return (
		<div className='statistic'>
			<div className='container statistic__container'>
				<div className='statistic__list'>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								500+
							</div>
							<div className='statistic__item-content-unit'>
								Million
							</div>
						</div>
						<div className='statistic__item-title'>Downloads</div>
					</div>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								900+
							</div>
							<div className='statistic__item-content-unit'>
								Million
							</div>
						</div>
						<div className='statistic__item-title'>
							Sessions per month
						</div>
					</div>
					<div className='statistic__item'>
						<div className='statistic__item-content'>
							<div className='statistic__item-content-value'>
								50
							</div>
							<div className='statistic__item-content-unit'>
								Million
							</div>
						</div>
						<div className='statistic__item-title'>
							Bridged miles per month
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistic
