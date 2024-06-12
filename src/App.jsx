import HomePage from './views/HomePage'
import NavBar from './components/NavBar';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Currently from './views/Currently';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="currently" element={<Currently/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
