const express = require('express')
const user = require('../model/user')
const path = require('path')
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/create-user", async (req, res, next) => {
    const existingUser =  
})