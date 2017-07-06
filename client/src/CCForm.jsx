import React from 'react';
import braintree from 'braintree-web';
import dropIn from 'braintree-web-drop-in';
import bluebird from 'bluebird';
import axios from 'axios';
import $ from 'jquery';

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
          });
        });
      }
    });
  }).catch(error => {
    console.log(error);
  });


  return (
    <div>
      <div id='dropin-container'></div>
    </div>
  );
}
export default CCForm;