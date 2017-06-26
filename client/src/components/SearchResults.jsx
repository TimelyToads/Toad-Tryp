import React from 'react';
import SearchResultsItem from './SearchResultsItem.jsx'
import Search from './Search.jsx';

//Resulting trips array can be found at props.location.state.trips

const SearchResults = (props) => (
  <div>
    <h1>SEARCH RESULTS!</h1>
      <Search />
      {(Array.isArray(props.location.state.trips)) ? props.location.state.trips.map(trip => <SearchResultsItem trip={trip} />) : <SearchResultsItem trip={props.location.state.trips} />}
      {console.log(props.location.state.trips)}
  </div>
);

export default SearchResults;