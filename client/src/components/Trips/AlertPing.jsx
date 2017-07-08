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
          <Button color='grey' onClick={this.props.dismissPing} content='Ignore'/>
          <Button color='green' icon='chevron right' labelPosition='right' onClick={() => this.props.redirectFromPing(this.props.pingedData.trip_id)} content={`Take me to where ${this.props.pingedData.username_from} is`} />
        </Modal.Actions>

      </Modal>
    )
  }
}

export default AlertPing;