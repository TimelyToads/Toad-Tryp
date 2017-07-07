import React from 'react';
import { Table, Header, Rating, Image, Label } from 'semantic-ui-react';
import DashboardDriverRow from './DashboardDriverRow.jsx';

const DashboardTableBody = (props) => (
  <Table.Body>
    {
      props.trips.map( (trip, index) => {
        if (props.driver) {
          return <DashboardDriverRow key={index} trip={trip} driverDetails={props.driverDetails} driver={true} getTrips={props.getTrips}/>
        } else {
          return <DashboardDriverRow key={index} trip={trip} driverDetails={props.driverDetails} driver={false} getTrips={props.getTrips}/>
        }
      })
    }
  </Table.Body>
)

export default DashboardTableBody;







