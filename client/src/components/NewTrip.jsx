import React from 'react';
import {Button, CheckBox, Form, Input, Segment, Header, Select } from 'semantic-ui-react';
import axios from 'axios';
import SubmitCancelButtons from './SubmitCancelButtons.jsx';
import TripField from './TripField.jsx';

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
    this.setState({trip: this.state.trip},() => {
      console.log(this.state.trip);
    });
  }

  handleCancelClick() {
    console.log('handleclick');
    this.setState({formComplete: true});
  }

  handleSubmit() {
    console.log('handlesubmit');
    this.setState({formComplete: true});
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
    return (<div>
      {this.props.isAuthenticated() && 
      <Segment.Group>
        <Segment padded="very">
          <Header as='h2' color='green'>New Trip</Header>
          <Segment.Group>
            <Segment>
              <TripField handleChange={this.handleChange}/>
            </Segment>
            <SubmitCancelButtons cancelClickHandler={this.handleCancelClick} submitClickHandler={this.handleSubmit}/>
          </Segment.Group>
        </Segment>
      </Segment.Group>
      }
      {!this.props.isAuthenticated() && 
        <div>NOT LOGED INT</div>
      }
    </div>);
  } 
} 

export default NewTrip;
