const app = require('./app');

//handle uncounght exception
process.on('uncaughtException', (err) => {
  console.log('Error' + err.message);
  console.log('Shutting down the server for uncought exception');
});

//config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'backend/config/.env'
  });
}

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`server running on port: ${pocess.env.PORT}`);
});

//unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
