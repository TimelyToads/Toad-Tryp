const assert = require('assert');
const expect = require('chai').expect;
const mysql = require('mysql');


// This test is a fake example that I should remove soon:
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
    it('should return the lowest index where the value exists', function () {
      expect([1, 2, 3, 4, 3].indexOf(3)).to.equal(2);
    });
  });
  describe('#concat()', function () {
    it('should be a function', function () {
      expect(Array.prototype.concat).to.be.a('function');
    });
    it('should combine arrays into a single array', function () {
      expect([1, 2].concat([3, 4])).to.deep.equal([1, 2, 3, 4]);
    });
    it('should not mutate the original arrays', function () {
      let foo = [1, 2];
      let bar = [3, 4];
      expect(foo.concat(bar)).to.deep.equal([1, 2, 3, 4]);
      expect(foo).to.deep.equal([1, 2]);
      expect(bar).to.deep.equal([3, 4]);
    });
  });
});

describe('schema.sql', function () {
  let db;

  beforeEach( function(done) {
    db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'toads'
    });
    db.connect();
    done();
  });

  afterEach( function () {
    db.end();
  });

  it('should populate the trips_toads table with dummy data', function (done) {
    const sql = 'SELECT * FROM trips_toads';
    db.query(sql, function (error, results, fields) {
      if (error) {
        return done(error);
      }
      expect(results.length).to.equal(4);
      expect(results[3]).to.deep.equal({ id: 4, 'trip_id': 4, 'user_id': 3 });
      done();
    });
  });

  it('should populate the trips table with dummy data', function (done) {
    const sql = 'SELECT * FROM trips';
    db.query(sql, function (error, results, fields) {
      if (error) {
        return done(error);
      }
      expect(results.length).to.equal(4);
      expect(results[3].arrival_address_line1).to.equal('2203 S Josephine St');
      done();
    });
  });

  it('should populate the users table with dummy data', function (done) {
    const sql = 'SELECT * FROM users';
    db.query(sql, function (error, results, fields) {
      if (error) {
        return done(error);
      }
      expect(results.length).to.equal(6);
      done();
    });
  });
});
