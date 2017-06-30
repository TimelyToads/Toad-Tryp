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
    console.log('setting user in index.jsx: ', userObj);
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
    console.log('index.jsx token?', window.authToken);
  }

  render() {
    console.log('Rendering login.jsx', this.props);
    const currentUser = this.state.user;
    return (
      <Router history={browserHistory} >
        <div>
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)} username={this.state.user.username} />
<<<<<<< HEAD
          <MyRoutes isAuthenticated={this.isUserAuthenticated.bind(this)} authenticateUserFunc={this.authenticateUser.bind(this)} currentUser={currentUser}/>
=======
          <MyRoutes currentUser={this.state.user} isAuthenticated={this.isUserAuthenticated.bind(this)} authenticateUserFunc={this.authenticateUser.bind(this)}/>
>>>>>>> Work on redirect for Login.
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
