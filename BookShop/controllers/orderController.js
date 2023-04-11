const router = require('express').Router();
const orderModel = require('../models/orderModel');
const { verifyToken } = require('../authentication/auth')

//När vi vill lägga till en order måste användaren vara inloggad, och vi kollar token så att användaren är inloggad
router.post('/add', verifyToken, orderModel.addOrder)

//När vi hämta alla ordrar hos en användare måste användaren vara inloggad och vi verifierar token
router.get('/myOrders', verifyToken, orderModel.getOrders)

module.exports = router;