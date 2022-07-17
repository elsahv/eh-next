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
      <Link href="/#about">About</Link>
      <Link href="/#portfolio">Portfolio</Link>
      <Link href="/#contact">Contact</Link>
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