import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'
import SearchResultItem from './SearchResultItem.jsx'
import Search from './Search.jsx';
// import SearchSwitch from './SearchSwitch.jsx';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';


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
    console.log('This is the props in SearchResults', this.props)
    if (!this.props.location.state.currentUser.email) {
      this.setState({
        redirectTo: `/login`
      })  
    } else {
      this.setState({
        redirectTo: `/trip/${e.target.value}`,
      })  
    }
  }

  render() {
    const { currentUser, location, match } = this.props;
    const { redirectTo } = this.state;
    return (
    <Container>
      <Header as='h1'>Search Results</Header>
      <Header as='h2'>Showing results from <span className="green-text">{this.props.location.state.depart}</span> to <span className="green-text">{this.props.location.state.arrive}</span></Header>
      <Search />
      <Container className="search-results">
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
          <Redirect push to={{
            pathname: this.state.redirectTo,
            state: {location, match}
          }} />}
      </Container>
    </Container>);
  }
};



export default SearchResults;