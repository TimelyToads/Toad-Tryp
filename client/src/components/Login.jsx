import React from 'react'
import { Form, Input, Segment, Header, Button, Radio, Divider, Checkbox, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 
import axios from 'axios';
import GoogleAuth from './GoogleAuth.jsx';
import UsernamePassword from './UsernamePassword.jsx'
import SubmitCancelButtons from './SubmitCancelButtons.jsx';
import PasswordFailMessage from './PasswordFailMessage.jsx';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      signupCompleted:        false,
      passwordAttemptFailed:  false,
      user:                   {}
    };
  }


  handleChange (e, { name, value }) {

    this.state.user[[name]] = value;
    this.setState({user: this.state.user})
  }

  handleSubmit (e) {
    console.log('inside login.jsx handleSubmit');
    axios.get(`/api/users/${this.state.user.username}`)
      .then( userData => {
        
        if( userData.data.password === this.state.user.password) {
          this.props.authenticateUserFunc(userData.data);
          this.setState({signupCompleted: true});
        }
         
      })
      .catch( err => {
        console.log('Error retrieving user on Profile page: ', this.state.user.username);
        this.setState({passwordAttemptFailed: true});
      });
  }

    handleCancelClick() {
      this.setState({signupCompleted: true});
    }

  
    render() {
      const { driverSignup, preventEdits, user, signupCompleted, passwordAttemptFailed } = this.state;

      return (
        <div>
        {signupCompleted && (
          <Redirect from={'/'} push to={{
            pathname: '/'
          }}/>
        )}
        {passwordAttemptFailed && (
          <PasswordFailMessage />
        )}
                  <Form>
        <Segment.Group>
          <Segment padded >
            <Header id="userInfoHeader" as='h2' inverted color='green'>Authenticate Yourself</Header>
            <GoogleAuth isAuthenticated={this.props.isAuthenticated} authenticateUserFunc={this.props.authenticateUserFunc} />
          </Segment>
          <Divider horizontal>Or</Divider>
            <Segment.Group>
              <Segment padded>
                <UsernamePassword onChange={this.handleChange.bind(this)}  user={this.state.user}/>
              </Segment>
              <SubmitCancelButtons cancelClickHandler={this.handleCancelClick.bind(this)} submitClickHandler={this.handleSubmit.bind(this)} />
            </Segment.Group>
          </Segment.Group>
        </Form>
      </div>
      )
    } //end render
}
export default Login;


