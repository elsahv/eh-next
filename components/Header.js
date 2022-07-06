import styled from 'styled-components'
import Link from 'next/link'



//STYLES
const Wrapper = styled.div`
background: #3aa1aa;
border-bottom: solid 2px black;
z-index: 1;
position: absolute;
top: 0;
width: 100%;
padding: 25px 0 0 85px;
@media only screen and (max-width: 1024px) {
  display: none;
}
`


const Logo = styled.div`
font-size: 35px;
display: flex;  
align-items: center;
font-weight: 900;
margin-right: 400px;
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
    color: black;
    font-size: 25px;
    margin-left: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    a {
      color: #000;
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

   
      <Logo> 
      <Link href="/">
        Elsa Hovey- Development/ Design
        </Link>
      </Logo> 
      <NavLinks>

          <Link href="/#aboutJump">About</Link>
          <Link href="/#contactJump">Contact</Link>
       <Link href="/blog">Blog</Link>
       {/* <Link href="/creative-projects">Creative Projects</Link> */}
       <Link href="/featured-websites">Portfolio</Link>

   </NavLinks>

    </Wrapper>
  )
}

export default Header