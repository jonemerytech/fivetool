import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import OurTeam from '../components/OurTeam'
import Sponsors from '../components/Sponsors'
import TournamentsSection from '../components/TournamentsSection'

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Sponsors />
      <Contact />
      <TournamentsSection />
      <OurTeam />
      <Footer />
    </>
  )
}

export default Home
