const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/sisense"; 
exports.connection = MongoClient.connect(url)