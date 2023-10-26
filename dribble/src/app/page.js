import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import EqSection from "../components/Eq"
import CardSection from '@/components/CardSection'
import EqSection2 from "../components/Eq2"
import About from "../components/About.jsx"
import Track from "../components/Track"
import Social from "../components/Social"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <Homepage />
      <EqSection/>
      <CardSection/>
      <About/>
      <Track/>
      <EqSection2/>
      <Social/>
    </main>
  )
}
