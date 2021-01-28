import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const VerticalLinks = () => {
    return (
        <Container>
            <List>
                <Item>
                    <FontAwesomeIcon icon={faLinkedinIn} size='1x' />
                </Item>
                <Item>
                    <FontAwesomeIcon icon={faGithub} size='1x' />
                </Item>
            </List>
        </Container>
    )
}

export default VerticalLinks


// STYLED COMPONENTS

const Item = styled.li`
    margin: 1rem;
    font-size: 1.5rem;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 1rem;
`;

const Container = styled.nav`
    width: 40px;
    position: fixed;
    bottom: 0px;
    // left: 40px;
    right: auto;
    z-index: 10;
    color: grey;
    line-height: 1.3;
    display: block;

    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: grey;
    }
`;