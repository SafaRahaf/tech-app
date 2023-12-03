const express = require('express');
const User = require('../model/user');
const path = require('path');
const upload = require('../multer');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/create-user', upload);
