import React from 'react';
import Trip from './Trip.jsx'

import Search from './Search.jsx';
// import SearchSwitch from './SearchSwitch.jsx';

//Resulting trips array can be found at props.location.state.trips

const SearchResults = ({location, match}) => (
  <div>
    <h1>SEARCH RESULTS!</h1>
      <Search />
      {/*{(Array.isArray(props.location.state.trips)) ? props.location.state.trips.map(trip => <SearchResultsItem trip={trip} />) : <SearchResultsItem trip={props.location.state.trips} />}*/}
      {console.log(match)}
      {console.log(location.state.trips)}
  </div>
);

export default SearchResults;