import React from 'react'
import { Form, Input, Icon } from 'semantic-ui-react'

const UserInfo = (props) => (
  <div>
    <Form.Group>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="firstName" id='form-input-control-first-name' 
        control={Input}  label='First name' placeholder='First name' width="6" value={props.user.first_name}/>
      <Form.Field disabled={props.disabled}  onChange={props.onChange} name="lastName" id='form-input-control-last-name' 
      control={Input} label='Last name' placeholder='Last name' width="6" value={props.user.last_name}/>
    </Form.Group>
    <Form.Group >
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="address1" id='form-input-control-address1' 
      control={Input} label='Address Line 1' placeholder='Address Line 1' width="6" />
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="address2" id='form-input-control-address2' control={Input} label='Address Line 2' placeholder='Apt #' width="6" />
    </Form.Group>
    <Form.Group >
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="city" id='form-input-city' control={Input} label='City' placeholder='City' width="4"/>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="state" id='form-input-state' control={Input} label='State' placeholder='State' width="4" />
      <Form.Field disabled={props.disabled} onChange={props.onChange} name="zip" id='form-input-zip' control={Input} label='Zip' placeholder='94102-3333' width="4" />
    </Form.Group>
        <Form.Group inline>
        <Form.Field disabled={props.disabled} onChange={props.onChange} name="phone" id='form-input-phone' control={Input} 
        label='Phone Number' placeholder='(xxx) xxx-xxxx' width="6" value={props.user.phone_number} />
      </Form.Group>

  </div>
)

export default UserInfo;


// iconPosition='left'