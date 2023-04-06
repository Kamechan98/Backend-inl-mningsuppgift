const router = require('express').Router();
const orderModel = require('../models/orderModel');
const { verifyToken } = require('../authentication/auth')

router.post('/add', verifyToken, orderModel.addOrder)

router.get('/:id', orderModel.getOrders)

module.exports = router;