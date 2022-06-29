import styled from 'styled-components'


export const NavSection = styled.nav`
z-index: 30;
    position: absolute;
    margin: 55px;
    cursor: pointer;
        @media only screen and (max-width: 1024px) {
        height: 150px;
    }
            @media only screen and (max-width: 834px) {
               margin: 0;
               padding: 0;
             height: 100px;

            }
`

 
export const Logo = styled.div`
position: fixed;
font-size: 40px;
display: flex;  
align-items: center;
font-weight: 900;
a {
text-decoration: none;
    color: black;
}
@media only screen and (max-width: 1024px) {
    font-size: 28px;
}
@media only screen and (max-width: 768px) {
   font-size: 20px;
   padding: 15px 0 5px 25px;
    `



export const NavLinks = styled.div`

    position: fixed;
    display:flex;
    color: black;
    font-size: 20px;
    margin-top: 50px;
    a {
        color:  #000;
    text-decoration: none;
    margin: 15px;
    }
     a:hover {
        color:  #007ba5;
        transition: 1s;
     }
        @media only screen and (max-width: 1024px) {
        display: none;
                }
`
 