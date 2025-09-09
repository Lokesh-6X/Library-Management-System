const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

//Create a book
router.route("/").post(async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400);
  }
  const book = await Book.create({
    title,
    author,
  });
  res.status(200).json(book);
});

//Fetch book by id
router.route("/id/:id").get(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
  }
  res.status(200).json(book);
});

//Search book by name
//Lets use query parameter here
router.route("/title/:title").get(async (req, res) => {
  const book = await Book.findOne({ title: req.params.title });
  if (!book) {
    res.status(404);
  }
  res.status(200).json(book);
});

//Fetch all books
router.route("/").get(async (req, res) => {
  const book = await Book.find();
  res.status(200).json(book);
});

//Update a book
router.route("/:id").put(async (req, res) => {
  const book = await Book.findById(req.params.id);
  const { title, author } = req.body;
  if (!book) {
    res.status(404);
  }
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
});

//Delete a book
router.route("/:id").delete(async (req, res) => {
  const book = Book.findById(req.params.id);
  if (!book) {
    res.status(404);
  }
  const deleteBook = await Book.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteBook);
});

module.exports = router;
