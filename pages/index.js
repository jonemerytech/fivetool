import Head from 'next/head';
// Components
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
    <Head>
      <title>5-Tool Tournaments</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="Description"
      content="Scouts have long graded position players on five tools that are central to success in the game: hitting, hitting for power, running, fielding and throwing. The so-called “five-tool player” is a special breed, as those who truly rate above average in each category are extremely rare."
    />
    <meta
      name="Keywords"
      content="5-tool, 5-tool tournaments, five tool player"
    />
    <meta name="google-site-verification" content="ROsKPe2ZGr1A_4-hdmIBSaQsFaXrL_gX9Z5-Y4V0404" />
    <meta name="Author" content="Jonathan Emery" />
    <link rel="icon" type="image/png" href="/images/5TT-02.webp" />
    </Head>
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
