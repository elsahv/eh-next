import styled from "styled-components";


export const LeftSection = styled.div`
grid-area: a;
border-right: solid 2px black;
display: flex;
justify-content: center;
padding: 70px;
height: 737px;
  .portfolio-img {
    width: 290px;
    height: 450px;
    border: solid 2px black;  
  }

@media only screen and (max-width: 968px) {
  height: 798px;
  padding: auto;
  margin: auto;
  .portfolio-img{
    width: 200px;
  height: 300px;
  margin-right: 40px;
  
}

@media only screen and (max-width: 768px) {
  border: none;

  .portfolio-img{
    width:  210px;
    height: 300px;
    
}
`

export const Title = styled.h2`
 
@media only screen and (max-width: 768px) {
}
`


export const Bio = styled.div`
line-height: 2em;
font-size: 18px;
margin: 5px 30px;
padding-top: 25px;

@media only screen and (max-width: 968px) {
 position: absolute;
 width: 300px;      
 font-size: 16px;
 margin-top: 290px;
 padding: auto;
}

@media only screen and (max-width: 768px) {
  padding: 1x 0;
  text-align: center;
    
}
`



export const RightSection = styled.div`
grid-area: b; 
display: flex;
justify-content: center;
padding-top: 55px;
@media only screen and (max-width: 768px) {
  margin-top: 140px;
}
`

