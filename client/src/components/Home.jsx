import React from 'react';
import Search from './Search.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div className="page-heading">
        <h1>
          Toad Tryp
        </h1>
        <h2>
          Go anywhere with a fellow Toad.
        </h2>
      </div>
      <Search />
    </div>);
  }
}

export default Home;