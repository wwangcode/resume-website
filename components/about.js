import styled from 'styled-components'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const About = ({isMobile, scrollTo}) => {
    return (
        <Container isMobile={isMobile}>
            <SectionTitle>About Me</SectionTitle>
            <ContentContainer>
                <ImageContainer>
                    <Image src='/images/about-photo.jpg' width='2000' height='2121' />
                </ImageContainer>
                <TextContainer>
                    <Intro>
                        “Hello! I'm William, a <IntroSpan>full stack web developer</IntroSpan> based in Austin, TX”
                    </Intro>
                    <Body>
                        I enjoy creating seamless user driven experiences that are intuitive and a joy to use and have experience designing and building end-to-end, mobile first, and responsive full-stack web applications.
                        <br />
                        <br />
                        During my current role at Iternal Technologies, I was charged with developing innovative solutions across all levels of the tech stack. I played an instrumental role in securing a contract with a Fortune 50 company by successfully developing and delivering on time a user accountability layer that exceeded our client's needs. This full-stack event audit log monitored, recorded, and queried user and system driven events in our SaaS application. I also played a primary role in the design and development of our user facing search engine application by building out the front end with a strong focus on UX/UI design and connecting it to our database layer. 
                        <br />
                        <br />
                        I have a passion for all things tech, and am eager to seek out opportunities to expand my skill set and utilize my creativity to develop innovative solutions. I welcome the opportunity to further discuss my experiences to see if there is an opportunity to build something amazing together!

                        <br />
                        <br />
                        <Connect>Connect with me:</Connect>
                        <Link>
                            <a href='mailto:wwangcode@gmail.com'>
                                <FontAwesomeIcon icon={faEnvelope} size='1x' />
                            </a>
                        </Link>
                        <Link>
                            <a href='https://linkedin.com/in/wwangconnect' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} size='1x' />
                            </a>
                        </Link>
                        <Link>
                            <a href='https://github.com/wwangcode' target='_blank'>
                                <FontAwesomeIcon icon={faGithub} size='1x' />
                            </a>
                        </Link>
                    </Body>
                    <TagContainer>
                        <Tag>Web Developer</Tag>
                        <Tag>Photographer</Tag>
                        <Tag>Foodie</Tag>
                        <Tag>Adventurer</Tag>
                        <Tag>Rugby Player</Tag>
                    </TagContainer>
                </TextContainer>
            </ContentContainer>
            <StackContainer>
                <TechTitle>Technologies</TechTitle>
                <ListContainer>
                    <List>
                        <Item>Next.js</Item>
                        <Item>React</Item>
                        <Item>Redux</Item>
                        <Item>Javascript</Item>
                        <Item>HTML & CSS</Item>
                    </List>
                    <List>
                        <Item>Node.js</Item>
                        <Item>Django</Item>
                        <Item>Python</Item>
                        <Item>SQL</Item>
                        <Item>Fusion.js</Item>
                    </List>
                </ListContainer>
            </StackContainer>
            <ButtonContainer>
                <SeeMore onClick={() => {scrollTo('portfolio')}}>Projects</SeeMore>
            </ButtonContainer>
        </Container>
    )
}

export default About


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

const Item = styled.li`
    margin: 1rem;
    font-size: 1.5rem;
    padding-left: 1rem;
    // color: rgba(236,9,36,1);


    // &&:before {
    //     list-style-type: '▹';
    //     color: rgba(236,9,36,1);
    // }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    list-style-type: '▹';
    margin: 0 1rem;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StackContainer = styled.div`
    margin: 3rem auto 0 auto;
    text-align: center;
    max-width: 30rem;
    // border: 1px solid white;
`;


const TechTitle = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: rgba(236,9,36,.85);
`;

const Connect = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    display: inline-block;
`;

const Link = styled.div`
    margin: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    display: inline-block;

    // DISABLE TEXT HIGHLIGHTING
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Tag = styled.div`
    background: rgba(50,50,50,1);    
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-radius: 1rem;
    // font-weight: 500;
    font-size: 1rem;
    margin: 5px;
    padding: 5px 8px;
`;

const TagContainer = styled.div``

const Intro = styled.div`
    font-size: 2.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgba(255,255,255,.9);
`;

const IntroSpan = styled.span`
    display: contents;
    // color: rgba(236,9,36,.85);
`;

const Body = styled.div`
    font-size: 1.25rem;
    color: rgba(255,255,255, .8);
    margin-bottom: 1rem;
`;

const TextContainer = styled.div`
    // align-self: top;
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

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.main`
    min-height: calc(100vh - 4rem);
    margin: 0 auto;
    // margin-bottom: 10rem;
    padding-top: 4rem;

    ${ContentContainer} {
        flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
    }
    ${ImageContainer} {
        max-width: ${({isMobile}) => isMobile ? '30rem' : '30rem'};
        margin-bottom: ${({isMobile}) => isMobile ? '3rem' : ''};
    }

    ${TextContainer} {
        width: ${({isMobile}) => isMobile ? '95vw' : '35vw'};
        margin-left: ${({isMobile}) => isMobile ? '' : '5rem'};
    }   
`;