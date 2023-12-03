const express = require('express');
const User = require('../model/user');
const path = require('path');
const upload = require('../multer');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    return next(new ErrorHandler('User already exists', 400));
  }

  const filename = req.file.fieldname;
  const fileurl = path.join(filename);

  const newUser = {
    name: name,
    email: email,
    password: password,
    avatar: fileurl
  };

  console.log(newUser);
  // Add logic to save the user to the database or perform other actions.
});
