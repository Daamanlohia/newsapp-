require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Define middleware, body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//use routes
app.use(routes);

// Connect to the Mongo DB*
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
