import React from 'react';
import { Segment, Container, Header, Button, Checkbox, Form, Input, Select, Image } from 'semantic-ui-react';
import axios from 'axios';
import Search from '../Search/Search.jsx';
import {Redirect} from 'react-router-dom'

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.currentUser = props.location.state.location.state.currentUser
    this.state = {
      redirectTo: null,
      trips: {
        driver: {},
        rider: {}
      }
    }
    this.handleRequestTrip.bind(this);
  }

  componentDidMount() {
    this.fetch(this.match.params.tripId);
  }

  handleRequestTrip(e) {
    e.preventDefault();
    console.log('this is getting to handleRequestTrip', this.currentUser)
    this.postTripRequest(this.state.trips.id, this.currentUser.id)
  }

  fetch(tripId) {
    axios.get(`/api/trips/${tripId}`)
    .then((response) => {
      console.log('Successfully fetching from db in Trip Component', response);
      this.setState({
        redirectTo: this.state.redirectTo,
        trips: response.data
      });
    })
    .catch((error) => {
      console.log('GET unsuccessful from the DB in Trip Component', error);
    });
  }

  postTripRequest(tripId, userId) {
    axios.post(`/api/trips/${tripId}/join/${userId}`, {tripId: tripId, userId: userId})
    .then((response) => {
      console.log('Successfully posting to the DB in the Trip Component', response);
      console.log('PROPSPROPSPROPS', this.props);
      this.setState({
        redirectTo: `/trips/${this.props.currentUser.username}`
      });
    })
    .catch((error) => {
      console.log('POST unsuccessful in Trip Component', error.response)
      if (error.response.status === 409) { 
        alert('You have already been signed up for this trip! Redirecting you back to the homepage...');
        this.setState({ redirectTo: '/' });
      }
    })
  }

  render() {
    const { trips, redirectTo, currentUser } = this.state;
    const { location, match } = this.props;
    const formatTime = (str) => {
      let hour = parseInt(str.substring(0, 2), 10);
      let minute = str.substring(2, 5);
      let meridiem = (hour > 12) ? ' PM' : ' AM'
      hour = (hour === 0) ? '12' : hour.toString()
      return hour + minute + meridiem;
    }

    return (
      <Container>
        <div>
          <h1>Trip Details</h1>
          <h2>Please review the details of your trip!</h2>
        </div>

        <Container>
          <div className="trip-confirmation-details">
            <div className="trip-confirmation-details-driver">
              <Header as='h3'>
                Your Driver for your trip
              </Header>
              <Image shape='circular' size='small' src={trips.driver.img_url} />
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
        </Container>

        {redirectTo && <Redirect push to={{
          pathname: redirectTo,
          state: {location, match, currentUser}
        }} />}
      </Container>
    )
  }
}

export default Trip;