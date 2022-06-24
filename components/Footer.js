import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="bg-darkBlue p-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 gird-row-1 gap-4 justify-center items-center">
          <div>
            <h1 className="text-lg text-lightGray">Company</h1>
            <ul className="list-none text-lightBlue">
              <li className="hover:cursor-pointer hover:text-lightGray">
                Home
              </li>
              <li className="hover:cursor-pointer hover:text-lightGray">
                About
              </li>
              <li className="hover:cursor-pointer hover:text-lightGray">
                Tournaments
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg text-lightGray">Support</h1>
            <ul className="list-none text-lightBlue">
              <li className="hover:cursor-pointer hover:text-lightGray">
                Contact Us
              </li>
              <li className="hover:cursor-pointer hover:text-lightGray">
                Our Team
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-lightGray mt-7" />

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
        </div>

        <hr className="text-lightGray mt-7" />

        <div className="flex flex-col mt-7 text-lightBlue">
          <div className="flex justify-between">
            <Link href="#ourteam">
              <BsTwitter />
            </Link>
            <Link href="#ourteam">
              <BsFacebook />
            </Link>
            <Link href="#ourteam">
              <BsInstagram />
            </Link>
          </div>

          <div className="mt-7 text-center">&copy; 5-Tool Tournaments 2022</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
