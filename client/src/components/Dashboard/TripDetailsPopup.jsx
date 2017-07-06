import React from 'react';
import axios from 'axios';
import { Message, Popup } from 'semantic-ui-react';
import formatTime from '../utils/formatTime.js';
import {Redirect} from 'react-router-dom';

class TripDetailsPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null
    }
  }

  handleClick(id) {

    this.setState({
      redirectTo: `/trip/${id}`,
    });
    
  }

  render() {
    const { redirectTo } = this.state;
    return (
      <div>
        <Message positive>
        <Message.Header>From </Message.Header>
          <p>
            {this.props.trip.departure_address_line1} {this.props.trip.departure_address_line2} <br />
            {this.props.trip.departure_city}, {this.props.trip.departure_state } {this.props.trip.departure_zip } <br />
            @  {this.props.trip.departure_time} on  {this.props.trip.departure_date}
          </p>
          <Message.Header>To </Message.Header>
          <p>
            {this.props.trip.arrival_address_line1}<br />
          </p>
          <Message.Header>Driver Info</Message.Header>
          <p>
            {this.props.driverDetails.first_name} {this.props.driverDetails.last_name} <br />
            {this.props.driverDetails.phone_number} {this.props.driverDetails.email}
          </p>
          <Message.Header>Vehicle Info </Message.Header>
          <p>
          {this.props.driverDetails.year} {this.props.driverDetails.make} {this.props.driverDetails.model}<br />
            {this.props.driverDetails.license_plate}
          </p>
          <Message.Header>Delete Trip?</Message.Header>
          <p>
            <Popup
              trigger={<button className="ui orange button">Delete</button>}
              content={
                <div>
                  <div>
                    Are you sure?
                  </div>
                  <button className="ui green button">Cancel</button>
                  <button className="ui red button" onClick={() => this.props.handleDeleteClick(this.props.id)}>Yes</button>
                </div>
                }
              on='click'
              position='bottom right'
            /> 
          </p>
          <Message.Header>More Trip Details</Message.Header>
          <button className="ui green button" onClick={() => this.handleClick(this.props.id)}>See Trip</button>
        </Message>
        {redirectTo &&
          <Redirect push to={{
            pathname: this.state.redirectTo
        }} />}
      </div>
    );
  }
}

export default TripDetailsPopup;

/*

            state: {location, match}
*/