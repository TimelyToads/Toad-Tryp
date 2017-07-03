import React from 'react';
import { Form, Input, Segment, Header, Button } from 'semantic-ui-react';
import UserInfo from './UserInfo.jsx';
import DriverInfo from './DriverInfo.jsx';
import BecomeADriver from './BecomeADriver.jsx';
import axios from 'axios';
import AuthenticationHelper from '../../../../lib/AuhenticationHelper.js';
import UserMessage from './UserMessage.jsx';

class Profile extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      preventEdits: true,
      showDriverInfo: false,
      disableDriverToggle: false,
      user: {
        username: props.match.params.username
      } 
    };
    this.handleDriverToggle = this.handleDriverToggle.bind(this);
  }

  handleDriverToggle () {
    this.setState({ showDriverInfo: !(this.state.showDriverInfo) });
  }

  handleChange (e, { name, value }) {
    let newUserObj = this.state.user;
    newUserObj[[name]] = value;
    this.setState({user: newUserObj});
  }
  
  handleSubmit (e) {
    axios.post('/api/users', this.state.user)
    .then( res => {
      this.setState({preventEdits: true});
      this.props.setUserObject(res.data);
    })
    .catch( err => {
      console.log('Error creating a user ', err);
    });
  }

  handleEditClick(e) {
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
        let alreadyIsDriver = !!userData.data.license_plate;
        this.setState({
          user: userData.data,
          showDriverInfo: alreadyIsDriver,
          disableDriverToggle: alreadyIsDriver
        });
      })
      .catch( err => {
        console.log('Error retrieving user on Profile page: ', this.state.user.username);
      });
      
  }
  
  render() {
    const { preventEdits, user } = this.state;

    if ( this.props.isAuthenticated() ) {
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

              {
                (() => {
                  if (this.state.showDriverInfo) {
                    return (
                        <Segment>
                          <BecomeADriver disableToggle={this.state.disableDriverToggle} handleDriverToggle={this.handleDriverToggle} />
                          <DriverInfo onChange={this.handleChange.bind(this)} user={user} disabled={preventEdits} />
                        </Segment>
                    );    
                  } else {
                    return (
                      <Segment>
                        <BecomeADriver handleDriverToggle={this.handleDriverToggle} />
                      </Segment>
                    );
                  }
                }
              )()}
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
    } else {
      return (
        <div>
          <UserMessage message={ {header: 'You must register before you can do that!', content: 'Visit our registration page, then try again.', type: 'warning' } } />
        </div>
      );
    }
  }
}

export default Profile;
