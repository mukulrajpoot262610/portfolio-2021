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
        <title>Mukul Rajpoot - Front-End Developer</title>
        <meta name="description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." />

        <meta itemprop="name" content="Mukul Rajpoot - Front-End Developer" />
        <meta itemprop="description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." />
        <meta itemprop="image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />

        <meta property="og:url" content="https://mukulrajpoot.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mukul Rajpoot - Front-End Developer" />
        <meta property="og:description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." />
        <meta property="og:image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mukul Rajpoot - Front-End Developer" />
        <meta name="twitter:description" content="I am a front-end creative developer based in Barielly, India. I am a Computer Science undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts." />
        <meta name="twitter:image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />
      </Head>

      <Navbar />
      <LeftSidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
