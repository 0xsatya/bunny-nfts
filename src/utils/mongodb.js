
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:dabunnynft@cluster0.tcsbd.mongodb.net/dabunny?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("dabunny").collection("nfts");
  // perform actions on the collection object
  client.close();
});
