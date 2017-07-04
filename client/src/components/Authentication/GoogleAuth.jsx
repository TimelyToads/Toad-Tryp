import React from 'react';
import DocMeta from 'react-doc-meta';
import API_Keys from '../../../../lib/api_keys.js';
import axios from 'axios';
import AuthenticationHelper from '../../../../lib/AuhenticationHelper.js';
import { Redirect } from 'react-router-dom' 
import { withRouter } from 'react-router';


class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
			'scope': 'profile email',
			'width': 400,
			'height': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignInSuccess.bind(this),
      'onfailure': this.onSignInFailure.bind(this)
		});
  }


  onSignInSuccess(googleData) {
    console.log('INSIDE Login.jsx/onSignInSuccess: ', googleData);

    let googleUserObject = AuthenticationHelper.retrieveUserInfo(googleData);

    //Check if auth token is valid via Google
    AuthenticationHelper.isTokenValid(googleData.getAuthResponse().id_token)
      .then( res => {
        console.log('Successfully called AuthenticationHelper.isUserAuthenticated()', res);
        
        //If auth token valid then query DB to see if user already exist
        axios.get('/api/users/googleid', {
          params: {
            googleid: googleUserObject.username
          }
        })  
          .then( userObj => {

            //If user exists in DB then set the user object on the state
            console.log('setting this.props.authenticateUserFunc ', userObj.data);
            this.props.authenticateUserFunc(userObj.data);

          })
          .catch( err => {
            
            //User does not exist in DB create a new user in DB and set the googleUserObj to state
            axios.post('/api/users', googleUserObject)
            .then( res => {
              console.log('Created new user in db ', googleUserObject);
              this.props.authenticateUserFunc(googleUserObject);              
            })
            .catch( err => {
              console.log('ERROR creating user after Login');
            });

          }); //end inner catch          
        }) //end then
      .catch( err => {
        console.log('Error validating token', err);
      });
    
	}
  

  onSignInFailure(err) {
    console.log('Inside of onSignInFailure ', err);
  }

  signOut() {

    gapi.auth2.getAuthInstance()
      .signOut()
        .then( () => {
          this.setState({
            userLoggedIn: false,
            currentUser: {}
          });
        });
  }

  render() {
    let signOutLink = '';
    if (this.props.isAuthenticated()) {
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

       {this.props.isAuthenticated() && (
        <Redirect from={'/'} push to={{
          pathname: '/'
        }}/>
       )}
      </div>
      
    );
  }
}


export default withRouter(GoogleAuth);
