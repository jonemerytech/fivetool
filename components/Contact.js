import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="bg-lightGray flex flex-col justify-center items-center p-2 xl:h-96">
      <div className="container mx-auto flex flex-col justify-center items-center xl:relative">
        <div className="h-80 w-3/4 p-5 bg-darkBlue rounded flex flex-col justify-center items-center text-center xl:absolute">
          <h1 className="text-1xl text-white xl:text-4xl">
            Need to get in touch?
          </h1>
          <h1 className="text-1xl text-lightBlue xl:text-4xl">
            Feel free to reach out. We&apos;re always listening!
          </h1>
          <div className="text-white flex items-center">
            <Image
              src="/images/email.svg"
              alt="Email Icon"
              height={16}
              width={16}
              className="fill-white"
            />
            <h1 className="text-1xl ml-2">Info@fivetooltournaments.com</h1>
          </div>
          <div className="text-white flex items-center">
            <Image
              src="/images/phone.svg"
              alt="Phone Icon"
              height={16}
              width={16}
            />
            <h1 className="text-1xl ml-2">317-296-5673</h1>
          </div>

          <div className="flex justify-center md:justify-start">
            <Link href="#ourteam">
              <a className="p-3 px-6 pt-2 mt-4 text-white bg-lightBlue rounded baseline">
                Our Team
              </a>
            </Link>
          </div>
        </div>
        <div className="bg-lightBlue rounded xl:h-52 xl:w-52 xl:absolute xl:left-24 xl:-top-24">
          <Image
            src="/images/5TT-02.webp"
            alt="5ToolLogo"
            height={234}
            width={234}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
