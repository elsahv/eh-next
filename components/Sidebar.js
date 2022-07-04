import { FaBars } from 'react-icons/fa';
import {
    // Wrapper,
    Logo,
    MenuOpen,
    // MenuClose,
    // SidebarLinks,
    SidebarWrapper
  } from './styles/Sidebar.js'

const Sidebar = () => {
  return (
    <>
    <SidebarWrapper>
    <MenuOpen>
    <FaBars />
    </MenuOpen>
    <Logo>
    Elsa Hovey- Development/ Design
    </Logo>
    </SidebarWrapper>
    </>
  )
}

export default Sidebar