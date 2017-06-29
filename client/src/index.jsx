import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/NavBar.jsx';
import MyRoutes from './components/MyRoutes.jsx';
import authHelper from '../../lib/AuhenticationHelper.js';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      user: {}
    }
  }

  authenticateUser(userObj) {
    console.log('setting user in index.jsx: ', userObj.data);
    this.setState(
      {
        isAuthenticated: true,
        user: userObj
      }
    )
  }

  isUserAuthenticated() {
    return this.state.isAuthenticated
  }

  componentDidMount() {
    // return authHelper.getAuthenticatedUser()
    // .then( (user) => {
    //   this.setState({ user });
    // })
    // .catch( (err) => {
    //   console.log('Error authenticating user in index.jsx: ', err);
    // });
  }

  render() {
    console.log('HELLO USER: ', this.state.user);
    return (
      <Router history={browserHistory}>
        <div>
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)} username={this.state.user.username} />
          <MyRoutes authenticateUserFunc={this.authenticateUser.bind(this)}/>
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
