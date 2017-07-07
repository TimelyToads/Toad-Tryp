const bookshelf = require('../bookshelf.js');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hostedTrips: function() {
    return this.hasMany(Trip,'driver_id');
  },
  trips: function() {
    return this.belongsToMany(Trip,'trips_toads');
  }
});

const Trip = bookshelf.Model.extend({
  tableName: 'trips',
  riders: function() {
    return this.belongsToMany(User,'trips_toads');
  },
  driver: function () {
    return this.belongsTo(User,'driver_id');
  },
  messages: function() {
    return this.hasMany(Message,'trip_id');
  }
});

const TripToad = bookshelf.Model.extend({
  tableName: 'trips_toads'
});

const Message = bookshelf.Model.extend({
  tableName: 'messages'
})


module.exports = {
  User: User,
  Users: User.collection(User),
  Trip: Trip,
  Trips: Trip.collection(Trip),
  TripToad: TripToad,
  TripToads: TripToad.collection(TripToad),
  Message: Message,
  Messages: Message.collection(Message)
};
