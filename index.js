const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

//Connect MongoDB Start
const uri =
  "mongodb+srv://userPranab:Pranab746543587345@cluster0.i8jndut.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(err => {
  const productCollection = client.db("dataPranab").collection("products");
  // perform actions on the collection object
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
    productCollection.insertOne(product)
    .then(result => {
      console.log("data added successfully");
      res.send("success");
    })
  });
});
//Connect MongoDB End

app.listen(4003); 