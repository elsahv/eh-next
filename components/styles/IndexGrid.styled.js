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

 




//*TOOLS SECTION
export const ToolsTitle = styled.h2`
text-align: center;
font-size: 25px;
text-decoration: underline; 
padding: 20px;
@media only screen and (max-width: 500px) {
}
`

export const ToolsWrapper = styled.div`
background: silver;
display: flex;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 500px) {
 
}
`

export const Grid = styled.div`
 margin: 20px 205px;
display: grid;
grid-template-columns: repeat(4, 1fr);
  .img {
    background: teal;
    border-radius: 25px;
    width: 85px;
    height: 85px;
}
h2 {
  font-size: 15px;
  padding: 5px;
  font-size: 15px;
}
@media only screen and (max-width: 768px) {
margin: auto;
padding: auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
  .img {
    background: teal;
    border-radius: 25px;
    width: 55px;
    height: 55px;
}
h2 {
  padding: 5px;
  font-size: 10px;
}
}  
`

//WEBSITE SECTION
export const WebsiteSection = styled.div`
background: pink;
width: 100%;
border-top: solid 2px black; 
`
export const WebsiteGrid = styled.div`
 text-align: center;
 margin: 20px;
 
`



 
 




 