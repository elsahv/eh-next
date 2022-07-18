import styled from 'styled-components'



//*INTRO SECTION
export const IntroSection = styled.div`
// background: pink;
// border-top: solid 2px black;
padding: 70px 40px 10px 40px;
 display: flex;
justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    // padding: auto;
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
  }
`


export const Intro = styled.h2`
color: #007ba5;
font-size: 35px;
text-align: left;
padding: 5px 0;

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 600px) {
// font-size: 30px;
// margin-bottom: 10px;
}
`

export const Headline = styled.span`
     font-size: 22px;

@media only screen and (max-width: 834px) {
    // text-align: center;
    cursor: pointer;
    font-size: 22px;
    line-height: 1.5em;
  }
  @media only screen and (max-width: 500px) {
  }
  `

//*ABOUT SECTION

export const About = styled.div`
padding: 40px 20px;
display: flex;
// background: lightgreen;

h2 {
color: #007ba5;
margin-left: 17px;
margin-top: 20px;
font-size: 27px;
}

.portfolio-img {
border: solid 2px black;
width: 250px;
height: 400px;
}

@media only screen and (max-width: 500px) {
display: flex;
flex-direction: column;

h2 {
  margin-top: 40px;
}

  
.portfolio-img {
border: solid 2px black;
margin-left: 50px; 
}
}
`


export const Content = styled.div`
padding-top: 5px;

h2 {
text-align: left;
border-bottom: solid 2px teal;  
}
p {
margin: 10px 15px;
font-size: 20px;
}

@media only screen and (max-width: 834px) {
p {
}
}
`
