import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Statistic from '../components/Statistic'
import Trusted from '../components/Trusted'
import Features from '../components/Features'
import Community from '../components/Community'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Question from '../components/Question'
import Review from '../components/Review'

const Home = ({ currentLang }) => {
	return (
		<>
			<Header currentLang={currentLang} />
			<Banner />
			<Intro />
			<Trusted />
			<Statistic />
			<Features />
			<Review />
			<Pricing />
			<Community />
			<Question />
			<Footer />
		</>
	)
}

export default Home
