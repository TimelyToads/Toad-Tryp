const braintree = require('braintree');

let gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "b3xg2j2zzn2drf3y",
  publicKey: "mngfg6s2724f2vbx",
  privateKey: "985e70a1c4e46adf56b3701d6a3044db"
});

module.exports.clientToken = (res) => {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
}