import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const MessageEntry = (props) => (
  <div>
    {props.messageData.username_from}: {props.messageData.message} <Button size='mini' onClick={() => props.handleDeleteMessage(props.messageData.id)} icon><Icon name='remove'/></Button>
  </div>
)

export default MessageEntry;