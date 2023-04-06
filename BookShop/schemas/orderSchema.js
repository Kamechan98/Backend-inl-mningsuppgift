const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderRowSchema = mongoose.Schema({ product: mongoose.Schema.Types.ObjectId, amount: Number })

const orderSchema = mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId},
    orderRows: { type: [orderRowSchema]}
})

module.exports = mongoose.model('Order', orderSchema)