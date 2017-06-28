import React from 'react'
import { Form, Input, Segment, Header, Button,Divider } from 'semantic-ui-react'
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import VehicleInfo from './VehicleInfo.jsx'
import axios from 'axios';

class Profile extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      preventEdits:   true,
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
      
      axios.get(`/api/users/${this.state.user.username}`)
        .then( (response) => {
          this.setState({
            user: response.data
          });
          console.log('USER: ', response.data);
        })
        .catch( (error) => {
          console.log('Error fetching user data in Proflie component: ', error);
        });
      
    }
  
    render() {
      const { name, email, submittedName, submittedEmail, preventEdits, user } = this.state

      return (
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Segment.Group>
           <Header as='h4' inverted color='green'>User Info</Header>
            <Segment.Group>
              <Segment><UserInfo onChange={this.handleChange.bind(this)} disabled={preventEdits} user={user}/></Segment>
            </Segment.Group>
            
            {(() => {
              if (user.license_plate){

                 return <div>
                    <Header as='h4' inverted color='green'>Driver Info</Header>
                   <Segment.Group>
                    <Segment><DriverInfo onChange={this.handleChange.bind(this)}/></Segment>
                    </Segment.Group>
                    <Header as='h4' inverted color='green'>Vehicle Info</Header>
                  <Segment.Group>
                    <Segment><VehicleInfo /></Segment>
                  </Segment.Group>
                  
                </div>

              } 
            })()}

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
export default Profile;


