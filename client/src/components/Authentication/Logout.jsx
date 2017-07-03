import React from 'react';
import DocMeta from 'react-doc-meta';
import API_Keys from '../../../../lib/api_keys.js';
import axios from 'axios';
import AuthenticationHelper from '../../../../lib/AuhenticationHelper.js';
import { Redirect } from 'react-router-dom' 
import { withRouter } from 'react-router';


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: true
    }
  }

  componentDidMount() {
    gapi.auth2.getAuthInstance()
    .signOut()
      .then( () => {
        this.props.authenticateUserFunc(null);

        this.setState({
          userLoggedIn: false
        });
      });
  }



  render() {


    var tags = [
      {name: "google-signin-client_id", content: `${API_Keys.client_id}`},
      {name: "google-signin-scope", content: "profile email"}
    ]
    return (
      <div>
        <DocMeta tags={tags} />
        <div id="g-signin2" />

       {!this.state.userLoggedIn && (
        <Redirect from={'/'} push to={{
          pathname: '/'
        }}/>
       )}
      </div>
      
    );
  }
}


export default withRouter(Logout);
