import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'
import { withRouter } from 'react-router';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log('Rendering NavBar');
    let loginLink = '';
    if (!this.props.isAuthenticated()) {
      loginLink = <Link to="/login">Login</Link>;
    } else {
      loginLink = <Link to="/">Logout</Link>;
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

export default withRouter(NavBar);