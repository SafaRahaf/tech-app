const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal server error';

  //wrong mongoBd er Id dile error
  if ((err.name = 'CastError')) {
    const message = `Resouces not found with this id, path: ${err.path}`;
  }
};
