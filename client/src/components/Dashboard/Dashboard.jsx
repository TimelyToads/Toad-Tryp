import React from 'react'
import { Table, Header, Rating, Form, Segment, Message, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 
import UserInfo from '../Users/UserInfo.jsx'
import DriverInfo from '../Users/DriverInfo.jsx'
import axios from 'axios';
import GoogleAuth from '../Authentication/GoogleAuth.jsx';
import DashboardTableBody from './DashboardTableBody.jsx';
import DashboardTableHeader from './DashboardTableHeader.jsx';
import DateTimeParser from '../../../../lib/DateTimeParser.js';
import UserMessage from '../Users/UserMessage.jsx'


class Dashboard extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      trips:      {}
    };
  }


  componentDidMount() {
    console.log('PROPS: ', this.props.isAuthenticated());
    this.getTrips();
  }

  getTrips() {
    axios.get(`/api/users/${this.props.match.params.username}/trips`)
      .then( tripData => {
        console.log('TRIP: ', tripData);
        // DateTimeParser.parseDates(tripData.data.hostedTrips);
        // DateTimeParser.parseDates(tripData.data.trips);

        //Get the driver id and query the driver
        console.log()


        this.setState( { trips: tripData.data} );
      })
      .catch( err => {
        console.log('Error retrieving trips: ', err);
      });
  }
  
  render() {
    const { trips } = this.state;
    const tableHeaderNames = ['ID', 'Departure', 'Departure City', 'Arrival City', 'Price', 'Seats', 'Details'];
          
    if (this.props.isAuthenticated() && trips) {
      return (
        <div> 
            <Form>
              { (()=> {
                if (trips.trips && trips.trips.length > 0) {
                  return (<div><Header as='h2' id='main-header'>Trips as Passenger</Header>
                    <Table>
                      <DashboardTableHeader headers={tableHeaderNames}/>
                      <DashboardTableBody trips={trips.trips} driverDetails={trips} driver={false} getTrips={this.getTrips.bind(this)}/>
                    </Table>
                  </div>)
                }
              })()    
              }

              { (()=> {
                if (trips.hostedTrips && trips.hostedTrips.length > 0) {
                  return (<div><Header as='h2' id='main-header'>Trips as Driver</Header>
                    <Table>
                      <DashboardTableHeader headers={tableHeaderNames}/>
                      <DashboardTableBody trips={trips.hostedTrips} driverDetails={trips} driver={true} getTrips={this.getTrips.bind(this)}/>
                    </Table>
                  
                  </div>)
                }
              })()    
              }

              { ( () => {
                if (trips.hostedTrips && trips.hostedTrips.length === 0 && trips.trips && trips.trips.length === 0 ) {
                  return (<div>
                    <UserMessage message={ {header: 'No Trips??', content: 'Did you know its been a while since you have taken a toad tryp?', type: 'info' } } />
                  </div>
                  )
                }
              })()

              }

            </Form>
        </div>
      )
    } else {
      return (
        <Container>
          <Segment>
          <UserMessage message={ {header: 'You must register before you can do that!', content: 'Visit our registration page, then try again.', type: 'warning' } } />
          </Segment>
        </Container>
      )
    }
  } //end render

}

export default Dashboard;


{/* <DashboardDriverRow key={index} trip={trip} driverDetails={trips} /> */}