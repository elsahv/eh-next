import styled from 'styled-components'


//STYLES
export const Wrapper = styled.div`
z-index: 20;
  height: 100vh;
  list-style: none;   
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'a b';

@media only screen and (max-width: 768px) {
  list-style: none;   
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
    padding-top: 320px;
  }
    @media only screen and (max-width: 968px) {
    }
    @media only screen and (max-width: 768px) {
    }
` 


//*RIGHT
export const HomeRight = styled.div`
z-index: 20;

  grid-area: b;
  display: flex; 
  flex-direction: column;
  margin: 0 0 0 15px;
  // border-left: solid 2px #007ba5;
`



//*INTRO SECTION
export const IntroSection = styled.div`
background: aquamarine;
display: flex;
justify-content: center;
  flex-direction: column;
overflow-y: scroll;
scrollbar-color: blue;
padding: 85px 25px;
`


export const Intro = styled.h2`
  color: #007ba5;
  font-size: 35px;
  text-align: center;
@media only screen and (max-width: 768px) {
  color: #007ba5;
  font-size: 40px;
  margin-top: 25px;
  line-height: 1.5em;
  margin-bottom: 20px;
}
`

export const Headline = styled.span`
       color: #007ba5;
       text-align: center;
       cursor: pointer;
       font-size: 25px;
       margin: 5px 30px;
@media only screen and (max-width: 768px) {
      color: aquamarine;
      text-align: center;
      cursor: pointer;
      font-size: 27px;
      line-height: 1.5em;
    }
    `

//*ABOUT SECTION
export const About = styled.div`
background: pink;
height: 500px;

`

//*SKILLS SECTION
export const Skills = styled.div`
background: aquamarine;
`

//*TOOLS SECTION
export const Tools = styled.div`
background: pink;
`

//*CONTACT SECTION
export const Contact = styled.div`
background: aquamarine;
`



