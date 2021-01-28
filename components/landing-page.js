import styled from 'styled-components'


const LandingPage = ({scrollTo}) => {
    const section = 'portfolio'
    const handleScrollTo = () => {
        scrollTo(section)
    }

    return (
        <Container>
            Hello! I'm <Name>William Wang</Name>.
            <br />
            I create experiences for the web.
           <ScrollButton onClick={handleScrollTo}>See Work</ScrollButton>
        </Container>
    )
}

export default LandingPage


// STYLED COMPONENTS
const Name = styled.span`
    color: rgba(236,9,36,1);
    display: contents;
`;

const ScrollButton = styled.div`
    margin-top: 3rem;
    padding: 1rem;
    font-size: 2rem;
    // display: block;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
`;

const Container = styled.main`
    height: calc(100vh - 4rem);
    width: 85%;
    margin: 0 auto;
    background-color: black;
    color: white;
    font-size: 3rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

