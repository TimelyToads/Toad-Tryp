module.exports.getUser = (user) => {
	delete user['ssn'];
  delete user['dob'];
  delete user['address'];
  delete user['city'];
  delete user['state'];
  delete user['zipcode'];
  delete user['bank'];
  delete user['accountno'];
  delete user['routingno'];
	return user;
};

module.exports.getDriver = (user) => {
	const { first_name, last_name, email, phone_number, dob, ssn, address, 
          city, state, zipcode } = user;
  return {
    firstName: first_name,
    lastName: last_name,
    email: email,
    phone: phone_number,
    dateOfBirth: dob,
    ssn: ssn,
    address: {
      streetAddress: address,
      locality: city,
      region: state,
      postalCode: zipcode
    },
  };
};

module.exports.getFunding = (user) => {
  const BANK = 'bank';
  return {
    destination: BANK,
    accountno: user.accountno,
    routingno: user.routingno
  };
};