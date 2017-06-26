import React from 'react';
import DocMeta from 'react-doc-meta';
import API_Keys from '../../../lib/api_keys.js';
import axios from 'axios';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';


class Login extends React.Component {

  constructor() {
    super();
    this.state = { userLoggedIn: false };
  
  }


  componentDidMount() {

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

    AuthenticationHelper.validateToken(googleUserObject.authToken)
      .then( res => {
        console.log('Successfully validated token', res.data.aud);

        if (res.status === 200 && res.data.aud === API_Keys.client_id) {
          this.setState({
            userLoggedIn: true
          });

          axios.post('/googleapi/login', googleUserObject)
            .then( res => {
              console.log( 'returned from /googleapis/login call ', res);
            })
            .catch( err => {
              console.log( 'error calling /googleapis/login ', err);
            });
        }
      })
      .catch( err => {
        console.log('Error validating token');
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
      </div>
      
    );
  }
}



export default Login;