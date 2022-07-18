
import styled from 'styled-components'


export const Wrapper = styled.div`
// background: #3aa1aa;
border-top: solid 2px black;
border-bottom: solid 2px black;
text-align: center;
font-weight: bold;
padding: 100px 0 500px 0;

@media only screen and (max-width: 1024px) {
  padding: auto;
}
@media only screen and (max-width: 531px) {
  padding: 0;
}
`

export const CTA = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 20px;
a {
  font-size: 30px;
  margin: 20px 10px;
  color: #007ba5;
}
p {
  font-size: 20px;
}
@media only screen and (max-width: 500px) {
  a {
   font-size: 25px;
  }
}
`

export const Title = styled.h2`  
margin: 75px 0 0 0;
font-size: 35px;
`

export const SmIcons = styled.div`
font-size: 35px;
padding: 10px;
a {
  color: #000;
  margin: 5px;
  &:hover{
    color: #3aa1aa;
    transition: 1s;
  }
}
`

 