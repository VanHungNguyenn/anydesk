import React from 'react'

const Tutorial = () => {
	return (
		<div className='tutorial container'>
			<div className='tutorial__video'>
				<iframe
					width='100%'
					height='400'
					src='https://www.youtube.com/embed/yrPIlWfM75o'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				></iframe>
			</div>
			<div className='tutorial__content'>
				<div className='tutorial__content-subtitle'>
					Tutorial: AnyDesk in a Nutshell
				</div>
				<h1 className='tutorial__content-title'>
					See AnyDesk's Remote Desktop in Action
				</h1>
			</div>
		</div>
	)
}

export default Tutorial
