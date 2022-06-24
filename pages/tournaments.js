import Link from 'next/link'
import Image from 'next/image'

const tournaments = () => {
  return (
    <section className="h-[800px]  bg-[url('/images/homeplate.webp')] bg-cover bg-center relative z-0 xl:h-screen">
      <div className="flex justify-center items-center">
        <nav className="hidden left-[15%] w-[35rem] items-center justify-between z-10 xl:flex">
          <div className="pt-2">
            <Image
              src="/images/5TT-02.webp"
              alt="5 Tool Logo"
              height={50}
              width={50}
            />
          </div>
          <div className="space-x-6">
            <Link href="#about">
              <a className="text-black hover:text-lightBlue">About</a>
            </Link>
            <Link href="#contact">
              <a className="text-black hover:text-lightBlue">Contact</a>
            </Link>
            <Link href="#ourteam">
              <a className="text-black hover:text-lightBlue">Our Team</a>
            </Link>
            <Link href="#ourteam">
              <a className="text-black hover:text-lightBlue">Sponsors</a>
            </Link>
            <Link href="#tournamens">
              <a href="#tournamens" className="text-black hover:text-lightBlue">
                Tournaments
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-gray-50 opacity-60 z-0"></div>
      <div className="container mx-auto flex justify-center items-center mt-[5rem] xl:mt-[3rem]">
        <div className="w-[400px] h-[700px] bg-lightGray mt-3 opacity-90 relative md:w-[700px] xl:h-[800px] xl:mt-15">
          <div className="absolute -top-[75px] left-[33%] md:left-[41%]">
            <Image
              src="/images/5TT-02.webp"
              alt="5 Tool Logo"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default tournaments
