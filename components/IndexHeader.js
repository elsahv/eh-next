import Link from 'next/link'
import styled from 'styled-components'

//FRONT
 const NavSection = styled.nav`
position: fixed;
background: #3aa1aa;
z-index: 7000;
    padding: 50px 0 0 55px;
    cursor: pointer;
        @media only screen and (max-width: 1024px) {
       display: none;
    }
            @media only screen and (max-width: 834px) {
               margin: 0;
               padding: 0;
             height: 100px;

            }
`

 
 const Logo = styled.div`
font-size: 40px;
display: flex;  
align-items: center;
font-weight: 900;
a {
text-decoration: none;
color: #000;
}
@media only screen and (max-width: 1024px) {
    font-size: 28px;
}
@media only screen and (max-width: 768px) {
   font-size: 20px;
   padding: 15px 0 5px 25px;
    `



 const NavLinks = styled.div`
 padding: 10px;   
 text-align: right;
    color: black;
    font-size: 25px;
    a {
        color: #000;
        text-decoration: none;
        margin: 15px;
    }
     a:hover {
        color:  #fff;
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
      <Link href="/">
        Elsa Hovey- Development/ Design
        </Link>
      </Logo> 
   <NavLinks>
   <Link href="#aboutJump">About</Link>
       <Link href="#contactJump">Contact</Link>
   <Link href="/blog">Blog</Link>
   <Link href="/featured-websites">Portfolio</Link>

       {/* <Link href="/creative-projects">Creative Projects</Link> */}
     </NavLinks>

      </NavSection>
    </>
  )
}

export default Header