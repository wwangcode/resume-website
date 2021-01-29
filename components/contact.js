import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'


const ContactForm = ({isMobile}) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ]= useState('')
    const [ sendText, setSendText ] = useState('Send Message')
    const [ sendState, setSendState ] = useState('IDLE')
    const [ errorMessage, setErrorMessage ] = useState(null)

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value.toLowerCase())
    }
    const handleSubjectInput = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageInput = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSendState('LOADING')
        setSendText('Sending Message...')
        setErrorMessage(null)
        
          // CHECK IF BLANK 
        if (!email || !email.length || !name || !name.length || !subject || !subject.length || !message || !message.length) {
            setSendText('Send Message')
            setSendState('IDLE')
            setErrorMessage('Please fill out all fields')
            return
        }

        // CHECK EMAIL SYNTAX 
        let validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!validRegex.test(email)) {
            setSendText('Send Message')
            setSendState('IDLE')
            setErrorMessage('Email invalid, please check and try again')
            return 
        }

        const res = await axios.post('api/contact', {email, name, subject, message})
        if (res.status < 300) {
            setSendText('Thank you, message sent!')
            setSendState('SUCCESS')
            setErrorMessage(null)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
          
        } else {
            // TODO: add more comprehensive error check - ie server error, etc. 
            setSendText('Send Message')
            setErrorMessage('Something went wrong, please try again')
            setSendState('ERROR')
        }

    }

    return (
        <Container>
            <FormContainer isMobile={isMobile} sendState={sendState}>
                <SectionTitle>Contact</SectionTitle>

                    {sendState !== 'SUCCESS' && (
                        <>
                            <form method='POST'>  
                                <NameContainer>
                                    {/* <StyledLabel htmlFor='name'>NAME</StyledLabel> */}
                                    {/* <br /> */}
                                    <StyledInput type='text' value={name} onChange={handleNameInput} placeholder='Name'/>
                                </NameContainer>
                                <EmailContainer>
                                    {/* <StyledLabel htmlFor='email'>EMAIL</StyledLabel> */}
                                    {/* <br /> */}
                                    <StyledInput type='email' value={email} onChange={handleEmailInput} placeholder='Email Address'/>
                                </EmailContainer>
                                <SubjectContainer>
                                    {/* <StyledLabel htmlFor='subject'>SUBJECT</StyledLabel>
                                    <br /> */}
                                    <StyledInput type='text' value={subject} onChange={handleSubjectInput} placeholder='Subject'/>
                                </SubjectContainer>
                                <MessageContainer>
                                    {/* <StyledLabel htmlFor='message'>MESSAGE</StyledLabel>
                                    <br /> */}
                                    <StyledTextArea value={message} onChange={handleMessageInput} placeholder='Message...'/>
                                </MessageContainer>
                                <ErrorMessage>{errorMessage}</ErrorMessage>             
                                <SendButtonContainer>
                                    <StyledSubmitButton type='submit' disabled={sendState === 'SUCCESS' ? true : false} value={sendText} onClick={handleSubmit}/>
                                </SendButtonContainer>
                            </form>
                        </>
                    )}

                    {/* TODO: add success message - image/text  */}
                    {sendState === 'SUCCESS' && (
                        <>
                            <SuccessContainer>
                                Thank you, message sent!
                            </SuccessContainer>
                        </>
                    )}
            </FormContainer>
        </Container>
    )
}

export default ContactForm

// STYLED COMPONENTS

const SectionTitle = styled.div`
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
`;

const SuccessContainer = styled.div`
    font-weight: 300;
    font-size: 1.5em;
    color: rgba(255,255,255,1);
`;

const StyledInput = styled.input`
    padding: .5em 1em;
    background: rgba(255,255,255,.85);
    color: black;
    font-size: 1.25em;
    font-weight: 500;

    border: 0;
    border-radius: 10px;

    // box-shadow:0 0 15px 4px rgba(255,255,255,255.06);

    // trying to make input fields same width ?? 
    // -ms-box-sizing:content-box;
    // -moz-box-sizing:content-box;
    // -webkit-box-sizing:content-box; 
    // box-sizing:content-box;

    &:focus {
        outline: 5px solid rgba(236,9,36,.7);
        border-radius: 0px;
    }
`;


const StyledTextArea = styled.textarea`
    padding: 1em;
    background: rgba(255,255,255,.85);
    color: black;
    font-size: 1.25em;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    resize: vertical;

    border-radius: 10px;

    &:focus {
        outline: 5px solid rgba(236,9,36,.7);
        border-radius: 0px;
    }
`;

const StyledSubmitButton = styled.input`
    margin: 0 auto;
    background-color: rgba(236,9,36,.85);
    color: rgba(255,255,255,1);
    font-weight: 500;
    font-size: 1.5em;

    border-radius: 10px;
    outline: none;

    cursor: pointer;

    
    border: 0;
`;

const StyledLabel = styled.label`
    font-size: 2em;
    font-weight: 200;
    margin: 1em;
`;

const NameContainer = styled.div`
    margin: 0 auto;

`;

const EmailContainer = styled.div`
    margin: .5em auto;   


`;

const SubjectContainer = styled.div`
    margin: .5em auto;
`;

const MessageContainer = styled.div`
    margin: .5em auto;
`;

const SendButtonContainer = styled.div`
    margin-bottom: .5rem;
`;

const ErrorMessage = styled.div`
    margin-top: .5em;
    display: block;
`;

const FormContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: .25rem;

    border: 1px solid rgba(255,255,255,1);
    border-radius: 6px;

    width: ${({isMobile}) => isMobile ? `` : `32em`};

    ${StyledInput} {
        width: ${({isMobile}) => isMobile ? `95%` : `80%`};
        text-align: ${({isMobile}) => isMobile ? `left` : `left`};
        padding: ${({isMobile}) => isMobile ? '.35em .75em' : '.5em 1em'};
    }

    ${StyledTextArea} {
        width: ${({isMobile}) => isMobile ? `95%` : `80%`};
        height: ${({isMobile}) => isMobile ? `6em` : `8em`};
        padding: ${({isMobile}) => isMobile ? '.35em .75em' : '.5em 1em'};
    }

    ${StyledSubmitButton} {
        // background-color: ${({sendState}) => sendState === 'SUCCESS' ? `rgb(0,0,0)` : `rgba(236,9,36,.7)`};
        // color: ${({sendState}) => sendState === 'SUCCESS' ? `rgba(255,255,255,.8)` : `rgba(255,255,255,1)`};
        cursor: ${({sendState}) => sendState === 'SUCCESS' ? `default` : `pointer`};
        padding: ${({isMobile}) => isMobile ? '.75em 1em' : '.5em 1em'};

        &: hover {
            background-color: ${({sendState}) => sendState === 'SUCCESS' ? `` : `rgba(236,9,36,.6)`};
        }
    }
`;

const Container = styled.main`
    margin: 0 auto;
    text-align: center;
    min-height: calc(100vh - 4rem);
    padding-top: 4rem;
`;