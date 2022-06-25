import styled from 'styled-components'


export const NavSection = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
        @media only screen and (max-width: 1024px) {
        padding-top: 15px;
        height: 100px;
    }
            @media only screen and (max-width: 768px) {
               margin: 0;
               padding: 0;
            }
`

 
export const Logo = styled.div`
// background: green;
font-size: 20px;
display: flex;  
align-items: center;
padding: 25px 40px 0 0;
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
    margin: 23px 10px;
    height: 50px;
    width: 500px;
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    color: black;
    font-size: 17px;    
    padding-top: 5px;
    a {
        color:  #000;
    text-decoration: none;
    }
     a:hover {
        color:  #007ba5;
        transition: 1s;
     }
        @media only screen and (max-width: 1024px) {
        display: none;
                }
`
 