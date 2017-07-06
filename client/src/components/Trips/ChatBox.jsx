import React from 'react';
import {Form, Input, Segment, Select, Header, Button, Card, Comment } from 'semantic-ui-react';
import MessageEntry from './MessageEntry.jsx'



class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages, chatBoxField, updateChatBoxField, handleSendMessage, handleDeleteMessage} = this.props;
    
    // CONSIDER FIGURING OUT HOW TO SORT '2017-07-04T08:02:03.000Z'
    // const sortedMessages = messages.sort(function(a, b) {
    //   return b.time_stamp - a.time_stamp;
    // });

    // NEED TO SET A TEXT LIMIT ON SENDING MESSAGE

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Trip Forum
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Comment.Group>
            {
              messages.map((messageData, index) => {
                return <MessageEntry key={index} messageData={messageData} handleDeleteMessage={handleDeleteMessage}/>
              })
            }
          </Comment.Group>
        </Card.Content>
        <Card.Content>
          <Input type='text' onChange={updateChatBoxField} value={chatBoxField} fluid action><input /><Button type='Submit' onClick={handleSendMessage}>Send</Button></Input>
        </Card.Content>
      </Card> 
    )
  }
}

export default ChatBox;

 // <Button color="blue" onClick={handleSendMessage}>Send</Button>