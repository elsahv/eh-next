import styled from 'styled-components'
import Link from 'next/link'
import Sidebar from './Sidebar'



//STYLES
const Wrapper = styled.div`
z-index: 1;
position: absolute;
top: 0;
background: #3aa1aa;
width: 100%;
border-bottom: solid 2px black;
padding: 35px 0 0 55px;
`


const Logo = styled.div`
text-shadow: 1px 1px 1px #000; 
font-size: 20px;
display: flex;  
align-items: center;
font-weight: 900;
margin-right: 400px;
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
    margin-left: 100px;
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
  

// END STYLES

const Header = () => {
  return (
    <Wrapper>

   
      <NavLinks>
      <Logo> 
     <Sidebar />
      <Link href="/">
        Elsa Hovey- Development/ Design
        </Link>
      </Logo> 
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
       <Link href="/featured-websites">Featured Websites</Link>
       <Link href="/creative-projects">Creative Projects</Link>
       <Link href="/blog">Blog</Link>
   </NavLinks>

    </Wrapper>
  )
}

export default Header