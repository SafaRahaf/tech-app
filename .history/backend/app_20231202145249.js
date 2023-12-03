const express = require('express');
const ErrorHandler = require('./utils/errorHandler');
const cookieParser = require('cookie-parser');
const app = express();

//config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  });
}

//for error handle
app.use(ErrorHandler);

module.exports = app;
