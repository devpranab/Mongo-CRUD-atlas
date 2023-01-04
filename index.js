const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
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
  app.get("/products", (req, res) => {
    productCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    })
  });

  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
    productCollection.insertOne(product)
    .then(result => {
      console.log("data added successfully");
      res.send("success");
    })
  });

app.delete('/delete/:id', (req, res) => {
  console.log(req.params.id);
  productCollection.deleteOne({_id: ObjectId(req.params.id)})
    .then(result => {
      console.log(result);
      //res.send(result.deletedCount > 0)
    })
});

app.get('/product/:id', (req, res) => {
  productCollection.find({_id: ObjectId(req.params.id)})
    .toArray((err, docs) => {
      res.send(docs[0])
    })
})

app.patch('/update/:id', (req, res) => {
  productCollection.updateOne(
    {_id: ObjectId(req.params.id)},
    {
      $set: { price: req.body.price, quantity: req.body.quantity }
    }
  ).then(result => {
    console.log(result);
    //res.send(result.modifiedCount > 0)
  })
})
});
//Connect MongoDB End

app.listen(4003); 