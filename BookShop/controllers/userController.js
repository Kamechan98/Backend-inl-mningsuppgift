const router = require('express').Router();
const userModel = require('../models/userModel');
const { verifyToken } = require('../authentication/auth');

//POST
router.post('/add', userModel.addUser)
router.post('/login', verifyToken, userModel.login)
router.post('/order', verifyToken, userModel.login)

module.exports = router;