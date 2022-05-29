import styled from 'styled-components'



export const FooterSection = styled.footer`
display: flex;
justify-content: center;
font-size: 20px;
padding-top: 20px;
width: 100%;
@media only screen and (max-width: 768px) {
    height: 5px;
}
`


export const Copyright = styled.span`
@media only screen and (max-width: 768px) {
font-size: 20px;
text-align: center;
}
`



export const SmIcons = styled.div`
 margin: 0 10px;
 width: 150px;
 text-align: right;
 .sm-icon {
     margin: 2px;
font-size: 25px;
color: #000;
 }
a:hover {
    color: #007ba5;
}
@media only screen and (max-width: 768px) {
    color: yellow;
}
`

