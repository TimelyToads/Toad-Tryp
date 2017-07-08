import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/Navigation/NavBar.jsx';
import MyRoutes from './components/Navigation/MyRoutes.jsx';
import authHelper from '../../lib/AuhenticationHelper.js';
import io from 'socket.io-client';
import AlertPing from './Components/Trips/AlertPing.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      user: {},
      pinged: true
    }
  }

  authenticateUser(userObj) {
    console.log('setting user in index.jsx: ', userObj);
    if (userObj) {
      this.setState(
        {
          isAuthenticated: true,
          user: userObj
        }
      )
    } else {
      this.setState(
        {
          isAuthenticated: false,
          user: {}
        }
      )
    }
  
  }

  setUserObject(userObj) {
    this.setState( {user: userObj} );
  }

  isUserAuthenticated() {
    return this.state.isAuthenticated
  }

  componentDidMount() {
    console.log('index.jsx token?', window.authToken);


    this.socket = io.connect('/');
    this.socket.on(`pinguser`, data => {
      console.log('someone is pinging!')
      this.setState({
        pinged: true
      });
    });
  }

  dismissPing() {
    console.log('dismissing ping')
    this.setState({
      pinged: false
    })
  }

  render() {
    console.log('Rendering login.jsx', this.state.user);
    const currentUser = this.state.user;

    var alertPing;
    if (this.state.pinged) {
      alertPing = <AlertPing dismissPing={this.dismissPing.bind(this)}/>
    }

    return (
      <Router history={browserHistory} >
        <div>
          milk
          {alertPing}
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)} username={this.state.user.username} authenticateUserFunc={this.authenticateUser.bind(this)} />
          <MyRoutes isAuthenticated={this.isUserAuthenticated.bind(this)} authenticateUserFunc={this.authenticateUser.bind(this)} currentUser={currentUser} setUserObject={this.setUserObject.bind(this)} />
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
