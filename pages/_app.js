import AOS from "aos";
import { useEffect } from "react";

import 'tailwindcss/tailwind.css'
import '../style/global.css'
import "aos/dist/aos.css";

import Footer from '../components/Footer'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar/Navbar'



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1000,
    });
  }, []);

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
