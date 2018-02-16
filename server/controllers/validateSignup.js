const Joi = require('joi');
const saltRounds = 10;

const schema = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  timeFrame: Joi.number(),

}).with('firstName', 'lastName', 'email', 'timeFrame')

exports.validate = (req, res, next) => {
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      next();
    }
  })
}