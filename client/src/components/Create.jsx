import React from 'react'
import { Form, Input, Segment, Header, Button, Radio, Divider, Checkbox, Label } from 'semantic-ui-react'
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
    console.log('inside on change', name, value);

    let newUserObj = this.state.user;
    newUserObj[[name]] = value;

    this.setState({user: newUserObj})
  }

  handleSubmit (e) {
    
    console.log('Inside handleSubmit', this.state.user);
    // axios.post('/api/users', this.state.user)
    //   .then( res => {
    //     console.log('SUCCESS creating a user', res);
    //     this.setState({preventEdits: true});
    //   })
    //   .catch( err => {
    //     console.log('Error creating a user ', err);
    //   });
  }

    handleCancelClick() {
    }

    handleDriverToggle() {
      this.setState({driverSignup: !this.state.driverSignup})
    }
    componentDidMount() {

    }
  
  
    render() {
      const { driverSignup, preventEdits, user, signupCompleted } = this.state;
      
      return (
        
        <div>
        {console.log('Rendering Create.jsx')}
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
    }
  

}
export default Create;


