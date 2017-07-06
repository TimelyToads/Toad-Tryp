import React from 'react';
import { Button, Icon, Comment } from 'semantic-ui-react';

const MessageEntry = (props) => (
  <Comment>
    <Comment.Author>{props.messageData.username_from}:</Comment.Author>
    <Comment.Text>{props.messageData.message}
      <Comment.Action onClick={() => props.handleDeleteMessage(props.messageData.id)}><Icon name='trash outline' /></Comment.Action>
    </Comment.Text>
  </Comment>
  
)

export default MessageEntry;


// <Button size='mini' onClick={() => props.handleDeleteMessage(props.messageData.id)} icon><Icon name='remove'/></Button>
  // <Feed.Event>
  //   <Feed.Content>
  //     <Feed.Summary>
        
  //         {props.messageData.username_from}:
        
  //     </Feed.Summary>
  //     <Feed.Extra text>
  //       {props.messageData.message}
  //     </Feed.Extra> 
  //   </Feed.Content>
  // </Feed.Event>