import React from 'react';
import {Button, CheckBox, Form, Input, Segment, Header, Select, Container} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import SubmitCancelButtons from '../SubmitCancelButtons.jsx';
import TripField from './TripField.jsx';
import UserMessage from '../Users/UserMessage.jsx';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, {name, value}) {
    this.state.trip[[name]] = value;
    this.setState({trip: this.state.trip});
  }

  handleCancelClick() {
    console.log('handleclick');
    this.props.history.goBack();
  }

  handleSubmit() {
    console.log('handlesubmit');
    axios.post('/api/trips', this.state.trip)
      .then( res => {
        // this.props.authenticateUserFunc(res.data);
        this.setState({formComplete: true});
      })
      .catch( err => {
        console.log('Error creating a trip ', err);
      });
  }

  render() {
    return (
      <Container>
        {this.state.formComplete && 
          <Redirect to={`/trips/${this.props.currentUser.username}`} />
        }
        {( () => {
          if (this.props.isAuthenticated() && this.props.currentUser.vin) {
            return <Segment.Group>
              <Segment padded="very">
                <Header as='h2' id='main-header2' color='green'>New Trip</Header>
                <Segment.Group>
                  <Segment>
                    <TripField disable handleChange={this.handleChange}/>
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
