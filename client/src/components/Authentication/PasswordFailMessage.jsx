import React from 'react'
import { Message } from 'semantic-ui-react'

const PasswordFailMessage = () => (
  <div>
    <Message negative>
    <Message.Header>Invalid username or password</Message.Header>
    <p>Please try again or click on Sign Up to create a new account.</p>
    </Message>
  </div>
)

export default PasswordFailMessage;



