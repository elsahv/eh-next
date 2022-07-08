import styled from 'styled-components'


 export const Form = styled.form`
padding: 50px;
background: #3aa1aa;
border: solid 2px black;
margin: 50px 0;
`


  export const Button = styled.button`
  margin-left: 17px;
  margin-top: 15px;
    font-size: 17px;
    padding: .5rem;
    border: solid 1px #636262;
    border-radius: 4px;
    font-weight: bold;
    background-color: aquamarine;
    color: teal;
    cursor: pointer;
    /* :disabled {
      background: #636262;
  color: #cbced0;
    } */
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
`

 export const FormInput = styled.input`
 margin-left: 17px;
display: flex;
justify-content: space-between;
font-size: 15px;
display: block;
width: 300px;
background-color: #f9fafb;
padding: 0.5rem; 
border-radius: 4px;
border: 1px solid #6a4feb2e;
font-size: 16px;
@media only screen and (max-width: 1024px) {
  width: 200px;
  font-size: 12px;
}
`

 export const Title = styled.h4`
  margin-bottom: 10px;
  margin-left: 17px;
  font-size: 25px;
`



  


 export const SuccessState = styled.p`
  color: aquamarine;
`
 export const ErrorState = styled.p`
  color: #b00020;
`
