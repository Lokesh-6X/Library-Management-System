const Book = require("../models/bookModel");

//@desc Add a Book
//@route POST /api/books/
//@access public
const createBook = async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400).json({message:"All fields are mandatory"});
  }
  const book = await Book.create({
    title,
    author,
  });
  res.status(200).json(book);
};

//@desc Get book by id
//@route GET /api/books?title
//@route GET /api/books?id
//@access public
// const searchBook = async (req, res) => {
//   const { id, title } = req.query;

//     if (id) {
//       const book = await Book.findById(id);
//       if (!book) return res.status(404).json({ message: "Book not found" });
//       return res.status(200).json(book);
//     }

//     if (title) {
//       const books = await Book.find({ title });
//       if (books.length === 0) {
//         return res.status(404).json({ message: "No books found with this title" });
//       }
//       return res.status(200).json(books);
//     }

//     return res.status(400).json({ message: "Please provide id or title in query" });
// };

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

//@desc Get book by title
//@route GET /api/books/title/:title
//@access public
const getBookByTitle = async (req, res) => {
  const arrBook = await Book.find({
    title: new RegExp(req.params.title, "i"),
  });
  // const arrBook = await Book.find({
  //   title: {$regex req.params.title},
  // });        
  if (!arrBook) {
    res.status(404);
  }
  res.status(200).send(arrBook);
};

//@desc Get all books
//@route GET /api/books/
//@access public
const getBooks = async (req, res) => {
  const book = await Book.find().limit(2).skip(2);
  res.status(200).json(book);
};

//@desc Get all books with limit and offset
//@route GET /api/books?limit=10&offset=20;
//@access public
const getBooksByLimitAndOffset = async (req, res) => {
  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset);
  const book = await Book.find().skip(offset).limit(limit);
  if(!book){
    res.status(404);
  }
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

module.exports = {createBook, getBookById, getBookByTitle, getBooks, getBooksByLimitAndOffset, updateBook, deleteBook};



