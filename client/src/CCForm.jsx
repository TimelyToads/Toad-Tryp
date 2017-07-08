import React from 'react';
import braintree from 'braintree-web';
import dropIn from 'braintree-web-drop-in';
import promise from 'bluebird';
import axios from 'axios';
import $ from 'jquery';


const CCForm = props => {
  var userId = props.currentUser.id;
  var paymentInfo = {
    driverFirstName: props.trips.driver.first_name,
    driverLastName: props.trips.driver.last_name,
    driverEmail: props.trips.driver.email,
    driverId: props.trips.driver.username,
    paxId: props.currentUser.username,
    paxFirstName: props.currentUser.first_name,
    paxLastName: props.currentUser.last_name,
    paxEmail: props.currentUser.email,
    price: props.trips.price
  }
  let dropInPromise = promise.promisify(dropIn.create);
  
  axios.post('/api/getPaymentToken', {}).then(response => {

    return dropInPromise({
      authorization: response.data,
      customerId: props.currentUser.username,
      container: '#dropin-container',
      locale: 'en_US'
    })
  }).then(instance => {
    $('#checkoutBtn').on('click', event => {
      instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
        if (requestPaymentMethodErr) {
          console.error(requestPaymentMethodErr);
          return;
        }
        paymentInfo.nonce = payload.nonce;
        axios.post('/api/payment', paymentInfo).then(response => {
          console.log('Payment Post Success');
          props.postTripRequest(props.trips.id, userId);
        }).catch(error => {
          console.log(error);
        });
      });
    });
  }).catch(error => {console.log(error)});

  return (
    <div>
      <div id='dropin-container'></div>
    </div>
  )
}

export default CCForm;