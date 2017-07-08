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
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      user: {
        id: 5,
        username: 'NOTLOGGEDIN',
        first_name: 'John-NOTLOGGEDIN',
        last_name: 'Doe-NOTLOGGEDIN',
        password: '123'
      },
      pinged: false,
      pingedData: null,
      redirectTo: null
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
    this.socket.on(`pingUser`, data => {
      if (data.user_id_to === this.state.user.id) {
        console.log('someone is directly pinging you!', data)
        this.setState({
          pinged: true,
          pingedData: data
        });
      }
    });
  }

  dismissPing() {
    this.setState({
      pinged: false
    });
  }

  redirectFromPing(trip_id) {
    this.dismissPing();
    console.log('right path to redirect');
    axios.get(`/api/trips/${trip_id}`)
      .then((response) => {
        console.log('Successfully fetching from db in Trip Component', response);
        this.setState({
          redirectTo: `/trip/${trip_id}`,
          trips: response.data
        });
      })
      .catch((error) => {
        console.log('GET unsuccessful from the DB in Trip Component', error);
      });
  }

  render() {
    console.log('Rendering login.jsx', this.state.user);
    const currentUser = this.state.user;

    var alertPing;
    if (this.state.pinged) {
      alertPing = <AlertPing pingedData={this.state.pingedData} dismissPing={this.dismissPing.bind(this)} redirectFromPing={this.redirectFromPing.bind(this)}/>
    }

    return (
      <Router history={browserHistory} >
        <div>
          {alertPing}
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)} username={this.state.user.username} authenticateUserFunc={this.authenticateUser.bind(this)} />
          <MyRoutes isAuthenticated={this.isUserAuthenticated.bind(this)} authenticateUserFunc={this.authenticateUser.bind(this)} currentUser={currentUser} setUserObject={this.setUserObject.bind(this)} />

          {this.state.redirectTo && <Redirect push to={{
            pathname: this.state.redirectTo
          }} />}
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
