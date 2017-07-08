import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

class AlertPing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal size='small' open={true}>
        <Modal.Header>
          You've been pinged by {this.props.pingedData.username_from}!
        </Modal.Header>
        <Modal.Actions>
          <Button color='gray' onClick={this.props.dismissPing}>
            Ignore
          </Button>
          <Button positive icon='chevron right' labelPosition='right' content={`Take me to where ${this.props.pingedData.username_from} is`} />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AlertPing;