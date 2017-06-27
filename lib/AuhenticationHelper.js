import axios from 'axios';
import API_Keys from './api_keys.js';

let methods = {};

methods.retrieveUserInfo = (googleUser) => {

  console.log('Inside AuthenticationHelper.retrieveUserInfo');
  let profile = googleUser.getBasicProfile();
  
  console.log('PROFILE: ', profile);
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('First Name: ' + profile.getGivenName());
  console.log('Last Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  return {
    id:         profile.getId(),
    firstName:  profile.getGivenName(),
    lastName:   profile.getFamilyName(),
    imageURL:   profile.getImageUrl(),
    email:      profile.getEmail(),
    authToken:  googleUser.getAuthResponse().id_token
  };
};

methods.isUserAuthenticated = () => {
  console.log('Inside methods.isUserAuth ', window.authToken);
  if (window.authToken) {
    return axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${window.authToken}`)
  } else {
    return Promise.reject('window.authToken is UNDEFINED');
  }
  
};

export default methods;
