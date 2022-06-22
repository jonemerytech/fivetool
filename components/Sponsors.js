import React from 'react'

const Sponsors = () => {
  return (
    <section className="bg-darkBlue">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl text-lightBlue">Sponsors</h1>

        <div className="mt-5 p-5 flex flex-col justify-center items-center xl:grid xl:grid-rows-1 xl:grid-flow-col xl:gap-1">
          <div className="bg-lightGray h-16 w-52 mt-2"></div>
          <div className="bg-lightGray h-16 w-52 mt-2"></div>
          <div className="bg-lightGray h-16 w-52 mt-2"></div>
          <div className="bg-lightGray h-16 w-52 mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
