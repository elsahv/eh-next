import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa'; 

 import {
  Title,
  CTA,
  SmIcons,
  Wrapper
 } from './contact.styled'

const ContactForm = () => {
  return (
    <>
    <Wrapper>
    <Title>
    Contact Info
    </Title>

    <CTA>
       <p>I am currently available for work, you can reach me at:</p>
        <a href="mailto:elsahovey@gmail.com"> elsahovey@gmail.com</a>
        </CTA>
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
            </Wrapper>
    </>
  )
}
export default ContactForm