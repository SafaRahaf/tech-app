// const express = require('express');
// const user = require('../model/user');
// const path = require('path');
// const upload = require('../multer');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const { nextTick } = require('process');
// const ErrorHandler = require('../utils/errorHandler');

// router.post('/create-user', upload.single('file'), async (req, res, next) => {
//   const { name, email, password } = req.body();
//   const userEmail = await user.findOne({ email });
//   if (userEmail) {
//     return next(new ErrorHandler('User already exists', 400));
//   }

//   const filename = req.file.fieldname;
//   const fileurl = path.join(filename);

//   const user = {
//     name: name,
//     email: email,
//     password: password,
//     avatar: fileurl
//   };

//   console.log(user);
// });


It looks like there are a couple of issues in your code. Let's address them:

Error in router.post('/create-user', ...) block:

The line const { name, email, password } = req.body(); should be const { name, email, password } = req.body; without the parentheses.
Error in multer.diskStorage configuration:

The parameters for the filename function in multer.diskStorage should be req and file, not req and res.
Here's the corrected code:

javascript
Copy code
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