const express = require('express');
const ErrorHandler = require('./utils/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('uploads'));

//config ----------------------
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  });
}

// import routes
const user = require('./controller/user');
app.use('/api/v2/user', user);

//for error handle ----------------------
// app.use(ErrorHandler);
app.use((err, req, res, next) => {
  // Your error handling logic using the ErrorHandler class
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

module.exports = app;
