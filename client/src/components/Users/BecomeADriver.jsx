import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

const BecomeADriver = (props) => (
  <Segment.Group horizontal>
    <Segment textAlign="center" >
      <Button animated='vertical' inverted color='green' disabled={props.disableToggle} onClick={props.handleDriverToggle} >
        <Button.Content visible>
          <Icon name='car' />
          <Icon name='car' />
          <Icon name='car' />
          <Icon name='car' />
          <Icon name='car' />
          <Icon name='car' />
        </Button.Content>
        <Button.Content hidden>
          Become A Driver
        </Button.Content>
      </Button>
    </Segment>
  </Segment.Group>
);

export default BecomeADriver;
