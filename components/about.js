import styled from 'styled-components'
import Image from 'next/image'


const About = ({isMobile}) => {
    return (
        <Container isMobile={isMobile}>
            <SectionTitle>About</SectionTitle>
            <ImageContainer>
                <Image src='/images/about-photo.jpg' width='4176' height='4423' />
            </ImageContainer>
        </Container>
    )
}

export default About


// STYLED COMPONENTS 

const SectionTitle = styled.div`
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 5rem;
`;

const ImageContainer = styled.div`
    max-width: 30vw;
`;

const Container = styled.main`
    height: calc(100vh - 4rem);
    margin: 0 auto;
    width: 85%;

    ${ImageContainer} {
        max-width: ${({isMobile}) => isMobile ? '95vw' : '30vw'};
    }
`;