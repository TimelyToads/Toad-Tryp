import React from 'react';
import Search from './Search.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <h1>
        Toad Tryp
      </h1>
      <Search />
    </div>);
  }
}

export default Home;