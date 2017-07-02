import React from 'react';
import DashboardTableBody from './DashboardTableBody.jsx';
import formatTime from './utils/formatTime.js';

const SearchResultItem = ({trip, handleClick}) => (
  <div className="search-results-item">    
    <span className="search-departure">
      <b>Departure:</b>{trip.departure_address_line1}, {trip.departure_city}, {trip.departure_state} at {formatTime(trip.departure_time)} 
    </span> 

    <span className="search-arrival">
      <b>Arrival: </b>{trip.arrival_address_line1 }, {trip.arrival_city}, {trip.arrival_state} at {formatTime(trip.arrival_time)}
    </span> <br/>
    
    <b>Price:</b> <span className="search-item-price">${trip.price} </span> 
    <button value={trip.id} onClick={handleClick}>Select This Trip</button>   
    <span className="search-item-seats"><b>Seats Available:</b> {trip.seats} </span>
    
  </div>
);

export default SearchResultItem;
