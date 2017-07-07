const braintree = require('braintree');
const UserParser = require('./UserParser');

let gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "b3xg2j2zzn2drf3y",
  publicKey: "mngfg6s2724f2vbx",
  privateKey: "985e70a1c4e46adf56b3701d6a3044db"
});

module.exports.clientToken = (reqData, res) => {
  gateway.clientToken.generate(reqData, function (err, response) {
    res.send(response.clientToken);
  });
};

module.exports.createOrUpdateMerchantAccount = (userDetails, user, res) => {
  let driver = UserParser.getDriver(userDetails);
  let funding = UserParser.getFunding(userDetails);
  let merchantId = userDetails.username;
  //console.log('createMerchantAccount driver = ', driver, '\nfunding=', funding);
  let merchantAccountParams = {
    individual: driver,
    funding: funding,
    tosAccepted: true,
    masterMerchantAccountId: "tentree",
    id: merchantId
  };

  gateway.merchantAccount.find(merchantId, function(err, result) {
    // console.log('result of find...', result);
    // console.log('find.. err=', err);
    if (!err) {
      merchantAccountParams = {
        individual: driver,
        funding: funding,
        tosAccepted: true,
        id: merchantId
      };
      gateway.merchantAccount.update(merchantId, merchantAccountParams, function (err, result) {
      // console.log('result of update-', result);
      // console.log('error of update-', err);
      if (result && result.success) {
        res.status(201).send(user);
      } else {
        const message = 'Unable to update user payment details';
        console.error('\t' + message, err);
        res.status(500).send({ message });
      }
    });
    } else {
      gateway.merchantAccount.create(merchantAccountParams, (err, result) => {
      console.log('result of create=', result);
      console.log('Error of create=', err);
      if (result && result.success) {
        res.status(201).send(user);
      } else {
        console.log('Error:', err);
        const message = 'Unable to create merchant account';
        res.status(500).send({ message });
      }
  });
    }
  });
};