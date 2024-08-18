import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import FeaturedSection from "./components/FeaturedSection/FeaturedSection"
import ViewSection from "./components/ViewSection/ViewSection"
import VideoPlay from "./components/VideoPlay/VideoPlay"
import Counter from "./components/Counter/Counter"
import BestDeal from "./components/BestDeal/BestDeal"
import TopNav from "./components/TopNav/TopNav"
import Properties from "./components/Properties/Properties"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <TopNav />
      <Navbar />
      <Hero />
      <FeaturedSection />
      <ViewSection url={'./images/img.jpg'} h6={'Video View'} h2={'Get Closer View & Different Feeling'}/>
      <VideoPlay />
      <Counter />
      <BestDeal />
      <Properties />
      <ViewSection url={'./images/contact-bg.jpg'} h6={'Contact Us'} h2={'Get In Touch With Our Agents'}/>
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
