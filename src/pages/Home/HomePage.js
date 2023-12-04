import React from 'react'
import { About, Contact, Skills } from './components';
import Projects from './components/Projects';

export const HomePage = () => {
  return (
    <main>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
