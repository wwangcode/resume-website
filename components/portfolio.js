import styled from 'styled-components'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        <Link href='https://wwangphoto.com' target='_blank'>
                            <Image src='/images/wwangphoto-desktop.jpg' alt='wwangphoto.com' width='3840' height='2192' />
                        </Link>
                    </ImageContainer>
                    <TextContainer>
                        <Title>Photography Blog</Title>
                        <Details>
                            Mobile optimized photography blog website. 
                            Using static site generation to improve SEO and page load performance. 
                            Images are lazy loaded, optimized on demand and cached on the content delivery network. 
                            Full screen images are dynamically sized to fit the dimensions of the viewport without the need to scroll.
                            Images and details are served from custom built API (see below for further details).
                            Mail subscription sign-up connected via MailChimp API.
                            Contact form connected through Nodemailer.
                            Deployed on Vercel.
                        </Details>
                        
                        <StackContainer>
                            <TechTag>Next.js</TechTag>
                            <TechTag>React</TechTag>
                            <TechTag>Node.js</TechTag>
                            <TechTag>Styled-Components</TechTag>
                            <TechTag>MailChimp API</TechTag>
                            <TechTag>Nodemailer</TechTag>
                            <TechTag>Vercel</TechTag>
                        </StackContainer>
                        {/* <TextHeader>Technologies Used:</TextHeader> */}
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>
            <br />  
            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        <Link href='https://wwangphoto.com' target='_blank'>
                            <Image src='/images/custom-api.jpg' alt='wwangphoto.com' width='1687' height='1047' />
                        </Link>
                    </ImageContainer>
                    <TextContainer>
                        <Title>Custom Photo API</Title>
                        <Details>
                            API serves JSON data to front end (see above). 
                            Using relational database modeling to connect photos, galleries, and tags. 
                            Deployed using serverless functions via AWS Lambda.
                            Database and images hosted on S3.
                        </Details>
                        <StackContainer>
                            <TechTag>Django</TechTag>
                            <TechTag>Python</TechTag>
                            <TechTag>SQLite</TechTag>
                            <TechTag>AWS Lambda</TechTag>
                            <TechTag>AWS S3</TechTag>
                        </StackContainer>
                        {/* <TextHeader>Technologies Used:</TextHeader> */}
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>

        </Container>
    )
}


export default Portfolio


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
    margin: 0 auto;
`;

const Link = styled.a`

`;

// const TextHeader = styled.div`
//     font-size: 1.5rem;
//     // font-weight: 400;
// `;
const Title = styled.div`
    font-size: 2.5rem;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 2rem;
`;


const TechTag = styled.div`
    background: rgba(50,50,50,1);    
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    font-weight: 400;
    margin: 5px;
    padding: 5px;

    // color: rgba(255,255,255,.7);
`;

const StackContainer = styled.div`

`;

const Details = styled.div`
    margin-bottom: 2rem;
    color: rgba(255,255,255,.8);
    font-size: 1.1rem;
`;

const TextContainer = styled.div`
    width: 35vw;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    // align-items: center;
`;

const ProjectContainer = styled.div`
    max-width: 85vw;
    margin: 0 auto;
    display: block;
    margin-bottom: 2rem;
`;

const Container = styled.main`
    height: calc(100vh - 4rem);
`;