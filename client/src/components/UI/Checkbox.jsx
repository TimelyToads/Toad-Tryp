import React from 'react'
import { Form } from 'semantic-ui-react'

const Checkbox = (props) => (
  <Form.Field label={props.label} control='input' type='checkbox' />
)

export default Checkbox