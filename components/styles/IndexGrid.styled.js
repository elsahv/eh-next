import styled from 'styled-components'


//STYLES
export const Wrapper = styled.div`
background: silver;
position:absolute;
top: 0;
z-index: 10000;   
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'a b';

@media only screen and (max-width: 1024px) {
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-rows: 695px;
  grid-template-areas:
  'a'
  'b';
}
@media only screen and (max-width: 500px) {
}
`


export const HomeLeft = styled.div`
background: #3aa1aa;
position: fixed;
border-right: solid 2px black;
  .jt-img {
    grid-area: a;
    border-right: solid 2px black;
  }
    @media only screen and (max-width: 1024px) {
      display: none;
       
    }
    @media only screen and (max-width: 768px) {
    }
` 
 


//*RIGHT
export const HomeRight = styled.div`
  grid-area: b;
  display: flex; 
  flex-direction: column;
  margin: 0 0 0 10px;
  border-left: solid 2px #000;
  background: #fff;
  margin-left: 22px;
  
@media only screen and (max-width: 1024px) {
  width: 100%;
  margin: auto;
  padding-top: 60px;
}
@media only screen and (max-width: 500px) {
}
`

 
 

//WEBSITE SECTION
export const WebsiteGrid = styled.div`
display: grid;
grid-template-columns: 1fr;

@media only screen and (max-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`

export const PortfolioTitle = styled.h2`
text-align: center;
border-top: solid 2px black; 
color: teal;
font-size: 30px;
padding-top: 15px;
@media only screen and (max-width: 1024px) {
padding: 25px;
}
`

export const WebsiteTitle = styled.h3`
font-size: 25px;
padding: 5px;
`

export const WebsiteDescription = styled.span`
padding: 15px;
`


export const Website = styled.div`
background: teal; 
border-radius: 55px;
 text-align: center;
 margin: 50px 250px;
 border: solid 2px black;

@media only screen and (max-width: 1024px) {
  margin: 25px;
}
 


`

export const WebsiteScreenshot = styled.div`
  margin: 10px;
 .website-screenshot {
  border: solid 2px black;
 }
`



export const WebsiteTags = styled.div`
 padding-bottom: 10px;
@media only screen and (max-width: 1024px) {
font-size: 14px;
}
`

 
 




 