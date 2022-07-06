import styled from 'styled-components'


//STYLES
const Wrapper = styled.div`
display: flex;
justify-content: center;
@media only screen and (max-width: 768px) {
  display: flex;
justify-content: center;
flex-direction: column;
width: 10px;
}
 `

const FormInput = styled.input`
height: 50px;
padding: 10px;
background: aquamarine;
border: solid 2px black;
width: 450px;
border-radius: 5px;
margin: 15px;
font-size: 20px;
@media only screen and (max-width: 768px) {
width: 350px;
}
`

 

const Button = styled.button`
background: aquamarine;
cursor: pointer;
margin-top: 20px;
border: solid 2px black;
border-radius: 5px;
height: 35px;
padding: 5px;
  span {
  color: teal;
  font-size: 17px;  
 }
 @media only screen and (max-width: 768px) {
  width: 100px;
  display: flex;
  margin-left: 125px;
 }

`

//END STYLES




const SubscribeForm = () => 
{
  return (
    <div>
        <Wrapper>
        <FormInput name="email" placeholder="enter email address"/>
        <Button>
          <span>
          Subscribe
          </span>
          </Button>
        </Wrapper>
    </div>
  )
}

export default SubscribeForm