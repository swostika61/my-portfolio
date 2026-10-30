import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => (
  <div id='top' className='app'>
    <Navbar />
    <Header />

    <main>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>

    <ScrollToTop />
    <Footer />
  </div>
)

export default App
