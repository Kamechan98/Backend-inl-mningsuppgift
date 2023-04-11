const Book = require('../schemas/bookSchema');


//Funktion för att lägga till böcker
exports.addBook = async (req, res) => {

    const { name, description, price, imgURL } = req.body;

    if(!name || !description ||!price || !imgURL) {
        return res.status(400).json({ message: 'You need to enter all fields' })
    }

    const book = await Book.create({ name, description, price, imgURL })

    if(!book) {
        return res.status(500).json({ message: 'Something went wrong when adding the book' })
    }
    res.status(201).json(book)

}
//Funktion för att hämta alla böcker på sidan
exports.getBooks = async (req, res) => {

    const books = await Book.find()
    .then (books => res.status(200).json(books))
    .catch (() => res.status(500).json ({ message: 'Something went wrong'}))
}

//Funktion för att hämta specifik bok på sidan med id
exports.getBooksById = async (req, res) => {

    const book = await Book.findById(req.params.id)

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)
}
//Funktion för att hämta och uppdatera böcker på sidan med hjälp av id
exports.updateBooks = async (req, res) => {

    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)    

}
//Funktion för att ta bort bok på sidan med hjälp av id
exports.deleteBook = async (req, res) => {

    const book = await Book.findByIdAndDelete(req.params.id)

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)  
}