import styled from 'styled-components'
// import Link from 'next/link'
import { useState } from 'react'


const NavHeader = ({scrollTo}) => {
    const [ section, setSection ] = useState('')
    return (
        <Container>
            <HomeLinkContainer>
                <HomeLink onClick={() => {setSection('home'); scrollTo('home')}}>W.</HomeLink>
            </HomeLinkContainer>
            <LinkContainer>
                <Link onClick={() => {setSection('portfolio'); scrollTo('portfolio')}}>Work</Link>
                <Link onClick={() => {setSection('about'); scrollTo('about')}}>About</Link>
                <Link onClick={() => {setSection('contact'); scrollTo('contact')}}>Contact</Link>
            </LinkContainer>
        </Container>
    )
}

export default NavHeader

// STYLED COMPONENTS


const HomeLink = styled.div`
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    padding: .25rem .5rem;
    font-size: 2rem;
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

    height: 4rem;
    margin: 0 auto;
    
    // DISABLE TEXT HIGHLIGHTING
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;