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







exports.login = (req, res) => {
 
  const { email, password } = req.body; 

  usersService.authenticate(email, password)
    .then(token => {
      res.json({ token });
      
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(err.message);
    })
}


exports.getApplicants = (req, res) => {
  let username = req.username;

  let job_id = req.params.job_id;
  usersService.getApplicants(job_id)
    .then(applicants => {
      res.json(applicants);
    })
    .catch(err => {
      if (err.message === 'no applicants') {
        res.send('no applicants');
      }
      else {

        res.sendStatus(500);
      }
    })

}

exports.register = (req, res) => {
  let user = req.body;
  usersService.register(user)
    .then(token => {
      res.json(token);
    })
    .catch(err => {
      if (err.message === 'exists') {
        res.sendStatus(400);
      }
    })
}

exports.getUser = (req, res) => {
  let username = req.username;
  usersService.getUser(username)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.sendStatus(500);
    })
}