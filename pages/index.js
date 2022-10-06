import Head from 'next/head'
// Components
import About from '../components/About'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import OurTeam from '../components/OurTeam'
import Sponsors from '../components/Sponsors'
import TournamentsSection from '../components/TournamentsSection'

import axios from 'axios'
import Banner from '../components/Banner'

const Home = ({ tournaments }) => {
  return (
    <>
      <Head>
        <title>5-Tool Tournaments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Description"
          content="5-Tool Tournaments is a baseball tournament company that offers a variety of baseball tournaments for the community."
        />
        <meta
          name="Keywords"
          content="5-tool, 5-tool tournaments, five tool player"
        />
        <meta
          name="google-site-verification"
          content="ROsKPe2ZGr1A_4-hdmIBSaQsFaXrL_gX9Z5-Y4V0404"
        />
        <meta name="Author" content="Jonathan Emery" />
        <link rel="icon" type="image/png" href="/images/5TT-02.webp" />
      </Head>
      <Landing />
      <About />
      <Sponsors />
      <Contact />
      <TournamentsSection tournaments={tournaments} />
      <Banner />
      <OurTeam />
    </>
  )
}

export async function getServerSideProps() {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY_PROD}`,
  }

  const url = process.env.BASE_URL

  const tournaments = await axios.get(url, { headers: headers })

  return {
    props: {
      tournaments: tournaments.data.data,
    },
  }
}

export default Home
