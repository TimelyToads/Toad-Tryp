import React from 'react';
import { Button, Icon, Comment } from 'semantic-ui-react';

const MessageEntry = (props) => (
  <Comment>
    <Comment.Author>{props.messageData.username_from}:</Comment.Author>
    <Comment.Text>{props.messageData.message}
      <Comment.Action onClick={() => props.handleDeleteMessage(props.messageData.id)}><Icon name='trash outline' /></Comment.Action>
      <Comment.Action onClick={() => props.handlePingUser(props.messageData)}><Icon name='lightning' /></Comment.Action>
    </Comment.Text>
  </Comment>
  
)

export default MessageEntry;