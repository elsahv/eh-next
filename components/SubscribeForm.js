import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



 const Form = styled.form`
padding-left: 25px;
padding-top: 40px;
`


  const Button = styled.button`
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

 const FormInput = styled.input`
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

 const Title = styled.h4`
  color: aquamarine;
  margin-bottom: 10px;
  margin-left: 17px;
  font-size: 25px;
`



  


 const SuccessState = styled.p`
  color: aquamarine;
`
 const ErrorState = styled.p`
  color: #b00020;
`

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()

    setState('Loading')

    try {
      const response = await axios.post('/api/subscribeApi', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }

  }

  return (
    <>
      <Form onSubmit={subscribe}>
      <p>I write about learning javascript, and document my projects along the way.</p>

      <Title>Subscribe for weekly newsletter</Title>
            <FormInput
              required
              name="email"
              type="email"
              placeholder="Enter email address for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


          <Button
              disabled={state === 'Loading'}
              type="submit"
              className="btn-styles"
              onClick={subscribe}
              >
              Subscribe
          </Button>

        {state === 'Error' && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>Awesome, you are subscribed!</SuccessState>
        )}
      </Form>
    </>

  )
}

export default Subscribe