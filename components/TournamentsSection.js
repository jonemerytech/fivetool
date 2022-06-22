import React from 'react'

const TournamentsSection = () => {
  return (
    <section className="h-full bg-[url('/images/homeplate.webp')] bg-cover bg-center object-cover relative z-0 xl:h-screen">
      <div className="absolute h-full w-full top-0 left-0 bg-gray-50 opacity-30 z-0 xl:h-screen"></div>
      <div className="container mx-auto p-10">
        <h1 className="absolute text-4xl text-lightBlue z-10">Tournaments</h1>

        <div className="mt-20 flex flex-col justify-center items-center z-10 top-1/4 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-2">
          <div className="w-52 h-72 bg-lightGray mt-3"></div>
          <div className="w-52 h-72 bg-lightGray mt-3"></div>
          <div className="w-52 h-72 bg-lightGray mt-3"></div>
          <div className="w-52 h-72 bg-lightGray mt-3"></div>
        </div>
      </div>
    </section>
  )
}

export default TournamentsSection
