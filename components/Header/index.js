import Link from 'next/link'
import {
  Wrapper,
  Logo,
  NavLinks

} from './header.styled.js' 
  

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

          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
       <Link href="/blog">Blog</Link>
       {/* <Link href="/creative-projects">Creative Projects</Link> */}
       <Link href="/featured-websites">Featured Websites</Link>

   </NavLinks>

    </Wrapper>
  )
}

export default Header