import React from 'react';
import { Table, Header, Label, Popup } from 'semantic-ui-react';
import TripsDetailsPopup from './TripDetailsPopup.jsx';
import axios from 'axios';
import formatTime from '../utils/formatTime.js';

class DashboardDriverRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      driver: {}
    }
  }

  getDriverInfoById() {
    axios.get(`/api/users/id`, {
      params: {
        id: this.props.trip.driver_id
      }
    }) 
      .then( driverObj => {
        this.setState({ driver: driverObj.data});
      })
      .catch( err => {
        console.log('Error getting driver in DashboardDriverRow: ', err);
      })
  }

  handleDeleteClick(id) {
    axios.delete(`/api/trip/${id}`).then(() => {
      this.setState({
        test: 'test'
      });
    });
  }

  render() {

    return (
      <Table.Row>
      <Table.Cell>
        <Header as='h2' textAlign='center'>{this.props.trip.id}</Header>
      </Table.Cell>
      <Table.Cell textAlign='left'>{this.props.trip.departure_date} < br /> {this.props.trip.departure_time} </Table.Cell>
      <Table.Cell>{this.props.trip.departure_city}, {this.props.trip.departure_state} </Table.Cell>
      <Table.Cell singleLine>{this.props.trip.arrival_city}, {this.props.trip.arrival_state}  </Table.Cell>
      <Table.Cell singleLine>${this.props.trip.price}</Table.Cell>
      <Table.Cell singleLine>{this.props.trip.seats}</Table.Cell>
      <Table.Cell singleLine> 
  
      <Popup
        trigger={<Label ribbon>Details</Label>}
        content={
           <TripsDetailsPopup trip={this.props.trip} id={this.props.trip.id} handleDeleteClick={this.handleDeleteClick.bind(this)} driverDetails={this.state.driver} />
          }
        on='click'
        onOpen={this.getDriverInfoById.bind(this)}
        position='bottom right'
      /> 
      </Table.Cell>
    </Table.Row>

    )
  } //end redner

} // end class

export default DashboardDriverRow;

