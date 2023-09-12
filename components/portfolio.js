import styled from 'styled-components'
import Image from 'next/image'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Portfolio = ({isMobile, scrollTo}) => {

    return (
        <Container isMobile={isMobile}>
            <SectionTitle>Projects</SectionTitle>
            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        <Link href='https://videoroom.vercel.app/' target='_blank'>
                            <Image src='/images/videoroom.png' alt='videoroom.vercel.app/' width='2000' height='1104' />
                        </Link>
                    </ImageContainer>
                    <TextContainer>
                        <Title>Realtime Video Streaming Application</Title>
                        <ExternalLinksContainer>
                            <IconContainer>
                                <Link href='https://github.com/wwangcode/video-chat-app' target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} size='1x' />
                                </Link>
                            </IconContainer>
                            <IconContainer>
                                <Link href='https://videoroom.vercel.app/' target='_blank'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size='1x' />
                                </Link>
                            </IconContainer>
                        </ExternalLinksContainer>
                        <Details>
                            Real time communications streaming web application platform that supports video chat to connect online. Supports creation and sharing of chat rooms. 
                            Unique user channel and application authorization tokens generated on Node.js backend endpoint. Token server is deployed using serverless functions on Vercel.
                            Live video streaming implemented using Agora API. Microphone and camera on/off functionality added for users local stream. 
                        </Details>
                        <StackContainer>
                            <TechTag>Next.js</TechTag>
                            <TechTag>React</TechTag>
                            <TechTag>Node.js</TechTag>
                            <TechTag>Styled-Components</TechTag>
                            <TechTag>Agora API</TechTag>
                            <TechTag>Vercel</TechTag>
                        </StackContainer>
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>

            <Divider></Divider>

            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        <Link href='https://wwangphoto.com' target='_blank'>
                            <Image src='/images/wwangphoto.png' alt='wwangphoto.com' width='2000' height='1141' />
                        </Link>
                    </ImageContainer>
                    <TextContainer>
                        <Title>Mobile Optimized Photography Blog</Title>
                        <ExternalLinksContainer>
                            {/* <IconContainer>
                                <Link href='https://github.com/wwangcode' target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} size='1x' />
                                </Link>
                            </IconContainer> */}
                            <IconContainer>
                                <Link href='https://wwangphoto.com' target='_blank'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size='1x' />
                                </Link>
                            </IconContainer>
                        </ExternalLinksContainer>
                        <Details>
                            End-to-end design and development of full-stack photography blog for personal use.
                            Server-side-rendered and static site generated for improved SEO and page load speeds. 
                            Connected to Google Analytics to help track and report web traffic to improve UI/UX and better optimize site.
                            Features mobile-friendly and responsive UI displaying lazy loaded images optimized on demand and cached in CDN. 
                            Full screen images dynamically sized to fit the dimensions of the viewport without scrolling.
                            Backed by serverless API (see below).
                            Tagging functionality for filtering photos.  
                            Email subscription sign-up feature connected via MailChimp API.
                            Email contact form connected through Nodemailer. 
                            Deployed on Vercel utilizing serverless functions. 
                        </Details>
                        <StackContainer>
                            <TechTag>Next.js</TechTag>
                            <TechTag>React</TechTag>
                            <TechTag>Node.js</TechTag>
                            <TechTag>Styled-Components</TechTag>
                            <TechTag>MailChimp API</TechTag>
                            <TechTag>Nodemailer</TechTag>
                            <TechTag>Vercel</TechTag>
                            <TechTag>Google Analytics</TechTag>
                        </StackContainer>
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>

            <Divider></Divider>

            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        {/* <Link href='https://wwangphoto.com' target='_blank'> */}
                            <Image src='/images/planter.jpg' alt='planter' width='2000' height='1175' />
                        {/* </Link> */}
                    </ImageContainer>
                    <TextContainer>
                        <Title>User Authenticated Pomodoro App</Title>
                        <ExternalLinksContainer>
                            <IconContainer>
                                <Link href='https://github.com/wwangcode/planter_app' target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} size='1x' />
                                </Link>
                            </IconContainer>
                            {/* <IconContainer>
                                <Link href='https://wwangphoto.com' target='_blank'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size='1x' />
                                </Link>
                            </IconContainer> */}
                        </ExternalLinksContainer>
                        <Details>
                            Responsive full-stack Pomodoro timer app with user authentication.
                            User authentication handled via JWT authentication tokens. 
                            Authenticated user's profile data served via Django Rest Framework from SQLite database; supports CRUD operations.
                            RPC calls fired to Django handle updating and saving user's timer data.
                            Uses Fusion.js for universal rendering and handling token authentication middleware and RPC calls. 
                            App state is managed using Redux. 
                        </Details>
                        <StackContainer>
                            <TechTag>React</TechTag>
                            <TechTag>Redux</TechTag>
                            <TechTag>Node.js</TechTag>
                            <TechTag>Fusion.js</TechTag>
                            <TechTag>Django Rest Framework</TechTag>
                            <TechTag>Python</TechTag>
                        </StackContainer>
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>

            <Divider></Divider>

            <ProjectContainer>
                <ContentContainer>
                    <ImageContainer>
                        {/* <Link href='https://wwangphoto.com' target='_blank'> */}
                            <Image src='/images/custom-api.jpg' alt='wwangphoto-API' width='1687' height='1047' />
                        {/* </Link> */}
                    </ImageContainer>
                    <TextContainer>
                        <Title>Serverless REST API</Title>
                        <ExternalLinksContainer>
                            <IconContainer>
                                <Link href='https://github.com/wwangcode' target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} size='1x' />
                                </Link>
                            </IconContainer>
                        </ExternalLinksContainer>
                        <Details>
                            Serverless REST API serves JSON data for photography blog front end (see above). 
                            Supports tag filtering through relational database modeling that connects photos, galleries, and tags
                            Deployed using serverless functions via AWS Lambda through API Gateway. 
                            Database and images stored on S3 and accessed through AWS Lambda.
                        </Details>
                        <StackContainer>
                            <TechTag>Django</TechTag>
                            <TechTag>Python</TechTag>
                            <TechTag>SQLite</TechTag>
                            <TechTag>AWS Lambda</TechTag>
                            <TechTag>AWS S3</TechTag>
                            <TechTag>API Gateway</TechTag>
                        </StackContainer>
                    </TextContainer>
                </ContentContainer>
            </ProjectContainer>

            <ButtonContainer>
                <SeeMore onClick={() => {scrollTo('contact')}}>Contact</SeeMore>
            </ButtonContainer>
        </Container>
    )
}


export default Portfolio


// STYLED COMPONENTS

const SeeMore = styled.div`
    margin-top: 3rem;
    padding: 1rem;
    font-size: 2rem;
    display: inline-block;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(236,9,36,1);

    }
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    text-align: center;

    // DISABLE TEXT HIGHLIGHTING
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const SectionTitle = styled.div`
    margin: 0 auto;
    text-align: center;
    font-size: 5rem;
    font-weight: 500;
    color: rgba(236,9,36,.85);
    margin-bottom: 5rem;
`;

const ImageContainer = styled.div`
`;

const Link = styled.a`

`;

const Title = styled.div`
    font-size: 2rem;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 1rem;
`;

const IconContainer = styled.div`
    font-size: 1.5rem;
    margin-right: 2rem;
    margin-bottom: 1rem;

    // DISABLE TEXT HIGHLIGHTING
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const ExternalLinksContainer = styled.div`
    display: flex;
    flex-direction: row;

`;


const TechTag = styled.div`
    background: rgba(50,50,50,1);    
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-radius: 1rem;
    font-weight: 400;
    margin: 5px;
    padding: 5px 8px;

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
    
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProjectContainer = styled.div`
    margin: 0 auto;
    display: block;
    // margin-bottom: 5rem;
`;

const Divider = styled.div`
    background-color: grey;
    height: 1px;
    width: 25vw;
    margin: 4rem auto;
`;

const Container = styled.main`
    padding-top: 4rem;
    min-height: calc(100vh - 4rem);
    margin: 0 auto;

    ${ContentContainer} {
        flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
    }

    ${ImageContainer} {
        width: ${({isMobile}) => isMobile ? '95vw' : '30rem'};
    }

    ${TextContainer} {
        width: ${({isMobile}) => isMobile ? '95vw' : '30rem'};
        margin-left: ${({isMobile}) => isMobile ? '' : '5rem'};
    }   
`;