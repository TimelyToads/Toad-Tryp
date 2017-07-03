const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('../database/models/models.js');

const app = express();
const ADDRESS = '127.0.0.1';
const PORT = process.env.PORT || 3000;
const MAX_COOKIE_AGE = 3600000;



app.use(express.static(path.join(__dirname, '../client/dist')));

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
  console.log('GET /api/users');
  models.Users.fetch().then( (users) => {
    console.log('\tSUCCESS\n');
    res.status(200).send(users);
  })
    .catch( (err) => {
      const message = 'Unable to get users';
      console.error(message);
      res.status(500).send({ message });
    });
});


app.get('/api/users/googleid' ,(req, res) => {
  const googleid = req.query.googleid;
  console.log(`GET /api/users/googleid`, googleid);

  models.User.forge({ username: googleid })
    .fetch().then( user => {
      if (user) {
        console.log('\tSUCCESS\n');
        res.status(200).send(user.toJSON());
      } else {
        throw user;
      }
    })
    .catch( err => {
      const message = `\tUnable to find token  ` + err;
      console.error(message);
      res.status(404).send({ message });
    });
});


app.get('/api/users/:username' ,(req, res) => {
  const username = req.params.username;
  console.log(`GET /api/users/${username}`);
  models.User.forge({ username })
    .fetch().then( user => {
      if (user) {
        console.log('\tSUCCESS\n');
        res.status(200).send(user.toJSON());
      } else {
        throw user;
      }
    })
    .catch( err => {
      const message = `\tUnable to find user: ${req.params.username}`;
      console.error(message);
      res.status(404).send({ message });
    });
});

app.get('/api/user/:userid' ,(req, res) => {
const id = req.params.userid;
console.log(`GET /api/user/${id}`);
models.User.forge({ id })
  .fetch().then( user => {
    if (user) {
      console.log('\tSUCCESS inside by id\n');
      res.status(200).send(user.toJSON());
    } else {
      throw user;
    }
  })
  .catch( err => {
    const message = `\tUnable to find user by id: ${req.params.username}`;
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
      console.log('\tSUCCESS\n');
      res.status(200).send(trips.toJSON());
    } else {
      throw trips;
    }
  })
  .catch( err => {
    const message = `Unable to find user: ${req.params.username}`
    console.error('\t' + message);
    res.status(404).send({ message });
  });
})

app.post('/api/users', (req, res) => {
  let user = req.body;
  console.log('POST /api/users: ', user);
  models.User.forge(user).save()
  .then( (user) => {
    console.log('\tSUCCESS\n');
    res.status(201).send(user);
  })
  .catch( (err) => {
    const message = 'Unable to create user';
    console.error('\t' + message, err);
    res.status(500).send({ message });
  });
});

/**************TRIPS***************/


app.get('/api/trips', (req, res) => {
  console.log('GET /api/trips/\n', req.query);
  const search = {};
  if (req.query.depart) search.departure_city = req.query.depart;
  if (req.query.arrive) search.arrival_city = req.query.arrive;
  if (req.query.departdate) search.departure_date = req.query.departdate
  models.Trip.where(search)
  .fetchAll({withRelated: ['driver','riders']})
  .then((trips) => {
    console.log('\tSUCCESS\n');
    res.status(200).json(trips);
  })
  .catch((err) => {
    console.log('ERROR GETting Trips collection: ', err);
    res.status(404).send(err);
  });
});


app.get('/api/trips/:tripId', (req,res) => {
  const id = req.params.tripId;
  console.log(`GET /api/trips/${id}`);
  models.Trip.forge({ id })
  .fetch({withRelated: ['driver','riders']})
  .then( (trip) => {
    if (trip) {
      console.log('\tSUCCESS\n');
      res.status(200).send(trip.toJSON());
    } else {
      throw trip;
    }
  })
  .catch( err => {
    const message = `\tUnable to find trip with id: ${id}`
    console.error(message);
    res.status(404).send({ message });
  });
});

app.post('/api/trips', (req, res) => {
  let trip = req.body;
  console.log('POSTing trip data: ', trip);
  models.Trip.forge(trip).save()
  .then( (trip) => {
    res.status(201).send(trip);
  })
  .catch( (err) => {
    console.log('ERROR POSTing Trip model: ', err);
    res.status(500).send(err);
  });
});

app.post('/api/trips/:tripId/join/:userId', (req, res) => {
  //DOES NOT CHECK IF tripId OR userId ARE VALID
  const trip_id = req.params.tripId;
  const user_id = req.params.userId;
  console.log(`POST /api/trips/${trip_id}/join/${user_id}`);
  models.TripToad.forge({trip_id, user_id}).fetch()
    .then( tripToad => {
      if (tripToad) {
        const message = 'Content conflicts with existing resource';
        console.log('\t' + message, tripToad);
        res.status(409).send({message, tripToad});
      }
      else {
        models.TripToad.forge({trip_id, user_id}).save()
          .then( (unique) => {
            console.log('\tSUCCESS\n');
            res.status(201).send(unique);
          });
      }
    })
  .catch( err => {
    const message = 'Server Error: Could not create';
    console.log('\t' + message);
    res.status(500).send({message});
  })
})

app.delete('/api/trips/:tripId/join/:userId', (req,res) => {
  const trip_id = req.params.tripId;
  const user_id = req.params.userId;
  console.log(`DELETE /api/trips/${trip_id}/join/${user_id}`);
  models.TripToad.forge({trip_id, user_id}).fetch()
  .then( (tripToad) => {
    if (tripToad) {
      tripToad.destroy().then( () => {
        console.log('\tSUCCESS\n');
        res.status(202).send({ message: 'User removed from trip' });
      })
    } else {
      const message = 'Resource does not exist';
      console.log('\t' + message);
      res.status(404).send({message});
    }
  })
  .catch( (err) => {
    res.status(500).send({message: 'Server Error: Could not delete'});
  })
});
//ALL REST ENDPOINTS SHOULD START WITH /api/<YOUR PATH>
//AND BE ABOVE THE FOLLOWING: app.get('/*'...)

app.get('/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/dist/bundle.js'));
});

app.get('/styles.css', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/dist/styles.css'));
});

app.get('/toad_icon.jpeg', function(req, res){
res.sendFile(path.join(__dirname + '/../client/dist/toad_icon.jpeg'));
});

app.get('/*', function(req, res){
  console.log('requesting /*', req.session.authToken);
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
  // console.log('Session created: ', req.session);
});

app.listen(PORT, () => {
  console.log(`Toad Tryp server listening on port ${PORT}`);
});
