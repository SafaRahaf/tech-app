const express = require('express');
const User = require('../model/user');
const path = require('path');
const uploadMiddleware = require('../multer').upload;
const router = express.Router();
const jwt = require('jsonwebtoken');
const { nextTick } = require('process');
const ErrorHandler = require('../utils/errorHandler');

router.post(
  'user/create-user',
  uploadMiddleware.single('file'),
  async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });

      if (userEmail) {
        return next(new ErrorHandler('User already exists', 400));
      }

      const fileurl = req.file.filename; // Assuming multer renames the file and adds the extension

      const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileurl
      };

      console.log(user);

      // Save the user to the database, e.g., User.create(user);

      res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: user
      });
    } catch (error) {
      next(error);
    }
  }
);

// router.post(
//   '/create-user',
//   uploadMiddleware.single('file'),
//   async (req, res, next) => {
//     const { name, email, password } = req.body;
//     const userEmail = await User.findOne({ email });
//     if (userEmail) {
//       return next(new ErrorHandler('User already exists', 400));
//     }

//     const filename = req.file.fieldname;
//     const fileurl = path.join(filename);

//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       avatar: fileurl
//     };

//     console.log(user);
//   }
// );

module.exports = router;
