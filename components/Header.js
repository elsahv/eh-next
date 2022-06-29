import Link from 'next/link'
import styled from 'styled-components'

//STYLES

const SmLink = styled.div`
position: absolute;
display: flex;
color: #3aa1aa;
margin: 60px;
padding: 15px;
  right: 0;
top: 0;
li {
  list-style: none;

}
`

const HeaderSection = styled.div`
background: #3aa1aa;
border: solid 2px black;
margin: 45px;
position: absolute;
top: 0;
padding: 20px;
` 

const Logo = styled.div`
font-weight: bold;
font-size: 20px;
  a {
  color:  #000;
  text-decoration: none;
}
`



const NavLinks = styled.div`
padding-top: 5px;
font-size: 15px;
a {
  text-decoration: none;
  margin: 0 10px;
  color: #000;
}
`

//END STYLES






 

const Header = () => {
  return (
    <>
    
    <SmLink>
    <ul>
      <li>instagram</li>
      <li>fb</li>
      <li>linkedin</li>
      <li>github</li>
      <li>search</li>
    </ul>
    </SmLink>

    <HeaderSection>
     <Logo>
     <Link href="/">
      Elsa Hovey- Development/ Design
      </Link>
      </Logo>

       <NavLinks>
       <Link href="/">About</Link>
        <Link href="/featured-websites">Featured Websites</Link>
        <Link href="/creative-projects">Creative Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/">Contact</Link>
        </NavLinks>  


    

    </HeaderSection>
    </>

  )
}

export default Header