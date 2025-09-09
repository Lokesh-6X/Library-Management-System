const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a book title"],
    },
    author: {
      type: String,
      required: [true, "Please add an author"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);