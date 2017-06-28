import React from 'react'
import { Form, Input, Segment, Header, Button,Divider } from 'semantic-ui-react'
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import VehicleInfo from './VehicleInfo.jsx'

class CreateDriver extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      areacode: '',
      phone1: '',
      phone2: '',
      DLNumber: '',
      DLState: '',
      DLExpMonth: '',
      DLExpDay: '',
      DLExpYear: ''};
  }


    handleChange (e, { name, value }) {
      console.log('inside on change', name, value);
      this.setState({ [name]: value })
    }
  
    handleSubmit (e) {
      
      const { firstName, lastName } = this.state
      console.log('Inside handleSubmit', this.state);
    
     
    }
  
    render() {
      const { name, email, submittedName, submittedEmail } = this.state
  
      return (
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Segment.Group>
            <Segment.Group>
              <Segment><Header as='h4' inverted color='green'>User Info</Header></Segment>
              <Segment><UserInfo onChange={this.handleChange.bind(this)}/></Segment>
            </Segment.Group>
            
            <Segment><Header as='h4' inverted color='green'>Driver Info</Header></Segment>
            <Segment.Group>
            <Segment><DriverInfo onChange={this.handleChange.bind(this)}/></Segment>
            </Segment.Group>

            <Segment><Header as='h4' inverted color='green'>Vehicle Info</Header></Segment>
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
export default CreateDriver;


{/* <Form onSubmit={this.handleSubmit}> 
<Segment.Group>
  <Segment><Header as='h4' inverted color='green'>User Info</Header></Segment>
  <Segment.Group>
    <Segment><UserInfo /></Segment>
  </Segment.Group>

  <Segment><Header as='h4' inverted color='green'>Driver Info</Header></Segment>
  <Segment.Group>
    <Segment><DriverInfo /></Segment>
  </Segment.Group>

  <Segment><Header as='h4' inverted color='green'>Vehicle Info</Header></Segment>
  <Segment.Group>
    <Segment><VehicleInfo /></Segment>
  </Segment.Group>
  <Segment textAlign="right">
  <Button color="grey">Cancel</Button>
  <Button color="green"> Submit</Button>
  </Segment>
</Segment.Group>
</Form> */}