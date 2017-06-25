const bookshelf = require('../bookshelf.js');


const User = bookshelf.Model.extend({
  tableName: 'users'
});

const Trip = bookshelf.Model.extend({
  tableName: 'trips'
});

const Ride = bookshelf.Model.extend({
  tableName: 'trips_toads'
});


module.exports = {
  User: User,
  Users: User.collection(User),
  Trip: Trip,
  Trips: Trip.collection(Trip),
  Ride: Ride,
  Rides: Ride.collection(Ride)
};
