  
import React, {useState} from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import styled from 'styled-components'




 const SidebarWrapper = styled.div`
background: teal;
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border: solid 2px black;    

.nav-menu {
  background-color: aquamarine;
  width: 100%;
  height: 60vh; 
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 100%;
  transition: 850ms;
  background: teal;
  z-index: 1000;
}
.nav-menu.active {
  right: 0;
  transition: 350ms;
}
.navbar-toggle {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}


@media only screen and (max-width: 1024px) {
position: absolute;
top: 0;
z-index: 7500;
}
`
 
 const Logo = styled.div`
font-size: 30px;
@media only screen and (max-width: 768px) {
    font-size: 20px;
    margin: 0;
    padding: 20px;
}
`


 const MenuOpen = styled.div`
display: none;
@media only screen and (max-width: 1024px) {
    display: block;
    margin: 50px 15px;
    font-size: 2em;
    cursor: pointer;
}
`   

const MenuClose = styled.div`

  font-size: 2em;
  margin: 25px;
  cursor: pointer;
   
`   
export const NavLinks = styled.div`
margin: 25px;
display: flex;
justify-content: center;
flex-direction: column;
font-size: 25px;  
a {
  color: #fff;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
padding-left: 20px;
margin: auto;
}
`

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
            <Link href="/">
                  <a>About</a>
                </Link>
                <Link href="/">
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