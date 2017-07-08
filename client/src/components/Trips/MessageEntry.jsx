import React from 'react';
import { Button, Icon, Comment, Container } from 'semantic-ui-react';

class MessageEntry extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var messageAlign = 'left';
    var ping = <Comment.Action onClick={() => this.props.handlePingUser(this.props.messageData)}><Icon name='lightning' /></Comment.Action>;
    var trash;

    if (this.props.user.id === this.props.messageData.user_id_from) {
      messageAlign = 'right';
      ping = null;
      trash = <Comment.Action onClick={() => this.props.handleDeleteMessage(this.props.messageData.id)}><Icon name='trash outline' /></Comment.Action>;
    }


    return (
      <Container textAlign={messageAlign}>
        <Comment>
          <Comment.Author>{this.props.messageData.username_from}{ping}</Comment.Author>
          <Comment.Text >
            {this.props.messageData.message}
            {trash}
          </Comment.Text>
        </Comment>
      </Container>
    )
  }
}

export default MessageEntry;