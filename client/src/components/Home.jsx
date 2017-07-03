import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Search from './Search/Search.jsx';
import { withRouter } from 'react-router';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Container>
      <Header as='h1' color="green">
        ToadTryp
      </Header>
      <Header as='h2' color="grey">
        Go anywhere with a fellow Toad.
      </Header>
      <Search currentUser={this.props.currentUser} />
    </Container>
    );
  }
}

export default withRouter(Home);