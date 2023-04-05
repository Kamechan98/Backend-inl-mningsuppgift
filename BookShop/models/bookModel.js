const Book = require('../schemas/bookSchema');

// exports.getAllBooks = (req, res) => {
//     Book.find()
//     .then(books => res.status(200).json(books))
// }

//   exports.getBookById = (req, res) => {
//     Book.findById(req.params.id)
//       .then(data => {
//         res.status(200).json(data)
//     })
// }

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

exports.getBooks = async (req, res) => {

    const books = await Book.find()
    .then (books => res.status(200).json(books))
    .catch (() => res.status(500).json ({ message: 'Something went wrong'}))
}

exports.getBooksById = async (req, res) => {

    const book = await Book.findById(req.params.id)

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)
}

exports.updateBooks = async (req, res) => {

    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)    

}

exports.deleteBook = async (req, res) => {

    const book = await Book.findByIdAndDelete(req.params.id)

    if(!book) {
        return res.status(404).json({ message: 'Could not find that book'})
    }
    res.status(200).json(book)  
}