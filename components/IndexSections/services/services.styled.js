import styled from 'styled-components'




export const Wrapper = styled.div`
// background: silver;
text-align: left;
margin-right: 2px;

h3 {
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
padding-left: 20px;
}

ul {
  // background: teal;
margin: 25px;
// padding-left: 25px;
padding-bottom: 15px;
list-style: none;  
}

li {
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 15px; 
}
@media only screen and (max-width: 500px) {
} 
`


export const SkillsTitle = styled.h2`
font-weight: bold;
border-bottom: solid 2px teal;
color: #007ba5;
font-size: 27px;
margin-left: 30px;
margin-right: 20px;
padding-left: 15px;

@media only screen and (max-width: 500px) {
}
`

