import React, { useState } from 'react'

const AccordionItem = ({ item }) => {
	const [active, setActive] = useState(false)

	const handleAccordion = () => {
		setActive(!active)
	}

	return (
		<div
			className={`accordion__item ${
				active ? 'accordion__item--active' : ''
			}`}
		>
			<div className='accordion__item-title' onClick={handleAccordion}>
				{item.question}
				<i className='fas fa-chevron-down'></i>
			</div>
			<div className='accordion__item-content'>{item.answer}</div>
		</div>
	)
}

export default AccordionItem
