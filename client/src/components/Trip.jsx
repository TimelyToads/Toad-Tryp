import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.state = {
      trips: {
        driver: {},
        rider: {}
      }
    }
    this.handleRequestTrip.bind(this);
  }

  componentDidMount() {
    // AuthenticationHelper.is
    this.fetch(this.match.params.tripId);
  }

  handleRequestTrip(e) {
    e.preventDefault();
    console.log('this is clicking', this.state.trips)
    // this.postTripRequest(this.trips.id, this.trips.riders[0].id)
  }

  fetch(tripId) {
    axios.get(`/api/trips/${tripId}`)
    .then((response) => {
      console.log('Successfully fetching from db in Trip Component', response);
      this.setState({
        trips: response.data
      });
      console.log('this is the state after a successful fetch from DB', this.state)
    })
    .catch((error) => {
      console.log('GET unsuccessful from the DB in Trip Component', error);
    });
  }

  postTripRequest(tripId, userId) {
    axios.post(`/api/trips/${tripId}/join/${userId}`)
    .then((response) => {
      console.log('Successfully posting to the DB in the Trip Component', response);
    })
    .catch((error) => {
      console.log('POST unsuccessful in Trip Component', error)
    })
  }

  render() {
    const { trips } = this.state
    const formatTime = (str) => {
      let hour = parseInt(str.substring(0, 2), 10);
      let minute = str.substring(2, 5);
      let meridiem = (hour > 12) ? ' PM' : ' AM'
      hour = (hour === 0) ? '12' : hour.toString()
      return hour + minute + meridiem;
    }

    return (
      <div>
        <div className="page-heading">
          <h1>Trip Details</h1>
          <h2>Please review the details of your trip!</h2>
        </div>
        <div className="page-heading">
          <div className="trip-confirmation-details">
            <div className="trip-confirmation-details-driver">
              <h3 className="green-text">Your Driver for your trip</h3>
              <img src={trips.driver.img_url} />
              <p>
                Name: {trips.driver.first_name} {trips.driver.last_name}<br/>
                E-mail: {trips.driver.email}<br/>
                Phone Number: {trips.driver.phone_number}<br/>
                Car: {trips.driver.year} {trips.driver.make} {trips.driver.model}
              </p>
            </div> 
            <h3 className="green-text">Price: ${trips.price}</h3>
            <div>
              <h3>Departure:</h3>
              <h4>{(trips.departure_time) ? `Departing at ${formatTime(trips.departure_time)}` : ''}</h4>
              <h4>Pickup Point: </h4>
              <h4>{trips.departure_address_line1}</h4>
              <h4>{trips.departure_city}, {trips.departure_state}, {trips.departure_zip}</h4>
            </div>
            <div>
              <h3>Arrival:</h3>
              <h4>{(trips.arrival_time) ? `Arriving at ${formatTime(trips.arrival_time)}` : ''}</h4>
              <h4>Dropoff Point: </h4>
              <h4>{trips.arrival_address_line1}</h4>
              <h4>{trips.arrival_city}, {trips.arrival_state}, {trips.arrival_zip}</h4>
            </div>
            <button type="submit" onClick={this.handleRequestTrip.bind(this)} >Request to Book</button><br/>
            <span className="disclaimer">You won't be charged until your Driver accepts your reservation.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Trip;