const express = require("express");
const router = express.Router();

//Create a book
router.route("/").post((req, res) => {
    res.status(200).send("Added a book");
});

//Fetch book by id
router.route("/:id").get((req, res) => {
    res.status(200).send("fetched a book");
});

//Search book bu name
//Lets use query parameter here
router.route("/").get((req, res) => {
    res.status(200).send("fetched a book by author");
});

//Fetch all books
router.route("/").get((req, res) => {
    res.status(200).send("fetched all books");
});

//Update a book
router.route("/").put((req, res) => {
    res.status(200).send("Updated a book");
});

//Delete a book
router.route("/").delete((req, res) => {
    res.status(200).send("Deleted a book");
});



module.exports = router;