import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import EqSection from "../components/Eq"
import CardSection from '@/components/CardSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <Homepage />
      <EqSection/>
      <CardSection/>
    </main>
  )
}
