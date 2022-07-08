import Link from 'next/link'
import Image from 'next/image'

import {
  NavSection,
  Logo,
  NavLinks,
  JtImg
 } from './indexHeader.styled'


  


const indexHeader = () => {
  return (
    <>
     <NavSection>
    
     <Logo> 
      <Link href="/">
        Elsa Hovey- Development/ Design
        </Link>
      </Logo> 
   <NavLinks>
      <Link href="/">About</Link>
      <Link href="/#contact">Contact</Link>
      <Link href="/featured-websites">Featured Websites</Link>
      <Link href="/blog">Blog</Link>


       {/* <Link href="/creative-projects">Creative Projects</Link> */}
     </NavLinks>

      </NavSection>

      <JtImg>
               <Image
                 className='jt-img'
                 src='/images/joshuatreeabout.png'
                 alt='joshua tree'
                 width="970"
                 height="460"
                 />
                 </JtImg>
    </>
  )
}

export default indexHeader