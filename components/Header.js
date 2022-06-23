import Link from 'next/link'
import {
  NavSection,
   NavLinks,
    Logo, 
} from './styles/Header.styled'


const Header = () => {
  return (
    <NavSection>
 <Logo> 
 <Link href="/">
   Elsa Hovey- Development/ Design
   </Link>
   </Logo>  
   <NavLinks>
       <Link href="/skills">Skills</Link>
       <Link href="/creative-projects">Creative Projects</Link>
         {/* dropdown menu-> writing project web dev projects */}
       <Link href="/contact">Contact</Link>
       <Link href="/featured-websites">Featured Websites</Link>
     </NavLinks>
     </NavSection>
  )
}

export default Header