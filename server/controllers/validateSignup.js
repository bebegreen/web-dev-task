const joi = require('joi');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const schema = Joi.object().keys({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email(),
  timeFrame: Joi.number(),

}).with('firstName', 'lastName', 'email', 'timeFrame')

exports.validate = (req, res, next) => {
  joi.validate(req.body, schema, (err, value) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      next();
    }
  })
}