// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
   console.log(response.statusCode);
});

app.listen(5222,function(){
  console.log("server running on port 5222 ");
});
