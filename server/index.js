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
  console.log('WELCOME TO USERS ENDPOINT');
  res.status(200).send();
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
    .then( (trip) => {
      res.status(201).send(trip);
    })
    .catch( (err) => {
      console.log('ERROR POSTing Trip model: ', err);
      res.status(400).send(err);
    });
});


app.get('/api/trips', (req, res) => {
  Trips.query((qb) => {
    // qb.innerJoin('Users', 'Users.id', '=', 'Trips.driver_id');
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
  .catch( (err) => {
    console.log('ERROR GETting Trips collection: ', err);
    res.status(404).send(err);
  });
});


app.get('/api/trips/:tripId', (req,res) => {
  Trips.where({id: req.params.tripId}).fetch({withRelated: ['riders']}).then((trip) => {
    // console.log(JSON.stringify(trip.related('riders')));
    res.status(200).send(trip.toJSON());
  });
})

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
  // console.log('Session created: ', req.session);
});

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
// });

app.listen(PORT, ADDRESS, () => {
  console.log('Toad Tryp server listening on port 3000.');
});
