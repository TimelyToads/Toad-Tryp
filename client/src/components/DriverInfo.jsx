import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const DriverInfo = () => (
  <div>
    <Form.Group>
      <Form.Field id='form-input-control-dl_number' control={Input} label='Drivers License(DL) Number' placeholder='####-####-####' width="6" />
      <Form.Field id='form-input-control-dl_state' control={Input} label='DL State' placeholder='CA' width="2"/>
    </Form.Group>
    <Form.Group >
      <Form.Field id='form-input-dl_exp_month' control={Input} label='DL Expiration Month' placeholder='July' width="3"/>
      <Form.Field id='form-input-dl_exp_day' control={Input} label='DL Expiration Day' placeholder='04' width="3" />
      <Form.Field id='form-input-dl_exp_year' control={Input} label='DL Expiration Year' placeholder='2017' width="3" />
    </Form.Group>
    <Form.Group >
      <Form.Field id='form-input-control-address1' control={Input} label='Address1' placeholder='Address Line 1' width="6"/>
      <Form.Field id='form-input-control-address2' control={Input} label='Address2' placeholder='Apt #' width="4" />
    </Form.Group>
  </div>
)

export default DriverInfo;