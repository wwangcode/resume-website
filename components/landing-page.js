import styled from 'styled-components'


const LandingPage = ({scrollTo, isMobile}) => {
    const section = 'about'
    const handleScrollTo = () => {
        scrollTo(section)
    }

    return (
        <Container isMobile={isMobile}>
            <Intro>Hi, my name is</Intro>
            <Name>William Wang.</Name>
            <SubText>I create experiences for the web.</SubText>

            <ScrollButton onClick={handleScrollTo}>See Work</ScrollButton>
        </Container>
    )
}

export default LandingPage


// STYLED COMPONENTS
const Intro = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

const SubText = styled.div`
    font-size: 3rem;
    color: rgba(255,255,255,.85);
`;

const Name = styled.div`
    color: rgba(236,9,36,1);
    display: contents;
    font-weight: 700;
`;

const ScrollButton = styled.div`
    margin-top: 3rem;
    padding: 1rem;
    font-size: 2rem;
    // display: block;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(236,9,36,1);

    }
`;


const Container = styled.main`
    min-height: calc(100vh - 4rem);
    width: 85%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding-left: ${({isMobile}) => isMobile ? '' : '15rem'};

    ${Name} {
        font-size: ${({isMobile}) => isMobile ? '5rem' : '6rem'};
    }
`;

