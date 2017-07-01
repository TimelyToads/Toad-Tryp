import React from 'react';
import { Table, Header, Rating, Image, Label } from 'semantic-ui-react';

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
    <Table.Cell singleLine> <Label ribbon>Details</Label></Table.Cell>
   
  </Table.Row>
)

export default DashboardDriverRow;

