import styled from 'styled-components'


//STYLES
 const FooterSection = styled.footer`
background: #fff;
width: 100%;
border-top: solid 2px black;
@media only screen and (max-width: 768px) {

}
`


 const FooterMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
color: #000;
@media only screen and (max-width: 768px) {
    
}
`




 const Copyright = styled.span`
margin-left: 100px;
font-size: 22px;
@media only screen and (max-width: 768px) {
font-size: 16px;
text-align: center;
}
`



 const SmIcons = styled.div`
 margin: 0 30px;
padding-top: 8px;
 width: 150px;
 .sm-icon {
     margin: 3px;
font-size: 25px;
color: #000;
 }
a:hover {
    color: #007ba5;
}
@media only screen and (max-width: 768px) {
}
`
//END STYLES
 


import { 
  FaGithub,
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