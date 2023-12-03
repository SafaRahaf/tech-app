const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('Error' + err.message);
  console.log('Shatting down the server for uncought exception');
});
