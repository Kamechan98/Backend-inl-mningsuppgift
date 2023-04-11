const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema för en order-rad - id till produkt och hur många av produkten
const orderRowSchema = mongoose.Schema({ product: mongoose.Schema.Types.ObjectId, amount: Number })

//Schema för en hel order
const orderSchema = mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId},
    orderRows: { type: [orderRowSchema]}
})

module.exports = mongoose.model('Order', orderSchema)