import Link from 'next/link'
import styled from 'styled-components'

//STYLESimport styled from 'styled-components'

 
 
 
export const Logo = styled.div`
position: fixed;
font-size: 22px;
display: flex;  
align-items: center;
font-weight: 900;
a {
text-decoration: none;
    color: black;
}
@media only screen and (max-width: 1024px) {
    font-size: 28px;
}
@media only screen and (max-width: 768px) {
   font-size: 20px;
   padding: 15px 0 5px 25px;
    `



export const NavLinks = styled.div`
background-color:  #007ba5;
height: 00px;
    position: fixed;
    display:flex;
    font-size: 17px;
    margin-top: 50px;
    a {
        color:  #000;
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
 


//END STYLES


const Header = () => {
  return (
    <>
  
      <NavLinks>
      <Logo href="/">
        Elsa Hovey- Development/ Design
        </Logo>
       <Link href="/">About</Link>
       <Link href="/blog">Blog</Link>
       <Link href="/creative-projects">Creative Projects</Link>
       <Link href="/featured-websites">Featured Websites</Link>
       <Link href="/">Contact</Link>
       </NavLinks>
    </>
  )
}

export default Header