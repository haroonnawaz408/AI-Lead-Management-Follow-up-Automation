import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Statement from './components/Statement'
import Technology from './components/Technology'
import About from './components/About'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main><Hero /><Intro /><Services /><Portfolio /><Process /><Statement /><Technology /><About /><LeadForm /></main>
      <Footer />
    </MotionConfig>
  )
}
