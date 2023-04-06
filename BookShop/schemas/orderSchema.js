const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema ({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    amount: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Order', orderSchema)