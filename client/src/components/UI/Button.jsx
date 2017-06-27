import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const Button = (props) => (
  <Form.Field id={props.id} control={Button} content={props.buttonText}  />
)

export default Button