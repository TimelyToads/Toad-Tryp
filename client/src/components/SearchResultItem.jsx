import React from 'react';

const SearchResultItem = ({trip, handleClick}) => (
  <div className="search-result-item">
    <span><b>Departure:</b>
    {trip.departure_address_line1 }
    {trip.departure_city}, {trip.departure_state}   </span>

    <span><b>Arrival: </b>
    {trip.arrival_address_line1 }
    {trip.arrival_city}, {trip.arrival_state}</span>
    <button value={trip.id} onClick={handleClick}>INSPECT</button>
  </div>
);

export default SearchResultItem;

// arrival_address_line1
// :
// "101 Sunset Blvd"
// arrival_address_line2
// :
// null
// arrival_city
// :
// "Los Angeles"
// arrival_date
// :
// "2017-07-07T07:00:00.000Z"
// arrival_state
// :
// "CA"
// arrival_time
// :
// "08:30:30"
// arrival_zip
// :
// 90210
// departure_address_line1
// :
// "944 Market St"
// departure_address_line2
// :
// null
// departure_city
// :
// "San Francisco"
// departure_date
// :
// "2017-07-07T07:00:00.000Z"
// departure_state
// :
// "CA"
// departure_time
// :
// "04:25:36"
// departure_zip
// :
// 94102
// driver_id
// :
// 5
// id
// :
// 1
// price
// :
// 65
// seats
// :
// 4