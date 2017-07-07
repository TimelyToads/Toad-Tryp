import React from 'react';
import { Comment, Loader } from 'semantic-ui-react';

const TypingIndicator = (props) => (
  <Comment>
    <Comment.Author>{props.username}:</Comment.Author>
    <Comment.Text>
      is typing... <Loader size='tiny' active inline /></Comment.Text>
  </Comment>
)

export default TypingIndicator;