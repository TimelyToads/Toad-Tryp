import React from 'react'

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.match = props.match;
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