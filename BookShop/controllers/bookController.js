const router = require('express').Router()
const bookModel = require('../models/bookModel');
const bookSchema = require('../schemas/bookSchema');

//POST - Lägger till nya böcker till webbshoppen
router.post('/', bookModel.addBook);

//GET - Hämtar alla böcker i webbshoppen eller en specifik bok med hjälp av ID
router.get('/', bookModel.getBooks);
router.get('/:id', bookModel.getBooksById);

//PUT - Hämtar en specfik bok med hjälp av ID och uppdaterar 
router.put('/:id', bookModel.updateBooks)

//DELETE - Hämtar en specifik bok med hjälp av ID och tar bort den
router.delete('/:id', bookModel.deleteBook)

module.exports = router;