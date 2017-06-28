import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loginLink = '';
    if (!this.props.isAuthenticated()) {
      loginLink = <Link to="/login">Login</Link>;
    } else {
      loginLink = <Link to="/logout">Logout</Link>;
    }
    
    return (
     <div>
      <nav>
        <ul>
          <li>{loginLink}</li>
          <li><Link to="/create">Sign Up</Link></li>
<<<<<<< HEAD
          <li><Link to="/">Home</Link></li>
          <li><Link to={'/profile/'+this.props.username}>Profile</Link></li>
=======
          <li><Link to="/profile/jun123">Profile</Link></li>
          <li><Link to="/">Home</Link></li>
>>>>>>> Checkpoint: Still trying to redirect user to previous page when redirecting to login/auth
        </ul>
      </nav>
    </div>
    )
  }

}  

export default NavBar;