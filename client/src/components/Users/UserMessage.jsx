import React from 'react';
import { Message, Form } from 'semantic-ui-react';

class UserMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.message.type === 'info') {
      return (
       
          <Message >
          <Message.Header>{this.props.message.header}</Message.Header>
          <p>{this.props.message.content}</p>
          </Message>
       
      )
    } else if  (this.props.message.type === 'warning') {
      return (
        <Message warning>
          <Message.Header>{this.props.message.header}</Message.Header>
          <p>{this.props.message.content}</p>
        </Message>
      )
    }

  } //end render
}

export default UserMessage;

