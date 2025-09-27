const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const {login} = require("../controllers/bookController");

router.route("/").post(login);

module.exports = router;