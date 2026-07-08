// import React from 'react'

import AboutMe from "../components/AboutMe"
import Background from "../components/Background"
import Contact from "../components/Contact"
import MainSection from "../components/MainSection"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import Skills from "../components/Skills"
import ToggleTheme from "../components/ToggleTheme"

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ToggleTheme />

        <Background />

        <Navbar />

        <main>
          <MainSection />
          <AboutMe />
          <Skills />
          <Project />
          <Contact />
        </main>
    </div>
  )
}

export default Home