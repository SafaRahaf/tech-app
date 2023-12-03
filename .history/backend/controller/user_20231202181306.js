const express = require('express');
const user = require('../model/user');
const path = require('path');
const upload = require('../multer');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { nextTick } = require('process');
const ErrorHandler = require('../utils/errorHandler');

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  const { name, email, password } = req.body();
  const userEmail = await user.findOne({ email });
  if (userEmail) {
    return next(new ErrorHandler('User already exists', 400));
  }
});
