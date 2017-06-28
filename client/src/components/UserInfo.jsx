import React from 'react'
import { Form, Input, Icon } from 'semantic-ui-react'

const UserInfo = (props) => (
  <div>
    <Form.Group>
     <Form.Field onChange={props.onChange} name="firstName" id='form-input-control-first-name' control={Input}  label='First name' placeholder='First name' width="6" />
      <Form.Field onChange={props.onChange} name="lastName" id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' width="6"/>
    </Form.Group>
    <Form.Group >
      <Form.Field onChange={props.onChange} name="address1" id='form-input-control-address1' control={Input} label='Address Line 1' placeholder='Address Line 1' width="6"/>
      <Form.Field onChange={props.onChange} name="address2" id='form-input-control-address2' control={Input} label='Address Line 2' placeholder='Apt #' width="6" />
    </Form.Group>
    <Form.Group >
      <Form.Field onChange={props.onChange} name="city" id='form-input-city' control={Input} label='City' placeholder='City' width="4"/>
      <Form.Field onChange={props.onChange} name="state" id='form-input-state' control={Input} label='State' placeholder='State' width="4" />
      <Form.Field onChange={props.onChange} name="zip" id='form-input-zip' control={Input} label='Zip' placeholder='94102-3333' width="4" />
      </Form.Group>
      <Form.Group inline>
      <Form.Field onChange={props.onChange} name="areacode" id='form-input-areacode' control={Input} label='Phone Number' placeholder='(xxx)' width="2"/>
      <Form.Field onChange={props.onChange} name="phone1" id='form-input-phone1' control={Input} placeholder='xxx' width="3" />
      <Form.Field onChange={props.onChange} name="phone2" id='form-input-phone1' control={Input} placeholder='xxxx' width="4" />
      <Icon name='at' /><Form.Field onChange={props.onChange} name="phone2" id='form-input-phone1' control={Input} placeholder='xxxx' width="4" />
    
      </Form.Group>

  </div>
)

export default UserInfo;


// iconPosition='left'