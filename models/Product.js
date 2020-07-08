const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  product_name:{
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  display_size:{
    type: String,
    required: true
  },
  generation:{
    type: String,
    required: true
  },
  processor:{
    type: String,
    required: true
  },
  operating_system:{
    type: String,
    required: true
  },
  battry_life:{
    type: String,
    required: true
  },
  keyboard_light:{
    type: String,
    required: true
  },
  ram:{
    type: String,
    required: true
  },
  ssd:{
    type: String,
    required: true
  },
  hdd:{
    type: String,
    required: true
  },
  tag:{
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
