const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.get("/", (req, res) => {
  res.send("express working");
});


//Connect MongoDB Start
const uri = "mongodb+srv://userPranab:dataPra@6654@cluster0.i8jndut.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("dataPranab").collection("products");
  // perform actions on the collection object
  console.log("database connected");
  client.close();
});
//Connect MongoDB End

app.listen(4003);