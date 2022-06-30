import Image from 'next/image'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="bg-darkBlue p-10">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg text-lightGray">Company</h1>
            <ul className="list-none text-lightBlue">
              <Link href="/">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  About
                </li>
              </Link>

              <Link href="#poweredby">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Powered By
                </li>
              </Link>
              <Link href="#tournaments">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Tournaments
                </li>
              </Link>

              <Link href="mailto:Info@fivetooltournaments.com?subject=Sponsor">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Want to sponsor an event?
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-lg text-lightGray">Support</h1>
            <ul className="list-none text-lightBlue">
              <Link href="#contact">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Contact
                </li>
              </Link>
              <Link href="#ourteam">
                <li className="hover:cursor-pointer hover:text-lightGray">
                  Our Team
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-lg text-lightGray">Powered By</h1>
            <div className="w-24 h-24 bg-lightGray">
              <Link href="https://www.figureitoutbaseball.com/en/">
                <a target="_blank">
                  <Image
                    src="/images/fiobsponsor.jpg"
                    alt="Sponsor 1"
                    height={96}
                    width={96}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* <hr className="text-lightGray mt-7" />

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-1xl text-lightGray uppercase mt-5 text-center">
              Subscribe to our newsletter
            </h1>
            <h1 className="text-1xl text-lightBlue mt-3 text-center">
              The latest events and updates sent to your inbox
            </h1>
          </div>

          <div className="xl:flex xl:items-center xl:justify-center">
            <input
              className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm xl:mr-2"
              placeholder="Email Address..."
              type="text"
              name="search"
            />

            <div className="flex justify-center mt-2 md:justify-start xl:mt-5">
              <Link href="#ourteam">
                <a className="p-3 px-6 pt-2 text-white bg-lightBlue rounded baseline">
                  Subscribe
                </a>
              </Link>
            </div>
          </div>
        </div> */}

        <hr className="text-lightGray mt-7" />

        <div className="flex flex-col mt-7 text-lightBlue">
          <div className="flex justify-between">
            <Link href="https://twitter.com/5ToolTourneys">
              <a target="_blank" rel="noopener noreferrer">
                <BsTwitter />
              </a>
            </Link>
            <Link href="https://www.facebook.com/fivetooltournaments/">
              <a target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/fivetooltournaments/">
              <a target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </Link>
          </div>

          <div className="mt-7 text-center">&copy; 5-Tool Tournaments 2022</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
