const express = require('express');
const router = express.Router();

// Load Product model
const Product = require('../models/Product');

// Product.create({
//   company_name: 'Apple',
//   product_name: 'mac',
//   price: '150',
//   display_size: '13.3',
//   generation: '8',
//   processor: 'i7',
//   operating_system: 'MAC OS',
//   battry_life: '9',
//   keyboard_light: 'YES',
//   ram: '16 GB',
//   ssd: '128',
//   hdd: '1 TB',
//   tag: 'gamming',
//   url: 'https://4.imimg.com/data4/BB/XD/MY-26240794/apple-mac-pc-laptop-computers-500x500.jpg' 
// });

router.get("/",function(req,res){
  Product.find({},function(err,AllProduct){
      if(err){
          console.log(err);
      } else {
          res.render("welcome",{laptops: AllProduct});
      }
  });
});


//Add new product
router.get('/new',(req,res)=> res.render('new'));


router.post('/',(req,res)=>{
 Product.create(req.body.product,function(err,newProduct){
    if(err){
      res.render("new");
    }else{
      res.redirect("/products");
    }
 });
});

module.exports = router;
