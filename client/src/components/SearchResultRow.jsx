import React from 'react';
import { Table, Header, Image, Label, Popup, Button, Message } from 'semantic-ui-react';
import formatTime from './utils/formatTime.js';

const SearchResultRow = (props) => (
  <Table.Row>
    <Table.Cell>
    <Header as='h3' textAlign='left' color='green'>${props.trip.price}</Header>
    </Table.Cell>
    <Table.Cell textAlign='left'> {props.trip.departure_city}, {props.trip.departure_state} <br /> {formatTime(props.trip.departure_time)}</Table.Cell>
    <Table.Cell singleLine>{props.trip.arrival_city}, {props.trip.arrival_state} <br /> {formatTime(props.trip.arrival_time)}</Table.Cell>
    <Table.Cell singleLine>{props.driverDetails.year} {props.driverDetails.make || 'No Vehicle Information'} {props.driverDetails.model}</Table.Cell>
    <Table.Cell singleLine>{props.trip.seats}</Table.Cell>
    <Table.Cell singleLine><button value={props.trip.id} onClick={props.handleClick}>Select This Trip</button> </Table.Cell>
   
  </Table.Row>
)

export default SearchResultRow;