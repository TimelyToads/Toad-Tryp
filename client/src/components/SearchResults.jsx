import React from 'react';
import Redirect from 'react-router-dom/Redirect'

import SearchResultItem from './SearchResultItem.jsx'

import Search from './Search.jsx';
// import SearchSwitch from './SearchSwitch.jsx';

//Resulting trips array can be found at props.location.state.trips

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( {
      redirectTo: `/trip/${e.target.value}`
    })
  }

  render() {
    const { location, match } = this.props;
    const { redirectTo } = this.state;
    return (
    <div>
      <h1>SEARCH RESULTS!</h1>
        <Search />
        {
          (() => {
            if (location.state.trips !== null) {
              if (Array.isArray(location.state.trips)) {
                return location.state.trips.map(trip => <SearchResultItem trip={trip} handleClick={this.handleClick}/>);
              } else {
                return <SearchResultItem trip={location.state.trips} handleClick={this.handleClick}/>
              }
            } else {
              return <div>No Results Found.</div>
            }
          })()
        }

        {redirectTo &&
          <Redirect push to={this.state.redirectTo} />}
    </div>);
  }
};

export default SearchResults;