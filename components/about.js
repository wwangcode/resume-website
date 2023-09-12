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
                        “Hello! I'm William, a <IntroSpan>software engineer</IntroSpan> based in Austin, TX”
                    </Intro>
                    <Body>
                        I am a driven and passionate full stack software engineer with 3+ years of experience in crafting scalable, user-friendly web applications. My technical proficiency spans across both front-end and back-end technologies, with a commitment to creating seamless and responsive user driven experiences.
                        <br />
                        <br />
                        In my last role with Iternal Technologies, a small tech startup, I collaborated cross-functionally with various aspects of the company including ux/ui, business, sales and marketing, and executive leadership to ensure that the projects delivered aligned with business and user needs. I was responsible for taking ownership and initiative in seeing projects through from start to finish. During my tenure, I developed a data ingest application to streamline and automate parts of the content production, delivery and storage to reduce customer onboarding times by 95-99%, designed and integrated a credit system for the SaaS platform to record and track system usage with a data visualization front end to provide system usage statistics and bill B2B customers, built an accountability layer to monitor and log user and system driven events in the SaaS platform that was instrumental in landing a Fortune 50 client, and more.
                        <br />
                        I take pride in writing clean, maintainable code and continuously invest in learning emerging technologies to ensure that the solutions I provide are efficient and in line with industry standards. Working with dynamic teams is an environment I thrive in as a strong communicator, analytical thinker and problem solver. I also pride myself in being able to wear multiple hats (a skill developed through years of experience working in startups and running my own business) to develop well thought out solutions that align with various company and user objectives.
                        <br />
                        <br />
                        I’m eager to bring my technical expertise to a dynamic team where I can contribute to meaningful projects and continue my journey of professional growth. Let’s connect and see how we can build the future together!
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
                        <Tag>Software Engineer</Tag>
                        <Tag>Photographer</Tag>
                        <Tag>DJ</Tag>
                        <Tag>Foodie</Tag>
                        <Tag>Adventurer</Tag>
                    </TagContainer>
                </TextContainer>
            </ContentContainer>
            <StackContainer>
                <TechTitle>Key Strengths</TechTitle>
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
                        <Item>SQL/NoSQL </Item>
                        <Item>AWS</Item>
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