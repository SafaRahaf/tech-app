// const app = require('./app');

// // Handling uncaught Exception
// process.on('uncaughtException', (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`shutting down the server for handling uncaught exception`);
// });

// // config
// if (process.env.NODE_ENV !== 'PRODUCTION') {
//   require('dotenv').config({
//     path: 'config/.env'
//   });
// }

// // create server
// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });

// // unhandled promise rejection
// process.on('unhandledRejection', (err) => {
//   console.log(`Shutting down the server for ${err.message}`);
//   console.log(`shutting down the server for unhandle promise rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });

const express = require('express');
const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: 'config/.env'
  });
}

module.exports = app;

const PORT = process.env.PORT || 8000; // Use process.env.PORT if defined, otherwise default to 8000
const NODE_ENV = process.env.NODE_ENV || 'development'; // Use process.env.NODE_ENV if defined, otherwise default to "development"

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});
