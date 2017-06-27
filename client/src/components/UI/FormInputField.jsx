import React from 'react'
import { Form } from 'semantic-ui-react'

const FormInputField = (props) => (
  <Form.Field label={props.label} control='input' />
)

export default FormInputField