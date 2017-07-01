import React from 'react'
import { Table, Header, Rating, Form, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import axios from 'axios';
import GoogleAuth from './GoogleAuth.jsx';
import DashboardTableBody from './DashboardTableBody.jsx';
import DashboardTableHeader from './DashboardTableHeader.jsx';

import DateTimeParser from '../../../lib/DateTimeParser.js';




class Trips extends React.Component{
  constructor(props) {
   
    super(props);
    this.state = { 
      trips:      {}
    };
  }


  handleChange (e, { name, value }) {

    // this.state.user[[name]] = value;
    // this.setState({user: this.state.user})
  }


    handleCancelClick() {
      // this.setState({signupCompleted: true});
    }

    componentDidMount() {
      axios.get(`/api/users/${this.props.match.params.username}/trips`)
      .then( tripData => {
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
            
      if (trips) {
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
             </Form>
          </div>
        )
      } else {
        return (
          <div>
            <h1>We have nothing</h1>
          </div>
        )
      }
    } //end render
}

export default Trips;


{/* <DashboardDriverRow key={index} trip={trip} driverDetails={trips} /> */}