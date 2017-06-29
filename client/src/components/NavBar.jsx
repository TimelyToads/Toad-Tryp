import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'
import { withRouter } from 'react-router';
import { Popup, Button, Image } from 'semantic-ui-react'



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log('Rendering NavBar');

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
        <li>{!this.props.isAuthenticated() && <Link to="/login">Login</Link>}</li>
        <li>{!this.props.isAuthenticated() && <Link to="/create">Sign Up</Link>}</li>
          <li><Link to="/">Search</Link></li>
          <li>{this.props.isAuthenticated() && <Link to={'/profile/'+this.props.username}>Profile</Link>}</li>
          <Popup
trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
content={<Button color='green' content='Confirm the launch' />}
on='click'
position='top right' 
/> 
         
        </ul>
      </nav>
    </div>
    )
  }

}  

export default withRouter(NavBar);


{/* <Popup
trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
content={<Button color='green' content='Confirm the launch' />}
on='click'
position='top right'
/> */}
