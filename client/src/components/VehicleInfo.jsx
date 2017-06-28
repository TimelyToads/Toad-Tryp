import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const VehicleInfo = () => (
  <div>
    <Form.Group>
      <Form.Field id='form-input-control-vehicle-make' control={Input} label='Vehicle Make' placeholder='Honda' width="3" />
      <Form.Field id='form-input-control-vehicle-model' control={Input} label='Vehicle Model' placeholder='Accord' width="3"/>
     
    </Form.Group>
    <Form.Group >
      <Form.Field id='form-input-control-vehicle-year' control={Input} label='Vehicle Year' placeholder='2017' width="3"/>
      <Form.Field id='form-input-control-vehicle-license-plate' control={Input} label='Vehicle License Plate' placeholder='H4CK3R' width="3"/>
    </Form.Group>
</div>
)

export default VehicleInfo;