import React from 'react'
import { Form } from 'semantic-ui-react'

const RadioButon = (props) => (
  <Form.Field label={props.label} control='input' type='radio' name={props.name} />
)

export default RadioButton