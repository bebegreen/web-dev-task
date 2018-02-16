const MongoClient = require('mongodb').MongoClient;
const url = require('./dbUrl.js').url;
const objectID = require('mongodb').ObjectID;
const connection = require('./dbUrl.js').connection;
const locations = require('./mock-locations.js').locations; 
const users = require('./mock-locations.js').users; 


async function createDB() {
  const db = await connection.then(db => db);
  console.log('restarted database');
}

module.exports = createDB;
