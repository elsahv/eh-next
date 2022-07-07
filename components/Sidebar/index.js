  
import React, {useState} from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {
  SidebarWrapper,
  MenuOpen,
  Logo,
  MenuClose,
  NavLinks

} from './sidebar.styled.js'




const Sidebar = () => {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <SidebarWrapper>
    <MenuOpen>
    <FaBars onClick={showSidebar}/>
    </MenuOpen>
    <Logo>
    Elsa Hovey- Development/ Design
    </Logo>

   <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <div className="nav-menu-items" onClick={showSidebar}>
        <div className="navbar-toggle">
          <MenuClose>
            <AiOutlineClose />
          </MenuClose>
        </div>


        <NavLinks>
            <Link href="/#about">
                  <a>About</a>
                </Link>
                <Link href="/#contact">
                  <a>Contact</a>
                </Link>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
                <Link href="/featured-websites">
                  <a>Featured Websites</a>
                </Link>
              </NavLinks>
      </div>

   </nav>



    </SidebarWrapper>
    </>
  )
}

export default Sidebar