import styled from 'styled-components'
import VerticalLinks from './vertical-links'


export const MobileNav = ({ isOpen, toggleMenu, scrollTo }) => {
    return (
        <>
            <StyledBurgerBtn isOpen={isOpen} onClick={toggleMenu}>
                <BurgerIcon />
                <BurgerIcon />
                <BurgerIcon />
            </StyledBurgerBtn>
            {isOpen && (
                <>
                    <VerticalLinks />
                    <StyledMenu isOpen={isOpen}>
                        <Link onClick={() => {scrollTo('home'); toggleMenu()}}>Home</Link>
                        <Link onClick={() => {scrollTo('about'); toggleMenu()}}>About</Link>
                        <Link onClick={() => {scrollTo('portfolio'); toggleMenu()}}>Work</Link>
                        <Link onClick={() => {scrollTo('contact'); toggleMenu()}}>Contact</Link>
                        <ResumeContainer>
                            <ResumeLink href='/resume/william_wang_resume_2021.pdf' target='_blank'>Resume</ResumeLink>
                        </ResumeContainer>
                    </StyledMenu>
                </>
            )}
    </>
    )
}
  
export default MobileNav


// STYLED COMPONENTS
const BurgerIcon = styled.div`
    width: 2rem;
    height: 0.25rem;
    background-color: rgba(255,255,255,.8);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
`;

const StyledBurgerBtn = styled.button`
    position: absolute;
    top: 0;
    margin: 1vh 0 1vh 0;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 100;

    transition: color .3s linear;
    color: rgba(255,255,255,.8);

    &:focus {
        outline: none;
    }

    ${BurgerIcon} {
        :first-child {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
            // transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

// MENU
const ResumeLink = styled.a`
    background-color: rgba(236,9,36,.85);
    border-radius: 1rem;
    padding: .5rem;
    font-size: 2rem;
`;

const ResumeContainer = styled.div`
    display: block;
    margin-top: 15vh;
`;

const Link = styled.div`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    font-size: 1.75rem;
    padding-bottom: 2vh;
    margin: 2rem 0;
    border-bottom: ${({activePath}) => activePath ? 'solid 2px rgba(236,9,36,.8)' : ''};
`;

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${({isOpen}) => isOpen ? `100vh` : `0`};
    width: ${({isOpen}) => isOpen ? `100vw` : `0`};
    position: relative;
    top: 0;
    right: 0;
`;
