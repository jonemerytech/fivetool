import Image from 'next/image'
import Link from 'next/link'

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

            <h1 className="text-2xl text-lightBlue mt-2">Tanner</h1>

            <div className="flex items-center">
              <Image
                src="/images/email.svg"
                alt="Email Icon"
                height={16}
                width={16}
                className="fill-white"
              />
              <h1 className="text-1xl ml-2">
                <Link href="mailto:T.reboulet@fivetooltournaments.com">
                  T.reboulet@fivetooltournaments.com
                </Link>
              </h1>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/phone.svg"
                alt="Phone Icon"
                height={16}
                width={16}
              />
              <h1 className="text-1xl ml-2">
                <Link href="tel:314-508-9356">314-508-9356</Link>
              </h1>
            </div>
          </div>

          <div className="px-3 mb-5 xl:px-8">
            <Image
              src="/images/Brandon.webp"
              alt="Brandon"
              height={192}
              width={192}
              className="rounded"
            />

            <h1 className="text-2xl text-lightBlue mt-2">Brandon</h1>

            <div className="flex items-center">
              <Image
                src="/images/email.svg"
                alt="Email Icon"
                height={16}
                width={16}
                className="fill-white"
              />
              <h1 className="text-1xl ml-2">
                <Link href="mailto:B.Capps@fivetooltournaments.com">
                  B.Capps@fivetooltournaments.com
                </Link>
              </h1>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/phone.svg"
                alt="Phone Icon"
                height={16}
                width={16}
              />
              <h1 className="text-1xl ml-2">
                <Link href="tel:864-609-7135">864-609-7135</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
