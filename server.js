// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set("view engine","ejs");

var path = require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));







app.get("/",function(req,res){
  res.render("index");
});

app.get("/signup",function(req,res){
  res.render("signup");
})


app.listen(5000,function(){
  console.log("server running on port 5000 ");
});
