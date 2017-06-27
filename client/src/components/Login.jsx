import React from 'react';
import DocMeta from 'react-doc-meta';
import API_Keys from '../../../lib/api_keys.js';
import axios from 'axios';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';
import Redirect from 'react-router-dom/redirect' 


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userLoggedIn: false };
  }

  componentDidMount() {

    console.log('Inside  Login.jsx/componentDidMount' );
    gapi.signin2.render('g-signin2', {
			'scope': 'profile email',
			'width': 200,
			'height': 30,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignInSuccess.bind(this),
      'onfailure': this.onSignInFailure.bind(this)
		});
  }


  onSignInSuccess(googleData) {
    console.log('INSIDE Login.jsx/onSignInSuccess: ', googleData);

    let googleUserObject = AuthenticationHelper.retrieveUserInfo(googleData);
    window.authToken = googleUserObject.authToken;

    AuthenticationHelper.isUserAuthenticated()
      .then( res => {
        console.log('Successfully called AuthenticationHelper.isUserAuthenticated()', res);
        this.props.authenticateUserFunc();
        

        if (res.status === 200 && res.data.aud === API_Keys.client_id) {
          this.setState({
            userLoggedIn: true
          });
        }
      })
      .catch( err => {
        console.log('Error validating token', err);
      });
    
	}
  

  onSignInFailure(err) {
    console.log('Inside of onSignInFailure ', err);
  }

  signOut() {
    console.log('user clicked signout link');

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
  
    let signOutLink = '';
    if (this.state.userLoggedIn) {
      signOutLink = <a href="#" onClick={this.signOut.bind(this)}>Sign out of ToadTryp</a>
    }

    var tags = [
      {name: "google-signin-client_id", content: `${API_Keys.client_id}`},
      {name: "google-signin-scope", content: "profile email"}
    ]
    return (
      <div>
        <DocMeta tags={tags} />
        <div id="g-signin2" />
       {signOutLink}

       {this.state.userLoggedIn && (
        <Redirect from={'/'} push to={{
          pathname: '/'
        }}/>
       )}
      </div>
      
    );
  }
}



export default Login;