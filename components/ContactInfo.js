import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa';
import styled from 'styled-components'

//STYLES
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 50px;
a {
  font-size: 30px;
  margin: 20px 10px;
  color: #007ba5;
}
`

const Title = styled.h2`  
margin: 75px 0 0 0;
font-size: 30px;
`

const SmIcons = styled.div`
font-size: 30px;
padding: 10px;
a {
  color: #000;
  margin: 5px;
  &:hover{
    color: #3aa1aa;
    transition: 1s;
  }
}
`


//END STYLES


const ContactForm = () => {
  return (
    <>
    <Title>
    Contact Info
    </Title>
    <Wrapper>
       <p>I am currently available for work, you can reach me at:</p>
        <a href="mailto:elsahovey@gmail.com"> elsahovey@gmail.com</a>
        </Wrapper>
        
        <p>You can also find me on:</p>

      <SmIcons>
       <a className="sm-icon" href="http://github.com/elsahv"> 
            <FaGithub />
            </a>

      <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey"> 
            <FaLinkedin />
            </a>
      <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
            <FaInstagram />
            </a>
            </SmIcons>
    </>
  )
}
export default ContactForm