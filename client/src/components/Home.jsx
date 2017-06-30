import React from 'react';
import Search from './Search.jsx';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div className="page-heading">
        <h1>
          ToadTryp
        </h1>
        <h2>
          Go anywhere with a fellow Toad.
        </h2>
      </div>
      <Search currentUser={this.props.currentUser} />
    </div>);
  }
}

export default withRouter(Home);