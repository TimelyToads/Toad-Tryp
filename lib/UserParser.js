module.exports.getUser = (userDetails) => {
  //console.log('getUser input=', userDetails);
  const { first_name, last_name, email, password, img_url, 
          phone_number, token, vin, make, model, year, type, license_plate, username } = userDetails;
  let user = {
    username: username,
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    img_url: img_url,
    phone_number: phone_number,
    token: token,
    vin: vin,
    make: make,
    model: model,
    year: year,
    type: type,
    license_plate: license_plate,
  };
	return user;
};

module.exports.getDriver = (user) => {
  //console.log('\n\ngetDriver..input user=', user);
	const { first_name, last_name, email, phone_number, date_of_birth, street_address, 
          city, state, zipcode } = user;
  return {
    firstName: first_name,
    lastName: last_name,
    email: email,
    phone: phone_number,
    dateOfBirth: date_of_birth,
    address: {
      streetAddress: street_address,
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
    accountNumber: user.accountno,
    routingNumber: user.routingno
  };
};