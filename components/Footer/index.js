 
import {
  FooterSection,
  FooterMenu,
  Copyright,
  SmIcons
} from './footer.styled.js'

import { 
  FaGithub,
  FaInstagram,
  FaLinkedin,
  // FaRegNewspaper
 } from 'react-icons/fa';




const Footer = () => {
  return (
    <>
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
            <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
            <FaInstagram />
            </a>

          </SmIcons>
          {/* <SubscribeForm /> */}
          </FooterMenu>
        </FooterSection>
        </>
  )
}

export default Footer  