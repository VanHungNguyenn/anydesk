import React from 'react'
import { images } from '../constants'

const Features = () => {
	return (
		<div className='features container'>
			<div className='features__content'>
				<div className='features__item'>
					<img
						className='features__item-image'
						src={images.feature1}
						alt='img'
					/>
					<div className='features__item-title'>Blazing fast</div>
					<div className='features__item-text'>
						Minimum latency via <br />
						our own DeskRT codec, <br />
						Frame rates of 60 fps.
					</div>
					<div className='features__item-link'>Learn More</div>
				</div>
				<div className='features__item'>
					<img
						className='features__item-image'
						src={images.feature2}
						alt='img'
					/>
					<div className='features__item-title'>Lightweight</div>
					<div className='features__item-text'>
						Download 3 MB. <br />
						Start App. <br />
						Done.
					</div>
					<div className='features__item-link'>Download Now</div>
				</div>
				<div className='features__item'>
					<img
						className='features__item-image'
						src={images.feature3}
						alt='img'
					/>
					<div className='features__item-title'>Secure</div>
					<div className='features__item-text'>
						Military-grade TLS 1.2 security, <br />
						256-bit AES <br />
						Transport Encryption
					</div>
					<div className='features__item-link'>Learn More</div>
				</div>
				<div className='features__item'>
					<img
						className='features__item-image'
						src={images.feature4}
						alt='img'
					/>
					<div className='features__item-title'>Everywhere</div>
					<div className='features__item-text'>
						Works on Windows, <br />
						macOS, iOS, Android, <br />
						Linux, Raspberry Pi
					</div>
					<div className='features__item-link'>
						Find Your Platform
					</div>
				</div>
			</div>
			<div className='features__intro'>
				<div className='features__intro-title'>
					Why 500+ <br />
					Million Users <br />
					love AnyDesk
				</div>
				<div className='button button--primary button--large'>
					Discover Case Studies
				</div>
			</div>
		</div>
	)
}

export default Features
