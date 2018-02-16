var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/usersController.js'); 
const validate = require('../controllers/validateSignup.js').validate; 

router.get('/hi', (req, res) => { 
  res.send('hi'); 
}); 


router.post('/', validate, usersCtrl.register); 
router.post('/login', usersCtrl.login); 


module.exports = router; 