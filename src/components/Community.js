import React from 'react'

const Community = () => {
	return (
		<div className='community container' id='contact'>
			<div className='community__title'>Join our Community</div>
			<div className='community__list'>
				{/* <div className='community__item'>
					<img src={images.instagram} alt='' />
					<div className='community__item-title'>Instagram</div>
				</div>
				<div className='community__item'>
					<img src={images.facebook} alt='' />
					<div className='community__item-title'>Facebook</div>
				</div>
				<div className='community__item'>
					<img src={images.linkedln} alt='' />
					<div className='community__item-title'>LinkedIn</div>
				</div>
				<div className='community__item'>
					<img src={images.youtube} alt='' />
					<div className='community__item-title'>Youtube</div>
				</div>
				<div className='community__item'>
					<img src={images.reddit} alt='' />
					<div className='community__item-title'>Reddit</div>
				</div>
				<div className='community__item'>
					<img src={images.twitter} alt='' />
					<div className='community__item-title'>Twitter</div>
				</div> */}
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
