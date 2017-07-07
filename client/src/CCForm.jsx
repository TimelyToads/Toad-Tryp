import React from 'react';
import braintree from 'braintree-web';
import dropIn from 'braintree-web-drop-in';
import promise from 'bluebird';
import axios from 'axios';
import $ from 'jquery';

<<<<<<< HEAD
const CCForm = props => {
  axios.get('/api/getPaymentToken').then(response => {
    dropIn.create({
      authorization: response.data,
      container: '#dropin-container',
      locale: 'en_US'
    }, (error, instance) => {
      if (error) console.log(error);
      else {
        $('#checkoutBtn').on('click', function (event) {
          instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
            if (requestPaymentMethodErr) {
              // No payment method is available.
              // An appropriate error will be shown in the UI.
              console.error(requestPaymentMethodErr);
              return;
            }
            console.log(payload.nonce);
            //props.trips.driver.email;
            //props.trips.price;
            event.preventDefault();
            props.postTripRequest(props.trips.id, props.currentUser.id)
||||||| merged common ancestors
const CCForm = props => {
  console.log('//////////', props.currentUser);
  console.log('//////////', props.trips);
  console.log(props.currentUser.id);
  axios.get('/api/getPaymentToken').then(response => {
    dropIn.create({
      authorization: response.data,
      container: '#dropin-container',
      locale: 'en_US'
    }, (error, instance) => {
      if (error) console.log(error);
      else {
        $('#checkoutBtn').on('click', function (event) {
          instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
            if (requestPaymentMethodErr) {
              // No payment method is available.
              // An appropriate error will be shown in the UI.
              console.error(requestPaymentMethodErr);
              return;
            }
            console.log(payload.nonce);
            //props.trips.driver.email;
            //props.trips.price;
            event.preventDefault();
            props.postTripRequest(props.trips.id, props.currentUser.id)
=======
class CCForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    var userId = this.props.currentUser.id;
    var paymentInfo = {
      driverFirstName: this.props.trips.driver.first_name,
      driverLastName: this.props.trips.driver.last_name,
      driverEmail: this.props.trips.driver.email,
      driverId: this.props.trips.driver.username,
      paxId: this.props.currentUser.username,
      paxFirstName: this.props.currentUser.first_name,
      paxLastName: this.props.currentUser.last_name,
      paxEmail: this.props.currentUser.email,
      price: this.props.trips.price
    }
    let dropInPromise = promise.promisify(dropIn.create);
    console.log('2//////////////////', this.props.trips.id);
    axios.get('/api/getPaymentToken').then(response => {
      console.log('2.5//////////////////', this.props.trips.id);
      return dropInPromise({
        authorization: response.data,
        customerId: this.props.currentUser.username,
        container: '#dropin-container',
        locale: 'en_US'
      })
    }).then(instance => {
      console.log('3//////////////////', this.props.trips.id);
      $('#checkoutBtn').on('click', event => {
        instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
          if (requestPaymentMethodErr) {
            console.error(requestPaymentMethodErr);
            return;
          }
          console.log(payload.nonce);
          paymentInfo.nonce = payload.nonce;
          console.log('4//////////////////', this.props.trips.id);
          axios.post('/api/trips/payment', paymentInfo).then(response => {
            console.log('Payment Post Success');
          }).catch(error => {
            console.log(error);
>>>>>>> Fix async issues
          });
          console.log('5//////////////////', this.props.trips.id);
          this.props.postTripRequest(this.props.trips.id, userId);
        });
      });
    }).catch(error => {console.log(error)});
  }

  render() {
    return (
      <div>
        <div id='dropin-container'></div>
      </div>
    )
  }
}

export default CCForm;