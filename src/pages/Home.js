import Header from '../components/Header'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Statistic from '../components/Statistic'
import Trusted from '../components/Trusted'
import Features from '../components/Features'
import Utilities from '../components/Utilities'
import Community from '../components/Community'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Question from '../components/Question'
import Tutorial from '../components/Tutorial'
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
			<Utilities />
			<Tutorial />
			<Pricing />
			<Community />
			<Question />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
