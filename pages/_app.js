import 'tailwindcss/tailwind.css'
import '../style/global.css'

import Footer from '../components/Footer'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar/Navbar'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <LeftSidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
