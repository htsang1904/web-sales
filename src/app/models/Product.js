const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
  id: String,
  cate: String,  
  title: String,
  price: String,
  img: String,
  description: String,
  slug: { type: String, slug: 'img', uniqe: true},
});

module.exports =  mongoose.model('Product', Product);
