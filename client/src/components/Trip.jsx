import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    this.fetch(this.match.params.tripId);
  }

  fetch(tripId) {
    const app = this;
    axios.get('/api/trips/:tripId', { 
      params: {
        tripId: tripId
      }
    })
    .then(function(response) {
      console.log('Successfully fetching from db in Trip Component', response);
      app.setState({
        trips: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { trips } = this.state
    return (
      <div>
        <div className="page-heading">
          <h1>Trip Confirmation</h1>
          <h2>Please review the details of your trip!</h2>
        </div>
        <div className="page-heading">
          <div className="trip-confirmation-details">
            <h3 className="green-text">Price: ${trips.price}</h3>
            <div>
              <h3>Departure:</h3>
              <h4>Time: {(trips.departure_time) ? trips.departure_time.substring(0, 5) : ''}</h4>

              <br/>
              <h4>Pickup Point: </h4>
              <h4>{trips.departure_address_line1}</h4>
              <h4>{trips.departure_city}, {trips.departure_state}, {trips.departure_zip}</h4>
            </div>
            <div>
              <h3>Arrival:</h3>
              <h4>Time: {(trips.arrival_time) ? trips.arrival_time.substring(0, 5) : ''}</h4>
              <br />
              <h4>Dropoff Point: </h4>
              <h4>{trips.arrival_address_line1}</h4>
              <h4>{trips.arrival_city}, {trips.arrival_state}, {trips.arrival_zip}</h4>
            </div>
            <button>Request to Book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Trip;