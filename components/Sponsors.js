import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sponsors = () => {
  return (
    <section className="bg-darkBlue">
      <div className="container mx-auto p-10" id="poweredby">
        <h1 className="text-4xl text-lightBlue">Powered By</h1>

        <div className="mt-5 p-5 flex flex-col items-center xl:grid xl:grid-rows-1 xl:grid-flow-col xl:gap-1">
          <div className="h-[7rem] w-[18rem] mt-2">
            <Link href="https://www.figureitoutbaseball.com/en/">
              <a className="h-full w-full" target="_blank">
                <Image
                  src="/images/fiobsponsor.jpg"
                  alt="Sponsor 1"
                  layout="responsive"
                  objectFit="contain"
                  height={300}
                  width={800}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
