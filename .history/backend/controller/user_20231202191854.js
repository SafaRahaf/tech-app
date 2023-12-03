const express = require('express');
const User = require('../model/user');
const path = require('path');
const uploadMiddleware = require('../multer').upload;
const router = express.Router();
const jwt = require('jsonwebtoken');
const { nextTick } = require('process');
const ErrorHandler = require('../utils/errorHandler');

router.post(
  '/create-user',
  uploadMiddleware.single('file'),
  async (req, res, next) => {
    const { name, email, password } = req.body();
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler('User already exists', 400));
    }

    const filename = req.file.fieldname;
    const fileurl = path.join(filename);

    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileurl
    };

    console.log(user);
  }
);
