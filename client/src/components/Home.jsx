import React from 'react';
import Search from './Search.jsx';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Inside Home.jsx', this.props);
    return (<div>
      <div className="page-heading">
        <h1>
          ToadTryp
        </h1>
        <h2>
          Go anywhere with a fellow Toad.
        </h2>
      </div>
      <Search />
    </div>);
  }
}

export default withRouter(Home);