const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
const url = process.env.MONGO_URL;
const app = express();

dotenv.config();

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://codestepbystep:codestepbystep@cluster0.hp6rxd3.mongodb.net/?retryWrites=true&w=majority"
    );
    const Schema = mongoose.Schema;
    const productSchema = new Schema({
      name: String,
      price: Number,
      path: String,
    });

    const Product = mongoose.model(products, productSchema);
    let data = new Product({
      name: "Alvine",
      price: 200,
      path: "directory",
    });

    const result = await data.save();
    console.log(`Producs are added to database ${result}`);
    console.log("Connected to Mongo db south Africa");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
