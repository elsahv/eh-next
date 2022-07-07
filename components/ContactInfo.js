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
padding-top: 150px;
a {
  font-size: 25px;
  margin: 20px 10px;
  color: #000;
}
`

const Title = styled.h2`
margin: 15px;
`
//END STYLES


const ContactForm = () => {
  return (
    <>
    <Title>
    Contact Info
    </Title>
    <Wrapper>
        <a href="mailto:elsahovey@gmail.com">email me at: elsahovey@gmail.com</a>
        
       <a className="sm-icon" href="http://github.com/elsahv"> 
            <FaGithub />
            </a>

      <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey"> 
            <FaLinkedin />
            </a>
      <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
            <FaInstagram />
            </a>
            </Wrapper>
    </>
  )
}
export default ContactForm