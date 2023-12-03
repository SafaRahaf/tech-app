const express = require('express');
const app = express();

// const NODE_ENV = "PRODUCTION"

//config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  });
  console.log('first');
}

module.exports = app;
