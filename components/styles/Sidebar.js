import styled from 'styled-components'




export const SidebarWrapper = styled.div`
background: teal;
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border: solid 2px black;    
@media only screen and (max-width: 1024px) {
position: absolute;
top: 0;
z-index: 7500;
}
`
 
export const Logo = styled.div`
font-size: 30px;
@media only screen and (max-width: 768px) {
    font-size: 20px;
}
`


export const MenuOpen = styled.div`
display: none;
@media only screen and (max-width: 1024px) {
    display: block;
    margin: 50px 15px;
    font-size: 2em;
}
`   