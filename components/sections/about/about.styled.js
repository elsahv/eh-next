import styled from 'styled-components'



//*INTRO SECTION
export const IntroSection = styled.div`
 display: flex;
justify-content: center;
  flex-direction: column;
padding: 75px 0 0;
background: #fff;
  @media only screen and (max-width: 1024px) {
  margin: auto;
  padding: auto;  
  }
`


export const Intro = styled.h2`
color: #007ba5;
font-size: 35px;
text-align: left;
padding-left: 85px;
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
     text-align: center;
     cursor: pointer;
     font-size: 25px;
     margin: 5px 30px;
@media only screen and (max-width: 1024px) {
    text-align: center;
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

// export const PortfolioImg = styled.div`
// height: 206px;
// width: 500px;
// `

export const About = styled.div`

padding: 55px;
height: 500px;
display: flex;
h2 {
// color: #007ba5;
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
margin: 10px 20px;
border-bottom: solid 2px teal;  
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
