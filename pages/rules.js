import Link from 'next/link'
const Rules = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <nav className="hidden left-[15%] w-[35rem] items-center justify-between z-10 xl:flex">
          <div className="pt-2">
            <img
              src="/images/5TT-02.webp"
              alt="5 Tool Logo"
              height={50}
              width={50}
            />
          </div>
          <div className="space-x-6">
            <Link href="/">
              <a className="text-black hover:text-lightBlue">Home</a>
            </Link>
          </div>
        </nav>
      </div>
      <object
        data="/rules.pdf"
        type="application/pdf"
        width="100%"
        className="h-screen"
      >
        <p>
          Alternative text - include a link <a href="/rules.pdf">to the PDF!</a>
        </p>
      </object>
    </section>
  )
}

export default Rules
