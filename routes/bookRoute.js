const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

//Create a book
router.route("/").post((req, res) => {
    res.status(200).send("Added a book");
});

//Fetch book by id
router.route("/id/:id").get((req, res) => {
    res.status(200).send("fetched a book");
});

//Search book by name
//Lets use query parameter here
router.route("/name/:name").get((req, res) => {
    res.status(200).send("fetched a book by name");
});

//Fetch all books
router.route("/").get( async (req, res) => {
    const book = await Book.find();
    res.status(200).json(book);
});

//Update a book
router.route("/:id").put((req, res) => {
    res.status(200).send("Updated a book");
});

//Delete a book
router.route("/:id").delete((req, res) => {
    res.status(200).send("Deleted a book");
});



module.exports = router;