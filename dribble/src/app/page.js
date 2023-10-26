import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <Homepage />
    </main>
  )
}
