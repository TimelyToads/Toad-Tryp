// The Bookshelf library is initialized by passing an initialized Knex client instance. 
// The knex documentation provides a number of examples for different databases.
// http://knexjs.org/
<<<<<<< HEAD

=======
>>>>>>> Add get request to database using Bookshelf for ORM and Axios for the client request.
const dbConfig = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'toads'
  }
};
const knex = require('knex')(dbConfig);

const knex = require('knex')(dbConfig);


// This initialization should likely only ever happen once in your application. 
// As it creates a connection pool for the current database, 
// you should use the bookshelf instance returned throughout your library. 
// You'll need to store this instance created by the initialize 
// somewhere in the application so you can reference it.

const bookshelf = require('bookshelf')(knex);

// elsewhere, to use the bookshelf client:

<<<<<<< HEAD
// var bookshelf = require('./bookshelf');
// * * * TEMPLATE BOOKSHELF TABLE INSTANCES OF OUR DATABASE * * * // 

module.exports = bookshelf;
=======
module.exports = bookshelf;
>>>>>>> Add get request to database using Bookshelf for ORM and Axios for the client request.
