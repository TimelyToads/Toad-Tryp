import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const DriverInfo = (props) => (
  <div>
    <Form.Group>
    <Form.Field disabled={props.disabled} id='form-input-control-vehicle-make' control={Input} label='Vehicle Make' 
      placeholder='Honda' width="3" value={props.user.make}/>

      <Form.Field disabled={props.disabled} id='form-input-control-vehicle-model' control={Input} label='Vehicle Model' 
      placeholder='Accord' width="3" value={props.user.model}/>
     
    </Form.Group>
    <Form.Group >
      <Form.Field disabled={props.disabled} id='form-input-control-vehicle-year' control={Input} label='Vehicle Year' 
      placeholder='2017' width="3" value={props.user.year} />

      <Form.Field disabled={props.disabled} id='form-input-control-vehicle-license-plate' control={Input} label='License Plate' 
      placeholder='H4CK3R' width="3" value={props.user.license_plate}  />
    </Form.Group>
    <Form.Group >
      <Form.Field disabled={props.disabled} id='form-input-control-vin' control={Input} label='Vehicle VIN' 
      placeholder='2017' width="3" value={props.user.vin} />

   
    </Form.Group>
</div>
)

export default DriverInfo;