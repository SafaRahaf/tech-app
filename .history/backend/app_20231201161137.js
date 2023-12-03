// const express = require('express');
// const app = express();

// //config
// if (process.env.NODE_ENV !== 'PRODUCTION') {
//   require('dotenv').config({
//     path: 'config/.env'
//   });
// }

// module.exports = app;

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
