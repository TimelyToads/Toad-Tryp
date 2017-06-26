import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

import SearchResults from './SearchResults.jsx';
import Trip from './Trip.jsx';

const SearchSwitch = () => (
  <Switch>
    <Route exact path='/searchresults' component={SearchResults}/>
    <Route path='searchresults/:tripId' component={Trip}/>
  </Switch>
)

export default SearchSwitch;