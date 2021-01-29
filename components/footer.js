import styled from 'styled-components'


const Footer = ({isMobile, scrollTo}) => {
    return (
        <Container>
            <ButtonContainer>
                <SeeMore onClick={() => {scrollTo('home')}}>Back to Top</SeeMore>
            </ButtonContainer>
            <Link href='https://linkedin.com/in/wwangconnect'>Linkedin</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href='https://github.com/wwangcode'>Github</Link>
            <br />
            <br />
            &#169; William Wang 2021
            <br />
            Austin, TX, USA
        </Container>
    )
}

export default Footer


// STYLED COMPONENTS

const Link = styled.a`
    text-decoration: none;
    &:hover {
        color: white;
    }
`;

const SeeMore = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    font-size: 1.25rem;
    display: inline-block;
    border: 1px solid grey;
    color: grey;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid white;

    }
`;

const ButtonContainer = styled.div`
    margin: 0 auto 1rem auto;
    text-align: center;
`;

const Container = styled.footer`
    padding-bottom: 3rem;
    margin: 0 auto;
    margin-top: 5rem;
    border-top: 1px solid grey;
    color: grey;
    text-align: center;
`;