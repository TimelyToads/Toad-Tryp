// The Bookshelf library is initialized by passing an initialized Knex client instance. 
// The knex documentation provides a number of examples for different databases.
// http://knexjs.org/
const dbConfig = {
  client: 'mysql',
  connection: {
    host: 'ba536313340d86:d24fd53d@us-cdbr-iron-east-03.cleardb.net/heroku_b0a0970355d4cba?reconnect=true',
    user: 'root',
    password: '',
    database: 'toads'
  }
};
const knex = require('knex')(dbConfig);


// This initialization should likely only ever happen once in your application. 
// As it creates a connection pool for the current database, 
// you should use the bookshelf instance returned throughout your library. 
// You'll need to store this instance created by the initialize 
// somewhere in the application so you can reference it.

const bookshelf = require('bookshelf')(knex);

// elsewhere, to use the bookshelf client:

module.exports = bookshelf;
