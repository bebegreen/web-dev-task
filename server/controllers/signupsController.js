var signupsModel = require('../models/signups');

exports.signup = async function (req, res) { 
  try { 
    const signup = await signupsModel.signup(req.body); 
    res.send(200); 
  } catch (err) { 
    console.log(err); 
    res.sendStatus(500); 
  }
}

exports.getAllSignups = async function (req, res) { 
  try { 
    const signups = await signupsModel.getAllSignups(); 
    res.json(signups); 
  } catch (err) { 
    console.log(err); 
    res.sendStatus(500); 
  }
}