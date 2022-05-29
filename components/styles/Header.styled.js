import styled from 'styled-components'


export const NavSection = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;

        @media only screen and (max-width: 968px) {
        height: 110px;
        padding-top: 15px;
        }
            @media only screen and (max-width: 768px) {
               width: 100%;
               height: 180px;
               display: flex;
               flex-direction: column;
               justify-content: center;
               margin: 0;
               padding: 0;
            }
`

 
export const Logo = styled.div`
font-size: 20px;
display: flex;  
align-items: center;
padding: 25px 40px 0 0;
font-weight: 900;
a {
text-decoration: none;
    color: black;
}

@media only screen and (max-width: 968px) {
    font-size: 20px;
    padding: 0 20px;    
}

@media only screen and (max-width: 768px) {
   font-size: 25px;
   height: 120px;
   padding: 15px 0 5px 25px;
   border-bottom: solid 2px black;
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


     @media only screen and (max-width: 968px) {
           display: flex;
           margin: 10px;
     }
        @media only screen and (max-width: 768px) {
            font-size: 20px;
            display: flex;
            justify-content: center;
            margin: 5px;
            padding: 0;
                }
`

// export const Button = styled.button`
// font-size: 17px;    
// background: #3aa1aa;
// border: solid 2px black;
// height: 40px;
// width: 180px;
// cursor: pointer;
// margin: 40px 0 0 30px; 
// transition: all 0.4s ease;
// &:hover {
//     transform: translateY(-25%);
//     color: aquamarine;
//  }
//      @media only screen and (max-width: 968px) {
//         height: 30px;
//         padding: auto;
//         margin: auto;
//      }
// @media only screen and (max-width: 768px) {
//     position: relative;
//     top: 0;
//     background: #fff;
//     border: none;
//     font-size: 20px;
//     width: 100%;
//     margin: 3px;
//     }
// `