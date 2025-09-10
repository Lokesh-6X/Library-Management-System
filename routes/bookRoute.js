const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const {createBook, getBookById, getBookByTitle, getBooks, updateBook, deleteBook} = require("../controllers/bookController");

router.route("/").post(createBook);
router.route("/id/:id").get(getBookById);
router.route("/title/:title").get(getBookByTitle);
router.route("/").get(getBooks);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
