import React from 'react';
import { Form, Input, Segment, Header, Button, Radio } from 'semantic-ui-react';
import UserInfo from './UserInfo.jsx';
import DriverInfo from './DriverInfo.jsx';
import axios from 'axios';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';

class Profile extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      preventEdits: true,
      user: {
        username: props.match.params.username
      } 
    };

  }


  handleChange (e, { name, value }) {
    console.log('inside on change', name, value);

    let newUserObj = this.state.user;
    newUserObj[[name]] = value;

    this.setState({user: newUserObj});
  }
  
  handleSubmit (e) {
      
    console.log('Inside handleSubmit', this.state.user);
    axios.post('/api/users', this.state.user)
        .then( res => {
          console.log('SUCCESS creating a user', res);
          this.setState({preventEdits: true});
        })
        .catch( err => {
          console.log('Error creating a user ', err);
        });
  }

  handleEditClick(e) {
    console.log('inside handleEditClick');
    this.setState(
        {preventEdits: false}
      );
  } 

  handleCancelClick() {
    this.setState({preventEdits: true});
  }

  componentDidMount() {
    axios.get(`/api/users/${this.state.user.username}`)
      .then( userData => {
        this.setState({
          user: userData.data
        });
      })
      .catch( err => {
        console.log('Error retrieving user on Profile page: ', this.state.user.username);
      });
      
  }
  
  render() {
    const { name, email, submittedName, submittedEmail, preventEdits, user, editing } = this.state;

    return (
      <div>
        <Form >
          <Segment.Group>
            <Segment padded="very">
              <Button floated="right" toggle active={preventEdits} onClick={this.handleEditClick.bind(this)}> Edit </Button>
              <Header id="userInfoHeader" as='h2' inverted color='green'>User Info</Header>
            </Segment>
            <Segment.Group>
              <Segment>
                <UserInfo onChange={this.handleChange.bind(this)} disabled={preventEdits} user={user} />
              </Segment>
            </Segment.Group>
            
            {(() => {
              if (user.license_plate) {
                return (
                  <Segment>
                    <DriverInfo onChange={this.handleChange.bind(this)} user={user} disabled={preventEdits} />
                  </Segment>
                );    
              } 
            })()}
            {(() => {

              if (!preventEdits) {
                return (
                  <Segment textAlign="right">
                    <Button color="grey" onClick={this.handleCancelClick.bind(this)}> Cancel </Button>
                    <Button color="green" onClick={this.handleSubmit.bind(this)}> Submit </Button>
                  </Segment>
                );
              }

            })()}
          </Segment.Group>
        </Form>
      </div>
    );
  }
  

}
export default Profile;


// AuthenticationHelper.isUserAuthenticated()
// .then( res => {
//   console.log('User is logged in');
// })
// .catch( err => {
//   console.log('User is not logged in');
// });

// axios.get(`/api/users/${this.state.user.username}`)
// .then( (response) => {
//   this.setState({
//     user: response.data
//   });
//   console.log('USER: ', response.data);
// })
// .catch( (error) => {
//   console.log('Error fetching user data in Proflie component: ', error);
// });