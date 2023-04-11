const router = require('express').Router();
const userModel = require('../models/userModel');

//CREATE
router.post('/add', userModel.addUser)
router.post('/login', userModel.login)

module.exports = router;