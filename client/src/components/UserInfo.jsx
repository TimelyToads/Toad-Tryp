import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const UserInfo = () => (
  <div>
    <Form.Group>
      <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' width="6" />
      <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' width="6"/>
    </Form.Group>
    <Form.Group >
      <Form.Field id='form-input-control-address1' control={Input} label='Address Line 1' placeholder='Address Line 1' width="6"/>
      <Form.Field id='form-input-control-address2' control={Input} label='Address Line 2' placeholder='Apt #' width="6" />
    </Form.Group>
    <Form.Group >
      <Form.Field id='form-input-city' control={Input} label='City' placeholder='City' width="4"/>
      <Form.Field id='form-input-state' control={Input} label='State' placeholder='State' width="4" />
      <Form.Field id='form-input-zip' control={Input} label='Zip' placeholder='94102-3333' width="4" />
      </Form.Group>
  </div>
)

export default UserInfo;