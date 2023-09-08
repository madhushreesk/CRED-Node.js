const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/posts");
const bodyParser = require("body-parser");
// middleware

const app = express();

app.use(bodyParser.json());

app.use("/posts", posts);

const mongo_uri =
  "mongodb+srv://madhushri:GR8fDXq2BE8JPvN@cluster0.5mu4llt.mongodb.net/learnMongo?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(mongo_uri);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
}

connect();

// listen to this port number
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
