import React from 'react';
import {Form, Input, Segment, Select, Header, Button, Card } from 'semantic-ui-react';
import MessageEntry from './MessageEntry.jsx'

// NEED TO SET A TEXT LIMIT ON SENDING MESSAGE

// const ChatBox = (props) => (
//   <Card>
//     {props.messages}
//     <Input type='text' onChange={props.updateChatBoxField} value={props.chatBoxField}></Input> <Button color="blue" onClick={props.handleSendMessage}>Send</Button>
//   </Card>
// );

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages, chatBoxField, updateChatBoxField, handleSendMessage} = this.props;
    
    // CONSIDER FIGURING OUT HOW TO SORT '2017-07-04T08:02:03.000Z'
    // const sortedMessages = messages.sort(function(a, b) {
    //   return b.time_stamp - a.time_stamp;
    // });

    return (
        <Card>
          {
            messages.map((data, index) => {
              return <MessageEntry message={data.message} key={index}/>
            })
          }
          <Input type='text' onChange={updateChatBoxField} value={chatBoxField}></Input> <Button color="blue" onClick={handleSendMessage}>Send</Button>
        </Card>
    )
  }
}

export default ChatBox;