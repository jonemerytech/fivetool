import { useState } from 'react'
import Image from 'next/image'
import { GoGrabber } from 'react-icons/go'
import Link from 'next/link'
import React from 'react'

function MobileNav() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    console.log('clicked')
    setActive(!active)
  }
  return (
    <nav className="xl:hidden flex items-center flex-wrap bg-lightGray p-1 ">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <Image
            height={50}
            width={50}
            src="/images/5TT-02.webp"
            alt="5 Tool Logo"
          />
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-lightBlue rounded lg:hidden  ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <GoGrabber className="h-10 w-10" />
      </button>
      <div
        className={
          active
            ? 'w-full lg:inline-flex lg:flex-grow lg:w-auto'
            : 'hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'
        }
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue ">
              Home
            </a>
          </Link>
          <Link href="#about">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue">
              About
            </a>
          </Link>
          <Link href="#contact">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue">
              Contact
            </a>
          </Link>
          <Link href="#ourteam">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue">
              Our Team
            </a>
          </Link>
          <Link href="#poweredby">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue">
              Powered By
            </a>
          </Link>
          <Link href="#tournaments">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-darkBlue hover:text-lightBlue">
              Tournaments
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
