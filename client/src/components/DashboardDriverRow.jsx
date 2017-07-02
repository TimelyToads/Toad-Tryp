import React from 'react';
import { Table, Header, Image, Label, Popup, Button, Message } from 'semantic-ui-react';

const DashboardDriverRow = (props) => (
  <Table.Row>
    <Table.Cell>
    <Header as='h2' textAlign='center'>{props.trip.id}</Header>
    </Table.Cell>
    <Table.Cell textAlign='left'> {props.trip.departure_city}, {props.trip.departure_state} <br /> {props.trip.departure_date}</Table.Cell>
    <Table.Cell singleLine>{props.trip.arrival_city}, {props.trip.arrival_state} <br /> {props.trip.arrival_date}</Table.Cell>
    <Table.Cell singleLine>{props.driverDetails.year} {props.driverDetails.make || 'No Vehicle Information'} {props.driverDetails.model}</Table.Cell>
 
    <Table.Cell singleLine>${props.trip.price}</Table.Cell>
    <Table.Cell singleLine>{props.trip.seats}</Table.Cell>
    <Table.Cell singleLine> 
    <Popup
      trigger={<Label ribbon>Details</Label>}
      content={
        <Message positive>
        <Message.Header>From </Message.Header>
          <p>
            {props.trip.departure_address_line1} {props.trip.departure_address_line2} <br />
            {props.trip.departure_city}, {props.trip.departure_state } {props.trip.departure_zip } <br />
            @  {props.trip.departure_time} on  {props.trip.departure_date}
          </p>
          <Message.Header>To </Message.Header>
          <p>
            {props.trip.arrival_address_line1} {props.trip.arrival_address_line2} <br />
            {props.trip.arrival_city}, {props.trip.arrival_state } {props.trip.arrival_zip } <br />
              @  {props.trip.arrival_time} on  {props.trip.arrival_date}
          </p>
          <Message.Header>Driver Info</Message.Header>
          <p>
            {props.driverDetails.first_name} {props.driverDetails.last_name} <br />
            {props.driverDetails.phone_number} {props.driverDetails.email}
           </p>
          <Message.Header>Vehicle Info </Message.Header>
          <p>
          {props.driverDetails.year} {props.driverDetails.make} {props.driverDetails.model}<br />
            {props.driverDetails.vin} {props.driverDetails.license_plate}
          </p>
        </Message>
        }
      on='click'
      position='bottom right'
    /> 
      </Table.Cell>
   
  </Table.Row>
)

export default DashboardDriverRow;

