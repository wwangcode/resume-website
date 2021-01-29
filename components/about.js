import styled from 'styled-components'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const About = ({isMobile}) => {
    return (
        <Container isMobile={isMobile}>
            <SectionTitle>About Me</SectionTitle>
            <ContentContainer>
                <ImageContainer>
                    <Image src='/images/about-photo.jpg' width='4176' height='4423' />
                </ImageContainer>
                <TextContainer>
                    <Intro>
                        “Hello! I'm William, a full-stack web developer based in Austin, TX”
                    </Intro>
                    <Body>
                        I enjoy creating user driven experiences that live on the internet.
                        My goal is to always strive to build products that are simple and a joy to use.
                        <br />
                        <br />
                        I am currently seeking opportunites to expand my skillset and utilize my creativity to build meaningful products.
                        I welcome the chance to further discuss my experiences to see if there is an opportunity to build something amazing together!
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

                {/* <TechTag>Next.js</TechTag>
                <TechTag>React</TechTag>
                <TechTag>Javascript</TechTag>
                <TechTag>HTML & CSS</TechTag>
                <TechTag>Redux</TechTag>
                <TechTag>Node.js</TechTag>
                <TechTag>Django</TechTag>
                <TechTag>Python</TechTag>
                <TechTag>Fusion.js</TechTag>
                <TechTag>SQL</TechTag> */}



            </StackContainer>

        </Container>
    )
}

export default About


// STYLED COMPONENTS 
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

    ${Item}&&::before {
        list-style-type: '▹';
        color: rgba(236,9,36,1);
    }
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
    border: 1px solid white;
`;


const TechTag = styled.div`
    background: rgba(50,50,50,1);    
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    font-weight: 500;
    font-size: 1.25rem;
    margin: 5px;
    padding: 5px;
    color: red;
`;

const TechTitle = styled.div`
    font-size: 2rem;
    font-weight: 500;
    // display: inline-block;
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
`;

const Tag = styled.div`
    background: rgba(50,50,50,1);    
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    // font-weight: 500;
    font-size: 1rem;
    margin: 5px;
    padding: 5px;
`;

const TagContainer = styled.div``

const Intro = styled.div`
    font-size: 2.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgba(255,255,255,.9);
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
    font-size: 3rem;
    font-weight: 500;
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