const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const {createBook, getBookById, getBookByTitle, getBooks, updateBook, deleteBook, getBooksByLimitAndOffset} = require("../controllers/bookController");

router.route("/").post(createBook);
// router.route("/searc").get(searchBook);
router.route("/title/:title").get(getBookByTitle);
router.route("/id/:id").get(getBookById);
router.route("/").get(getBooksByLimitAndOffset)
router.route("/").get(getBooks);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
