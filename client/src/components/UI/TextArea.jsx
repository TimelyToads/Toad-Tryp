import React from 'react'
import { Form } from 'semantic-ui-react'

const TextArea = (props) => (
  <Form.Field label={props.label} control='textarea' rows={props.rows} />)

export default TextArea