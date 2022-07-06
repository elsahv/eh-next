import styled from 'styled-components'


//STYLES
const Wrapper = styled.div`
padding-top: 155px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
#bars {
  background: aquamarine;
  border: solid 2px black;
  width: 500px;
  border-radius: 5px;
  margin: 15px;
  font-size: 20px;
}
@media only screen and (max-width: 500px) {
  #bars {
    width: 320px;
  }
}
`
const Title = styled.h2`
color: black;
text-shadow: 1px 1px 1px teal;
font-size: 40px;
`


const FormInput = styled.input`
height: 50px;
`

const Textarea = styled.textarea`
height: 200px;
padding: 5px 1px;
`

const Button = styled.button`
background: teal;
color: aquamarine;
text-align: center;
cursor: pointer;
padding: 10px;
border: solid 2px black;
border-radius: 5px;
font-size: 20px;  
`

//END STYLES




const ContactForm = () => 
{
  return (
    <div>
        <Wrapper>
        <Title>Contact</Title>
        <FormInput id="bars" name="name" placeholder="name"/>
        <FormInput id="bars" name="email" placeholder="email"/>
        <Textarea id="bars" name="message" placeholder="tell me about your project!"/>
        <Button id="">Send Message</Button>
        </Wrapper>
    </div>
  )
}

export default ContactForm