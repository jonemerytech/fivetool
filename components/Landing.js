import Link from 'next/link'
import NavBar from './NavBar'

const Landing = () => {
  return (
    <section className="h-screen flex relative">
      <NavBar />
      <div className="flex flex-1 flex-col p-8 bg-darkBlue justify-center items-center">
        <h1 className="text-4xl text-white xl:text-6xl">
          <span className="text-lightBlue">5</span> - Tool Tournaments
        </h1>

        <figure>
          <blockquote cite="https://mlb.com">
            <p className="text-1xl mt-8 text-white md:px-14 xl:px-48">
              <span className="text-lightBlue">|</span> &quot;Scouts have long
              graded position players on five tools that are central to success
              in the game: hitting, hitting for power, running, fielding and
              throwing. The so-called “five-tool player” is a special breed, as
              those who truly rate above average in each category are extremely
              rare.&quot; <cite>- MLB.com</cite>
            </p>
          </blockquote>
        </figure>
        <div className="flex justify-center mt-8 md:justify-start">
          <Link href="#ourteam">
            <a className="p-3 px-6 pt-2 mt-4 text-white bg-lightBlue rounded baseline">
              Our Team
            </a>
          </Link>
        </div>
      </div>
      <div className="img hidden md:flex md:flex-1"></div>
    </section>
  )
}

export default Landing
