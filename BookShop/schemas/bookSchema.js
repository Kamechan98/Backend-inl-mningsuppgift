const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:         { type: String, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true },
    imgURL:       { type: String, required: true, unique: true }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book