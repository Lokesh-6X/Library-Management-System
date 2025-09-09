const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/api/books/", require("./routes/bookRoute"));

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

