import React from 'react'
import { Table, Header, Rating, Form, Segment, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import axios from 'axios';
import GoogleAuth from './GoogleAuth.jsx';
import DashboardTableBody from './DashboardTableBody.jsx';
import DashboardTableHeader from './DashboardTableHeader.jsx';
import DateTimeParser from '../../../lib/DateTimeParser.js';
import UserMessage from './UserMessage.jsx'




class Dashboard extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      trips:      {}
    };
  }



  componentDidMount() {
    console.log('PROPS: ', this.props.isAuthenticated());
    axios.get(`/api/users/${this.props.match.params.username}/trips`)
    .then( tripData => {
      console.log('TRIP: ', tripData);
      DateTimeParser.parseDates(tripData.data.hostedTrips);
      DateTimeParser.parseDates(tripData.data.trips);
      this.setState( { trips: tripData.data} );
    })
    .catch( err => {
      console.log('Error retrieving trips: ', err);
    });
  }
  
  
  render() {
    const { trips } = this.state;
    const passenderTableHeaders = ['ID', 'Departure', 'Arrival', 'Vehicle', 'Price', 'Driver', 'Details'];
    const driverTableHeaders = ['ID', 'Departure', 'Arrival', 'Vehicle', 'Price', 'Seats', 'Details'];
          
    if (this.props.isAuthenticated() && trips) {
      return (
        <div> 
            <Form>
              { (()=> {
              if (trips.trips && trips.trips.length > 0) {
                return (<div><h1>Trips as Passenger</h1>
                  <Table>
                    <DashboardTableHeader headers={passenderTableHeaders}/>
                    <DashboardTableBody trips={trips.trips} driverDetails={trips} />
                  </Table>
                </div>)
              }
              })()    
              }

              { (()=> {
              if (trips.hostedTrips && trips.hostedTrips.length > 0) {

                return (<div><h1>Trips as Driver</h1>
                  <Table>
                  <DashboardTableHeader headers={driverTableHeaders}/>
                    <DashboardTableBody trips={trips.hostedTrips} driverDetails={trips} />
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
        <div>
          <Segment>
          <UserMessage message={ {header: 'You must register before you can do that!', content: 'Visit our registration page, then try again.', type: 'warning' } } />
          </Segment>
        </div>
      )
    }
  } //end render

}

export default Dashboard;


{/* <DashboardDriverRow key={index} trip={trip} driverDetails={trips} /> */}