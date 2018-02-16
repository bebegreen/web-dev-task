
const connection = require('./config/dbUrl.js').connection;

exports.signup = (user) => {
  return connection.then(db => { 
    return db.collection('signups').insertOne(user); 
  })
}

exports.getAllSignups = () => { 
  return connection.then(db => { 
    return db.collection('signups').find({}).toArray(); 
  })
}
