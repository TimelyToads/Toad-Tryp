const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('../database/models/models.js');
const Trips = models.Trip;
const User = models.Users;

const app = express();
const ADDRESS = '127.0.0.1';
const PORT = 3000;
const MAX_COOKIE_AGE = 3600000;

// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: MAX_COOKIE_AGE}
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**************USERS*****************/
app.get('/api/users', (req, res) => {
  console.log('GET /users endpoint pinged.');
  models.Users.fetch().then( (users) => {
    res.status(200).send(users);
  })
    .catch( (err) => {
      console.log('ERROR GETting Users collection: ', err);
      res.status(404).send(err);
    });
});

app.get('/api/users/:username' ,(req, res) => {
  const username = req.params.username;
  console.log(`GET /api/users/${username}`);
  models.User.forge({ username })
  .fetch().then( user => {
    if (user) {
      console.log('\tSUCCESS');
      res.status(200).send(user.toJSON());
    } else {
      throw user;
    }
  })
  .catch( err => {
    const message = `\tUnable to find user: ${req.params.username}`
    console.error(message);
    res.status(404).send({ message });
  });
});

app.get('/api/users/:username/trips', (req, res) => {
  const username = req.params.username;
  console.log(`GET /api/users/${username}/trips`);
  models.User.forge({ username })
  .fetch({withRelated: ['hostedTrips', 'trips']})
  .then( (trips) => {
    if (trips) {
      console.log('\tSUCCESS');
      res.status(200).send(trips.toJSON());
    } else {
      throw trips;
    }
  })
  .catch( err => {
    const message = `\tUnable to find user: ${req.params.username}`
    console.error(message);
    res.status(404).send({ message });
  });
})

app.post('/api/users', (req, res) => {
  let user = req.body;
  console.log('POSTing user data: ', user);
  new models.User(user).save()
    .then( (user) => {
      res.status(201).send(user);
    })
    .catch( (err) => {
      console.log('ERROR POSTing User model: ', err);
      res.status(400).send(err);
    });
});

/**************TRIPS***************/
app.post('/api/trips', (req, res) => {
  let trip = req.body;
  console.log('POSTing trip data: ', trip);
  new models.Trip(trip).save()
    .then((trip) => {
      res.status(201).send(trip);
    })
    .catch((err) => {
      console.log('ERROR POSTing Trip model: ', err);
      res.status(400).send(err);
    });
});


app.get('/api/trips', (req, res) => {
  Trips.query((qb) => {
    qb.where({
      departure_city: req.query.depart,
      arrival_city: req.query.arrive,
    });
  })
  .fetch()
  .then((trips) => {
    // console.log(trips.related('user'))
    res.status(200).send(JSON.stringify(trips));
  })
  .catch((err) => {
    console.log('ERROR GETting Trips collection: ', err);
    res.status(404).send(err);
  });
});

<<<<<<< HEAD

app.get('/api/trips/:tripId', (req,res) => {
  const id = req.params.tripId;
  console.log(`GET /api/trips/${id}`);
  Trips.where({ id })
  .fetch({withRelated: ['driver','riders']})
  .then( (trip) => {
    if (trip) {
      console.log('\tSUCCESS');
      res.status(200).send(trip.toJSON());
    } else {
      throw trip;
    }
  })
  .catch( err => {
    const message = `\tUnable to find trip with id: ${id}`
    console.error(message);
    res.status(404).send({ message });
=======
app.get('/api/trips/:tripId', (req, res) => {
  console.log('this is the tripId', req.params.tripId);
  Trips.forge({id: req.params.tripId}).fetch({withRelated: ['riders']}).then((trip) => {
    // console.log(JSON.stringify(trip.related('riders')));
    res.status(200).send(trip.toJSON());
>>>>>>> Broke server. Need to revert to previous commit.
  });
});

//ALL REST ENDPOINTS SHOULD START WITH /api/<YOUR PATH>
//AND BE ABOVE THE FOLLOWING: app.get('/*'...)

app.get('/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/dist/bundle.js'));
});

app.get('/style.css', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/dist/style.css'));
});

app.get('/*', function(req, res){
  console.log('requesting /*', req.session.authToken);
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.listen(PORT, ADDRESS, () => {
  console.log('Toad Tryp server listening on port 3000.');
});
