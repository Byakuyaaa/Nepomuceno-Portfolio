import Navbar from "./component/Navbar"
import About from "./component/about"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import Contact from "./component/contact" 

function App() {
  return (
    <main>
      <main className="text-gray-400 bg-gray-900 body-font"></main>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
