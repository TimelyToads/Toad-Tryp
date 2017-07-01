import React from 'react';
import { Segment, Label, Checkbox } from 'semantic-ui-react';

// TODO: remove Semantic UI imports that you don't end up needing!

const BecomeADriver = (props) => (
  <Segment.Group horizontal>
    <Segment textAlign="center" >
      <Label color='grey' size='large' horizontal>Passenger</Label>
      <Checkbox toggle onChange={props.handleDriverToggle} /> 
      <Label color='green' size='large' horizontal>Become A Driver</Label>
    </Segment>
  </Segment.Group>
);

export default BecomeADriver;