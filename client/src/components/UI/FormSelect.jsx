import React from 'react'
import { Form } from 'semantic-ui-react'

const FormSelect = (props) => (
  <Form.Field label={props.label} control='select'>
    <option value={props.value[0]}>{props.displayOption[0]}</option>
    <option value={props.value[1]}>{props.displayOption[1]}</option>
  </Form.Field>
)

export default FormSelect