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

module.exports.createMerchantAccount = (savedUser, userObj, res) => {
  //console.log('savedUser=', savedUser);
  let driver = UserParser.getDriver(userObj);
  let funding = UserParser.getFunding(userObj);
  //console.log('driver object=', driver, '\n funding obj=', funding);
  console.log('createMerchantAccount driver = ', driver, '\nfunding=', funding);
  let merchantAccountParams = {
    individual: driver,
    funding: funding,
    tosAccepted: true,
    masterMerchantAccountId: "tenacioustreehouse",
    id: userObj.username
  };
  gateway.merchantAccount.create(merchantAccountParams, (err, result) => {
    console.log('result=', result);
    if (result && result.success) {
      res.status(201).send(savedUser);
    } else if (err) {
      console.log('Error:', err);
    }
  });
};