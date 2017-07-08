import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

class AlertPing extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   open: this.props.pinged 
    // };
  }

  // show = (size) => () => this.setState({ size, open: true })
  // close = () => this.setState({ open: false })
  // close = () => console.log('closing!')

  render() {
    return (
      <Modal size='small' open={true}>
        <Modal.Header>
          Pinged by USERE!
        </Modal.Header>
        <Modal.Actions>
          <Button negative onClick={this.props.dismissPing}>
            Ignore
          </Button>
          <Button positive icon='chevron right' labelPosition='right' content='Take me there' />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AlertPing;