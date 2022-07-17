import styled from 'styled-components'

 


export const Portfolio = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
// background: pink;
margin: auto;
`

export const PortfolioTitle = styled.h2`
text-align: center;

@media only screen and (max-width: 1024px) {
}
`

export const WebsiteGrid = styled.div`
display: grid;
grid-template-columns: 400px 400px
;

@media only screen and (max-width: 531px) {
  display: grid;
grid-template-columns: 350px;
}
`

export const WebsiteTitle = styled.h3`
font-size: 20px;
padding-top: 10px;
@media only screen and (max-width: 531px) {
font-size: 18px;
}
`

export const WebsiteDescription = styled.span`
padding: 10px 0;
`


export const Website = styled.div`
background: teal; 
height: 380px;
border-radius: 55px;
 text-align: center;
 margin: 10px;
 border: solid 2px black;

@media only screen and (max-width: 1024px) {
  // margin: 60px; 
}
@media only screen and (max-width: 531px) {
}
`


export const ImageScreenshot = styled.div`
padding: 5px 0;
 .website-screenshot {
  width: 375px;
  height: 250px;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
 }
 @media only screen and (max-width: 531px) {
 .website-screenshot {
  width: 326px;
  height: 250px;
 }
}
`




export const WebsiteTags = styled.div`
font-size: 15px;
padding-bottom: 3px;
@media only screen and (max-width: 1024px) {      
// font-size: 14px;
}
@media only screen and (max-width: 531px) {
font-size: 13px;
}
`

 
 




 