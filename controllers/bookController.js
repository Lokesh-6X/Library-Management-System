const Book = require("../models/bookModel");

//@desc Add a Book
//@route POST /api/books/
//@access public
const createBook = async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400);
  }
  const book = await Book.create({
    title,
    author,
  });
  res.status(200).json(book);
};

//@desc Get book by id
//@route GET /api/books/id/:id
//@access public
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
  }
  res.status(200).json(book);
};

//@desc Get book by name
//@route GET /api/books/title/:title
//@access public
const getBookByTitle = async (req, res) => {
  const book = await Book.findOne({ title: req.params.title });
  if (!book) {
    res.status(404);
  }
  res.status(200).json(book);
};

//@desc Get all books
//@route GET /api/books/
//@access public
const getBooks = async (req, res) => {
  const book = await Book.find();
  res.status(200).json(book);
};

//@desc Update a book data
//@route PUT /api/books/:id
//@access public
const updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const { title, author } = req.body;
  if (!book) {
    res.status(404);
  }
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
};

//@desc Delete a book
//@route DELETE /api/books/:id
//@access public
const deleteBook = async (req, res) => {
  const book = Book.findById(req.params.id);
  if (!book) {
    res.status(404);
  }
  const deleteBook = await Book.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteBook);
};

module.exports = {createBook, getBookById, getBookByTitle, getBooks, updateBook, deleteBook};



