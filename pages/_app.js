import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import '../styles/global.css'
import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <MobileNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
