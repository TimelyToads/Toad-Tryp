import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'

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
          <li><Link to="/">Home</Link></li>
          <li>{loginLink}</li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/">Home</Link></li>

        </ul>
      </nav>
    </div>
    )
  }

}  

export default NavBar;