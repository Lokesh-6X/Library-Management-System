const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/login", require("./routes/authRoute"));
app.use("/api/books", require("./routes/bookRoute"));


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

