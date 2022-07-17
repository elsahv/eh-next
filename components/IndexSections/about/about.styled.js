import styled from 'styled-components'



//*INTRO SECTION
export const IntroSection = styled.div`
border-top: solid 2px black;
padding: 70px 40px 0 40px;
 display: flex;
justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    // padding: auto;
    margin-top: 20px;
  }
  @media only screen and (max-width: 500px) {
  }
`


export const Intro = styled.h2`
color: #007ba5;
font-size: 35px;
text-align: left;

@media only screen and (max-width: 768px) {
font-size: 40px;
margin-top: 25px;
line-height: 1.5em;
margin-bottom: 20px;
}
@media only screen and (max-width: 500px) {
padding: 0 20px;
margin: 0;
}
`

export const Headline = styled.span`
     cursor: pointer;
     font-size: 25px;

@media only screen and (max-width: 1024px) {
    // text-align: center;
    cursor: pointer;
    font-size: 27px;
    line-height: 1.5em;
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
    margin: 0;
  }
  `

//*ABOUT SECTION

export const About = styled.div`
padding: 40px 20px;
height: 500px;
display: flex;
h2 {
color: #007ba5;
margin-left: 17px;
margin-top: 20px;
margin-bottom: 0; 
font-size: 25px;
}
.portfolio-img {
border: solid 2px black;
width: 250px;
height: 400px;
}
@media only screen and (max-width: 500px) {
height: 1000px;
display: flex;
flex-direction: column;
.portfolio-img {
border: solid 2px black;
margin: 0;
padding: 0;
}
}
`


export const Content = styled.div`
h2 {
text-align: left;
// margin: 10px 20px;
// border-bottom: solid 2px teal;  
}
p {
margin: 15px;
font-size: 20px;
}
@media only screen and (max-width: 500px) {
p {
margin: 0;
padding: 0;
}
}
`
