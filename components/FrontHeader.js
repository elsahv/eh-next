import Link from 'next/link'
import Sidebar from './Sidebar'

import {
  NavSection,
   NavLinks,
    Logo, 
} from './styles/FrontHeader.styled'


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