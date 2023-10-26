import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import EqSection from "../components/Eq"
import EqSection2 from "../components/Eq2"
import About from "../components/About.jsx"
import CardSection from '@/components/CardSection'
import Track from "../components/Track"
import Social from "../components/Social"
import Test from '@/components/Test'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <Homepage />
      <EqSection/>
      <CardSection/>
      <About/>
      <Track/>
      <EqSection2/>
      <Social/>
      <Test/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </main>
    </>
  )
}
