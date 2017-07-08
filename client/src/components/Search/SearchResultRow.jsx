import React from 'react';
import { Table, Header, Image, Label, Popup, Button, Message } from 'semantic-ui-react';
import formatTime from '../utils/formatTime.js';
import dateParser from '../utils/dateParser.js';

const SearchResultRow = (props) => (
  
  <Table.Row style={{cursor:'pointer'}} className="results-row"onClick={() => props.handleClick(props.trip.id)}>
    <Table.Cell>
    <Header as='h3' textAlign='left' color='green'>${props.trip.price}</Header>
    </Table.Cell>
    <Table.Cell textAlign='left'> {props.trip.departure_city}, {props.trip.departure_state}</Table.Cell>
    <Table.Cell singleLine>{props.trip.departure_time} <br/> {dateParser(props.trip.departure_date)}</Table.Cell>
    <Table.Cell singleLine>{props.trip.arrival_city}, {props.trip.arrival_state}</Table.Cell>
    <Table.Cell singleLine>{props.driverDetails.year} {props.driverDetails.make || 'No Vehicle Information'} {props.driverDetails.model}</Table.Cell>
    <Table.Cell singleLine>{props.trip.seats}</Table.Cell>   
  </Table.Row>
  
)

export default SearchResultRow;

/*
    <Table.Cell singleLine textAlign='right'><Button color='green' value={props.trip.id} onClick={props.handleClick}>Select This Trip</Button> </Table.Cell>
*/