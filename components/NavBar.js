import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="absolute hidden left-[15%] w-[35rem] items-center justify-between z-10 xl:flex">
      <div className="pt-2">
        <Image
          src="/images/5TT-02.webp"
          alt="5 Tool Logo"
          height={50}
          width={50}
        />
      </div>
      <div className="space-x-6">
        <Link href="/">
          <a className="text-lightGray hover:text-lightBlue">Home</a>
        </Link>
        <Link href="#about">
          <a className="text-lightGray hover:text-lightBlue">About</a>
        </Link>
        <Link href="#contact">
          <a className="text-lightGray hover:text-lightBlue">Contact</a>
        </Link>
        <Link href="#ourteam">
          <a className="text-lightGray hover:text-lightBlue">Our Team</a>
        </Link>
        <Link href="#poweredby">
          <a className="text-lightGray hover:text-lightBlue">Powered By</a>
        </Link>
        <Link href="#tournaments">
          <a href="#tournamens" className="text-lightGray hover:text-lightBlue">
            Tournaments
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
