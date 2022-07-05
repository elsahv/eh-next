import styled from 'styled-components'



export const FooterSection = styled.footer`
margin-top: 100px;
background: teal;
width: 100%;
height: 100px;
border-top: solid 2px black;
@media only screen and (max-width: 768px) {

}
`


export const FooterMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
color: #000;
@media only screen and (max-width: 768px) {
    
}
`




export const Copyright = styled.span`
margin-left: 100px;
font-size: 22px;
@media only screen and (max-width: 768px) {
font-size: 16px;
text-align: center;
}
`



export const SmIcons = styled.div`
 margin: 0 30px;
padding-top: 8px;
 width: 150px;
 .sm-icon {
     margin: 3px;
font-size: 25px;
color: #000;
 }
a:hover {
    color: #007ba5;
}
@media only screen and (max-width: 768px) {
}
`
 