import axios from 'axios';
import API_Keys from './api_keys.js';

let methods = {};

methods.retrieveUserInfo = (googleUser) => {

  console.log('Inside AuthenticationHelper.retrieveUserInfo');
  let profile = googleUser.getBasicProfile();
  
  // console.log('PROFILE: ', profile);
  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('First Name: ' + profile.getGivenName());
  // console.log('Last Name: ' + profile.getFamilyName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  return {
    username:     profile.getId(),
    first_name:   profile.getGivenName(),
    last_name:    profile.getFamilyName(),
    img_url:      profile.getImageUrl(),
    email:        profile.getEmail(),
    password:     profile.getId()
  };
};

methods.getAuthenticatedUser = () => {

  //check if user is authenticated
  if (window.authToken) {
    axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${window.authToken}`)
      .then( res => {
        return Promise.resolve(res);
      })
      .catch( err => {
        return Promise.reject(err);
      });
  }     
};

methods.isTokenValid = () => {
  console.log('Inside methods.isUserAuth ');
  if (window.authToken) {
    return axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${window.authToken}`)
  } else {
    return Promise.reject('window.authToken is UNDEFINED');
  }
  
};

export default methods;
