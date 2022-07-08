
import styled from 'styled-components'




export const SidebarWrapper = styled.div`
background: #fff;
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
 

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
 background: #3aa1aa;
 border: solid 2px black;
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

export const Logo = styled.div`
font-size: 30px;
display: none;
@media only screen and (max-width: 768px) {
   display: block;
   font-size: 20px;
   margin: 0;
   padding: 20px;
}
`


export const MenuOpen = styled.div`
display: none;
@media only screen and (max-width: 1024px) {
   display: block;
   margin: 50px 15px;
   font-size: 2em;
   cursor: pointer;
}
`   

export const MenuClose = styled.div`
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