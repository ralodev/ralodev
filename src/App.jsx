import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Certifications from "./components/Certifications"
import Work from "./components/Work"

function App() {

  return (
    <main>
    <Navbar />
    <Sidebar />
    <Home />
    <About />
    {/* <Work /> */}
    <Skills/>
    <Projects/>
    <Contact/>
    {/* <Certifications/> */}
    </main>
  )
}

export default App
