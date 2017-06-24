// The Bookshelf library is initialized by passing an initialized Knex client instance. 
// The knex documentation provides a number of examples for different databases.
// http://knexjs.org/
const dbConfig;
const knex = require('knex')(dbConfig);

dbConfig = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'toads'
  }
};

// This initialization should likely only ever happen once in your application. 
// As it creates a connection pool for the current database, 
// you should use the bookshelf instance returned throughout your library. 
// You'll need to store this instance created by the initialize 
// somewhere in the application so you can reference it.

const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;

// elsewhere, to use the bookshelf client:
  // var bookshelf = require('./bookshelf');

  // var Post = bookshelf.Model.extend({
  //    ...
  // });