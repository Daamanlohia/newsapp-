const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "title 1",
    author: "author 1",
    dateNow: new Date(Date.now()),
    datePub: 1991-06-01,
    url: "https://www.google.com",
    imgSrc: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
  },
  {
    title: "title 2",
    author: "author 2",
    dateNow: new Date(Date.now()),
    datePub: 1992-06-01,
    url: "https://www.google.com",
    imgSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
