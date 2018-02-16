const MongoClient = require('mongodb').MongoClient;
const url = require('./dbUrl.js').url;
const connection = require('./dbUrl.js').connection;


async function createDB() {
  const db = await connection.then(db => db);

  console.log(db, 'restarted database');
}

module.exports = createDB;
