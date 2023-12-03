const app = require('./app');

//handle uncounght exception

process.on('uncaughtException', (err) => {
  console.log('Error' + err.message);
  console.log('Shutting down the server for uncought exception');
});
