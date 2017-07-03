import React from 'react';
import { Segment, Container, Header, Button, Checkbox, Form, Input, Select, Image, Card, Icon } from 'semantic-ui-react';
import axios from 'axios';
import Search from './Search.jsx';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';
import {Redirect} from 'react-router-dom';
import formatTime from './utils/formatTime.js';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.currentUser = props.location.state.location.state.currentUser
    this.state = {
      redirectTo: null,
      trips: {
        driver: {},
        rider: {}
      }
    }
    this.handleRequestTrip.bind(this);
  }

  componentDidMount() {
    this.fetch(this.match.params.tripId);
  }

  handleRequestTrip(e) {
    e.preventDefault();
    console.log('this is getting to handleRequestTrip', this.currentUser)
    this.postTripRequest(this.state.trips.id, this.currentUser.id)
  }

  fetch(tripId) {
    axios.get(`/api/trips/${tripId}`)
    .then((response) => {
      console.log('Successfully fetching from db in Trip Component', response);
      this.setState({
        redirectTo: this.state.redirectTo,
        trips: response.data
      });
    })
    .catch((error) => {
      console.log('GET unsuccessful from the DB in Trip Component', error);
    });
  }

  postTripRequest(tripId, userId) {
    axios.post(`/api/trips/${tripId}/join/${userId}`, {tripId: tripId, userId: userId})
    .then((response) => {
      console.log('Successfully posting to the DB in the Trip Component', response);
      console.log('PROPSPROPSPROPS', this.props);
      this.setState({
        redirectTo: `/trips/${this.props.currentUser.username}`
      });
    })
    .catch((error) => {
      console.log('POST unsuccessful in Trip Component', error.response)
      if (error.response.status === 409) { 
        alert('You have already been signed up for this trip! Redirecting you back to the homepage...');
        this.setState({ redirectTo: '/' });
      }
    })
  }

  render() {
    const { trips, redirectTo, currentUser } = this.state;
    const { location, match } = this.props;

    return (
      <Container>
        <Header as='h1' id='main-header'>Trip Details</Header>
        <Header as='h2' id='main-header2'>Please review the details of your trip!</Header>

        <Card.Group>
          <Card>
            <Card.Content>
              <Header color='green'>Price: ${trips.price}</Header>
            </Card.Content>

            <Card.Content>
              <Card.Header>Departure:</Card.Header>
              <Card.Meta>Details</Card.Meta>
              <Card.Description>              
                {(trips.departure_time) ? `Departing at ${formatTime(trips.departure_time)}` : ''} <br/>
                Pickup Point: <br/>
                {trips.departure_address_line1} <br/>
                {trips.departure_city}, {trips.departure_state}, {trips.departure_zip}
              </Card.Description>
            </Card.Content>
            
            <Card.Content>
              <Card.Header>Arrival:</Card.Header>
              <Card.Meta>Details</Card.Meta>
              <Card.Description>              
                {(trips.arrival_time) ? `Arriving at ${formatTime(trips.arrival_time)}` : ''}<br/>
                Dropoff Point: <br/>
                {trips.arrival_address_line1}<br/>
                {trips.arrival_city}, {trips.arrival_state}, {trips.arrival_zip}
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content extra>
              <Header>Your Driver for this Tryp:</Header>
            </Card.Content>
            <Image src={trips.driver.img_url} shape='circular' size='medium'/>
            <Card.Content>
              <Card.Header>
                {trips.driver.first_name} {trips.driver.last_name}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2017
                </span>
              </Card.Meta>
              <Card.Description>
                <Icon name='mail outline' /> {trips.driver.email} <br/>
                <Icon name='phone'/> {trips.driver.phone_number}<br/>
                <Icon name='car'/> {trips.driver.year} {trips.driver.make} {trips.driver.model}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='road' />
                22 Total Tryps
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://lh3.googleusercontent.com/1_qs4sNbwTW3lAAsMNr-k2EEmeDzPthNvuoNCL285LhlR7CidyDmxVJWOKscfhW7M5WDFASZQ_b3ig__wrEMPLkEb8hpIfFUe-pB_rxqQ7p16EAS8GthhiYugDqrFbj7ojfaib-a35xTJF1usnHbzfhOFJjWjeKpqRfbjNOswQIzKz301bDZdhgwYQF5a1tOMamwrT3F47HhhShHwmNnx82lnRzdiAGkxkUDRn3lpk8L9Oeko1jt0TkYpQ-SPQYk8CiF5c9nOY0R7MFvzyXpKI54PVrDGqZ9_bR9FxRufGJgI45YyIsdIHuntq-oE68a1u_Wos0mAL1RNSsxeKOIG07m8tk3BAr2bwqR2Of2W91X2G3wGc7y7B2QB7AOZ4UEHVQ3g64XlI0T_PaB4E8rrPSanUqDum2SeFpf2jGZp4cCG7ztINcwJvT_GAmx3NzbMMDpB0NOXS8BwdTdj72NLnhZeQbjhfbJr50f0Nmsir0J348Jw-lWw4RYwB5zyOxo7Mod7PKGyrT-yj7Azo-YqRiGim_jeULZFtrYSBj2jHu5PaifVuu0Tg2fHBqujY-wsBZVqTkvCnQhcYTZCiEXg2W1s2-hDnueAUvwSrOT6egPW6v5sbDi=w1436-h1432-no' />
            <Card.Content>
              <Card.Header>
                <Icon name='map outline' /> Google Maps
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Updated July 3rd, 2017
                </span>
              </Card.Meta>
              <Card.Description>
                {trips.departure_city}, {trips.departure_state} to {trips.arrival_city}, {trips.arrival_state}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Container textAlign='center'>
          <br/>
          <Button color='green' onClick={this.handleRequestTrip.bind(this)} >Request to Book</Button><br/>
          <span id='disclaimer'>You won't be charged until your Driver accepts your reservation.</span>
        </Container>

        {redirectTo && <Redirect push to={{
          pathname: redirectTo,
          state: {location, match, currentUser}
        }} />}
      </Container>
    )
  }
}

export default Trip;