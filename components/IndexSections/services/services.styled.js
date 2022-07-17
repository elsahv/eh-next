import styled from 'styled-components'




export const Wrapper = styled.div`
border-top: solid 2px black;
border-bottom: solid 2px black;
padding: 35px;
h3 {
text-align: left;
text-decoration: underline;
font-size: 25px;
color: teal;
font-weight: bold;

}
ul {
   margin: 25px;
text-align: left;
padding-left: 25px;

}
li {
  font-size: 20px;
  margin: 5px;
  // color: teal;
  // font-weight: bold;
  margin: 10px 0;
}
@media only screen and (max-width: 500px) {
} 
`


export const SkillsTitle = styled.h2`
text-align: center;
font-size: 25px;
text-decoration: underline;
@media only screen and (max-width: 500px) {
}
`

