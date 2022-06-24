import Image from 'next/image'

const OurTeam = () => {
  return (
    <section className="bg-lightGray h-full">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl text-lightBlue" id="ourteam">
          Our Team
        </h1>

        <div className="flex flex-col justify-center items-center mt-10 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-4">
          <div className="px-3 mb-5 xl:px-8">
            <Image
              src="/images/Tanner.webp"
              alt="Tanner"
              height={192}
              width={192}
              className="rounded"
            />

            <h1 className="text-2xl text-lightBlue mt-2">
              <span className="cursor-pointer">
                <Image
                  src="/images/email.svg"
                  alt="Email Icon"
                  height={16}
                  width={16}
                />
              </span>{' '}
              Tanner
            </h1>

            <p className="text-black text-left mt-2">
              Hi, Im Tanner Reboulet and I grew up in Indianapolis, IN. Playing
              travel baseball was easily one of the best experiences throughout
              my childhood. From playing some of the best teams across the
              country, to playing at some of the best facilities you can name,
              to even playing in front of some of the biggest collegiate scouts.
              Being in that dugout, and being able to compete with my teammates
              for an opportunity to play at the next level… Those memories and
              experiences with my teammates will last a lifetime. By creating
              5-Tool Tournaments, we’re determined to get today’s kids that same
              opportunity and experience. We are excited to continue our love
              for the game of baseball with 5-Tool Tournaments.{' '}
            </p>
          </div>

          <div className="px-3 mb-5 xl:px-8">
            <Image
              src="/images/Brandon.webp"
              alt="Brandon"
              height={192}
              width={192}
              className="rounded"
            />

            <h1 className="text-2xl text-lightBlue mt-2">
              <span className="cursor-pointer">
                <Image
                  src="/images/email.svg"
                  alt="Email Icon"
                  height={16}
                  width={16}
                  className="fill-white"
                />
              </span>{' '}
              Brandon
            </h1>

            <p className="text-black mt-2">
              Hi, my name is Brandon Capps. I am a Greenville native and love
              the game of Baseball. I currently reside north of Travelers Rest
              with my fiancé and two dogs. I began to love this game at a young
              age; by 4 I was picking up a ball and a bat. I worked my way to a
              Little League state championship, a few high school region
              championships, and ended up with a few accolades. Still wanting to
              continue my love for the game, I began coaching at a small
              baseball academy in Spartanburg, SC. As a coach I have won some
              coaching championships with my 16u team. My passion for the game
              has brought a lot of amazing memories that I will forever cherish.
              With 5-Tool I hope to continue those memories. We will strive to
              be the best. With that being said I am happy to be apart of the
              5-Tool team.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
