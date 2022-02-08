import 'tailwindcss/tailwind.css'
import '../style/global.css'

import Footer from '../components/Footer'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  return (
    <>

      <Head>
        <title>Mukul Rajpoot</title>
        <meta charSet="utf-8" />
        <meta name="description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." />
        <meta name="keywords" content="Developer, Next Developer, Mukul Rajpoot, Full-stack Developer, Front-End Developer" />
        <meta name="author" content="Mukul Rajpoot" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://mukulrajpoot.com/" key="ogurl" />
        <meta property="og:image" content="https://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" key="ogimage" />
        <meta property="og:site_name" content="Mukul Rajpoot Portfolio" key="ogsitename" />
        <meta property="og:title" content="Mukul Rajpoot - Front-End Developer" key="title" />
        <meta property="og:description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." key="description" />
      </Head>

      <Navbar />
      <LeftSidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
