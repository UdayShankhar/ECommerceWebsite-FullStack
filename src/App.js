import React from 'react'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import NewSkills from './components/newSkills/NewSkills'
import Myportd from './components/myportfoliodesign/Myportd'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <NewSkills />
      <Education />
      <Myportd />
      <Contact />
    </div>
  )
}

export default App