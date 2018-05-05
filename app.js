require('./src/core/data-adapter');  //connect to our database
const express = require('express');
const app = express();    //Create the Express app
const bodyParser = require('body-parser');
const userApi = require('./src/apis/user/user.api');

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// configure routers
app.use('/api/user', userApi);

module.exports = app;