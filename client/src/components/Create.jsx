import React from 'react'
import { Form, Input, Segment, Header, Button, Radio, Divider, Checkbox, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import axios from 'axios';
import Login from './Login.jsx';

class Create extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      preventEdits: false,
      driverSignup: false,
      signupCompleted: false,
      user: {} 
    };
  }


  handleChange (e, { name, value }) {

    this.state.user[[name]] = value;
    this.setState({user: this.state.user})
  }

  handleSubmit (e) {
    
    axios.post('/api/users', this.state.user)
      .then( res => {
        this.props.authenticateUserFunc(res.data);
        this.setState({preventEdits: true, signupCompleted: true});
      })
      .catch( err => {
        console.log('Error creating a user ', err);
      });
    
  }

    handleCancelClick() {
      this.setState({signupCompleted: true});
    }

    handleDriverToggle() {
      this.setState({driverSignup: !this.state.driverSignup})
    }

  
    render() {
      const { driverSignup, preventEdits, user, signupCompleted } = this.state;

      return (
        <div>
        {signupCompleted && (
          <Redirect from={'/'} push to={{
            pathname: '/'
          }}/>
        )}
        <Segment.Group>
          <Segment padded >
            <Login isAuthenticated={this.props.isAuthenticated} authenticateUserFunc={this.props.authenticateUserFunc} />
          </Segment>
          <Divider horizontal>Or</Divider>
          <Form>
            <Segment.Group>
              <Segment padded>
                <UserInfo onChange={this.handleChange.bind(this)} disabled={preventEdits} user={user}/>
              </Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign="center" >
                <Label color='blue' horizontal>Driver</Label><Checkbox toggle onChange={this.handleDriverToggle.bind(this)} /> 
              </Segment>
              <Segment textAlign="center">
                <Label color='yellow' horizontal>Passenger</Label><Checkbox toggle checked /> 
              </Segment>
            </Segment.Group>

            { (() => {
              if (driverSignup) {
                return <div>
                <Segment.Group>
                  <Segment padded>
                    <DriverInfo onChange={this.handleChange.bind(this)} disabled={preventEdits} user={user}/>
                  </Segment>
                </Segment.Group>
                </div>
              }
            })()}

            {(() => {
              if (!preventEdits){

                return <div>
                <Segment textAlign="right">
                  <Button  color="grey" onClick={this.handleCancelClick.bind(this)}>Cancel</Button>
                  <Button  color="green" onClick={this.handleSubmit.bind(this)}> Submit</Button>
                </Segment>
                </div>

              } 
              })()}
          </Form>
        </Segment.Group>
      </div>
      )
    } //end render
}
export default Create;


