import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import DSA from './Components/DSA'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <DSA></DSA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App