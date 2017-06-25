import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'))