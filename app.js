const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("upload", fileUpload({ createParentPath: true }), (req, res) => {
  const files = req.files;
  console.log(files);
  return res.json({ status: "logged", message: "logged" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
