import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

import NavHeader from '../components/nav-header'
import LandingPage from '../components/landing-page'
import Portfolio from '../components/portfolio'
import About from '../components/about'
import Contact from '../components/contact'
import VerticalLinks from '../components/vertical-links'
import Footer from '../components/footer'


// NOTE: want to design a single page app w. different sections. Nextjs is prob overkill for an app of this size but i like using it and deploying it is easy
const Home = ({isMobile}) => {
  useEffect(() => {
  }, [isMobile])
  // scroll navigation
  const landingPageRef= useRef()
  const portfolioRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const scrollToSection = (componentNode) => {
    componentNode.scrollIntoView({behavior: `smooth`, inline: `start`})
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
      <NavHeader scrollTo={handleScrollToSection} isMobile={isMobile} />
      {!isMobile && (<VerticalLinks />)}
      <Container>
        <div ref={landingPageRef} section='home'>
          <LandingPage scrollTo={handleScrollToSection} isMobile={isMobile}/>  
        </div>
        <div ref={aboutRef} section='about'>
          <About scrollTo={handleScrollToSection} isMobile={isMobile}/>
        </div>
        <Divider />
        <div ref={portfolioRef} section='portfolio'>
          <Portfolio isMobile={isMobile} />
        </div>
        <Divider />
        <div ref={contactRef} section='contact'>
          <Contact scrollTo={handleScrollToSection} />
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default Home


// STYLED COMPONENTS 

const Divider = styled.div`
  background-color: grey;
  height: 1px;
  width: 40rem;
  margin: 10rem auto;
`;

const Container = styled.div`

`;