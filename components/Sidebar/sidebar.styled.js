
import styled from 'styled-components'




export const SidebarWrapper = styled.div`
text-align: center;
padding: 20px;
@media only screen and (max-width: 1024px) {
position: fixed;
top: 0;
z-index: 7500;
background: #3aa1aa;
border: solid 2px black;
width: 100%;


}
@media only screen and (max-width: 500px) {
   height: 130px;
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
   font-size: 19px;
}
 `

export const NavLinks = styled.div`
padding-left: 45px;
font-size: 20px;
a {
   color: #000;
   text-decoration: none;
   margin: 15px 5px;
}
@media only screen and (max-width: 500px) {
   font-size: 15px;

}
 `




  

    