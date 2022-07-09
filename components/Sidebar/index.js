import Link from 'next/link'
import {
  SidebarWrapper,
  Logo,
  NavLinks
} from './sidebar.styled.js'




const Sidebar = () => {
  return (
    <>
    <SidebarWrapper>
    <Logo>
    <Link href="/">Elsa Hovey- Development/ Design</Link>
    </Logo>
    <NavLinks>
      <Link href="/">About</Link>
      <Link href="/#contact">Contact</Link>
      <Link href="/portfolio">Portfolio</Link>
    </NavLinks>
    </SidebarWrapper>
    </>
  )
}

export default Sidebar