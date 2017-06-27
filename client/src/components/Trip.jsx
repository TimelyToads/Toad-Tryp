import React from 'react';
import axios from 'axios';

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
    console.log(this.match);

    const app = this;
    axios.get('/api/trips/:tripId', { 
      params: {
        tripId: tripId
      }
    })
    .then(function (response) {
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
    return (
      <div>
        <div className="page-heading">
          <h1>Trip Confirmation</h1>
          <h2>Please review the details of your trip!</h2>
        </div>
        <div className="page-heading">
          tripId: {this.match.params.tripId}
        </div>
      </div>
    )
  }
}

export default Trip;