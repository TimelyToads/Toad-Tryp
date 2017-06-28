import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const DriverInfo = (props) => (
  <div>
    <Form.Group>
      <Form.Field onChange={props.onChange} name="DLNumber"id='form-input-control-dl_number' control={Input} label='License Number' placeholder='####-####-####' width="6" />
      <Form.Field onChange={props.onChange} name="DLState" id='form-input-control-dl_state' control={Input} label='License State' placeholder='CA' width="2"/>
    </Form.Group>
    <Form.Group >
    <Form.Field onChange={props.onChange} name="DLExpMonth" id='form-input-dl_exp_month' control={Input} label='Lic Exp Month' placeholder='July' width="3"/>
    <Form.Field onChange={props.onChange} name="DLExpDay"id='form-input-dl_exp_day' control={Input} label='Lic Exp Day' placeholder='04' width="3" />
    <Form.Field onChange={props.onChange} name="DLExpYear"id='form-input-dl_exp_year' control={Input} label='Lic Exp Year' placeholder='2017' width="3" />
    </Form.Group>
  </div>
)

export default DriverInfo;