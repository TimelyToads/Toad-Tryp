import React from 'react';
import {Form, Input, Segment, Select, Header} from 'semantic-ui-react';

const options = [
  {key: '1', text: '1', value: '1'},
  {key: '2', text: '2', value: '2'},
  {key: '3', text: '3', value: '3'},
  {key: '4', text: '4', value: '4'},
  {key: '5', text: '5', value: '5'}
];
const TripField = (props) => (
  <div>
    <Form>
      <Segment>
        <Header as='h3' content='Departure' color='green'/>
        <Form.Group widths='equal'>
          <Form.Field name='departure_address_line1' control={Input} label='Depart Address' placeholder='Depart Address' onChange={props.handleChange}/>
          <Form.Field name='departure_city' control={Input} label='Depart City' placeholder='Depart City' onChange={props.handleChange}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field fluid name='departure_state' control={Input} label='Depart State' placeholder='Depart State' onChange={props.handleChange}/>
          <Form.Field fluid name='departure_zip' control={Input} label='Depart Zip' placeholder='Depart Zip' onChange={props.handleChange}/>
          <Form.Field fluid name='departure_date' control={Input} label='Depart Date' placeholder='Depart Date' onChange={props.handleChange}/>
          <Form.Field fluid name='departure_time' control={Input} label='Depart Time' placeholder='Depart Time' onChange={props.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Field size='small' name='seats' control={Select} label='Seats' options={options} onChange={props.handleChange}/>
          <Form.Field size='medium' name='price' control={Input} label='Price' placeholder='Price' onChange={props.handleChange}/>
        </Form.Group>
      </Segment>
      <Segment>
        <Header as='h3' content='Arrival' color='green'/>
        <Form.Group widths='equal'>
          <Form.Field name='arrival_address_line1' control={Input} label='Arrive Address' placeholder='Arrive Address' onChange={props.handleChange}/>
          <Form.Field name='arrival_city' control={Input} label='Arrive City' placeholder='Arrive City' onChange={props.handleChange}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field fluid name='arrival_state' control={Input} label='Arrive State' placeholder='Arrive State' onChange={props.handleChange}/>
          <Form.Field fluid name='arrival_zip' control={Input} label='Arrive Zip' placeholder='Arrive Zip' onChange={props.handleChange}/>
          <Form.Field fluid name='arrival_date' control={Input} label='Arrive Date' placeholder='Arrive Date' onChange={props.handleChange}/>
          <Form.Field fluid name='arrival_time' control={Input} label='Arrive Time' placeholder='Arrive Time' onChange={props.handleChange}/>
        </Form.Group>
      </Segment>
    </Form>
  </div>
);

export default TripField;