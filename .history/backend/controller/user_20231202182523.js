const express = require('express');
const user = require('../model/user');
const path = require('path');
const upload = require('../multer');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await user.findOne({ email });
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

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split('.')[0];
    cb(null, filename + '-' + uniqueSuffix + '.png');
  }
});

exports.upload = multer({ storage: storage });
