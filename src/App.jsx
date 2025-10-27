import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Services from './Components/Services'
import Education from './Components/Educations'
import ContactForm from './Components/ContactForm'
import Project from './Components/Project'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Nav/>
      
      {/* Add section IDs */}
      <section id="home"><Body/></section>
      <section id="services"><Services/></section>
      <section id="education"><Education/></section>
      <section id="projects"><Project/></section>
      <section id="contact"><ContactForm/></section>
    </div>
  )
}

export default App
