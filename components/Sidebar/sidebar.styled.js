
import styled from 'styled-components'




export const SidebarWrapper = styled.div`
text-align: center;
padding: 30px;
@media only screen and (max-width: 1024px) {
position: fixed;
top: 0;
z-index: 7500;
background: #3aa1aa;
border: solid 2px black;
width: 100%;
}
@media only screen and (max-width: 500px) {
}
`
 
export const Logo = styled.div`
font-weight: bold;
font-size: 25px;
margin: 5px;
a {
   color: #000;
   text-decoration: none;
}
@media only screen and (max-width: 500px) {
}
 `

export const NavLinks = styled.div`
font-size: 18px;
a {
   color: #000;
   text-decoration: none;
   margin: 5px;   
}
@media only screen and (max-width: 500px) {
font-size: 15px;
}
 `




  

    