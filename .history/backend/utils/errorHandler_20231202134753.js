import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = errorHandler;
