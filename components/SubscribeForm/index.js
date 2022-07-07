import React, { useState } from 'react'
import axios from 'axios'

import {
  Form,
  Button,
  FormInput,
  Title,
  SuccessState,
  ErrorState
} from './subscribeForm.styled.js'




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