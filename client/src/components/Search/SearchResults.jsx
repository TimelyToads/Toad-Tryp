import React from 'react';
import { Container, Header, Button, Table } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import SearchResultRow from './SearchResultRow.jsx';
import SearchResultTableHeader from './SearchResultTableHeader.jsx';
import Search from './Search.jsx';


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
    if (!this.props.currentUser.email) {
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
    const tableHeaders = ['Price', 'Departure', 'Arrival', 'Vehicle', 'Remaining Seats', ''];

    return (
    <Container>
      <Header as='h1' id='main-header'>Search Results</Header>
      <Header as='h2' id='main-header2'>Showing trips from <span className="green-text">{location.state.depart}</span> to <span className="green-text">{location.state.arrive}</span></Header>
      <Search />
      <Container className="search-results">
        { (() => {
            if (location.state.trips) {
              {
                if (Array.isArray(location.state.trips)) {
                  return (
                  <Table striped padded='very'>
                    <SearchResultTableHeader headers={tableHeaders} />
                    {location.state.trips.map(trip => <SearchResultRow trip={trip} driverDetails={trip.driver} handleClick={this.handleClick}/> )}
                  </Table>);
                } else {
                  return (
                  <Table>
                    <SearchResultTableHeader headers={tableHeaders} />
                    <SearchResultRow trip={location.state.trips} driverDetails={location.state.trips.driver} handleClick={this.handleClick}/>
                  </Table>);
                }
              }
            } else {
              return <Header>No Results Found For This Date</Header>
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