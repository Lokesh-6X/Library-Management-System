const express = require("express");
const app = express();
const PORT = 3000;

app.use("/api/books/", require("./routes/bookRoute"));

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

