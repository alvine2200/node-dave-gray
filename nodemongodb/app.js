const express = require("express");
const mongo = require("mongoose");
const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
