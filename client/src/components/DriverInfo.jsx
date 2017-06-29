import React from 'react';
import { Form, Input, Header, Segment } from 'semantic-ui-react';

const DriverInfo = (props) => (
  <div>
    <Header as='h3' inverted color='green'>Driver Info</Header>
    <Segment padded="very">
      <Form.Group>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name='make' id='form-input-control-vehicle-make' control={Input} label='Vehicle Make' 
        placeholder='Honda' width="3" value={props.user.make}/>

        <Form.Field disabled={props.disabled} onChange={props.onChange} name='model' id='form-input-control-vehicle-model' control={Input} label='Vehicle Model' 
        placeholder='Accord' width="3" value={props.user.model}/>
      
      </Form.Group>
      <Form.Group >
      <Form.Field disabled={props.disabled} onChange={props.onChange} name='year' id='form-input-control-vehicle-year' control={Input} label='Vehicle Year' 
        placeholder='2017' width="3" value={props.user.year} />

        <Form.Field disabled={props.disabled} onChange={props.onChange} name='license_plate' id='form-input-control-vehicle-license-plate' control={Input} label='License Plate' 
        placeholder='H4CK3R' width="3" value={props.user.license_plate} />
      </Form.Group>
      <Form.Group >
      <Form.Field disabled={props.disabled} onChange={props.onChange} name='vin' id='form-input-control-vin' control={Input} label='Vehicle VIN' 
        placeholder='2017' width="3" value={props.user.vin} />
      </Form.Group>
    </Segment>
  </div>
);

export default DriverInfo;