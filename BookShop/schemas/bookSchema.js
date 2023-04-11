const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema för att lägga till böcker
const bookSchema = new Schema({
    name:         { type: String, required: true },
    author:       { type: String, required: true },
    year:         { type: Number, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true },
    imgURL:       { type: String, required: true, unique: true }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book