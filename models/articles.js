const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String },
  author: { type: String },
  dateNow: { type: Date, default: Date.now },
  datePub: { type: Date },
  url: { type: String },
  imgSrc: {type: String }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

