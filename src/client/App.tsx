import { useState } from 'react'
import Landing from './components/Landing'
import Skills from './components/Skills'
import './App.css'
import Description from './components/Description'
import Projects from './components/Projects'
import Quote from './components/Quote'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SkillsRadar from './components/SkillsRadar'
import ContactFormAlt from './components/ContactFormAlt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Landing />
        <Skills />
        <Description />
        <Quote />
        <Projects />
        <div className='flex flex-col lg:flex-row gap-6 mb-10 px-5'>
            {/* <SkillsRadar /> */}
            <ContactFormAlt />
        </div>
        <Footer />
    </>
  )
}

export default App
