import React from 'react';
import {Button, CheckBox, Form, Input, Segment, Header, Select, Container} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import SubmitCancelButtons from '../SubmitCancelButtons.jsx';
import TripField from './TripField.jsx';
import UserMessage from '../Users/UserMessage.jsx';
import AutoCompleteForm from './AutoCompleteForm.jsx';

class NewTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formComplete: false,
      trip: {driver_id: props.currentUser.id || 1}
    };
    console.log(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e, {name, value}) {
  //   this.state.trip[[name]] = value;
  //   this.setState({trip: this.state.trip});
  // }

  handleCancelClick() {
    console.log('handleclick');
    this.props.history.goBack();
  }

  handleSubmit(e) {

    var trip = {driver_id: this.props.currentUser.id || 1};
    trip.departure_date = $('#departure_date').val();// departure_date
    trip.departure_time = $('#departure_time').val();
    trip.departure_address_line1 = $('#dep_autocomplete').val();
    trip.departure_city = $('#locality').val();
    trip.departure_state = $('#administrative_area_level_1').val()
    trip.departure_zip = $('#postal_code').val();
    trip.seats = $('#seats')[0].innerText;
    trip.price = $('#price').val();

    trip.arrival_address_line1 = $('#arrival_autocomplete').val();
    trip.arrival_city = $('#arrival_locality').val();
    trip.arrival_state = $('#arrival_administrative_area_level_1').val();
    trip.arrival_zip = $('#arrival_postal_code').val();
  
    axios.post('/api/trips', trip)
      .then( res => {
        this.setState({formComplete: true});
      })
      .catch( err => {
        console.log('Error creating a trip ', err);
      });
  }

  render() {
    const bgStyle = {
      backgroundImage : 'url(https://static.pexels.com/photos/297755/pexels-photo-297755.jpeg)',
      backgroundSize: 'cover'
    }
    return (
      <Container>
        {this.state.formComplete && 
          <Redirect to={`/trips/${this.props.currentUser.username}`} />
        }
        {( () => {
          if (this.props.isAuthenticated() && this.props.currentUser.vin) {
            return <Segment.Group>
              <Segment padded="very" style={bgStyle}>
                <Header as='h2' id='main-header2' color='green'>New Trip</Header>
                <Segment.Group>
                  <Segment>
                    <AutoCompleteForm disable handleSubmit={this.handleSubmit}/>
                  </Segment>
                  <SubmitCancelButtons cancelClickHandler={this.handleCancelClick} submitClickHandler={this.handleSubmit}/>
                </Segment.Group>
              </Segment>
            </Segment.Group>
          } else if ( !this.props.isAuthenticated()) {
            return <UserMessage message={ {content: 'Please login or register for a new account in order to make a trip', type:'warning', header: 'NOT AUTHORIZED'}}/>
          } else {
            return <UserMessage message={ {content: 'Please fill in driver information before creating a new trip', type: 'warning', header: 'Become a driver!'}} />
          }
        }
      )()}
      </Container>
    );
  }
}

export default NewTrip;
