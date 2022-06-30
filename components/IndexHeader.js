import Link from 'next/link'
import Sidebar from './Sidebar'

import styled from 'styled-components'

//FRONT
 const NavSection = styled.nav`
position: fixed;
background: #3aa1aa;
z-index: 7000;
    padding: 50px 0 0 55px;
    cursor: pointer;
        @media only screen and (max-width: 1024px) {
        height: 150px;
    }
            @media only screen and (max-width: 834px) {
               margin: 0;
               padding: 0;
             height: 100px;

            }
`

 
 const Logo = styled.div`
text-shadow: 1px 1px 1px #000; 
font-size: 40px;
display: flex;  
align-items: center;
font-weight: 900;
a {
text-decoration: none;
color: #fff;
}
@media only screen and (max-width: 1024px) {
    font-size: 28px;
}
@media only screen and (max-width: 768px) {
   font-size: 20px;
   padding: 15px 0 5px 25px;
    `



 const NavLinks = styled.div`
    display:flex;
    color: black;
    font-size: 20px;
    a {
text-shadow: 1px 1px 1px  teal; 
        color: #fff;
        text-decoration: none;
        margin: 15px;
    }
     a:hover {
        color:  #007ba5;
        transition: 1s;
     }
        @media only screen and (max-width: 1024px) {
        display: none;
                }
`
  

const Header = () => {
  return (
    <>
     <NavSection>
    
     <Logo> 
     <Sidebar />
      <Link href="/">
        Elsa Hovey- Development/ Design
        </Link>
      </Logo> 
   <NavLinks>
       {/* <Link href="/">About</Link> */}
       <Link href="/">Contact</Link>
       <Link href="/featured-websites">Featured Websites</Link>
       <Link href="/creative-projects">Creative Projects</Link>
       <Link href="/blog">Blog</Link>
     </NavLinks>

      </NavSection>
    </>
  )
}

export default Header