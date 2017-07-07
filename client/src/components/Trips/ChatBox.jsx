import React from 'react';
import {Form, Input, Segment, Select, Header, Button, Card, Comment } from 'semantic-ui-react';
import MessageEntry from './MessageEntry.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import axios from 'axios';
import io from 'socket.io-client';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      chatBoxField: '',
      isTyping: false,
      otherIsTyping: false,
    }
    this.updateChatBoxField = this.updateChatBoxField.bind(this);
  }

  componentDidMount() {
    this.fetch()
    var that = this;

    this.socket = io.connect('/');
    this.socket.on('updateMessagesAlert', () => that.fetch());
    this.socket.on('otherIsTyping', (data) => {
      this.setState({
        otherIsTyping: data.isTyping
      });
    });
  }

  fetch() {
    axios.get(`/api/trips/${this.props.tripId}/getmessages`)
      .then(response => {
        this.setState({
          messages: response.data
        });
      });
  }

  updateChatBoxField(event) {
    this.setState({
      chatBoxField: event.target.value,
    });

    this.socket.emit('isTyping', { isTyping: !!event.target.value });
  }

  handleSendMessage() {
    var tripId = this.props.tripId;
    var userId = this.props.userData.id || 1;
    var username = this.props.userData.username || 'annon user ' + Math.random().toFixed(2);

    var date = new Date();
    var timestamp = date.toISOString().slice(0,10) + ' ' + date.toISOString().slice(11,19);

    axios.post(`/api/trips/${tripId}/sendmessage`, { userId: userId, username_from: username, message: this.state.chatBoxField, timestamp: timestamp})
  }

  handleDeleteMessage(messageKey) {
    var tripId = this.props.tripId;
    axios.post(`/api/trips/${tripId}/deletemessage`, { messageKey: messageKey })
  }

  render() {
    const { messages } = this.state;
    
    // CONSIDER FIGURING OUT HOW TO SORT '2017-07-04T08:02:03.000Z'
    // const sortedMessages = messages.sort(function(a, b) {
    //   return b.time_stamp - a.time_stamp;
    // });

    // NEED TO SET A TEXT LIMIT ON SENDING MESSAGE
    let typingIndiciator;
    if (this.state.otherIsTyping) {
      typingIndiciator = <TypingIndicator/>
    }

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
                return <MessageEntry key={index} messageData={messageData} handleDeleteMessage={this.handleDeleteMessage.bind(this)}/>
              })
            }
            {
              typingIndiciator
            }
          </Comment.Group>
        </Card.Content>
        <Card.Content>
          <Input type='text' onChange={this.updateChatBoxField} fluid action><input /><Button type='Submit' onClick={this.handleSendMessage.bind(this)}>Send</Button></Input>
        </Card.Content>
      </Card> 
    )
  }
}

export default ChatBox;

 // <Button color="blue" onClick={handleSendMessage}>Send</Button>