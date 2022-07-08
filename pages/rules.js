import Link from 'next/link'
import Head from 'next/head'
const Rules = () => {
  return (
    <>
      <Head>
        <title>Rules | 5-Tool Tournaments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Description"
          content="5-Tool Tournaments is a baseball tournament company that offers a variety of baseball tournaments for the community."
        />
        <meta
          name="Keywords"
          content="5-tool, 5-tool tournaments, five tool player"
        />
        <meta
          name="google-site-verification"
          content="ROsKPe2ZGr1A_4-hdmIBSaQsFaXrL_gX9Z5-Y4V0404"
        />
        <meta name="Author" content="Jonathan Emery" />
        <link rel="icon" type="image/png" href="/images/5TT-02.webp" />
      </Head>
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
    </>
  )
}

export default Rules
