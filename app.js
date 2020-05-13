
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const flash = require('express-flash');
const ejs = require("ejs");
const Session = require("express-session");
const passport = require("passport");

const app = express();

//passport config
require('./config/passport')(passport);

//connect to mongo
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/laptechDB",{ useNewUrlParser: true , useUnifiedTopology: true }, function (err, db) {
     if(err) throw err;
     else console.log("mongoDB connected..");
});

// access public File
app.use(express.static('public'));

//EJS
app.use(expressLayouts);
app.set("view engine","ejs");

//Bodyparser
 app.use(bodyParser.urlencoded({extended:true}));

 //Express Session
 app.use(
     Session({
     secret: "This is a bloging app",
     resave: false,
     saveUninitialized: false
     })
 );

 //passport middleware
 app.use(passport.initialize());
 app.use(passport.session());

 //connect  flash
 app.use(flash());

 //global variable
 app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

// Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

// var path = require("path");


const PORT = process.env.PORT || 5555 ;

app.listen(PORT,console.log('server running on port '+ PORT));
