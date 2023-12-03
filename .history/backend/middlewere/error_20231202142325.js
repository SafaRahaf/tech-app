const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal server error';

  //Wrong mongoBd er Id dile error
  if ((err.name = 'CastError')) {
    const message = `Resouces not found with this id, path: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Duplicate Key dile err
  if (err.code === 11000) {
    const message = `Dublicate key ${Object.key(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jxt dile erro
  if (err.name === 'JsonWebTokenError') {
    const message = `Your url is invalid please try again letter`;
    err = new ErrorHandler(message, 400);
  }

  // jwt expired
  if (err.name === 'TokenExpiredError') {
    const message = `Your Url is expired please try again letter!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};
