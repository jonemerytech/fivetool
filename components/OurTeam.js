import Image from 'next/image'

const OurTeam = () => {
  return (
    <section className="bg-lightGray h-full xl:h-screen">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl text-lightBlue">Our Team</h1>

        <div className="flex flex-col justify-center items-center mt-10">
          <img src="/images/Tanner.webp" alt="Tanner" className="h-48 w-48" />
        </div>
      </div>
    </section>
  )
}

export default OurTeam
