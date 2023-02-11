const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
  id: String,
  cate: String,  
  title: String,
  price: String,
  incart: String,
  img: String,
  slug: String
});

module.exports =  mongoose.model('Product', Product);
