import React from 'react';
import { Form, Input, Header, Segment } from 'semantic-ui-react';

const DriverInfo = (props) => (
  <div>
    <Header as='h3' inverted color='green'>Driver Info</Header>
    <Segment padded="very">
      <Form.Group>
      <Form.Field disabled={props.disabled} onChange={props.onChange} name='make' id='form-input-control-vehicle-make' control={Input} label='Vehicle Make' 
        placeholder='Honda' width="3" value={props.user.make || ''}/>
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='model' id='form-input-control-vehicle-model' control={Input} label='Vehicle Model' 
        placeholder='Accord' width="3" value={props.user.model || ''}/>
      </Form.Group>
      <Form.Group >
      <Form.Field disabled={props.disabled} onChange={props.onChange} name='year' id='form-input-control-vehicle-year' control={Input} label='Vehicle Year' 
        placeholder='2017' width="3" value={props.user.year || ''} />

        <Form.Field disabled={props.disabled} onChange={props.onChange} name='license_plate' id='form-input-control-vehicle-license-plate' control={Input} label='License Plate' 
        placeholder='H4CK3R' width="3" value={props.user.license_plate || ''} />
      </Form.Group>
      <Form.Group >
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='vin' id='form-input-control-vin' control={Input} label='Vehicle VIN' 
          placeholder='JAV123456ASCR789IPT' width="3" value={props.user.vin || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='date_of_birth' id='form-input-control-dob' control={Input} label='DOB' 
          placeholder='yyyy-mm-dd' width="3" value={props.user.date_of_birth || ''} />
      </Form.Group>
      <Form.Group>
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='street_address' id='form-input-control-address' control={Input} label='Street Address' 
          placeholder='address' width="3" value={props.user.street_address || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='city' id='form-input-control-city' control={Input} label='City' 
          placeholder='city' width="3" value={props.user.city || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='state' id='form-input-control-state' control={Input} label='State' 
          placeholder='state' width="3" value={props.user.state || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='zipcode' id='form-input-control-zipcode' control={Input} type='number' max={5} label='ZipCode' 
          placeholder='zipcode' width="3" value={props.user.zipcode || ''} />
      </Form.Group>
      <Form.Group>
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='accountno' id='form-input-control-accno' control={Input} label='Account No' 
          placeholder='accno' width="3" value={props.user.accountno || ''} />
        <Form.Field disabled={props.disabled} onChange={props.onChange} name='routingno' id='form-input-control-routingno' control={Input} label='Routing No' 
          placeholder='routingno' width="3" value={props.user.routingno || ''} />
      </Form.Group>
    </Segment>
  </div>
);

export default DriverInfo;