import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick() {
    console.log('Inside handleLogOutClick()');
    gapi.auth2.getAuthInstance()
    .signOut()
      .then( () => {
        console.log('User signed out.');
        this.setState({
          userLoggedIn: false
        });
      });
  }

  render() {
    console.log('Rendering NavBar');
    let loginLink = '';
    if (!this.props.isAuthenticated()) {
      loginLink = <Link to="/login">Login</Link>;
    } else {
      loginLink = <Link onClick={this.handleLogoutClick.bind(this)} to="/">Logout</Link>;
    }

    let profileLink = '';
    if (!this.props.isAuthenticated()) {
      profileLink = '';
    } else {
      profileLink = <Link to={'/profile/'+this.props.username}>Profile</Link>;
    }
    
    return (
     <div>
      <nav>
        <ul>
          <li>{loginLink}</li>
          <li><Link to="/create">Sign Up</Link></li>
          <li><Link to="/">Search</Link></li>
          <li>{profileLink}</li>
        </ul>
      </nav>
    </div>
    )
  }

}  

export default NavBar;