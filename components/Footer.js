// import SubscribeForm from '../components/SubscribeForm' 
import {
  FooterSection,
  FooterMenu,
  SmIcons,
  Copyright
} from './styles/Footer.styled'
import { 
  FaGithub,
  FaLinkedin,
  // FaRegNewspaper
 } from 'react-icons/fa';




const Footer = () => {
  return (
    <FooterSection>
      <FooterMenu>
      <Copyright>Copyright © 2022 Elsa Hovey. All rights reserved.</Copyright> 
       
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
  )
}

export default Footer  