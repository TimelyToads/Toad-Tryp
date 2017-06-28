import React from 'react'
import { Form, Input, Segment, Header, Button, Radio } from 'semantic-ui-react'
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import axios from 'axios';

class Create extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      preventEdits:   false,
      user:           {username: props.match.params.username} 
    };

  }


    handleChange (e, { name, value }) {
      console.log('inside on change', name, value);
      this.setState({ [name]: value })
    }
  
    handleSubmit (e) {
      
      const { firstName, lastName } = this.state
      console.log('Inside handleSubmit', this.state);
     
    }

    componentDidMount() {
      
    }
  
    render() {
      const { name, email, submittedName, submittedEmail, preventEdits, user } = this.state;
      let driverVehicleComponent = '';
      

      return (
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Segment.Group>
           <Header as='h4' inverted color='green'>User Info</Header>
            <Segment.Group>
              <Segment><UserInfo onChange={this.handleChange.bind(this)} disabled={preventEdits} user={user}/></Segment>
            </Segment.Group>
            <Header as='h4' inverted color='green'>Driver Info</Header>
              <Segment.Group>
              <Segment><DriverInfo onChange={this.handleChange.bind(this)}/></Segment>
              </Segment.Group>
              <Header as='h4' inverted color='green'>Vehicle Info</Header>
            <Segment.Group>
              <Segment><VehicleInfo /></Segment>
            </Segment.Group>
            <Segment textAlign="right">
            <Button color="grey">Cancel</Button>
            <Button color="green" onClick={this.handleSubmit.bind(this)}> Submit</Button>
            </Segment>
            </Segment.Group>
          </Form>
        </div>
      )
    }
  

}
export default Create;


