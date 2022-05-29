import styled from 'styled-components'


export const Title = styled.div`
 font-size: 35px;
    color: #007ba5;
    text-align: center;
    text-decoration: underline;
    padding-top: 105px;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
 `

 export const ProjectLink = styled.div`
 text-align: center;
 margin: 45px;
 cursor: pointer;
 a {
   text-decoration: none;
  color: aquamarine;
 font-size: 30px;
 }
 a:hover {
   color: #fff;
   transition: 1s;
   text-decoration: underline;
 }
 }
 @media only screen and (max-width: 768px) {
   margin: 15px;
   a{
   }
  }
 `


 export const LeftSide = styled.div`
 border-right: solid 2px black;
 @media only screen and (max-width: 768px) {
border: none;
}
 `
 export const RightSide = styled.div`
 
 `



//END STYLES