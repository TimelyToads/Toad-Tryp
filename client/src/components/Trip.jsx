import React from 'react'

const Trip = ({match}) => (
  <div>
    <h3>
      I'M A TRIP PAGE PLACEHOLDER FOR ALL THINGS RELATED TO A SPECIFIC TRIP
    </h3>
    <div>
      tripId: {match.params.tripId}
    </div>
  </div>
)

export default Trip;