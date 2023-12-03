import express from 'express';
const app = express();

// const NODE_ENV = "PRODUCTION"

//config
// if(NODE_ENV !== "PRODUCTION"){
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  });
  console.log('first');
}

module.exports = app;
