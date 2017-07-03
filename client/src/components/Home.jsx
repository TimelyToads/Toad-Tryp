import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Search from './Search/Search.jsx';
import { withRouter } from 'react-router';
import FeaturedDestinations from './FeaturedDestinations.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Container>
      <Header as='h1' id='main-header'>
        ToadTryp
      </Header>
      <Header as='h2' id='main-header2'>
        Go anywhere with a fellow Toad.
      </Header>
      <Search currentUser={this.props.currentUser} />
      <FeaturedDestinations />
    </Container>
    );
  }
}

export default withRouter(Home);