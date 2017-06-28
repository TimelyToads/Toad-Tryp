import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/NavBar.jsx';
import MyRoutes from './components/MyRoutes.jsx';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false
    }
  }

  authenticateUser() {
    this.setState(
      {
        isAuthenticated: true
      }
    )
  }

  isUserAuthenticated() {
    return this.state.isAuthenticated
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)}/>
          <MyRoutes authenticateUserFunc={this.authenticateUser.bind(this)}/>
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
