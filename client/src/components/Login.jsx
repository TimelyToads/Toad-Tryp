import React from 'react';
import DocMeta from 'react-doc-meta';
import API_Keys from '../../../lib/api_keys.js';


class Login extends React.Component {
  constructor() {
    super();
  
  }


  componentDidMount() {
   
       gapi.signin2.render('g-signin2', {
			'scope': 'profile email',
			'width': 200,
			'height': 30,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignInSuccess,
      'onfailure': this.onSignInFailure
		});
  }

  

  onSignInSuccess(googleUser) {
	  console.log('INSIDE ON SIGN IN', googleUser);
	}

  onSignInFailure(err) {
    console.log('Inside of onSignInFailure ', err);
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
      </div>
    );
  }
}



export default Login;