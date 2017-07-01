import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const UsernamePassword = (props) => (
  <div>
    <Form.Group>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="username" id='form-input-control-username' 
        control={Input}  label='Username' placeholder='toadsRKool' width="6" value={props.user.username}/>
      <Form.Field disabled={props.disabled}  onChange={props.onChange} name="password" type="password" id='form-input-control-password' 
      control={Input} label='Password' placeholder='P@$$W0RD' width="6" value={props.user.password}/>
    </Form.Group>
  </div>
)

export default UsernamePassword;

