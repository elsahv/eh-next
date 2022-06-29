// import SubscribeForm from '../components/SubscribeForm' 
import {
  FooterSection,
  FooterMenu,
  SmIcons,
  Copyright,
  ContactForm
} from './styles/Footer.styled'
import { 
  FaGithub,
  FaLinkedin,
  // FaRegNewspaper
 } from 'react-icons/fa';




const Footer = () => {
  return (
    <>
     <ContactForm>

     </ContactForm>

     <FooterSection>

      <FooterMenu>
      <Copyright>
        Copyright © 2022. All rights reserved.
        </Copyright> 
       
          <SmIcons>
            <a className="sm-icon" href="http://github.com/elsahv"> 
            <FaGithub />
            </a>
            <a className="sm-icon" href="http://linkedin.com/in/elsa-hovey"> 
            <FaLinkedin />
            </a>
            {/* <a className="sm-icon" href="http://linkedin.com/in/elsa-hovey"> 
            <FaRegNewspaper />
            </a> */}

          </SmIcons>
          {/* <SubscribeForm /> */}
          </FooterMenu>
        </FooterSection>
        </>
  )
}

export default Footer  