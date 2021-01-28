import { useRef } from 'react'
import styled from 'styled-components'

import NavHeader from '../components/nav-header'
import LandingPage from '../components/landing-page'
import Portfolio from '../components/portfolio'
import About from '../components/about'
import Contact from '../components/contact'


// NOTE: want to design a single page app w. different sections. Nextjs is prob overkill for an app of this size but i like using it and deploying it is easy
const Home = () => {
  // use this for scroll to top 
  const landingPageRef= useRef()
  const portfolioRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const scrollToSection = (componentNode) => {
    componentNode.scrollIntoView({behavior: `smooth`, block: `nearest`, inline: `start`})
  }
  const handleScrollToSection = (section) => {
    if ((section === 'portfolio') && portfolioRef && portfolioRef.current) {
      scrollToSection(portfolioRef.current)
    }
    if ((section === 'about') && aboutRef && aboutRef.current) {
      scrollToSection(aboutRef.current)
    }
    if ((section === 'contact') && contactRef && contactRef.current) {
      scrollToSection(contactRef.current)
    }
    if ((section === 'home') && landingPageRef && landingPageRef.current) {
      scrollToSection(landingPageRef.current)
    }
  }


  return (
    <>
    <NavHeader scrollTo={handleScrollToSection} />
    <Container>
      <div ref={landingPageRef} section='home'>
        <LandingPage scrollTo={handleScrollToSection} />  
      </div>
      <div ref={portfolioRef} section='portfolio'>
        <Portfolio />
      </div>
      <div ref={aboutRef} section='about'>
        <About scrollTo={handleScrollToSection} />
      </div>
      <div ref={contactRef} section='contact'>
        <Contact scrollTo={handleScrollToSection} />
      </div>
      <br />
      Footer: links to github and linkedin
    </Container>
    </>
  )
}

export default Home


// STYLED COMPONENTS 

const Container = styled.div`

`;