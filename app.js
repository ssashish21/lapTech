
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/laptechDB" ,{ useNewUrlParser: true , useUnifiedTopology: true });



// EJS
const app = express();
app.set("view engine","ejs");

const PORT = process.env.PORT || 5000;

var path = require("path");

//Bodyparser
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('public')); // access public File






//homepage
app.get("/",(req,res) => res.render("index"));

//login page
app.get("/signin",(req,res) => res.render("signin"));

//registration page
app.get("/signup",(req,res) => res.render("signup"));

//register handle
app.post("/signup",(req,res) => {
  console.log(req.body);
  res.send('hello');
});


//user dashboard
app.get("/dashboard",(req,res)=>res.render("dashboard"));










app.listen(PORT,console.log('server running on port '+ PORT));
