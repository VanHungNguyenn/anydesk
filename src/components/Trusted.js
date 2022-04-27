import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { images } from '../constants'

const imgs = [
	images.amedes,
	images.areandina,
	images.medizinischeslabor,
	images.schleich,
	images.spidercam,
	images.sunchemical,
	images.thales,
	images.wanzl,
]

const Trusted = () => {
	return (
		<div className='container trusted'>
			<div className='trusted__title'>
				Trusted by over 100,000 Customers
			</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={5}
				loop={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
				}}
			>
				{imgs.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img} alt='img brand' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Trusted
