import React from 'react'
import { Form, Input, Segment, Header, Button } from 'semantic-ui-react'
import UserInfo from './UserInfo.jsx'
import DriverInfo from './DriverInfo.jsx'
import VehicleInfo from './VehicleInfo.jsx'

class CreateDriver extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Form>
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
      </Form>
    )
  }
  

}
export default CreateDriver;

// <Segment padded>
// <Form id='user-signup'>
// <Header as='h4' inverted color='green'>User Info</Header>
// <UserInfo />
// </Form>
// </Segment>  <Segment.Group horizontal>
{/* <Segment>Top</Segment>
<Segment>Middle</Segment>
<Segment>Bottom</Segment>
</Segment.Group>
<Segment>Bottom</Segment>
 */}