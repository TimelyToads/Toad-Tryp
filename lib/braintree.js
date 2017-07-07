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

module.exports.createMerchantAccount = (userDetails, user, res) => {
  let driver = UserParser.getDriver(userDetails);
  let funding = UserParser.getFunding(userDetails);
  //console.log('driver object=', driver, '\n funding obj=', funding);
  console.log('createMerchantAccount driver = ', driver, '\nfunding=', funding);
  let merchantAccountParams = {
    individual: driver,
    funding: funding,
    tosAccepted: true,
    masterMerchantAccountId: "tentree",
    id: userDetails.username
  };
  gateway.merchantAccount.create(merchantAccountParams, (err, result) => {
    console.log('result=', result);
    if (result && result.success) {
      res.status(201).send(user);
    } else if (err) {
      console.log('Error:', err);
    }
  });
};