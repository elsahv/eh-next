
import styled from 'styled-components'

export const Form = styled.form`  
border: solid 2px black; 
background: pink;
width: 500px;
height: 200px;
`


export const Title = styled.h4`
  color: #007ba5;
  font-size: 25px;
  padding:  5px;
`
  
  
 

export const FormInput = styled.input`
font-size: 15px;
width: 400px;
height: 50px;
background-color: #f9fafb;
border-radius: 4px;
border: 1px solid #6a4feb2e;
font-size: 16px;
margin: 15px;
@media only screen and (max-width: 1024px) {
  width: 200px;
  font-size: 12px;
}
`

export const Button = styled.button`
font-size: 14px;
padding: 0 .5rem;
height: 30px;
border: solid 1px #636262;
border-radius: 4px;
font-weight: bold;
background-color: aquamarine;
color: teal;
cursor: pointer;
width: 150px;
/* :disabled {
  background: #636262;
color: #cbced0;
} */
:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
`



export const SuccessState = styled.p`
  color: green;
  width: 600px;
  margin-left: 10px;
`
export const ErrorState = styled.p`
  color: #b00020;
`