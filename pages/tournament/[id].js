import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Tournament = ({ tournament }) => {
  return (
    <>
      <Head>
        <title>{tournament.name} | 5-Tool Tournaments</title>
        <link rel="icon" type="image/png" href="/images/5TT-02.webp" />
      </Head>
      <section className="bg-[url('/images/homeplate.webp')] bg-cover bg-center relative z-0">
        <div className="flex justify-center items-center">
          <nav className="hidden left-[15%] w-[35rem] items-center justify-between z-10 xl:flex">
            <div className="pt-2">
              <img
                src="/images/5TT-02.webp"
                alt="5 Tool Logo"
                height={50}
                width={50}
              />
            </div>
            <div className="space-x-6">
              <Link href="/">
                <a className="text-black hover:text-lightBlue">Home</a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="absolute h-full w-full top-0 left-0 bg-gray-50 opacity-60 z-0"></div>
        <div className="container mx-auto flex justify-center items-center p-1 mt-[5rem] xl:mt-[3rem]">
          <div className="w-[400px] h-[937px] bg-lightGray mt-3 opacity-90 relative md:w-[700px] px-4 text-center xl:w-[1134px]  xl:mt-15">
            <div className="absolute -top-[75px] left-[33%] md:left-[41%]">
              <img
                src={tournament.images[0] || '/images/5TT-02.webp'}
                alt="5 Tool Logo"
                height={150}
                width={150}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-24 xl:grid xl:grid-cols-2 xl:grid-rows-1">
              <div>
                <ul className="list-none">
                  <li className="text-2xl font-bold">{tournament.name}</li>
                  <li className="text-1xl mt-2">{tournament.metadata.Dates}</li>
                  <li className="text-1xl mt-2">
                    {tournament.metadata.Fields}
                  </li>
                  <li className="text-1xl mt-2">
                    {tournament.metadata.AgeGroup}
                  </li>
                  <li className="text-1xl mt-2">{tournament.metadata.Price}</li>
                  <li className="mt-2">
                    <Link
                      href={`https://tourneymachine.com/Public/Results/Tournament.aspx?IDTournament=${tournament.metadata.URL}`}
                    >
                      <a className="p-3 px-6 pt-2 mt-4 text-white bg-lightBlue rounded baseline">
                        Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-1xl font-bold mt-4">
                  ** Teams must email a full roster to
                  info@fivetooltournaments.com ** Final payments are to be
                  mailed to 13355 Hockley Drive, Fishers IN 46037 **
                </h1>
              </div>
            </div>

            {/* <hr className="text-black mt-10" />

          <h1 className="text-2xl font-bold mt-3">Registered Teams</h1> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tournament

export async function getServerSideProps({ params }) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY_PROD}`,
  }

  const url = process.env.BASE_URL + `/${params.id}`

  const tournament = await axios.get(url, { headers: headers })

  return {
    props: {
      tournament: tournament.data,
    },
  }
}

export async function getServerSidePaths() {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY_PROD}`,
  }

  const url = process.env.BASE_URL

  const tournaments = await axios.get(url, { headers: headers })

  const paths = tournaments.data.data.map((tournament) => {
    return { params: { id: tournament.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}
