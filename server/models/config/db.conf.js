const MongoClient = require('mongodb').MongoClient;
const url = require('./dbUrl.js').url;
const connection = require('./dbUrl.js').connection;


async function connectToDB() {
  try { 
    const db = await connection; 
    console.log('connected to sisense database');
  } catch (err) { 
    console.log('failed to connect', err); 
  }
}

module.exports = connectToDB;
