const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.get("/", (req, res) => {
  res.send("express working");
});


//Connect MongoDB Start
const uri = "mongodb+srv://userPranab:Pranab746543587345@cluster0.i8jndut.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("dataPranab").collection("products");
  // perform actions on the collection object
  const product = {name: "oil", price: 150, quantity:4};
  collection.insertOne(product)
  .then(result => {
    console.log("one product added in database");
  })
  console.log("database connected");
});
//Connect MongoDB End

app.listen(4003);