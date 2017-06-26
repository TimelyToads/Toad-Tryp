import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';


class App extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();


  }

  componentDidMount() {


  }

=======
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    }
  }
>>>>>>> Refactoring to handle redirect with data
  render () {
    return (
      <div>
        <NavBar />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'))