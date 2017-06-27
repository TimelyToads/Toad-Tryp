const bookshelf = require('../bookshelf.js');


const User = bookshelf.Model.extend({
  tableName: 'users',
  trips: function () {
    return this.hasMany(Trip);
  }
});

const Trip = bookshelf.Model.extend({
  tableName: 'trips',
  riders: function() {
    return this.belongsToMany(User,'trips_toads');
  }
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
