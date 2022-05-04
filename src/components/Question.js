import React from 'react'
import Accordion from './utils/Accordion/Accordion'
import { accordionData } from '../constants'

const Question = () => {
	return (
		<div className='question container'>
			<div className='question__title'>All you need to know</div>
			<div className='question__accordion'>
				<Accordion data={accordionData} />
			</div>
		</div>
	)
}

export default Question
