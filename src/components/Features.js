import React from 'react'
import { images } from '../constants'
import { useTranslation } from 'react-i18next'

const Features = () => {
	const { t } = useTranslation()

	return (
		<div className='features container' id='solutions'>
			<div className='features__content'>
				{/* map 4 items [1,2,3,4] */}
				{[1, 2, 3, 4].map((item) => (
					<div className='features__item' key={item}>
						<img
							className='features__item-image'
							src={images[`feature${item}`]}
							alt='img'
						/>

						<div className='features__item-title'>
							{t(`features__item-title.${[item]}`)}
						</div>
						<div className='features__item-text'>
							{t(`features__item-text.${[item]}.1`)} <br />
							{t(`features__item-text.${[item]}.2`)} <br />
							{t(`features__item-text.${[item]}.3`)}
						</div>
					</div>
				))}
			</div>
			<div className='features__intro'>
				<div className='features__intro-title'>
					{t('features__intro-title.1')} <br />
					{t('features__intro-title.2')} <br />
					{t('features__intro-title.3')}
				</div>
				<div className='features__intro-button button button--primary button--large'>
					{t('features__intro-button')}
				</div>
			</div>
		</div>
	)
}

export default Features
