import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
