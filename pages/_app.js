import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar/Navbar'
import '../style/global.css'

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
