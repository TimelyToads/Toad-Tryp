import React from 'react'
import { Form, Input, Icon } from 'semantic-ui-react'
import UsernamePassword from './UsernamePassword.jsx'

const UserInfo = (props) => (
  <div>
    <UsernamePassword onChange={props.onChange} disabled={props.disabled} user={props.user}/>
    <Form.Group>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="first_name" id='form-input-control-first-name' 
        control={Input}  label='First name' placeholder='Toady' width="6" value={props.user.first_name}/>
      <Form.Field disabled={props.disabled}  onChange={props.onChange} name="last_name" id='form-input-control-last-name' 
      control={Input} label='Last name' placeholder='Toad' width="6" value={props.user.last_name}/>
    </Form.Group>
    <Form.Group>
        <Form.Field disabled={props.disabled} onChange={props.onChange} name="phone_number" id='form-input-phone' control={Input} 
        label='Phone Number' placeholder='(xxx) xxx-xxxx' width="6" value={props.user.phone_number || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name="email" id='form-input-email' control={Input} 
          label='Email' placeholder='@Email' width="6" value={props.user.email} />
      </Form.Group>
  </div>
)

export default UserInfo;

