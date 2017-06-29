import React from 'react';
import {Button, CheckBox, Form, Input, Segment, Header, Select } from 'semantic-ui-react';
import axios from 'axios';
const options = [
  {key: '1', text: '1', value: '1'},
  {key: '2', text: '2', value: '2'},
  {key: '3', text: '3', value: '3'},
  {key: '4', text: '4', value: '4'},
  {key: '5', text: '5', value: '5'}
]
const NewTrip = (props) => (
  <div>
    <Segment.Group>
      <Segment padded="very">
        <Header as='h2' color='green'>New Trip</Header>
        <Segment.Group>
          <Segment>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='Depart City' placeholder='Depart City'/>
                <Form.Field control={Input} label='Arrive City' placeholder='Arrive City'/>
                <Form.Field control={Select} label='Seats' options={options} placeholder='Seats'/>
              </Form.Group>
              <Form.Group>
                <Form.Field control={Input} label='Pickup Point' placeholder='Pickup Point'/>
                <Form.Field control={Input} label='Depart Date' placeholder='Depart Date'/>
              </Form.Group>
            </Form>
          </Segment>
        </Segment.Group>
      </Segment>
    </Segment.Group>
  </div>
);

export default NewTrip;
