import styled from 'styled-components'
import { useState } from 'react'
import MobileNav from './mobile-nav'


const NavHeader = ({ scrollTo, isMobile }) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ section, setSection ] = useState('')

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            {!isMobile && (
                <>
                    <HomeLinkContainer>
                        <HomeLink onClick={() => {setSection('home'); scrollTo('home'); toggleMenu()}}>W.</HomeLink>
                    </HomeLinkContainer>
                    <LinkContainer>
                        <Link onClick={() => {setSection('about'); scrollTo('about')}}>About</Link>
                        <Link onClick={() => {setSection('portfolio'); scrollTo('portfolio')}}>Work</Link>
                        <Link onClick={() => {setSection('contact'); scrollTo('contact')}}>Contact</Link>
                        <ResumeContainer>
                            <ResumeLink href='/resume/william_wang_resume_2021.pdf' target='_blank'>Resume</ResumeLink>
                        </ResumeContainer>
                    </LinkContainer>
                </>
            )}
            {isMobile && (
                <>
                    <HomeLinkContainer>
                        <HomeLink onClick={() => {setSection('home'); scrollTo('home')}}>W.</HomeLink>
                    </HomeLinkContainer>
                    <MobileNav scrollTo={scrollTo} isOpen={isOpen} toggleMenu={toggleMenu}/>
                </>
            )}
        </Container>
    )
}

export default NavHeader

// STYLED COMPONENTS

const ResumeLink = styled.a`
    background-color: rgba(236,9,36,.85);
    // color: black;
    border-radius: 1.25rem;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 2px;

    &:hover {
        background-color: rgba(236,9,36,.6);
    }
`;

const ResumeContainer = styled.div`
    margin: 0 2rem;
    display: inline-block;
`;

const HomeLink = styled.div`
    border: 1px solid rgba(236,9,36,1);
    display: inline-block;
    cursor: pointer;
    padding: 0 .25rem;
    font-size: 2rem;
    font-weight: 800;
    color: rgba(236,9,36,1);


    &:hover {
        // color: rgba(236,9,36,1);
        color: white;
    }
`;

const HomeLinkContainer = styled.div`
    text-align: left;
    float: left;
    margin-top: .5rem;
    margin-left: 2rem;
`;

const Link = styled.div`
    display: inline-block;
    margin: 0 2rem;
    cursor: pointer;
    font-size: 1.25rem;

    &:hover {
        color: rgba(236,9,36,1);
    }
`;

const LinkContainer = styled.div`
    text-align: right;
    justify-content: flex-end;
    float: right;
    line-height: 4rem;
`;

const Container = styled.nav`
    top: 0;
    position: sticky;
    z-index: 100;
    color: white;
    background-color: black;
    width: 100vw;
    height: 4rem;
    margin: 0 auto;
    
    // DISABLE TEXT HIGHLIGHTING
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;