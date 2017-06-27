import React from 'react'
import { Input } from 'semantic-ui-react'

const InputField = (props) => (
  <Input placeholder={props.placeholder} id={props.id}/>
)

export default InputField