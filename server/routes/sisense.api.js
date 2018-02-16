const express = require('express');
const router = express.Router();
const signupsCtrl = require('../controllers/signupsController'); 
const validate = require('../controllers/validateSignup.js').validate; 

router.get('/hi', (req, res) => { 
  res.send('hi'); 
}); 

router.post('/', validate, signupsCtrl.signup); 


module.exports = router; 