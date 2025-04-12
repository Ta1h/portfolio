import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Works from './components/Works'

const page = () => {
  return (
    <main className="flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Footer />
    </main>
  )
}

export default page
