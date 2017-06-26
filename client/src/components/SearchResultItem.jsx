import React from 'react';

const SearchResultsItem = ({trip, handleClick}) => (
  <div className="search-results-item">
    
    <span className="search-departure"><b>Departure: </b>{trip.departure_address_line1}, {trip.departure_city}, {trip.departure_state} at {trip.departure_time.substring(0, 5)} </span> 
    <span className="search-arrival"><b>Arrival: </b>{trip.arrival_address_line1 }, {trip.arrival_city}, {trip.arrival_state} at {trip.arrival_time.substring(0, 5)}</span> <br/>
    <b>Price:</b> <span className="search-item-price">${trip.price} </span>  <span className="search-item-seats"><b>Seats Available:</b> {trip.seats} </span>
    <button value={trip.id} onClick={handleClick}>Select This Trip</button>
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