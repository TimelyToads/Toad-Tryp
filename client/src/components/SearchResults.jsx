import React from 'react';
import SearchResultsItem from './SearchResultsItem.jsx'

import Search from './Search.jsx';

//Resulting trips array can be found at props.location.state.trips

const SearchResults = (props) => (
  <div>
    <h1>SEARCH RESULTS!</h1>
      <Search />
    {console.log(props.location.state)}
  </div>
);

export default SearchResults;