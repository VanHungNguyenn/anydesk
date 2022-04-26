import React from 'react'

const Pricing = () => {
	return (
		<div className='pricing container'>
			<div className='pricing__title'>The Right Solution for You</div>
			<div className='pricing__subtitle'>
				Free 14 day trial for professional use.
			</div>
			<div className='button button--large button--primary text-center'>
				Start Business Trial
			</div>
			<div className='pricing__list'>
				<div className='pricing__item'>
					<div className='pricing__item-name'>Essentials</div>
					<div className='pricing__item-price'>$9.90</div>
					<div className='pricing__item-subprice'>
						per month (billed annually)
					</div>
					<p className='pricing__item-text'>
						Basic features for <br />
						remote working.
					</p>
					<div className='button button--large button--default button--100'>
						Order Now
					</div>
					<div className='pricing__item-includes'>
						Single-user license, includes
					</div>
					<ul className='pricing__item-features'>
						<li>Unlimited devices to connect to (attended)</li>
						<li>1 managed device (unattended)</li>
						<li>1 licensed user = 1 device to connect from</li>
						<li>Mobile Device Support</li>
						<li>Access to Help Center</li>
					</ul>
				</div>
				<div className='pricing__item'>
					<div className='pricing__item-name'>Performance</div>
					<div className='pricing__item-price'>$19.90</div>
					<div className='pricing__item-subprice'>
						per month and user (billed annually)
					</div>
					<p className='pricing__item-text'>
						Fast and reliable.
						<br />
						Full set of business features.
					</p>
					<div className='button button--large button--primary button--100'>
						Order Now
					</div>
					<div className='pricing__item-includes'>
						Multi-user license, includes
					</div>
					<ul className='pricing__item-features'>
						<li>Unlimited devices to connect to (attended)</li>
						<li>Up to 3000 managed devices (unattended)</li>
						<li>Connect from up to 3 devices per licensed user</li>
						<li>Mobile Device Support</li>
						<li>Wake-on-Lan</li>
						<li>Session Recording</li>
						<li>Advanced security options</li>
						<li>Customer Support</li>
					</ul>
				</div>
				<div className='pricing__item'>
					<div className='pricing__item-name'>Enterprise</div>
					<div className='pricing__item-price'>$29.90</div>
					<div className='pricing__item-subprice'>
						per month and user (billed annually)
					</div>
					<p className='pricing__item-text'>
						Fully customizable. Mass Deployment. <br />
						In the Cloud or On-Premises.
					</p>
					<div className='button button--large button--default button--100'>
						Contact Us
					</div>
					<div className='pricing__item-includes'>
						Multi-user license, includes
					</div>
					<ul className='pricing__item-features'>
						<li>Unlimited devices to connect to (attended)</li>
						<li>Unlimited managed devices (unattended)</li>
						<li>Connect from up to 3 devices per licensed user</li>
						<li>Mobile Device Support</li>
						<li>Unlimited concurrent sessions</li>
						<li>Customization and branding</li>
						<li>Command line interface</li>
						<li>MSI deployment</li>
						<li>Group Policies</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Pricing
