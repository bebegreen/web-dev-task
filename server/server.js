const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sisenseApi = require('./routes/sisense.api');
const dbConfig = require('./models/config/db.conf')();
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use('/api/sisense', sisenseApi);


// app.post('/api/sisense', (req, res) {
//   res.send('hi'); 
// });

// app.get('api/sisense', (req, res) => { 

// })






module.exports = app;