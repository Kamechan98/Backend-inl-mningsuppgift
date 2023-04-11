const router = require('express').Router()
const bookModel = require('../models/bookModel');
const bookSchema = require('../schemas/bookSchema');

//Lägger till nya böcker till webbshoppen
router.post('/', bookModel.addBook);

//Hämtar alla böcker i webbshoppen eller en specifik bok med hjälp av ID
router.get('/', bookModel.getBooks);
router.get('/:id', bookModel.getBooksById);

//Hämtar en specfik bok med hjälp av ID och uppdaterar 
router.put('/:id', bookModel.updateBooks)

//Hämtar en specifik bok med hjälp av ID och tar bort den
router.delete('/:id', bookModel.deleteBook)

module.exports = router;