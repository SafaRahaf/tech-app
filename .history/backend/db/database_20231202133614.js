const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      //   useUnifiedTopology: true
      //   useNewUrlPerser: true
    })
    .then((data) => {
      console.log(`Mongo connected with ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
