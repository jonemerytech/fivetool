import Image from 'next/image'
import Link from 'next/link'

const TournamentsSection = ({ tournaments }) => {
  return (
    <section className="h-full bg-[url('/images/homeplate.webp')] bg-cover bg-center relative z-0">
      <div className="absolute h-full w-full top-0 left-0 bg-gray-50 opacity-60 z-0"></div>
      <div className="container mx-auto p-10" id="tournaments">
        <h1 className="absolute text-4xl text-lightBlue  z-10">Tournaments</h1>

        <div className="mt-20 flex flex-col justify-center items-center z-10 top-1/4 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-2">
          {tournaments?.map((tournament) => {
            if (tournament.metadata.DisplayOnWebsite === 'true') {
              return (
                <div
                  className="w-[22rem] h-[24rem] bg-lightGray mt-3 opacity-90 flex flex-col justify-center items-center text-center p-5"
                  key={tournament.id}
                >
                  <img
                    src={tournament.images[0] || '/images/5TT-02.webp'}
                    height={90}
                    width={90}
                    alt="Tournent Logo"
                    className="rounded-full"
                  />

                  <h1 className="text-1xl text-black font-bold mt-5">
                    {tournament.name}
                  </h1>

                  <p className="text-lg text-black mt-3">
                    {tournament.metadata.AgeGroup}
                  </p>

                  <p className="text-lg text-black mt-3">
                    {tournament.metadata.Dates}
                  </p>

                  <Link href={`/tournament/${tournament.id}`}>
                    <a
                      className="p-3 px-6 pt-2 mt-4 text-white bg-lightBlue rounded baseline"
                      target="_blank"
                    >
                      More Info
                    </a>
                  </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default TournamentsSection
