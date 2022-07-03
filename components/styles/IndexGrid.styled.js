import styled from 'styled-components'


//STYLES
export const Wrapper = styled.div`
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
 
`


export const HomeLeft = styled.div`
background: #3aa1aa;
position: fixed;
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

export const JtImg = styled.div`
padding-top: 500px;
@media only screen and (max-width: 1024px) {
  width: 100%;
  height: 200px;
  padding: 0;
}
`



//*RIGHT
export const HomeRight = styled.div`
  grid-area: b;
  display: flex; 
  flex-direction: column;
  margin: 0 0 0 10px;
  border-left: solid 2px #000;
@media only screen and (max-width: 1024px) {
  width: 100%;
  margin: auto;
  padding-top: 60px;
}
`



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
// background: pink;
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
`

export const Headline = styled.span`
       color:  #3aa1aa;
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
.portfolio-img {
  border: solid 2px black;
}
  `
 

export const Content = styled.div`
h2 {
  text-align: left;
  margin: 10px 20px;
  color: #007ba5;
  border-bottom: solid 2px teal;  
}
p {
  margin: 15px;
color: teal;
font-size: 20px;
}
`


//*SKILLS SECTION

export const SkillsTitle = styled.h2`
text-align: center;
text-decoration: underline;

`



export const Skills = styled.div`
border-top: solid 2px black;
border-bottom: solid 2px black;
padding: 35px;
h3 {
text-align: left;
text-decoration: underline;
font-size: 25px;

}
ul {
  list-style: none;
   margin: 25px;
text-align: left;

}
li {
  font-size: 20px;
  margin: 5px;
}
`





//*TOOLS SECTION
export const ToolsTitle = styled.h2`
text-align: center;
background: silver; 
padding: 20px;
`

export const ToolsWrapper = styled.div`
display: flex;
justify-content: center;
background: silver; 
`

export const Grid = styled.div`
width: 550px;
margin: 35px;
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
 
}  
`


 











 
//*CONTACT SECTION
export const Contact = styled.div`
background: #3aa1aa;
border-top: solid 2px black;
border-bottom: solid 2px black;
text-align: center;
font-weight: bold;
height: 600px;
h2 {
  padding: 10px;
}
`



